const z = require('zod');
const customValidators = require('../CustomValidators/customValidators');
const objectIdSchema = require('./objectIdSchema');
const { orderShippingAddressSchema }  = require('./shippingAddressSchemas');
const { orderItemSchemaArray } = require('./orderItemSchemas');
const { testOrder1, testOrder2} = require('./testOrderObjects');

/**
 * product_id is derived from product schema
 * user_id is derived from userSchema
 * sku is related to productItemSchema
 * shipping_address fields are the same as those in shippingAddressSchema
 * order_item_name is related to product_name and cart_item_name
 * order_item_price is related to product_price
 * order_item_image_uri is related to cart_item_image_uri
**/

const orderRequestSchema = z.object({
    order_id: z.string("The order_id field must be a string. It is a required field.").length(12, {message: "The order_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The order_id field can only contain lowercase letters and digits."}),

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."}),

    order_status: z.enum(["Pre-Dispatch", "Dispatched", "Arrived", "Cancelled"], {message: "The order_status field accepts one of the following values: Pre-Disptach, Dispatched, Arrived, Cancelled.It is a required field."}),

    total_price: z.number("The total_price field must be a number(integer).").int("The total_price filed must be an integer value.").min(1, {message: "The total_price field only takes positive integer values. Its minimum limit is 1."}).max(600, {message: "The maximum limit of the total_price field is 600."}),

    date_created_at: customValidators.zodIsISO8601,

    date_of_arrival: customValidators.zodIsISO8601,

    shipping_address: orderShippingAddressSchema,

    OrderItems: orderItemSchemaArray

});


const orderResponseSchema = z.object({
    _id: objectIdSchema,

    order_id: z.string("The order_id field must be a string. It is a required field.").length(12, {message: "The order_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The order_id field can only contain lowercase letters and digits."}),

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."}),

    order_status: z.enum(["Pre-Disptach", "Dispatched", "Arrived", "Cancelled"], {message: "The order_status field accepts one of the following values: Pre-Disptach, Dispatched, Arrived, Cancelled.It is a required field."}),

    total_price: z.number("The total_price field must be a number(integer).").int("The total_price filed must be an integer value.").min(1, {message: "The total_price field only takes positive integer values. Its minimum limit is 1."}).max(600, {message: "The maximum limit of the total_price field is 600."}),

    date_created_at: customValidators.zodIsISO8601,

    date_of_arrival: customValidators.zodIsISO8601,

    shipping_address: orderShippingAddressSchema,

    OrderItems: orderItemSchemaArray

});

module.exports = {
    orderRequestSchema,
    orderResponseSchema
};

// TESTS
const result1 = orderRequestSchema.safeParse(testOrder1);
console.log("result1 ", result1);
console.log("result1?.error?.issues ", result1?.error?.issues);

const result2 = orderRequestSchema.safeParse(testOrder2);
console.log("result2 ", result2);
console.log("result2?.error?.issues ", result2?.error?.issues);