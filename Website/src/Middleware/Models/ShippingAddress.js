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

module.exports = shippingAddressSchema;