const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');
const { orderShippingAddressSchema }  = require('./shippingAddressSchemas');
const { orderItemSchemaArray } = require('./orderItemSchemas');
const { testOrder1, testOrder2} = require('./TestObjects/testOrderObjects');
const discountValidators = require('../Validators/CustomValidators/discountValidators');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const orderValidators = require('../Validators/CustomValidators/orderValidators');

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
    order_id: orderValidators.zodIsOrderId,

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."}),

    order_status: orderValidators.zodIsOrderStatus,

    total_order_price: orderValidators.zodIsTotalOrderPrice,

    date_created_at: customValidators.zodIsISO8601,

    date_of_arrival: customValidators.zodIsISO8601,

    shipping_address: orderShippingAddressSchema,

    OrderItems: orderItemSchemaArray,

    total_discount_percentage: discountValidators.zodIsTotalDiscountPercentage,

    total_discount_amount: discountValidators.zodIsTotalDiscountAmount,

    total_discounted_total: discountValidators.zodIsTotalDiscountedTotal

}).strict();


const orderResponseSchema = z.object({
    _id: objectIdSchema,

    order_id: orderValidators.zodIsOrderId,

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."}),

    order_status: orderValidators.zodIsOrderStatus,

    total_order_price: orderValidators.zodIsTotalOrderPrice,

    date_created_at: customValidators.zodIsISO8601,

    date_of_arrival: customValidators.zodIsISO8601,

    shipping_address: orderShippingAddressSchema,

    OrderItems: orderItemSchemaArray,

    total_discount_percentage: discountValidators.zodIsTotalDiscountPercentage,

    total_discount_amount: discountValidators.zodIsTotalDiscountAmount,

    total_discounted_total: discountValidators.zodIsTotalDiscountedTotal

}).strict();

const createOrderResponseSchema = z.object({
    order_id: orderValidators.zodIsOrderId,

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."}),

    order_status: orderValidators.zodIsOrderStatus,

    total_order_price: orderValidators.zodIsTotalOrderPrice,

    date_created_at: customValidators.zodIsISO8601,

    date_of_arrival: customValidators.zodIsISO8601,

    shipping_address: orderShippingAddressSchema,

    OrderItems: orderItemSchemaArray,

    total_discount_percentage: discountValidators.zodIsTotalDiscountPercentage,

    total_discount_amount: discountValidators.zodIsTotalDiscountAmount,

    total_discounted_total: discountValidators.zodIsTotalDiscountedTotal,

    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion

}).strict();

const updateOrderStatusSchema = z.object({
    order_status: orderValidators.zodIsOrderStatus
}).strict();

const deleteOrderSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id field can only contain lowercase letters and digits."})
}).strict();

module.exports = {
    orderRequestSchema,
    orderResponseSchema,
    createOrderResponseSchema,
    updateOrderStatusSchema,
    deleteOrderSchema
};