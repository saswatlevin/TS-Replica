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

const zodIsPostalCode = z.string("The postal_area field must be a string").min(3, {message: "The postal_area field is a required field."}).max(10, {message: "The postal_area field has a maximum length of 10 characters."}).refine((value, locale) => validator.isPostalCode(value, "any"), {
    message: "Only valid postal addresses are permitted in this field."
});

const zodIsCompanyName = z.string("The company_name field must be a string.").max(100, {message: "The company_name field has a maximum permitted length of 100 characters."}).optional("The company_name field is optional.").refine((value) => /^[a-zA-Z- ]*$/.test(value), {
    message: "A company_name can only have letters, spaces and dashes."
}); 

const zodIsAddress = z.string("The address field must be a string.").min(1, {message: "The address field is a required field."}).max(200, {message: "The address field has a maximum permitted length of 200 characters."}).refine((value) => /^[a-zA-Z0-9-, ]*$/.test(value), {
    message: "An address can only have letters, numbers, dashes, spaces and commas."
});

const zodIsApartment = z.string("The apartment field must be a string.").max(100, {message: "The apartment field has a maximum permitted length of 100 characters."}).optional("The apartment field is optional.").refine((value) => /^[a-zA-Z0-9-,\(\) ]*$/.test(value), {
    message: "An apartment can have letters, numbers, spaces and brackets, i.e., ( and )."
});

const zodIsCity = z.string("The city field must be a string.").min(3, {message: "The city field is a required field."}).max(100, {message: "The city field has a maximum permitted length of 100 characters."}).refine((value) => /^[a-zA-Z-' ]*$/.test(value), {
    message: "A city can only have letters, spaces, dashes and single-quotes."
}); 

const zodIsAdministrativeDivision = z.string("The administrative_division field must be a string.").max(100, {message: "The administrative_division field has a maximum permitted length of 100 characters."}).optional("The administrative_division field is optional.").refine((value) => /^[a-zA-Z-' ]*$/.test(value), {
    message: "An administrative_division can only have letters, spaces, single-quotes and dashes."
}); 

// Done
const zodIsMobilePhone = z.string("The phone_number field must be a string.").min(11, {message: "The phone_number must be at least 12 digits long. It is a required field."}).max(20, {message: "A phone_number has a maximum permitted length of 20 characters (including spaces, dashes, area code and country code)."}).refine((value) => validator.isMobilePhone(value), {
    message : "A phone_number can contain upto 10 digits (excluding country code)."
});

const zodIsAddressTypeId = z.string("The address_type_id field must be a string.").length(1, {message: "The address_type_id is only a single digit long. It is a required field."}).refine((value) => /^[1-5]$/.test(value), {
    message: "A address_type_id can only accept a single digit string numeric value (1 - 5)."
});

// Exempted from redefinition
const zodIsISO8601 = z.string("This date field must be a string.").length(20, {message: "This date field has a maximum permitted length od 20 characters. It is a required field."}).refine((value) => validator.isISO8601(value, {strict: true, separator: true}), {
    message: "This date field must recieve date in the format YY-MM-DDTHH:MM:SS"
});

// Exempted from redefinition
const zodIsEmail = z.string("The email field must be a string.").min(9, {message: "The email field has a minimum length of 9 characters. It is a required field."}).max(30, {message: "The email field has a maximum permitted length of 30 characters."}).refine((value) => validator.isEmail(value), {
    message: "The email field should contain a valid email."
});

const zodIsPasswordHash = z.string("The password field must be a string.").length(97, {message: "The password hash must be 97 characters long."}).refine((value) => /^\$argon2id\$v=19\$m=65536,t=3,p=4\$[a-zA-Z0-9\+\/]{22}\$[a-zA-Z0-9\+\/]{43}$/.test(value), {
    message: "The password field takes an argon2 hash generated using v=19, m=65536, t=3 and p=4."
});

const zodIsInseamLength = z.number("The inseam_length field must be a number (integer). It is a required field.").int("The inseam_length field must be an integer.").refine((value) => inseamLengthArray.includes(value), {
    message: 'The inseam_length field must have any one of the following integers as a value: 32, 34.'
});

const nameRegex = /^[A-Za-z\-']*$/;

const twelveCharacterRegex = /^[a-z0-9]{12}$/;

const tenCharacterRegex = /^[a-z0-9]{10}$/;

const windowsFilePathRegex = /^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/;

const productNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/;

const paragraphRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9#!,;:%'’“”\\\"\(\)\-\—\. ]*$/;



module.exports = {
    sizeLetterArray,
    zodIsUpperSizeNumber,
    zodIsLowerSizeNumber,
    zodIsPostalCode,
    zodIsAddress,
    zodIsCompanyName,
    zodIsApartment,
    zodIsCity,
    zodIsAdministrativeDivision,
    zodIsMobilePhone,
    zodIsAddressTypeId,
    zodIsISO8601,
    zodIsEmail,
    zodIsPasswordHash,
    zodIsInseamLength,
    nameRegex,
    twelveCharacterRegex,
    tenCharacterRegex,
    windowsFilePathRegex,
    productNameRegex,
    paragraphRegex
};

/** REGEX LIST
 * 12 Character Alphanumeric ID /^[a-z0-9]{12}$/
 * 10 Character Alphanumeric ID /^[a-z0-9]{10}$/
 * SmCaUnQuSp /^[a-zA-Z-' ]*$/
 * 
 */