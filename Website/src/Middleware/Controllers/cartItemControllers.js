const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const createRandomString = require('../createRandomString');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const DuplicateSubdocumentError = require('../OperationalErrors/DuplicateSubdocumentError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const User = require('../Models/User');
const { checkIsEmptyObject, checkUserExists } = require('./SupportFunctions/shippingAddressSupportFunctions');
const { checkCartItemExists } = require('./SupportFunctions/cartItemSupportFunctions');
const { checkProduct } = require('./SupportFunctions/productSupportFunctions');
const { buildUpdateCartItemPricePipeline } = require('../AggregationPipelines/cartItemAggregationPipelines');
const { buildUpdateCartItemDiscountPipeline } = require('../AggregationPipelines/cartItemAggregationPipelines');
const { IllegalUpdateError } = require('../OperationalErrors/IllegalUpdateError');

const createCartItem = asyncErrorHandler(async (req, res, next) => {
    console.log("In createCartItem");

    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    const sku = req.body.sku;
    console.log("sku ", sku);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Cart Item for user with user_id ${user_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not create Cart Item for user with user_id ${user_id} as the user does not exist.`);
        throw user_id_not_found_error;
    }

    // To deal with edge cases, check whether the product exists
    console.log("Check if the Product exists");
    if (await checkProduct(req) === false) {
        const product_id_not_found_error = new ResourceNotFoundError(`Could not create the Cart Item since the product with product_id ${product_id} does not exist.`);
        throw product_id_not_found_error;
    }

    console.log("Checking if the cart item already exists");
    if (await checkCartItemExists(req) === true) {
        const cart_item_already_exists_error = new DuplicateSubdocumentError(`Could not create Cart Item for user with user_id ${user_id} as the cart item already exists.`);
        throw cart_item_already_exists_error;
    }

    console.log("Checking if the Cart is full");
    if (await checkIsCartFull(req) === true) {
        const cart_is_full_error = new IllegalUpdateError(`Could not create Cart Item for user with user_id ${user_id} as the cart is full.`);
        throw cart_is_full_error; 
    }

    console.log("Checking if the said product_item is available");
    if (await checkProductItemAvailable(req) === false) {
        const product_item_unavailable_error = new IllegalUpdateError(`Could not create the CartItem for the user with user_id ${user_id} as the given product_item is not available`);
        throw product_item_unavailable_error;
    }

    const cart_item_id = createRandomString(6);
    console.log("cart_item_id ", cart_item_id);

    const cart_item_quantity = 1;
    console.log("cart_item_quantity ", cart_item_quantity);


    const discount_amount = req.body.item_total * req.body.discount_percentage;
    console.log("discount_amount ", discount_amount);

    const discounted_total = req.body.item_total - discount_amount;
    console.log("discounted_total ", discounted_total);

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = { user_id: user_id };
    console.log("filter ", filter);

    const cart_item = { cart_item_id: cart_item_id, cart_item_quantity: cart_item_quantity, discount_amount: discount_amount, discounted_total: discounted_total, ...request_body_deep_clone };
    console.log("cart_item ", cart_item);

    console.log("Creating the cart item");
    const create_cart_item_result = await User.findOneAndUpdate(filter, { $push: { CartItems: cart_item } }, { new: true }, { runValidators: true }).lean();

    console.log("result ", result);

    console.log("Calculating the cart tiem totals");
    const calculate_cart_item_totals_result = await calculateAndUpdateCartItemTotals(req);

    const result = [create_cart_item_result, calculate_cart_item_totals_result];

    res.status(200).json(result[0]);
    console.log("===END OF createCartItem===")
});

const updateCartItemPrice = async (req, res) => {
    console.log("In updateCartItemPrice (HELPER FUNCTION)");

    try {

            const product_id = req.body.product_id;
            // console.log("product_id ", product_id);
            const updated_product_price = res.locals.updated_product_price;
            // console.log("updated_product_price ", updated_product_price);

            const build_update_cart_item_price_pipeline = buildUpdateCartItemPricePipeline(product_id,updated_product_price);

            const result = await User.updateMany({ "CartItems.product_id": product_id }, build_update_cart_item_price_pipeline);

            console.log("result in updateCartItemPrice ", result);

            console.log("===END OF updateCartItemPrice===");

            return result;
        
    }

    catch (error) {
        console.log("Error in updateCartItemPrice ", error);
        throw error;
    }
};

const updateCartItemDiscount = async (req, res) => {
    console.log("In updateCartItemDiscount (HELPER FUNCTION)");

    try {

        const product_id = req.body.product_id;
        // console.log("product_id ", product_id);
            
        const updated_discount_code = res.locals.updated_discount_code;
        // console.log("updated_discount_code ", updated_disocunt_code);

        const updated_discount_percentage = res.locals.updated_discount_code;
        // console.log("updated_discount_code ", updated_disocunt_code);

        const build_update_cart_item_discount_pipeline = buildUpdateCartItemDiscountPipeline(product_id, updated_discount_code. updated_discount_percentage);

        const result = await User.updateMany({ "CartItems.product_id": product_id }, build_update_cart_item_price_pipeline);

        console.log("result in updateCartItemDiscount ", result);
        
        console.log("===END OF updateCartItemDiscount===");

        return result;
        
    }

    catch (error) {
        console.log("Error in updateCartItemDiscount ", error);
        throw error;
    }
};

const updateCartItemName = async (req) => {
    console.log("In updateCartItemName (HELPER FUNCTION)");

    try {

        //const user_id = req.params.user_id;
        //console.log("user_id ", user_id);

        //const cart_item_id = req.body.cart_item_id;
        //console.log("cart_item_id ", cart_item_id);

        const product_id = req.body.product_id;
        console.log("product_id ", product_id);

        /*console.log("Checking if the user exists");
        if (await checkUserExists(req) === false) {
            const user_id_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the user with user_id ${user_id} does not exist.`);
            throw user_id_not_found_error;
        }

        console.log("Checking if the cart item exists");
        if (await checkCartItemExists(req) === false) {
            const cart_item_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the cart item with cart_item_id ${cart_item_id} does not exist.`);
            throw cart_item_not_found_error;
        }*/
        
        // We use only user_id and product_id since multiple cart items of the same product (different cart_item_id AND different sku) must have their product_name updated.
        const filter = { "CartItems.product_id": product_id };

        console.log("filter ", filter);

        const updated_cart_item_name = res.locals.updated_product_name;
        console.log("updated_cart_item_name ", updated_cart_item_name);

        const update_object = {
            $set: {
                "CartItems.$[item].cart_item_name": updated_cart_item_name
            }
        };

        console.log("update_object ", update_object);

        // Update the product_name of all product items (cart items) of the same product if present.
        const result = await User.updateMany(filter, update_object, { arrayFilters: [{ "item.product_id": product_id }], runValidators: true });

        console.log("result in updateCartItemName ", result);

        console.log("===END OF updateCartItemName===");
        
        return result;
    }

    catch (error) {
        console.log("Error in updateCartItemName ", error);
        throw error;
    }
};

const updateCartItemImageURI = async (req) => {
    console.log("In updateCartItemImageURI (HELPER FUNCTION)");

    try {

        //const user_id = req.params.user_id;
        //console.log("user_id ", user_id);

        // The cart_item_id is needed for checkCartItemExists().
        //const cart_item_id = req.body.cart_item_id;
        //console.log("cart_item_id ", cart_item_id);

        const product_id = req.body.product_id;
        console.log("product_id ", product_id);

        /*console.log("Checking if the user exists");
        if (await checkUserExists(req) === false) {
            const user_id_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the user with user_id ${user_id} does not exist.`);
            throw user_id_not_found_error;
        }

        console.log("Checking if the cart item exists");
        if (await checkCartItemExists(req) === false) {
            const cart_item_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the cart item with cart_item_id ${cart_item_id} does not exist.`);
            throw cart_item_not_found_error;
        }*/
        
        const filter = { "CartItems.product_id": product_id };
        console.log("filter ", filter);

        const updated_cart_item_image_uri = res.locals.updated_cart_item_image_uri;
        console.log("updated_cart_item_image_uri ", updated_cart_item_image_uri);

        const update_object = {
            $set: {
                "CartItems.$[item].cart_item_image_uri": updated_cart_item_image_uri
            }
        };

        console.log("update_object ", update_object);

        const result = await User.updateMany(filter, update_object, { arrayFilters: [{ "item.product_id": product_id }], runValidators: true });

        console.log("result in updateCartItemImageURI ", result);

        console.log("===END OF updateCartItemImageURI===");
        
        return result;
    }

    catch (error) {
        console.log("Error in updateCartItemImageURI ", error);
        throw error;
    }
};

const updateCartItemQuantity = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateCartItemQuantity");
    
    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);
    
    const sku = req.body.sku;
    console.log("sku ", sku);

    const cart_item_id = req.body.cart_item_id;
    console.log("cart_item_id ", cart_item_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update the Cart Item for user with user_id ${user_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    console.log("Checking if the cart_item exists");
    if (await checkCartItemExists(req) === false) {
        const cart_item_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item since the cart item with product_id ${product_id} does not exist.`);
        throw cart_item_not_found_error;
    }

    console.log("Checking if the said product_item is available");
    if (await checkProductItemAvailable(req) === false) {
        const product_item_unavailable_error = new IllegalUpdateError(`Could not update the cart_item_quantity for the user with user_id ${user_id} as the given product_item is not available`);
        throw product_item_unavailable_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));

    const updated_item_total = request_body_deep_clone.item_total * request_body_deep_clone.cart_item_quantity;

    const discount_percentage = request_body_deep_clone.discount_percentage;

    const updated_discount_amount = item_total * discount_percentage;

    const updated_discounted_total = item_total - discount_amount;
    
    const filter = {user_id: user_id, "CartItems.cart_item_id": cart_item_id};
    console.log("filter ", filter);

    const update_object = {
            $set: {
                "CartItems.$.cart_item_quantity": request_body_deep_clone.cart_item_quantity,
                "CartItems.$.item_total": updated_item_total,
                "CartItems.$.discount_amount": updated_discount_amount,
                "CartItems.$.discounted_total": updated_discounted_total
            }
        };
    console.log("update_object ", update_object);

    const result = await User.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true}).lean();

    console.log("result ", result);

    res.status(200).json(result);

    console.log("===END OF updateCartItemQuantity===");
});

const searchCartItem = asyncErrorHandler(async(req, res, next) => {
   console.log("In searchCartItem");
   
   const cart_item_id = req.body.cart_item_id;
   console.log("Getting the cart_item_id from the request body ", cart_item_id);

   const user_id = req.params.user_id;
   console.log("Getting the user_id from the request params ", user_id)

   console.log("Checking if the request body is empty");
   if (checkIsEmptyObject(req) === true) {
      const empty_request_body_error = new EmptyRequestBodyError(`Could not search for the Cart Item with cart_item_id ${cart_item_id} as the request body was empty.`);
      throw empty_request_body_error;
   }

   console.log("Checking if the user exists");
   if (await checkUserExists(req) === false) {
      const resource_not_found_error = new ResourceNotFoundError(`Could not search for the cart item with cart_item_id ${cart_item_id} since the user with user_id ${user_id}`);
      throw resource_not_found_error;
   }

   const find_query = {'CartItems.cart_item_id': cart_item_id};
   console.log("find_query ", find_query);

   const result = await User.find(find_query);
   console.log("result in searchCartItem ", result);

   res.status(200).json(result);
   console.log("===END OF searchCartItem()===");
});

const getCartItemById = asyncErrorHandler(async(req, res, next) => {
   console.log("In getCartItemById");
   
   const cart_item_id = req.body.cart_item_id;
   console.log("Getting the cart_item_id from the request body ", cart_item_id);

   const user_id = req.params.user_id;
   console.log("Getting the user_id from the request params ", user_id)

   console.log("Checking if the request body is empty");
   if (checkIsEmptyObject(req) === true) {
      const empty_request_body_error = new EmptyRequestBodyError(`Could not search for the Cart Item with cart_item_id ${cart_item_id} as the request body was empty.`);
      throw empty_request_body_error;
   }

   console.log("Checking if the user exists");
   if (await checkUserExists(req) === false) {
      const resource_not_found_error = new ResourceNotFoundError(`Could not search for the cart item with cart_item_id ${cart_item_id} since the user with user_id ${user_id} does not exist.`);
      throw resource_not_found_error;
   }

   const find_query = {'CartItems.cart_item_id': cart_item_id};
   console.log("find_query ", find_query);

   const result = await User.findOne(find_query);
   console.log("result in getCartItemById ", result);

   res.status(200).json(result);
   console.log("===END OF getCartItemById()===");
});


const deleteCartItem = asyncErrorHandler(async(req, res, next) => {
   console.log("In deleteCartItem");

   const user_id = req.params.user_id;
   console.log("Getting the user_id from the request params ", user_id);

   const product_id = req.body.product_id;
    console.log("product_id ", product_id);
    
    const sku = req.body.sku;
    console.log("sku ", sku);

    const cart_item_id = req.body.cart_item_id;
    console.log("cart_item_id ", cart_item_id);

   console.log("Checking if the request body is empty");
   if (checkIsEmptyObject(req) === true) {
      const empty_request_body_error = new EmptyRequestBodyError(`Could not search for the Cart Item with cart_item_id ${cart_item_id} as the request body was empty.`);
      throw empty_request_body_error;
   }

   console.log("Checking if the user exists");
   if (await checkUserExists(req) === false) {
      const resource_not_found_error = new ResourceNotFoundError(`Could not search for the cart item with cart_item_id ${cart_item_id} since the user with user_id ${user_id} does not exist.`);
      throw resource_not_found_error;
   }

   console.log("Checking if the cart item to be deleted exists.");
   if (await checkCartItemExists(req) === false) {
      const resource_not_found_error = new ResourceNotFoundError(`Could not delete the cart item with cart_item_id ${cart_item_id} since it does not exist.`);
      throw resource_not_found_error;
   }

   const filter = {user_id: user_id, 'CartItems.cart_item_id': cart_item_id};
   console.log("filter ", filter);

   const query = {cart_item_id: cart_item_id};
   console.log("query ", query);
   
   const result = await User.findOneAndUpdate(filter, { $pull: { CartItems: query } }, { new: true }, {runValidators: true}).lean();

   console.log("Result in deleteCartItem ", result);

   res.status(200).json(result);

   console.log("=====END OF deleteCartItem()===");

});

const calculateAndUpdateCartItemTotals = async(req) => {

   // Get all the CartItem sub-documents from the CartItems array of the respective 
   // user and add sum the respective fields and then update them in the respective user document.
   console.log("In calculateCartItemTotals");

   try {

        const user_id = req.params.user_id;
        console.log("user_id ", user_id);

        const user_id_query = {user_id: user_id};
        console.log("user_id_query ", user_id_query);

        const user = await User.findOne(user_id_query).lean();

        const cart_items = user.CartItems;

        const cart_item_length = cart_items.length;

        var total_item_total = 0;
   
        var total_discount_amount = 0;
   
        var total_discounted_total = 0;

        var total_discount_percentage = 0;

        var total_payable_amount = 0;

        var i = 0;

        for ( i = 0; i < cart_item_length; ++i) {

            total_item_total = total_item_total + cart_items[i].item_total;
            total_discount_amount = total_discount_amount + cart_items[i].discount_amount;
            total_discounted_total = total_discounted_total + cart_items[i].discounted_total;

        } 

        total_discount_percentage = (total_discount_amount / total_item_total) * 100;
        total_payable_amount = total_item_total - total_discount_amount;

        const update_object = { 
            
            total_item_total: total_item_total, 
            total_discount_amount: total_discount_amount, 
            total_disocunted_total: total_discounted_total, 
            total_discount_percentage: total_discount_percentage, 
            total_payable_amount: total_payable_amount
        };

        console.log("update_object ", update_object);

        const result = User.findOneAndUpdate(user_id_query, update_object, {new: true}, {runValidators: true}).lean();

        console.log("result in calculateCartItemTotals ", result);
        return result;
   }

   catch(error) {
        console.log("Error in calculateCartItemTotals ", error);
        throw error;
   }
   

    
};

module.exports = {
    createCartItem,
    updateCartItemPrice,
    updateCartItemDiscount,
    updateCartItemName,
    updateCartItemImageURI,
    updateCartItemQuantity,
    searchCartItem,
    getCartItemById,
    deleteCartItem,
    calculateAndUpdateCartItemTotals
};
