const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');
const productValidators = require('../Validators/CustomValidators/cartItemValidators');
const objectIdSchema = require('./objectIdSchema');y
const discountValidators = require('../Validators/CustomValidators/discountValidators');

const cartItemRequestSchema = z.object({
    product_id: customValidators.zodIsProductId,

    sku: customValidators.zodIsSKU,

    cart_item_name: cartItemValidators.zodIsCartItemName,

    item_total: cartItemValidators.zodIsItemTotal,

    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage
}).strict();

const cartItemResponseSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,

    sku: customValidators.zodIsSKU,

    cart_item_name: cartItemValidators.zodIsCartItemName,

    item_total: cartItemValidators.zodIsItemTotal,

    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,

    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage,

    discount_amount: discountValidators.zodIsDiscountAmount,
    
    discounted_total: discountValidators.zodIsDiscountedTotal
}).strict();

const cartItemArrayZeroSchema = z.array(cartItemResponseSchema).min(0);

const updateCartItemQuantitySchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU,
    
    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity,

    item_total: cartItemValidators.zodIsItemTotal,

    discount_percentage: cart.zodIsDiscountPercentage
}).strict();

const deleteCartItemSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU
}).strict();

module.exports = {
    cartItemRequestSchema,
    cartItemResponseSchema,
    cartItemArrayZeroSchema,
    updateCartItemQuantitySchema,
    deleteCartItemSchema
};