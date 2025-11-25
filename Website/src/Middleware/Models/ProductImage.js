const mongoose = require('mongoose');

const productImageSchema = new mongoose.Schema({

    image_id: {
        type: String,
        required: [true, "image_id is the primary key, a 12-character string and is a required field."]
    },

    image_uri: {
        type: String,
        required: [true, "image_uri is a string and is a required field."]
    },

    main_image: {
        type: Boolean,
        required: [true, "main_image is a boolean and is a required field."]
    }
},
{
    _id: false
});

module.exports = productImageSchema;

