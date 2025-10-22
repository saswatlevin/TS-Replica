
const validator = require('validator');
const z = require('zod');
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

// Exempted from redefinition
const zodIsISO8601 = z.string("This date field must be a string.").length(17, {message: "This date field must be 17 characters long. It is a required field."}).refine((value) => validator.isISO8601(value, {strict: true, separator: true}), {
    message: "This date field must recieve date in the format YY-MM-DDTHH:MM:SS"
});

// Exempted from redefinition
const zodIsEmail = z.string("The email field must be a string.").min(9, {message: "The email field has a minimum length of 9 characters. It is a required field."}).max(30, {message: "The email field has a maximum permitted length of 30 characters."}).refine((value) => validator.isEmail(value), {
    message: "The email field should contain a valid email."
});

const zodIsMobilePhone = z.string("The phone_number field must be a string.").min(8, {message: "The phone_number must be at least 8 digits long. It is a required field."}).max(12, {message: "A phone_number has a maximum permitted length of 12 digits (including country code)."}).refine((value) => validator.isMobilePhone(value), {
    message : "The phone_number field must be a valid phone number including country code. Do not prefix a plus before the country code."
});

const zodIsPasswordHash = z.string("The password field must be a string.").length(97, {message: "The password hash must be 97 characters long."}).refine((value) => /^\$argon2id\$v=19\$m=65536,t=3,p=4\$[a-zA-Z0-9\+\/]{22}\$[a-zA-Z0-9\+\/]{43}$/.test(value), {
    message: "The password field takes an argon2 hash generated using v=19, m=65536, t=3 and p=4."
});

const zodIsPassword = z.string("The password field must be a string.").min(12, {message: "The password field has a minimum length of 12 characters."}).max(30, {message: "The password field has a maximum permitted length of 30 characters."}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#!\$\. ])[A-Za-z\d@#!\$\. ]+$/, {message: "The password must be between 12 and 30 characters long. It should have at lease one uppercase letter, one lowercase letter, one digit and one of the following special characters \"@,#,!,$,.\". It can also contain spaces."})

const zodIsInseamLength = z.number("The inseam_length field must be a number (integer). It is a required field.").int("The inseam_length field must be an integer.").refine((value) => inseamLengthArray.includes(value), {
    message: 'The inseam_length field must have any one of the following integers as a value: 32, 34.'
});

const zodIsDocumentVersion = z.number("The __v field must be a number(integer). It is an optional field.").int("The __v field must be an integer value.").optional();

const nameRegex = /^[A-Za-z\-']*$/;

const twelveCharacterRegex = /^[a-z0-9]{12}$/;

const tenCharacterRegex = /^[a-z0-9]{10}$/;

const alphaNumericRegex = /^[[a-z0-9]$/;

const windowsFilePathRegex = /^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/;

const productNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/;

const paragraphRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9#!,;:%'’“”\\\"\(\)\-\—\. ]*$/;

const zodIsProductId = z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."});
    
const zodIsSKU = z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."});

module.exports = {
    sizeLetterArray,
    zodIsUpperSizeNumber,
    zodIsLowerSizeNumber,
    zodIsISO8601,
    zodIsEmail,
    zodIsMobilePhone,
    zodIsPasswordHash,
    zodIsPassword,
    zodIsInseamLength,
    zodIsDocumentVersion,
    nameRegex,
    twelveCharacterRegex,
    tenCharacterRegex,
    alphaNumericRegex,
    windowsFilePathRegex,
    productNameRegex,
    paragraphRegex,
     zodIsProductId,
    zodIsSKU
};

/** REGEX LIST
 * 12 Character Alphanumeric ID /^[a-z0-9]{12}$/
 * 10 Character Alphanumeric ID /^[a-z0-9]{10}$/
 * SmCaUnQuSp /^[a-zA-Z-' ]*$/
 * 
 */