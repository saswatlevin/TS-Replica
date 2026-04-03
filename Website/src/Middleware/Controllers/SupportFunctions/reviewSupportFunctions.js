const mongoose = require('mongoose');
const Review = require('../../Models/Review');
const pruneObject = require('../../pruneObject');
const _ = require('lodash');

const checkReviewExists = async(req) => {
	console.log("In checkReviewExists (HELPER FUNCTION) ");

	try {

		const review_id = req.body.review_id;
		//console.log("review_id ", review_id);

		const user_id = req.params.user_id;
		//console.log("user_id ", user_id);

		const product_id = req.body.product_id;
		//console.log("product_id ", product_id);

		const query = {review_id: review_id, user_id: user_id, product_id: product_id};

		const result = await Review.findOne(query);

		if (result === null) {
			console.log("##DEBUG in checkReviewExists - returning false");
			return false;
		}

		else {
			console.log("##DEBUG in checkReviewExists - returning true");
			return true;
		}
	}

	catch(error) {
		console.log("Error in checkReviewExists ", error);
		throw error;
	}
}

// Ensures that a user can post only 1 review of a given product.
const checkDuplicateReviewExists = async(req) => {
	console.log("In checkDuplicateReviewExists (HELPER FUNCTION) ");

	try {
		const user_id = req.params.user_id;
		//console.log("user_id ", user_id);

		const product_id = req.body.product_id;

		const query = {
			product_id: product_id,
			user_id: user_id
		};

		//console.log("##DEBUG - query in checkDuplicateReviewExists - ", query);

		const result = await Review.findOne(query);

		if (result === null) {
			console.log("##DEBUG in checkDuplicateReviewExists - returning false");
			return false;
		}

		else {
			console.log("##DEBUG in checkDuplicateReviewExists - returning true");
			return true;
		}
	}

	catch(error) {
		console.log("Error in checkDuplicateReviewExists ", error);
		throw error;
	}

}

module.exports = {
	checkReviewExists,
	checkDuplicateReviewExists
}