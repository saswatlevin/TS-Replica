const mongoose = require('mongoose');

const testReviewObject = {	
	review_id: "r0hl39wfrxef",
	
	user_id: "7ycthivdrqvl",

	product_id: "b0e6v4zl9aih",

	docType: "REVIEW",
	
	review_comment: "Review for product 40008.",

	review_rating: 4.5

}

const testReviewObject2 = {	
    _id: new mongoose.Types.ObjectId("66523c8f3b9f2e5c8c7e9f34"),

	review_id: "r0hl39wfrxef",
	
	user_id: "7ycthivdrqvl",

	product_id: "b0e6v4zl9aih",

	docType: "REVIEW",
	
	review_comment: "Review for product 40008.",

	review_rating: 4.5

}

module.exports = {
    testReviewObject,
    testReviewObject2
};