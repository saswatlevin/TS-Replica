const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const discountValidators = require('../Validators/CustomValidators/discountValidators');
const orderItemValidators = require('../Validators/CustomValidators/orderItemValidators');
const productValidators = require('../Validators/CustomValidators/productValidators');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');

/**
 * order_item_name is related to product_name and cart_item_name
 * order_item_price is related to product_price
 * order_item_image_uri is related to cart_item_image_uri
 **/

const orderItemResponseSchema = z.object({
    order_item_id: orderItemValidators.zodIsOrderItemId,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    order_item_name: orderItemValidators.zodIsOrderItemName,

    order_item_price: orderItemValidators.zodIsOrderItemPrice,

    order_item_quantity: orderItemValidators.zodIsOrderItemQuantity,

    order_item_image_uri: orderItemValidators.zodIsOrderItemImageURI,

    return_reason: orderItemValidators.zodIsReturnReason,

    return_status: orderItemValidators.zodIsReturnStatus,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage,

    discount_amount: discountValidators.zodIsDiscountAmount,
    
    discounted_total: discountValidators.zodIsDiscountedTotal
}).strict();

const createOrderItemRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    order_item_name: orderItemValidators.zodIsOrderItemName,

    order_item_price: orderItemValidators.zodIsOrderItemPrice,

    order_item_quantity: orderItemValidators.zodIsOrderItemQuantity,

    order_item_image_uri: orderItemValidators.zodIsOrderItemImageURI,

    return_reason: orderItemValidators.zodIsReturnReason,

    return_status: orderItemValidators.zodIsReturnStatus,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage,

    discount_amount: discountValidators.zodIsDiscountAmount,
    
    discounted_total: discountValidators.zodIsDiscountedTotal
}).strict();

const updateOrderItemReturnSchema = z.object({
    return_reason: orderItemValidators.zodIsReturnReason,

    return_status: orderItemValidators.zodIsReturnStatus
}).strict();

const orderItemResponseSchemaArray = z.array(orderItemResponseSchema);

module.exports = {
    orderItemResponseSchema,
    createOrderItemRequestSchema,
    orderItemResponseSchemaArray,
    updateOrderItemReturnSchema
};

