const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    cart_item_id: {
        type: String,
        required: [true, "cart_item_id is a primary key, a 12-character string and is a required field."]
    },

    product_id: {
        type: String,
        required: [true, "product_id is a foreign key, a 12-character string and is a required field."]
    },

    sku: {
        type: String,
        required: [true, "sku is a foreign key, is a 10-character string and is a required field."]
    },

    cart_item_name: {
        type: String,
        required: [true, "cart_item_name is a string and is a required field."]
    },

    cart_item_image_uri: {
        type: String,
        required: [true, "cart_item_image_uri is a string and is a required field."]
    },

    cart_item_quantity: {
        type: Number,
        required: [true, "cart_item_quantity is an integer and is a required field."]
    }
});

module.exports = cartItemSchema;