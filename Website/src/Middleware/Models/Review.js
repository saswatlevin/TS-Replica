const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	review_id: {
		type: String,
		required: [true, "review_id is the primary_key, a 12-character string and is a required field"]
	},

	user_id: {
        type: String,
        required: [true, "user_id is a foreign key, a 12-character string and is a required field."]
    },

    product_id: {
        type: String,
        required: [true, "product_id is a foreign key, a 12-character string and is a required field."]
    },

    docType: {
        type: String,
        required: [true, "docType is a string and is a required field."]
    },

    review_comment: {
    	type: String,
    	required: [true, "review_comment is a string and is a required field."]
    },

    review_rating: {
    	type: Number,
    	required: [true, "review_rating is a number and is a required field."]
    }
});

module.exports = mongoose.model('Review', reviewSchema, 'Reviews');