const mongoose = require('mongoose');
const User = require('../../Models/User');

const checkCartItemExists = async(req) => {
    console.log("In checkCartItemExists");
    
    try {
        const product_id = req.params.product_id;

        //console.log("##DEBUG - product_id in checkCartItemExists ", product_id);

        const cart_item_query = {
            "CartItems.product_id": product_id
        };

        const result = await User.findOne(cart_item_query);

        //console.log("##DEBUG - Result in checkCartItemExists - ", result);

        if (result === null) {
            //console.log("##DEBUG - In checkCartItemExists - returning false");
            return false;
        }

        //console.log("##DEBUG - In checkCartItemExists - returning true");

        return true;
    }

    catch(error) {
        console.log("Error in checkCartItemExists ", error);
        throw error;
    }
};

const checkCartItemPriceValueExists = async(req) => {
    console.log("In checkCartItemPriceValueExists");
    
    try
    {
        // USES REQ.PARAMS -> CART ITEM ID, USER ID, PRODUCT PRICE
        const product_id = req.params.product_id;
        const product_price = req.params.product_price;

        const query = {
            "CartItems.product_id": product_id,
            "CartItems.cart_item_price": product_price
        };
    
        const result = await User.findOne(query);
        //console.log("##DEBUG - Result in checkCartItemPriceValueExists - ", result);
    }

    catch(error) {
        console.log("Error in checkCartItemPriceValueExists ", error);
        throw error;
    }
    
}

module.exports = {
    checkCartItemExists,    
    checkCartItemPriceValueExists
};