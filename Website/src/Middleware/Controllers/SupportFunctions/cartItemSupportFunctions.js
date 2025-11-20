const mongoose = require('mongoose');
const User = require('../../Models/User');

const checkCartItemExists = async(req) => {
    console.log("In checkCartItemExists");
    const cart_item_id = req.params.cart_item_id;

    const cart_item_query = {cart_item_id: cart_item_id};

    const result = await User.findOne(cart_item_query);

    if (result === null) {
        return false;
    }

    return true;
};

const checkCartItemPrice = async(req) => {
    console.log("In checkCartItemPrice");

    const cart_item_id = req.params.cart_item_id;
    const user_id = req.params.user_id;
    const product_price = req.params.product_price;

    const filter = {
        
        user_id: user_id,
        "CartItems.cart_item_id": cart_item_id
    };

    const projection = {'CartItems.$': 1};
    const result = await User.findOne(filter, projection );

    const cart_item_price = result.CartItems[0].cart_item_price;

    if (cart_item_price === product_price) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = checkCartItemExists;