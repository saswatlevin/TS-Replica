const mongoose = require('mongoose');
const User = require('../../Models/User');
const Product = require('../../Models/Product');
const { buildSingleUserCartItemTotalsUpdatePipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');
const { buildMultiUserCartItemTotalsUpdatePipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');
const { buildUpdateCartItemPricePipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');
const { buildUpdateCartItemDiscountPipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');


const checkCartItemExists = async(req) => {
    console.log("In checkCartItemExists");
    
    // USES REQ.BODY -> PRODUCT_ID
    try {

        const user_id = req.params.user_id;
        const cart_item_id = req?.body?.cart_item_id;
        const product_id = req?.body?.product_id;
        const sku = req?.body?.sku;
        //console.log("##DEBUG - product_id in checkCartItemExists ", product_id);
        //console.log("##DEBUG - cart_item_id in checkCartItemExists ", cart_item_id);
        //console.log("##DEBUG - sku in checkCartItemExists ", sku);

        var cart_item_query = {};

        if (product_id !== undefined && sku !== undefined && cart_item_id === undefined) {
            
            cart_item_query = {
                "user_id": user_id,
                CartItems: {
                    $elemMatch: {
                        "product_id": product_id,
                        "sku": sku
                    }
                }
            };
        }

        if (product_id !== undefined && sku !== undefined && cart_item_id !== undefined) {

            cart_item_query = {
                "user_id": user_id,
                CartItems: {
                    $elemMatch: {
                        "cart_item_id": cart_item_id,
                        "product_id": product_id,
                        "sku": sku
                    }
                }   
            };
        }

        console.log("##DEBUG - cart_item_query in checkCartItemExists() is ", cart_item_query);

        
        const result = await User.findOne(cart_item_query).lean();
        
        //console.log("##DEBUG - Result in checkCartItemExists ", result);

        if (result === null) {
            console.log("##DEBUG - In checkCartItemExists - returning false");
            console.log("===END OF checkCartItemExists===");
            return false;
        }

        else {
            console.log("##DEBUG - In checkCartItemExists - returning true");
            console.log("===END OF checkCartItemExists===");
            return true;
        }

        
    }

    catch(error) {
        console.log("Error in checkCartItemExists ", error);
        throw error;
    }
};

const checkIsCartFull = async(req) => {
    
    try {
        console.log("In checkIsCartFull (HELPER FUNCTION)");

        const user_id = req.params.user_id;

        const query = {user_id: user_id};

        console.log("##DEBUG - query in checkIsCartFull is ", query);

        const result = await User.findOne(query).lean();

        //console.log("##DEBUG - result in checkIsCartFull ", result);

        const cart_items_subdocument_array = result.CartItems;

        //console.log("##DEBUG - cart_items_subdocument_array in checkIsCartFull ", cart_items_subdocument_array);

        console.log("##DEBUG - length of cart_items_subdocument_array is ", cart_items_subdocument_array.length);

        if (cart_items_subdocument_array.length < 5) {
            console.log("##DEBUG - Returning false in checkIsCartFull");
            console.log("===END OF checkIsCartFull===");
            return false;
        }

        else {
            console.log("##DEBUG - Returning true in checkIsCartFull");
            console.log("===END OF checkIsCartFull===");
            return true;
        }
    }

    catch (error) {
        console.log("Error in checkIsCartFull ", error);
        throw error;
    }
};

const checkIsCartEmpty = async(req) => {
    console.log("In checkIsCartEmpty (HELPER FUNCTION)");

    try {
        const user_id = req.params.user_id;

        const query = {user_id: user_id};
        console.log("query in checkIsCartEmpty ", query);

        const result = await User.findOne(query).lean();
        //console.log("##DEBUG - result in checkIsCartEmpty ", result);

        const cart_items_subdocument_array = result.CartItems;
        //console.log("##DEBUG - cart_items_subdocument_array in checkIsCartEmpty ", cart_items_subdocument_array);

        const cart_items_subdocument_array_length = cart_items_subdocument_array.length;
        console.log("##DEBUG - cart_items_subdocument_array_length in checkIsCartEmpty ", cart_items_subdocument_array_length);

        if (cart_items_subdocument_array_length === 0) {
            console.log("##DEBUG - returning true in checkIsCartEmpty");
            console.log("===END OF checkIsCartEmpty===");
            return true;
        }

        else {
            console.log("##DEBUG - returning false in checkIsCartEmpty");
            console.log("===END OF checkIsCartEmpty===");
            return false;
        }

    }

    catch (error) {
        console.log("Error in checkIsCartEmpty ", error);
        throw error;
    }

};

const getProductPriceAndDiscountPercentage = async(req) => {
    console.log("In getProductPriceAndDiscountPercentage (HELPER FUNCTION)");

    try {
        const product_id = req.body.product_id;

        const query = {product_id: product_id};
        //console.log("##DEBUG - query in getProductPriceAndDiscountPercentage ", query);

        const product_document = await Product.findOne(query).lean();
        //console.log("##DEBUG - result in getCartItemTotalAndDiscountPercentage ", result);

        const product_price = product_document.product_price; 

        const discount_percentage = product_document.discount_percentage;

        const data = {product_price: product_price, discount_percentage: discount_percentage};

        console.log("##DEBUG - data in getProductPriceAndDiscountPercentage ", data);

        console.log("===END OF getProductPriceAndDiscountPercentage===");

        return data;
    }

    catch(error) {
        console.log("Error in getProductPriceAndDiscountPercentage ", error);
        throw error;
    }
};


const updateCartItemPrice = async (req, res) => {
    console.log("In updateCartItemPrice (HELPER FUNCTION)");

    try {

            const product_id = req.body.product_id;
            // console.log("product_id ", product_id);
            const updated_product_price = res.locals.updated_product_price;
            // console.log("updated_product_price ", updated_product_price);

            const build_update_cart_item_price_pipeline = buildUpdateCartItemPricePipeline(product_id,updated_product_price);

            const result = await User.updateMany({ "CartItems.product_id": product_id }, build_update_cart_item_price_pipeline, {runValidators: true});

            //console.log("##DEBUG - result in updateCartItemPrice ", result);

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

        const updated_discount_percentage = res.locals.updated_discount_percentage;
        // console.log("updated_discount_code ", updated_disocunt_code);

        const build_update_cart_item_discount_pipeline = buildUpdateCartItemDiscountPipeline(product_id, updated_discount_code, updated_discount_percentage);

        const result = await User.updateMany({ "CartItems.product_id": product_id }, build_update_cart_item_discount_pipeline, {runValidators: true});

        //console.log("##DEBUG - result in updateCartItemDiscount ", result);
        
        console.log("===END OF updateCartItemDiscount===");

        return result;
        
    }

    catch (error) {
        console.log("Error in updateCartItemDiscount ", error);
        throw error;
    }
};

const updateCartItemName = async (req, res) => {
    console.log("In updateCartItemName (HELPER FUNCTION)");

    try {

        //const user_id = req.params.user_id;
        //console.log("user_id ", user_id);

        //const cart_item_id = req.body.cart_item_id;
        //console.log("cart_item_id ", cart_item_id);

        const product_id = req.body.product_id;
        //console.log("product_id ", product_id);

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

        //console.log("filter ", filter);

        const updated_cart_item_name = res.locals.updated_product_name;
        console.log("##DEBUG updated_cart_item_name ", updated_cart_item_name);

        const update_object = {
            $set: {
                "CartItems.$[item].cart_item_name": updated_cart_item_name
            }
        };

        console.log("##DEBUG - update_object in updateCartItemName ", update_object);

        // Update the product_name of all product items (cart items) of the same product if present.
        // The arrayFilters option is necessary since we use the filtered positional operator: "CartItems.$[item].cart_item_name".
        const result = await User.updateMany(filter, update_object, { arrayFilters: [{ "item.product_id": product_id }], runValidators: true });

        console.log("===END OF updateCartItemName===");
        
        return result;
    }

    catch (error) {
        console.log("Error in updateCartItemName ", error);
        throw error;
    }
};

const updateCartItemImageURI = async (req, res) => {
    console.log("In updateCartItemImageURI (HELPER FUNCTION)");

    try {

        //const user_id = req.params.user_id;
        //console.log("user_id ", user_id);

        // The cart_item_id is needed for checkCartItemExists().
        //const cart_item_id = req.body.cart_item_id;
        //console.log("cart_item_id ", cart_item_id);

        const product_id = req.body.product_id;
        //console.log("product_id ", product_id);

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
        //console.log("filter ", filter);

        const updated_cart_item_image_uri = res.locals.updated_cart_item_image_uri;
        //console.log("updated_cart_item_image_uri ", updated_cart_item_image_uri);

        const update_object = {
            $set: {
                "CartItems.$[item].cart_item_image_uri": updated_cart_item_image_uri
            }
        };

        console.log("##DEBUG - update_object in updateCartItemImageURI ", update_object);

        // Update the image_uri of all product items (cart items) of the same product if present.
        // The arrayFilters option is necessary since we use the filtered positional operator: "CartItems.$[item].cart_item_image_uri".
        const result = await User.updateMany(filter, update_object, { arrayFilters: [{ "item.product_id": product_id }], runValidators: true });

        //console.log("##DEBUG - result in updateCartItemImageURI ", result);

        console.log("===END OF updateCartItemImageURI===");
        
        return result;
    }

    catch (error) {
        console.log("Error in updateCartItemImageURI ", error);
        throw error;
    }
};

const calculateAndUpdateCartItemTotals = async(req) => {

   // Get all the CartItem sub-documents from the CartItems array of the respective 
   // user and add sum the respective fields and then update them in the respective user document.
   console.log("In calculateAndUpdateCartItemTotals (HELPER FUNCTION)");

   try {

        const user_id = req.params?.user_id;
        console.log("user_id ", user_id);

        if (user_id !== undefined) {

            console.log("In Single User Mode");

            const filter = {user_id: user_id};
            //console.log("filter ", filter);

            if (await checkIsCartEmpty(req) === true) {

                console.log(`The user with user_id ${user_id} has no CartItems`);

                const cart_items_total_update_object = {
                    total_item_total: 0,
                    total_discount_amount: 0,
                    total_discounted_total: 0,
                    total_discount_percentage: 0,
                    total_payable_amount: 0
                };
                
                const updated_user_document = await User.findOneAndUpdate(filter, cart_items_total_update_object, {new: true, runValidators: true}).lean();
                
                return updated_user_document;

                //console.log("result in calculateAndUpdateCartItemTotals ", result);
            }
            
            else {
                
                console.log(`The user with user_id ${user_id} has some CartItems`);

                const single_user_cart_item_totals_update_pipeline = buildSingleUserCartItemTotalsUpdatePipeline();

                const result = await User.updateOne(filter, single_user_cart_item_totals_update_pipeline, {runValidators: true});

                const updated_user_document = await User.findOne(filter).lean();

                return updated_user_document;

                //console.log("result in calculateAndUpdateCartItemTotals ", result);
            }

            

        }

        else {
            console.log("In Multi User Mode");

            const multi_user_cart_item_totals_update_pipeline = buildMultiUserCartItemTotalsUpdatePipeline();

            const result = await User.updateMany({}, multi_user_cart_item_totals_update_pipeline, {runValidators: true});

            //console.log("result in calculateAndUpdateCartItemTotals ", result);
        }

   }

   catch(error) {
        console.log("Error in calculateAndUpdateCartItemTotals ", error);
        throw error;
   }
};

module.exports = {
    checkCartItemExists,
    checkIsCartFull,
    checkIsCartEmpty,
    getProductPriceAndDiscountPercentage,
    updateCartItemPrice,
    updateCartItemDiscount,
    updateCartItemName,
    updateCartItemImageURI,
    calculateAndUpdateCartItemTotals
};