const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const createRandomString = require('../createRandomString');
const _ = require('lodash');

const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const IllegalUpdateError  = require('../OperationalErrors/IllegalUpdateError');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const DuplicateSubdocumentError = require('../OperationalErrors/DuplicateSubdocumentError');

const User = require('../Models/User');

const { checkIsEmptyObject } = require('./SupportFunctions/userSupportFunctions');

const { checkUserExists } = require('./SupportFunctions/userSupportFunctions');

const { checkCartItemExists } = require('./SupportFunctions/cartItemSupportFunctions');

const { checkIsCartEmpty } = require('./SupportFunctions/cartItemSupportFunctions');

const { checkIsCartFull } = require('./SupportFunctions/cartItemSupportFunctions');

const { getProductPriceAndDiscountPercentage } = require('./SupportFunctions/cartItemSupportFunctions');

const { calculateAndUpdateCartItemTotals } = require('./SupportFunctions/cartItemSupportFunctions');

const { checkProduct } = require('./SupportFunctions/productSupportFunctions');

const { checkProductItemAvailable } = require('./SupportFunctions/productItemSupportFunctions');

const { buildUpdateCartItemPricePipeline } = require('../AggregationPipelines/cartItemAggregationPipelines');
const { buildUpdateCartItemDiscountPipeline } = require('../AggregationPipelines/cartItemAggregationPipelines');

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

    const discount_amount = req.body.item_total * ( req.body.discount_percentage / 100);
    console.log("discount_amount ", discount_amount);

    const discounted_total = req.body.item_total - discount_amount;
    console.log("discounted_total ", discounted_total);

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = { user_id: user_id };
    console.log("filter ", filter);

    const cart_item = { cart_item_id: cart_item_id, ...request_body_deep_clone, discount_amount: discount_amount, discounted_total: discounted_total };
    console.log("cart_item ", cart_item);

    console.log("Creating the cart item");
    const create_cart_item_result = await User.findOneAndUpdate(filter, { $push: { CartItems: cart_item } }, { new: true, runValidators: true }).lean();

    //console.log("create_cart_item_result ", create_cart_item_result);

    console.log("Calculating the cart item totals");
    const calculate_cart_item_totals_result = await calculateAndUpdateCartItemTotals(req);

    console.log("calculate_cart_item_totals_result ", calculate_cart_item_totals_result);

    const result = [create_cart_item_result, calculate_cart_item_totals_result];

    res.status(200).json(result[1]);
    
    console.log("===END OF createCartItem===")
});

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

    const data = await getProductPriceAndDiscountPercentage(req);

    const updated_item_total = data.product_price * request_body_deep_clone.cart_item_quantity;

    const discount_percentage = data.discount_percentage;

    const updated_discount_amount = updated_item_total * ( discount_percentage / 100);

    const updated_discounted_total = updated_item_total - updated_discount_amount;
    
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

    const update_cart_item_quantity_result = await User.findOneAndUpdate(filter, update_object, {new: true,runValidators: true}).lean();

    //console.log("update_cart_item_quantity_result in updateCartItemQuantity ", update_cart_item_quantity_result);

    const calculate_cart_item_total_result = await calculateAndUpdateCartItemTotals(req);
    console.log("calculate_cart_item_total_result ", calculate_cart_item_total_result);

    const result = [update_cart_item_quantity_result, calculate_cart_item_total_result];

    res.status(200).json(result[1]);

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
   
   const delete_cart_item_result = await User.findOneAndUpdate(filter, { $pull: { CartItems: query } }, {new: true, runValidators: true}).lean();

   const calculate_cart_item_totals_result = await calculateAndUpdateCartItemTotals(req);

   const result = [delete_cart_item_result, calculate_cart_item_totals_result];

   console.log("calculate_cart_item_totals_result ", calculate_cart_item_totals_result);

   res.status(200).json(result[1]);

   console.log("=====END OF deleteCartItem()===");

});

module.exports = {
    createCartItem,
    updateCartItemQuantity,
    searchCartItem,
    getCartItemById,
    deleteCartItem
};
