const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');

/**
 * order_item_name is related to product_name and cart_item_name
 * order_item_price is related to product_price
 * order_item_image_uri is related to cart_item_image_uri
 **/

const orderItemSchema = z.object({
    order_item_id: z.string("The order_item_id field must be a string. It is a required field.").length(12, {message: "The order_item_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The order_item_id can contain only lowercase letters and digits."}),

    product_id: z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."}),

    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    order_item_name: z.string("The order_item_name field must be a string.").min(3, {message: "The order_item_name field is a required field."}).max(100, {message: "The maximum permitted length is 100 characters."}).regex(customValidators.productNameRegex, {message: "The order_item_name field accepts only upper case letters, lower case letters, accented uppercase and lowercase letters and spaces."}),

    order_item_price: z.number("The order_item_price field must be a number(integer). It is a required field.").int("The order_item_price field must be an integer.").min(1, {message: "The minimum limit of the order_item_price field is 1."}).max(300, {message: "The maximum limit of the order_item_price field is 300."}),

    order_item_quantity: z.number("The order_item_quantity field must be a number(integer). It is a required field.").int("The order_item_quantity field must be an integer.").min(1, {message: "The order_item_quantity field has a minimum limit of 1."}).max(100, {message: "The order_item_quantity field has a maximum upper limit of 100."}),

    order_item_image_uri: z.string("The order_item_image_uri must be a string. It is a required field.").max(256).regex(customValidators.windowsFilePathRegex, {message: "The order_item_image_uri must be a valid Windows file path. Maximum permitted length is 256 characters."})
});

const orderItemSchemaArray = z.array(orderItemSchema);

module.exports = {
    orderItemSchema,
    orderItemSchemaArray
};

