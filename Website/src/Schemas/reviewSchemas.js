const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');
const productValidators = require('../Validators/CustomValidators/productValidators');
const reviewValidators = require('../Validators/CustomValidators/reviewValidators');
const userValidators = require('../Validators/CustomValidators/userValidators');

const createReviewRequestSchema = z.object({

    product_id: productValidators.zodIsProductId,

    docType: reviewValidators.zodIsReviewDocType,

    review_comment: reviewValidators.zodIsReviewComment,

    review_rating: reviewValidators.zodIsReviewRating
}).strict();

const updateReviewRequestSchema = z.object({
    review_id: reviewValidators.zodIsReviewId,

    product_id: productValidators.zodIsProductId,

    review_comment: reviewValidators.zodIsReviewComment.optional(),

    review_rating: reviewValidators.zodIsReviewRating.optional()
}).strict();

const getReviewByIdRequestSchema = z.object({
    review_id: reviewValidators.zodIsReviewId
}).strict();

const deleteReviewRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,
    review_id: reviewValidators.zodIsReviewId
}).strict();

const createReviewResponseSchema = z.object({
    review_id: reviewValidators.zodIsReviewId,

    user_id: userValidators.zodIsUserId,

    product_id: productValidators.zodIsProductId,

    docType: reviewValidators.zodIsReviewDocType,

    review_comment: reviewValidators.zodIsReviewComment,

    review_rating: reviewValidators.zodIsReviewRating,

    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion

}).strict();

const reviewResponseSchema = z.object({
    _id: objectIdSchema,

    review_id: reviewValidators.zodIsReviewId,

    user_id: userValidators.zodIsUserId,

    product_id: productValidators.zodIsProductId,

    docType: reviewValidators.zodIsReviewDocType,

    review_comment: reviewValidators.zodIsReviewComment,

    review_rating: reviewValidators.zodIsReviewRating,

    __v: customValidators.zodIsDocumentVersion

}).strict();

const searchReviewRequestSchema = z.object({
    product_id: productValidators.zodIsProductId.optional(),

    review_comment: reviewValidators.zodIsReviewComment.optional(),

    review_rating: reviewValidators.zodIsReviewRating.optional()
}).strict();

const searchReviewResponseSchema = z.array(reviewResponseSchema);


module.exports = {
    createReviewRequestSchema,
    updateReviewRequestSchema,
    getReviewByIdRequestSchema,
    deleteReviewRequestSchema,
    reviewResponseSchema,
    searchReviewRequestSchema,
    createReviewResponseSchema,
    searchReviewResponseSchema
};

