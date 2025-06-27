const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators')

const cartItemSchema = z.object({
    cart_item_id: z.string("The cart_item_id field must be a string. It is a required field.").length(12, {message: "The cart_item_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The cart_item_id can only contain lowercase letters and numbers."}),

    product_id: z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."}),
    
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    cart_item_name: z.string("The cart_item_name field must be a string.").min(3, {message: "The cart_item_name field is a required field."}).max(100, {message: "The cart_item_name field has a maximum permitted length of 100 characters."}).regex(customValidators.productNameRegex, {message: "The cart_item_name can contain only small leters, capital letters, accented letters, digits, dashes and spaces."}),
    
    cart_item_image_uri: z.string("The cart_item_image_uri must be a string. It is a required field.").max(256).regex(customValidators.windowsFilePathRegex, {message: "The cart_item_image_uri must be a valid Windows file path. Maximum permitted length is 256 characters."}),
    
    cart_item_quantity: z.number("The cart_item_quantity field must be a number(integer). This is a required field.").int("The cart_item_quantity field must be an integer.").min(1, {message: "The cart_item_quantity has a minimum limit of 1."}).max(100, {message: "The cart_item_quantity has a maximum limit of 100."})
});

const cartItemArraySchema = z.array(cartItemSchema); 


module.exports = {
    cartItemSchema,
    cartItemArraySchema
};