const z = require('zod');
const customValidators = require('../CustomValidators/customValidators')

const cartItemSchema = z.object({
    cart_item_id: customValidators.zodIsTwelveCharacterId,

    product_id: customValidators.zodIsTwelveCharacterId,
    
    sku: customValidators.zodIsTenCharacterId,
    
    cart_item_name: z.string().min(3).max(100).regex(/^[A-Za-zÀ-ú0-9- ]*$/, {message: "The cart_item_name can contain only small leters, capital letters, accented letters, digits, dashes and spaces. Maximum permitted length is 100 characters."}),
    
    cart_item_image_uri: z.string().max(256).regex(/^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/, {message: "The cart_item_image_uri must be a valid Windows file path. Maximum permitted length is 256 characters."}),
    
    cart_item_quantity: z.number("The cart_item_quantity field must be a number between 1 and 100").min(1).max(100)
});

const cartItemArraySchema = z.array(cartItemSchema); 


module.exports = {
    cartItemSchema,
    cartItemArraySchema
};