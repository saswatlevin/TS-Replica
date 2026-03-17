const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/CustomValidators/productValidators');
//const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');

const productImageResponseSchema = z.object({
    image_id: z.string("The image_id field must be a string. It is a required field.").length(12, {message: "The image_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The image_id can only contain lowercase letters and numbers."}),

    image_uri: z.string("The image_uri field must be a string.").min(1, {message: "The image_uri field is a required field."}).max(256, {message: "The image_uri field has a maximum permitted length of 256 characters."}).regex(customValidators.windowsFilePathRegex, {message: "The image_uri path must be a valid windows filepath."}),

    main_image: z.boolean("The main_image field must be a boolean value. The main_image field is a required field.")
}).strict();

const productImageRequestSchema = z.object({
    image_uri: z.string("The image_uri field must be a string.").min(1, {message: "The image_uri field is a required field."}).max(256, {message: "The image_uri field has a maximum permitted length of 256 characters."}).regex(customValidators.windowsFilePathRegex, {message: "The image_uri path must be a valid windows filepath."}),
    
    main_image: z.boolean("The main_image field must be a boolean value. The main_image field is a required field.")
}).strict();

const productImageArrayResponseSchema = z.array(productImageResponseSchema).min(1, {message: "At least one product image must be provided."}).max(5, {message: "A maximum of 5 product images can be provided."});

const productImageArrayRequestSchema = z.array(productImageRequestSchema).min(1, {message: "At least one product image must be provided."}).max(5, {message: "A maximum of 5 product images can be provided."});


const createProductImageSchema = z.object({
    product_id: productValidators.zodIsProductId,

    image_uri: z.string("The image_uri field must be a string.").min(1, {message: "The image_uri field is a required field."}).max(256, {message: "The image_uri field has a maximum permitted length of 256 characters."}).regex(customValidators.windowsFilePathRegex, {message: "The image_uri path must be a valid windows filepath."})
}).strict();

const updateProductImageURISchema = z.object({
    product_id: productValidators.zodIsProductId,
    
    image_id: z.string("The image_id field must be a string. It is a required field.").length(12, {message: "The image_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The image_id can only contain lowercase letters and numbers."}),

    image_uri: z.string("The image_uri field must be a string.").min(1, {message: "The image_uri field is a required field."}).max(256, {message: "The image_uri field has a maximum permitted length of 256 characters."}).regex(customValidators.windowsFilePathRegex, {message: "The image_uri path must be a valid windows filepath."}),

    main_image: z.boolean("The main_image field must be a boolean value. The main_image field is a required field.")
}).strict();

const searchProductImageByIdSchema = z.object({
    product_id: productValidators.zodIsProductId,

    image_id: z.string("The image_id field must be a string. It is a required field.").length(12, {message: "The image_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The image_id can only contain lowercase letters and numbers."})

}).strict();

const deleteProductImageSchema = z.object({
    product_id: productValidators.zodIsProductId,

    image_id: z.string("The image_id field must be a string. It is a required field.").length(12, {message: "The image_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The image_id can only contain lowercase letters and numbers."}),

    main_image: z.boolean("The main_image field must be a boolean value. The main_image field is a required field.")    

}).strict();

module.exports = {
    productImageArrayResponseSchema,
    productImageArrayRequestSchema,
    createProductImageSchema,
    updateProductImageURISchema,
    searchProductImageByIdSchema,
    deleteProductImageSchema
};