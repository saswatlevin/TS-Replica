const mongoose = require('mongoose');
const User = require('../../Models/User');

const checkCartItemExists = async(req) => {
    console.log("In checkCartItemExists");
    
    // USES REQ.BODY -> PRODUCT_ID
    try {
        const product_id = req.body.product_id;

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



module.exports = {
    checkCartItemExists
};