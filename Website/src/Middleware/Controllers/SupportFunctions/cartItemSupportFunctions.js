const mongoose = require('mongoose');
const User = require('../../Models/User');

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

        if (product_id !== undefined && cart_item_id !== undefined && sku === undefined) {
            
            cart_item_query = {
                "CartItems.product_id": product_id,
                "CartItems.cart_item_id": cart_item_id
            };
        }

        if (product_id !== undefined && cart_item_id !== undefined && sku !== undefined) {

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
}


module.exports = {
    checkCartItemExists,
    checkIsCartFull
};