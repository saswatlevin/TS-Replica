const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');

const createCartItemSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: customValidators.zodIsProductId,
    
    sku: customValidators.zodIsSKU,
    
    cart_item_name: cartItemValidators.zodIsCartItemName,
    
    cart_item_image_uri: cartItemValidators.zodIsCartItemImageURI,
    
    cart_item_quantity: cartItemValidators.zodIsCartItemQuantity
});

const cartItemArraySchema = z.array(createCartItemSchema); 


module.exports = {
    createCartItemSchema,
    cartItemArraySchema
};