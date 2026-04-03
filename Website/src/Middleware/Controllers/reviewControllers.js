const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const createRandomString = require('../createRandomString');

const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');
const _ = require('lodash');

const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const Review = require('../Models/Review');

const { checkIsEmptyObject, checkUserExists } = require('./SupportFunctions/shippingAddressSupportFunctions');
const { checkProduct } = require('./SupportFunctions/productSupportFunctions');
const {checkReviewExists, checkDuplicateReviewExists} = require('./SupportFunctions/reviewSupportFunctions');

const pruneObject = require('../pruneObject');


const createReview = asyncErrorHandler(async(req, res, next) => {
	console.log("In createReview");

	console.log("Checking if the request body is empty");
	if (checkIsEmptyObject(req) === true) {
		const empty_request_body_error = new EmptyRequestBodyError(`Cannot create Review since the request body is empty`);
		throw empty_request_body_error;
	}

	const user_id = req.params.user_id;
	console.log("user_id ", user_id);

	console.log("Checking if the user exists");
	if (await checkUserExists(req) === false) {
        const user_not_found_error = new ResourceNotFoundError(`Could not create the Review for the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
    }

	const product_id = req.body.product_id;
	console.log("product_id ", product_id);

	const review_doctype = "REVIEW";

	console.log("Checking if the Product exists");
	if (await checkProduct(req) === false) {
		const product_not_found_error = new ResourceNotFoundError(`Could not create the Review for the product with product_id ${product_id} since that product does not exist`);
		throw product_not_found_error;
	}

	// Checking if the user already has 1 review for the given product.
 	console.log("Checking if a Duplicate Review Exists");
 	if (await checkDuplicateReviewExists(req) === true) {
 		const duplicate_document_error = new DuplicateDocumentError(`Could not create the Review with user_id ${user_id} and product_id ${product_id} since it already exists.`);

 		throw duplicate_document_error;
 	}

 	const review_id = createRandomString(6);
 	console.log("Created the review_id ", review_id);

 	const request_body_deep_clone = _.cloneDeep(req.body);

 	const review = {review_id: review_id, user_id: user_id, docType: review_doctype, ...request_body_deep_clone};

 	console.log("review ", review);

 	const result = await Review.create(review);

 	const final_result = result.toObject({
        getters: false,
        virtuals: false,
        minimize: false,
        versionKey: true,
        flattenMaps: true
    });

 	console.log("final_result in createReview ", final_result);

 	res.status(201).json(final_result);
 	console.log("===END OF createReview===");

});

const updateReview = asyncErrorHandler(async(req, res, next) => {
	console.log("In updateReview");

	const review_id = req.body.review_id;
	console.log("review_id ", review_id);

	const user_id = req.params.user_id;
	console.log("user_id ", user_id);

	const product_id = req.body.product_id;
	console.log("product_id ", product_id);

	console.log("Checking if the request body is empty");
	if (checkIsEmptyObject(req) === true) {
		const empty_request_body_error = new EmptyRequestBodyError(`Cannot update the Review with review_id ${review_id} since the request body is empty`);
		throw empty_request_body_error;
	}

	console.log("Checking if the user exists");
	if (await checkUserExists(req) === false) {
        const user_not_found_error = new ResourceNotFoundError(`Could not update the Review with review_id ${review_id} for the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
    }

	console.log("Checking if the product exists");
	if (await checkProduct(req) === false) {
		const product_not_found_error = new ResourceNotFoundError(`Could not update the Review with review_id ${review_id} for the product with product_id ${product_id} since that product does not exist`);
		throw product_not_found_error;
	}

	console.log("Checking if the Review to be updated exists");
	if (await checkReviewExists(req) === false) {
		const review_not_found_error = new ResourceNotFoundError(`Could not update the Review with review_id ${review_id} since it does not exist`);
		throw review_not_found_error;
	}

	// We don't need to check for duplicates since a user can have only 1 review for a given product.

	const request_body_deep_clone = _.cloneDeep(req.body);
	console.log("request_body_deep_clone ", request_body_deep_clone);

	const filter = {review_id: review_id, user_id: user_id, product_id: product_id};
	console.log("filter ", filter);

	console.log("Removing the review_id and product_id from the query");
	const update_query = pruneObject(request_body_deep_clone, ['review_id', 'product_id']);
	console.log("update_query ", update_query);

	const result = await Review.findOneAndUpdate(filter, update_query, {new: true}, {runValidators: true}).lean();

	console.log("result in updateReview ", result);
	res.status(200).json(result);
	console.log("===END OF updateReview()===");

});

const deleteReview = asyncErrorHandler(async(req, res, next) => {
	console.log("In deleteReview");

	console.log("Check if the request body is empty");
	if (checkIsEmptyObject(req) === true) {
		const empty_request_body_error = new EmptyRequestBodyError(`Cannot delete the Review with review_id ${review_id} since the request body is empty`);
		throw empty_request_body_error;
	}

	const user_id = req.params.user_id;
	console.log("user_id ", user_id);

	const review_id = req.body.review_id;
	console.log("review_id ", review_id);

	const product_id = req.body.product_id;
	console.log("product_id ", product_id);

	console.log("Checking if the user exists or not");
	if (await checkUserExists(req) === false) {
		const user_not_found_error = new ResourceNotFoundError(`Could not delete the Review with review_id ${review_id} for the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
	}

	console.log("Checking if the product exists");
	if (await checkProduct(req) === false) {
		const product_not_found_error = new ResourceNotFoundError(`Could not delete the Review with review_id ${review_id} for the product with product_id ${product_id} since that product does not exist`);
		throw product_not_found_error;
	}

	console.log("Checking if the Review to be deleted exists");
	if (await checkReviewExists(req) === false) {
		const review_not_found_error = new ResourceNotFoundError(`Could not delete the Review with review_id ${review_id} since it does not exist`);
		throw review_not_found_error;
	}

	const delete_query = {review_id: review_id, user_id: user_id, product_id: product_id};
	console.log("delete_query ", delete_query);

	const result = await Review.findOneAndDelete(delete_query, {new: true}, {runValidators: true}).lean();
	console.log("result in deleteReview ", result);

	res.status(200).json(result);	
	console.log("===END OF deleteReview()===");

});

const searchReview = asyncErrorHandler(async(req, res, next) => {
	console.log("In searchReview");

	console.log("Check if the request body is empty");
	if (checkIsEmptyObject(req) === true) {
		const empty_request_body_error = new EmptyRequestBodyError(`Cannot search for the Review with review_id ${review_id} since the request body is empty`);
		throw empty_request_body_error;
	}

	const user_id = req.params.user_id;
	console.log("user_id ", user_id);

	//const review_id = req.body.review_id;
	//console.log("review_id ", review_id);

	console.log("Checking if the user exists or not");
	if (await checkUserExists(req) === false) {
		const user_not_found_error = new ResourceNotFoundError(`Could not search for Reviews for the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
	}

	const request_body_deep_clone = _.cloneDeep(req.body);
	console.log("request_body_deep_clone ", request_body_deep_clone);

	const search_query = {user_id: user_id, ...request_body_deep_clone};
	console.log("search_query ", search_query);

	const result = await Review.find(search_query).lean();
	console.log("result in searchReview ", result); 

	res.status(200).json(result);
	console.log("===END OF searchReview()===");
});

const getReviewById = asyncErrorHandler(async(req, res, next) => {
	console.log("In getReviewById");

	console.log("Check if the request body is empty");
	if (checkIsEmptyObject(req) === true) {
		const empty_request_body_error = new EmptyRequestBodyError(`Cannot search for the Review with review_id ${review_id} since the request body is empty`);
		throw empty_request_body_error;
	}

	const user_id = req.params.user_id;
	console.log("user_id ", user_id);

	const review_id = req.body.review_id;
	console.log("review_id ", review_id);

	console.log("Checking if the user exists or not");
	if (await checkUserExists(req) === false) {
		const user_not_found_error = new ResourceNotFoundError(`Could not search for the Review with review_id ${review_id} for the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
	}

	const search_query = {review_id: review_id};

	const result = await Review.findOne(search_query).lean();
	console.log("result in getReviewById ", result); 

	res.status(200).json(result);
	console.log("===END OF getReviewById()===");
});

module.exports = {
	createReview,
	updateReview,
	deleteReview,
	searchReview,
	getReviewById
};