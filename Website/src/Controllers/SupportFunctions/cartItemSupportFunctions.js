const mongoose = require('mongoose');
const User = require('../../Models/User');
const { singleUserCartItemTotalsUpdatePipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');
const { multiUserCartItemTotalsUpdatePipeline } = require('../../AggregationPipelines/cartItemAggregationPipelines');

const checkCartItemExists = async(req) => {
    console.log("In checkCartItemExists");
    
    // USES REQ.BODY -> PRODUCT_ID
    try {

        const cart_item_id = req?.body?.cart_item_id;
        const product_id = req?.body?.product_id;
        const sku = req?.body?.sku;
        //console.log("##DEBUG - product_id in checkCartItemExists ", product_id);
        //console.log("##DEBUG - cart_item_id in checkCartItemExists ", cart_item_id);
        //console.log("##DEBUG - sku in checkCartItemExists ", sku);

        var cart_item_query = {};

        if (product_id !== undefined && sku !== undefined && cart_item_id === undefined) {
            
            cart_item_query = {
                "CartItems.product_id": product_id,
                "CartItems.sku": sku
            };
        }

        if (product_id !== undefined && sku !== undefined && cart_item_id !== undefined) {

            cart_item_query = {
                "CartItems.cart_item_id": cart_item_id,
                "CartItems.product_id": product_id,
                "CartItems.sku": sku    
            };
        }

        console.log("##DEBUG - cart_item_query in checkCartItemExists() is ", cart_item_query);
        
        const result = await User.findOne(cart_item_query);
        
        //console.log("##DEBUG - Result in checkCartItemExists ", result);

        if (result === null) {
            console.log("##DEBUG - In checkCartItemExists - returning false");
            return false;
        }

        console.log("##DEBUG - In checkCartItemExists - returning true");

        return true;
    }

    catch(error) {
        console.log("Error in checkCartItemExists ", error);
        throw error;
    }
};

const checkIsCartFull = async(req) => {
    
    try {
        console.log("IN checkIsCartFull (HELPER FUNCTION)");

        const user_id = req.params.product_id;

        const query = {user_id: user_id};

        const result = await User.findOne(query).lean();

        const cart_items_subdocument_array = result.CartItems;

        if (cart_items_subdocument_array.length < 5) {
            return false;
        }

        else {
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

        const result = await User.findOne(query).lean();

        const cart_item_array = result.CartItems;

        const cart_item_array_length = cart_item_array.length;

        if (cart_item_array_length === 0) {
            return true;
        }

        else {
            return false;
        }

    }

    catch (error) {
        console.log("Error in checkIsCartEmpty ", error);
        throw error;
    }

};

const getCartItemTotalAndDiscountPercentage = async(req) => {
    console.log("In getCartItemTotal (HELPER FUNCTION)");

    try {
        const cart_item_id = req.body.cart_item_id;
        const user_id = req.params.user_id;

        const query = {user_id: user_id, "CartItems.cart_item_id": cart_item_id};

        const result = findOne(query).lean();

        const item_total = result.CartItems[0].item_total;

        const discount_percentage = result.CartItems[0].item_total;

        const data = {item_total: item_total, discount_percentage: discount_percentage};

        return data;
    }

    catch(error) {
        console.log("Error in getCartItemTotal ", error);
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

        const build_update_cart_item_discount_pipeline = buildUpdateCartItemDiscountPipeline(product_id, updated_discount_code, updated_discount_percentage);

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
            console.log("filter ", filter);

            if (await checkIsCartEmpty(req) === true) {

                console.log(`The user with user_id ${user_id} has no CartItems`);

                const cart_items_total_update_object = {
                    total_item_total: 0,
                    total_discount_amount: 0,
                    total_discounted_total: 0,
                    total_discount_percentage: 0,
                    total_payable_amount: 0
                };
                
                const result = await User.findOneAndUpdate(filter, cart_items_total_update_object, {new: true}, {runValidators: true}).lean();
                            
                console.log("result in calculateAndUpdateCartItemTotals ", result);
            }
            
            else {
                
                console.log(`The user with user_id ${user_id} has some CartItems`);

                const singleUserCartItemTotalsUpdatePipeline = singleUserCartItemTotalsUpdatePipeline();

                const result = await User.findOneAndUpdate(filter, singleUserCartItemTotalsUpdatePipeline, {new: true}, {runValidators: true}).lean();

                console.log("result in calculateAndUpdateCartItemTotals ", result);
            }

            

        }

        else {
            console.log("In Multi User Mode");

            const multiUserCartItemTotalsUpdatePipeline = multiUserCartItemTotalsUpdatePipeline();

            const result = await User.updateMany({}, multiUserCartItemTotalsUpdatePipeline);

            console.log("result in calculateAndUpdateCartItemTotals ", result);
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
    getCartItemTotalAndDiscountPercentage,
    updateCartItemPrice,
    updateCartItemDiscount,
    updateCartItemName,
    updateCartItemImageURI,
    calculateAndUpdateCartItemTotals
};