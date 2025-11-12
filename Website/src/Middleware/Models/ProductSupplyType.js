const mongoose = require('mongoose');

const productSupplyTypeSchema = new mongoose.Schema({
    supply_type_description: {
        type: String,
        required: [true, "supply_type_description is a string and is a required field."]
    },

    supply_type: {
        type: String,
        required: [true, "supply_type is a string and is a required field."]
    }
});

module.exports = productSupplyTypeSchema;

