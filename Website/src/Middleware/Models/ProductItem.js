const mongoose = require('mongoose');
const productItemSchema = new mongoose.Schema({

    sku: {
        type: String,
        required: [true, "sku is the primary key, a 10-character string and is a required field."]
    },

    upper_size_letter: {
        type: String,
        required: [false, "upper_size_letter is a string and is an optional field."]
    },

    upper_size_number: {
        type: Number,
        required: [false, "upper_size_number is a number and is an optional field."]
    },

    lower_size_letter: {
        type: String,
        required: [false, "lower_size_letter is a string and is an optional field."]
    },

    lower_size_number: {
        type: Number,
        required: [false, "lower_size_number is a number and is an optional field."]
    },

    inseam_length: {
        type: Number,
        required: [false, "inseam_length is a number and is an optional field."]
    },

   total_stock: {
    type: Number,
    required: [true, "total_stock is a number (integer). It is a required field."]
   },

   quantity_sold: {
    type: Number,
    required: [true, "quantity_sold is a number and is a required field."]
   },

   current_stock: {
    type: Number,
    required: [true, "current_stock is a number and is a required field."]
   }
},
{
    _id: false
});

module.exports = productItemSchema;

