const customValidators = require('./customFormatValidators');
const validator = require('validator');
const z = require('zod');

 
const zodIsShippingAddressId = z.string("The shipping_address_id field must be a string. It is a required field.").length(12, {message: "The shipping_address_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The shipping_address_id can only contain lowercase letters and numbers."});

const zodIsPostalCode = z.string("The postal_area field must be a string").min(3, {message: "The postal_area field is a required field."}).max(10, {message: "The postal_area field has a maximum length of 10 characters."}).refine((value, locale) => validator.isPostalCode(value, "any"), {
    message: "Only valid postal addresses are permitted in this field."
});

const zodIsCompanyName = z.string("The company_name field must be a string.").max(100, {message: "The company_name field has a maximum permitted length of 100 characters."}).optional("The company_name field is optional.").refine((value) => /^[a-zA-Z- ]*$/.test(value), {
    message: "A company_name can only have letters, spaces and dashes."
});

const zodIsAddress = z.string("The address field must be a string.").min(100, {message: "The address field is a required field."}).max(200, {message: "The address field has a maximum permitted length of 200 characters."}).refine((value) => /^[a-zA-Z0-9-, ]*$/.test(value), {
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

const zodIsCountry = z.enum(["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "Singapore", "Hong Kong", "Japan"], {message: "The country field is a required field. It takes one of the following values: United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Singapore, Hong Kong, Japan."});

// Done
const zodIsMobilePhone = z.string("The phone_number field must be a string.").min(8, {message: "The phone_number must be at least 8 digits long. It is a required field."}).max(12, {message: "A phone_number has a maximum permitted length of 12 digits (including country code)."}).refine((value) => validator.isMobilePhone(value), {
    message : "The phone_number field must be a valid phone number including country code. Do not prefix a plus before the country code."
});

const zodIsAddressTypeId = z.string("The address_type_id field must be a string.").length(1, {message: "The address_type_id is only a single digit long. It is a required field."}).refine((value) => /^[1-5]$/.test(value), {
    message: "A address_type_id can only accept a single digit string numeric value (1 - 5)."
});

const zodIsAcknowledged = z.boolean("The acknowledged field must be a boolean value of true or false.");

const zodIsModifiedCount = z.number("The modifiedCount field must be a number (integer).").int("The modifiedCount field must be an integer.").min(0, {message: "The minimum value accepted by the modifiedCount field is 0."}).max(1, {message: "The maximum value accepted by the modifiedCount field is 1."}); 

const zodIsUpsertedId = z.null();

const zodIsUpsertedCount =  z.number("The upsertedCount field must be a number (integer).").int("The upsertedCount field must be an integer.").min(0, {message: "The minimum value accepted by the upsertedCount field is 0."}).max(1, {message: "The maximum value accepted by the upsertedCount field is 1."});

const zodIsMatchedCount = z.number("The matchedCount field must be a number (integer).").int("The matchedCount field must be an integer.").min(0, {message: "The minimum value accepted by the matchedCount field is 0."}).max(1, {message: "The maximum value accepted by the matchedCount field is 1."});

module.exports = {
    zodIsShippingAddressId,
    zodIsPostalCode,
    zodIsAddress,
    zodIsCompanyName,
    zodIsApartment,
    zodIsCity,
    zodIsAdministrativeDivision,
    zodIsCountry,
    zodIsMobilePhone,
    zodIsAddressTypeId,
    zodIsAcknowledged,
    zodIsModifiedCount,
    zodIsUpsertedId,
    zodIsUpsertedCount,
    zodIsMatchedCount
};