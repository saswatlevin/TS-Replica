const mongoose = require('mongoose');

const shippingAddressSchema = new mongoose.Schema({
    shipping_address_id: {
        type: String,
        required: [true, "shopping_address_id is the primary key, a 12-character string and is a required field."] 
    },

    address_type_id: {
        type: String,
        required: [false, "address_type_id is a string and is an optional field."]
    },

    company_name: {
        type: String,
        required: [false, "company_name is a string and is an optional field."]
    },
    
    address: {
        type: String,
        required: [true, "address is a string and is a required field."]
    },

    apartment: {
        type: String,
        required: [ true, "apartment is a string and is a required field."]
    },

    city: {
        type: String,
        required: [ true, "city is a string and is a required field."]
    },

    administrative_division: {
        type: String,
        required: [ true, "administrative_division is a string and is a required field."]
    },

    country: {
        type: String,
        required: [true, "country is a string and is a required field."]
    },

    postal_area: {
        type: String,
        required: [ true, "postal_area is a string and is a required field."]
    },

    phone_number: {
        type: String,
        required: [ true, "phone_number is a string and is a required field."]
    }
});

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

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, "user_id is the primary key, a 12-character string and is a required field."]
    },

    docType: {
        type: String,
        required: [true, "docType is a string and is a required field."]
    },

    date_created_at: {
        type: String,
        required: [true, "date_created_at is a string and is a required field."],
    },

    email: {
        type: String,
        required: [true, "email is a string and is a required field."],
    },

    password: {
        type: String,
        required: [true, "password is a string and is a required field."]
    },

    phoneno: {
        type: String,
        required: [true, "phoneno is a string and is a required field."]
    },

    first_name: {
        type: String,
        required: [true, "first_name is a string and is a required field."]
    },

    last_name: {
        type: String,
        required: [false, "last_name is a string and is an optional field."]
    },

    user_role: {
        type: String,
        required: [true, "user_role is a string and is a required field."]
    },

    upper_size_number: {
        type: Number,
        required: [false, "upper_size_number is a number and is an optional field."]
    },

    upper_size_letter: {
        type: String,
        required: [false, "upper_size_letter is a string and is an optional field."]
    },

    others_size_letter: {
        type: String,
        required: [false, "others_size_letter is a string and is an optional field."]
    },

    email_comms_type: {
        type: String,
        required: [true, "email_comms_type is a string and is a required field."]
    },

    sms_comms: {
        type: Boolean,
        required: [true, "sms_comms is boolean and is a required field."]
    },

    shippingAddresses: {
        type: [shippingAddressSchema],
        default: []
    },

    cartItems: {
        type: [cartItemSchema],
        default: []
    }
});

module.exports = mongoose.model('User', userSchema, 'Users');