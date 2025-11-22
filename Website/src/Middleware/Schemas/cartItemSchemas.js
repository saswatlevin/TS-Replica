const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');
const objectIdSchema = require('./objectIdSchema');

const cartItemRequestSchema = z.object({
    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU,
    
    cart_item_name: cartItemValidators.zodIsCartItemName,

    cart_item_price: cartItemValidators.zodIsCartItemPrice,
    
    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,
    
    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity
});

const cartItemResponseSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU,
    
    cart_item_name: cartItemValidators.zodIsCartItemName,

    cart_item_price: cartItemValidators.zodIsCartItemPrice,
    
    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,
    
    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity,

    _id: objectIdSchema
});

const cartItemArraySchema = z.array(cartItemRequestSchema).min(0); 

const updateCartItemPriceSchema = z.object({
    cart_item_price: cartItemValidators.zodIsCartItemPrice
});


module.exports = {
    cartItemRequestSchema,
    cartItemResponseSchema,
    cartItemArraySchema,
    updateCartItemPriceSchema
};