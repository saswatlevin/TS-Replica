const mongoose = require('mongoose');
const shippingAddressSchema = require('./ShippingAddress');
const cartItemSchema = require('./CartItem');

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

    phone_number: {
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

    ShippingAddresses: {
        type: [shippingAddressSchema],
        default: []
    },

    CartItems: {
        type: [cartItemSchema],
        default: []
    }
});

module.exports = mongoose.model('User', userSchema, 'Users');