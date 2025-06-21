const z = require('zod');
const objectIdSchema = require('./objectIdSchema');
const { shippingAddressSchema, shippingAddressArraySchema} = require('./shippingAddressSchemas'); 
const { cartItemSchema, cartItemArraySchema } = require('./cartItemSchemas');
const customValidators = require('../CustomValidators/customValidators');
const { testUserData, testUserDataFull } = require('./TestObjects/testUserObjects');

const userRequestSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),
    
    docType: z.literal("USER", {message: "The docType field is a required field. It takes the value: USER."}),
    
    date_created_at: customValidators.zodIsISO8601,
    
    email: customValidators.zodIsEmail,
    
    password: customValidators.zodIsPasswordHash,
    
    phone_number: customValidators.zodIsMobilePhone,
    
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),

    user_role: z.enum(["user", "admin"], {message: "The user_role field is a required field. It takes 1 of the following values: user, admin."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock emails only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock emails only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArraySchema,

    CartItems: cartItemArraySchema

});


const userResponseSchema = z.object({
    _id: objectIdSchema,

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),
    
    docType: z.literal("USER", {message: "The docType field is a required field. It takes the value: USER."}),
    
    date_created_at: customValidators.zodIsISO8601,
    
    email: customValidators.zodIsEmail,
    
    password: customValidators.zodIsPasswordHash,
    
    phone_number: customValidators.zodIsMobilePhone,
    
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),

    user_role: z.enum(["user", "admin"], {message: "The user_role field is a required field. It takes 1 of the following values: user, admin."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock emails only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock emails only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArraySchema,

    CartItems: cartItemArraySchema

});

module.exports = {
    userRequestSchema,
    userResponseSchema
};

// TESTS
// console.log(testUserData);
const result = userRequestSchema.safeParse(testUserDataFull);
console.log(" User Request Schema Test Result ", result);
console.log(" User Request Schema Test Result Errors ", result?.error);



    

