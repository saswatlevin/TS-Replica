const z = require('zod');
const customValidators = require('./customFormatValidators');

const zodIsReviewId = z.string("The review_id field must be a string. It is a required field.").length(12, {message: "The review_id field must be a string that is 12 characters long"}).regex(customValidators.twelveCharacterRegex, {message: "The review_id can only contain lowercase letters and digits."});

const zodIsReviewDocType = z.literal("REVIEW", {message: "The docType field is a required field. It takes the value: REVIEW."}); 

const zodIsReviewComment = z.string("The review_comment field must be a string.").min(3, {message: "The review_comment field has a minimum limit of 50 characters. It is a required field."}).max(500, {message: "The review_comment field has a maximum limit of 500 characters."}).regex(customValidators.paragraphRegex, {message: "The review_comment field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeseet-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots, and spaces."});

const zodIsReviewRating = z.number("The review_rating field must be a number (integer or floating-point).").min(1, {message: "The review_rating field has a minimum limit of 1."}).max(5, {message: "The review_rating field has a maximum limit of 5."});

module.exports = {
	zodIsReviewId,
	zodIsReviewDocType,
	zodIsReviewComment,
	zodIsReviewRating
}