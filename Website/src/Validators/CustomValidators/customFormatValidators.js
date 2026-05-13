const validator = require('validator');
const z = require('zod');

// Exempted from redefinition
const zodIsISO8601 = z.string("This date field must be a string.").length(19, {message: "This date field value must be 19 characters long. It is a required field."}).refine((value) => validator.isISO8601(value, {strict: true, separator: true}), {
    message: "This date field must receive date in the format YYYY-MM-DDTHH:MM:SS"
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


const zodIsPassword = z.string("The password field must be a string.").min(12, {message: "The password field has a minimum length of 12 characters."}).max(30, {message: "The password field has a maximum permitted length of 30 characters."}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#!\$\. ])[A-Za-z\d@#!\$\. ]+$/, {message: "The password must be between 12 and 30 characters long. It should have at lease one uppercase letter, one lowercase letter, one digit and one of the following special characters \"@,#,!,$,.\". It can also contain spaces."});

const zodIsDocumentVersion = z.number("The __v field must be a number(integer). It is an optional field.").int("The __v field must be an integer value.").optional();

const nameRegex = /^[A-Za-z\-']*$/;

const tenCharacterRegex = /^[a-z0-9]{10}$/;

const twelveCharacterRegex = /^[a-z0-9]{12}$/;

const alphaNumericRegex = /^[[a-z0-9]$/;

const windowsFilePathRegex = /^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/;

const productNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/;

const paragraphRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9#!,;:%'’“”\\\"\(\)\-\—\. ]*$/;

const zodIsTotalItemTotal = z.number({message: "The total_item_total field must be a number."
}).min(0, { message: "The total_item_total field has a minimum limit of 0."}).max(10000, { message: "The total_item_total field has a maximum limit of 10000."});

const zodIsTotalDiscountAmount = z.number({message: "The total_discount_amount field must be a number."
}).min(0, { message: "The total_discount_amount field has a minimum limit of 0."}).max(10000, { message: "The total_discount_amount field has a maximum limit of 10000."});

const zodIsTotalDiscountPercentage = z.number({message: "The total_discount_percentage field must be a number."
}).min(0, { message: "The total_discount_percentage field has a minimum limit of 0."}).max(10000, { message: "The total_discount_percentage field has a maximum limit of 10000."});

const zodIsTotalDiscountedTotal = z.number({message: "The total_discounted_total field must be a number."
}).min(0, { message: "The total_discounted_total field has a minimum limit of 0."}).max(10000, { message: "The total_discounted_total field has a maximum limit of 10000."});

const zodIsTotalPayableAmount = z.number({message: "The total_payable_amount field must be a number."
}).min(0, { message: "The total_payable_amount field has a minimum limit of 0."}).max(10000, { message: "The total_payable_amount field has a maximum limit of 10000."});

module.exports = {
    zodIsISO8601,
    zodIsEmail,
    zodIsMobilePhone,
    zodIsPasswordHash,
    zodIsPassword,
    zodIsDocumentVersion,
    nameRegex,
    tenCharacterRegex,
    twelveCharacterRegex,
    alphaNumericRegex,
    windowsFilePathRegex,
    productNameRegex,
    paragraphRegex,
    zodIsTotalItemTotal,
    zodIsTotalDiscountAmount,
    zodIsTotalDiscountPercentage,
    zodIsTotalPayableAmount
};

/** REGEX LIST
 * 12 Character Alphanumeric ID /^[a-z0-9]{12}$/
 * 10 Character Alphanumeric ID /^[a-z0-9]{10}$/
 * SmCaUnQuSp /^[a-zA-Z-' ]*$/
 * 
 */