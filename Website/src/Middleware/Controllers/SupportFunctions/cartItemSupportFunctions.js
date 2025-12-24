const mongoose = require('mongoose');
const User = require('../../Models/User');

const checkCartItemExists = async(req, cart_item_id = null) => {
    console.log("In checkCartItemExists");
    
    // USES REQ.BODY -> PRODUCT_ID
    try {
        const product_id = req.body.product_id;

        const sku = req.body.sku;

        //console.log("##DEBUG - product_id in checkCartItemExists ", product_id);

        const cart_item_query = {};

        if (cart_item_id !== null) {
            
            cart_item_query = {
                "CartItems.product_id": product_id,
                "CartItems.sku": sku
            }
        }

        else {

            cart_item_query = {
                "CartItems.cart_item_id": cart_item_id,
                "CartItems.product_id": product_id,
                "CartItems.sku": sku    
            }
        }

        console.log("##DEBUG - cart_item_query in checkCartItemExists() is ", cart_item_query);
        
        const result = await User.findOne(cart_item_query);
        
        console.log("##DEBUG - Result in checkCartItemExists ", result);

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


module.exports = {
    checkCartItemExists
};