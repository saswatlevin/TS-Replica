const express = require("express");
const router = express.Router();
const reviewControllers = require('../Controllers/reviewControllers');
const requestValidator = require('../Validators/requestValidator');
const reviewSchemas = require('../Schemas/reviewSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createreview/:user_id').post(requestValidator(reviewSchemas.createReviewRequestSchema), xss(), reviewControllers.createReview);

router.route('/updatereview/:user_id').patch(requestValidator(reviewSchemas.updateReviewRequestSchema), xss(), reviewControllers.updateReview);

router.route('/deletereview/:user_id').delete(requestValidator(reviewSchemas.deleteReviewRequestSchema), xss(), reviewControllers.deleteReview);

router.route('/searchreview/:user_id').get(requestValidator(reviewSchemas.searchReviewRequestSchema), xss(), reviewControllers.searchReview);

router.route('/getreviewbyid/:user_id').get(requestValidator(reviewSchemas.getReviewByIdRequestSchema), xss(), reviewControllers.getReviewById);

module.exports = router;

