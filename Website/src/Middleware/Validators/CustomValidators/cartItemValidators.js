const customValidators = require('./customFormatValidators');
const z = require('zod');

const zodIscartItemId = z.string("The cart_item_id field must be a string. It is a required field.").length(12, {message: "The cart_item_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The cart_item_id can only contain lowercase letters and numbers."});

const zodIsCartItemName = z.string("The cart_item_name field must be a string.").min(3, {message: "The cart_item_name field is a required field."}).max(100, {message: "The cart_item_name field has a maximum permitted length of 100 characters."}).regex(customValidators.productNameRegex, {message: "The cart_item_name can contain only small letters, capital letters, accented letters, digits, dashes and spaces."});

const zodIsItemTotal = z.number("The item_total field must be a number. It is a required field.").int("The item_total field must be an integer.").min(1, {message: "The minimum limit of the item_total field is 1."}).max(300, {message: "The maximum limit of the item_total field is 300."});
    
const zodIsCartItemImageURI = z.string("The cart_item_image_uri must be a string. It is a required field.").max(256).regex(customValidators.windowsFilePathRegex, {message: "The cart_item_image_uri must be a valid Windows file path. Maximum permitted length is 256 characters."});
 
// Conversion to JSOn not necessary since this is a numeric field.
const zodIsCartItemQuantity = z.number("The cart_item_quantity field must be a number(integer). This is a required field.").int("The cart_item_quantity field must be an integer.").min(1, {message: "The cart_item_quantity has a minimum limit of 1."}).max(5, {message: "The cart_item_quantity has a maximum limit of 5."});

module.exports = {
    zodIscartItemId,
    zodIsCartItemName,
    zodIsItemTotal,
    zodIsCartItemImageURI,
    zodIsCartItemQuantity
};