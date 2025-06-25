const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');
const { testReviewObject, testReviewObject2} = require('./TestObjects/testReviewObject');

const reviewRequestSchema = z.object({
    review_id: z.string("The review_id field must be a string. It is a required field.").length(12, {message: "The review_id field must be a string that is 12 characters long"}).regex(customValidators.twelveCharacterRegex, {message: "The review_id can only contain lowercase letters and digits."}),

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),

    product_id: z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."}),

    docType: z.literal("REVIEW", {message: "The docType field is a required field. It takes the value: REVIEW."}),

    review_comment: z.string("The review_comment field must be a string.").min(3, {message: "The review_comment field has a minimum limit of 50 characters. It is a required field."}).max(500, {message: "The review_comment field has a maximum limit of 500 characters."}).regex(customValidators.paragraphRegex, {message: "The review_comment field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots, and spaces."}),

    review_rating: z.number("The review_rating field must be a number (integer or floating-point).").min(1, {message: "The review_rating field has a minimum limit of 1."}).max(5, {message: "The review_rating field has a maximum limit of 5."})
});

const reviewResponseSchema = z.object({
    _id: objectIdSchema,

    review_id: z.string("The review_id field must be a string. It is a required field.").length(12, {message: "The review_id field must be a string that is 12 characters long"}).regex(customValidators.twelveCharacterRegex, {message: "The review_id can only contain lowercase letters and digits."}),

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),

    product_id: z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."}),

    docType: z.literal("REVIEW", {message: "The docType field is a required field. It takes the value: REVIEW."}),

    review_comment: z.string("The review_comment field must be a string.").min(3, {message: "The review_comment field has a minimum limit of 50 characters. It is a required field."}).max(500, {message: "The review_comment field has a maximum limit of 500 characters."}).regex(customValidators.paragraphRegex, {message: "The review_comment field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots, and spaces."}),

    review_rating: z.number("The review_rating field must be a number (integer or floating-point).").min(1, {message: "The review_rating field has a minimum limit of 1."}).max(5, {message: "The review_rating field has a maximum limit of 5."})
});

module.exports = {
    reviewRequestSchema,
    reviewResponseSchema,
};

// TESTS
const reviewResult = reviewRequestSchema.safeParse(testReviewObject);
console.log("reviewResult ", reviewResult);
console.log("reviewResult?.error?.issues ", reviewResult?.error?.issues);

const reviewResult2 = reviewResponseSchema.safeParse(testReviewObject2);
console.log("reviewResult2 ", reviewResult2);
console.log("reviewResult2?.error?.issues ", reviewResult2?.error?.issues);

