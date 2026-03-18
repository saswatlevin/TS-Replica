const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');
const productValidators = require('../Validators/CustomValidators/cartItemValidators');
const objectIdSchema = require('./objectIdSchema');

const cartItemRequestSchema = z.object({
    product_id: customValidators.zodIsProductId,

    sku: customValidators.zodIsSKU,

    cart_item_name: cartItemValidators.zodIsCartItemName,

    cart_item_price: cartItemValidators.zodIsCartItemPrice,

    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,

    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity
}).strict();

const cartItemResponseSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,

    sku: customValidators.zodIsSKU,

    cart_item_name: cartItemValidators.zodIsCartItemName,

    cart_item_price: cartItemValidators.zodIsCartItemPrice,

    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,

    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity
}).strict();

const cartItemArrayZeroSchema = z.array(cartItemResponseSchema).min(0);

const updateCartItemQuantitySchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU,
    
    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity
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