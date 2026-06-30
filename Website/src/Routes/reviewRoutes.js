const express = require("express");
const router = express.Router();
const reviewControllers = require('../Controllers/reviewControllers');
const requestValidator = require('../Validators/requestValidator');
const reviewSchemas = require('../Schemas/reviewSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');



router.route('/createreview').post(requestValidator(reviewSchemas.createReviewRequestSchema), verifyToken(['admin', 'user']), xss(), reviewControllers.createReview);

router.route('/updatereview').patch(requestValidator(reviewSchemas.updateReviewRequestSchema), verifyToken(['admin', 'user']), xss(), reviewControllers.updateReview);

router.route('/deletereview').delete(requestValidator(reviewSchemas.deleteReviewRequestSchema), verifyToken(['admin', 'user']), xss(), reviewControllers.deleteReview);

router.route('/searchreview').get(requestValidator(reviewSchemas.searchReviewRequestSchema), xss(), verifyToken(['admin', 'user']), reviewControllers.searchReview);

router.route('/getreviewbyid').get(requestValidator(reviewSchemas.getReviewByIdRequestSchema), verifyToken(['admin', 'user']), xss(), reviewControllers.getReviewById);

module.exports = router;

