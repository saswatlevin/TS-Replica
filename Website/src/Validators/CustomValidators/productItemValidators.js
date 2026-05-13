const z = require('zod');
const customValidators = require('./customFormatValidators');

const upperSizeNumberArray = [46, 44, 42, 40, 38, 36];
const sizeLetterArray = ["XXL", "XL", "L", "M", "S", "XS"];
const lowerSizeNumberArray = [38, 36, 35, 34, 33, 32, 31, 30, 29, 28];
const inseamLengthArray = [32, 34];


const zodIsUpperSizeNumber = z.number("The upper_size_number field must be a number (integer). It is a required field.").int("The upper_size_number field must be an integer.").refine((value) => upperSizeNumberArray.includes(value),  {
    message: 'The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.'
});

const zodIsLowerSizeNumber = z.number("The lower_size_number field must be a number (integer). It is a required field.").int("The lower_size_number field must be an integer.").refine((value) => lowerSizeNumberArray.includes(value), {
    message: 'The lower_size_number field must have any one of the following integers as a value: 38, 36, 35, 34, 33, 32, 31, 30, 29 or 28.'
});

const zodIsInseamLength = z.number("The inseam_length field must be a number (integer). It is a required field.").int("The inseam_length field must be an integer.").refine((value) => inseamLengthArray.includes(value), {
    message: 'The inseam_length field must have any one of the following integers as a value: 32, 34.'
});

const zodIsUpperSizeLetter = z.enum(sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."});

const zodIsLowerSizeLetter = z.enum(sizeLetterArray, {message: "The lower_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."});

const zodIsOthersSizeLetter = z.enum(sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."});

const zodIsTotalStock = z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"});

const zodIsQuantitySold = z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."});

const zodIsQuantityReturned = z.number("The quantity_returned field must be a number (integer). It is a required field.").int("The quantity_returned field must be an integer.").min(0, {message: "The minimum value of the quantity_returned field is 0."}).max(600, {message: "The maximum value of the quantity_returned field is 600."});

const zodIsCurrentStock = z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."});

const zodIsSKU = z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."});

module.exports = {
	zodIsUpperSizeNumber,
	zodIsLowerSizeNumber,
	zodIsInseamLength,
	zodIsUpperSizeLetter,
	zodIsLowerSizeLetter,
	zodIsOthersSizeLetter,
	zodIsTotalStock,
	zodIsQuantitySold,
	zodIsQuantityReturned,
	zodIsCurrentStock,
	zodIsSKU
}