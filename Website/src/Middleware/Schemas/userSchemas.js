const z = require('zod');
const objectIdSchema = require('./objectIdSchema');
const { shippingAddressArrayStandardSchema, createShippingAddressResponseArraySchema} = require('./shippingAddressSchemas'); 
const { cartItemSchema, cartItemArraySchema } = require('./cartItemSchemas');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const { testUserData, testRequestUserDataFull, testUserDataFull } = require('./TestObjects/testUserObjects');

const userRequestSchema = z.object({
    email: customValidators.zodIsEmail,
    
    password: customValidators.zodIsPassword,
    
    phone_number: customValidators.zodIsMobilePhone,
    
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),

    user_role: z.enum(["user", "admin"], {message: "The user_role field is a required field. It takes 1 of the following values: user, admin."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock emails only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayStandardSchema.length(0, {message: "A shipping address can't be added to a new user when it is being created. Use the createshippingaddress API for that."}),

    CartItems: cartItemArraySchema.length(0, {message: "A cart item can't be added to a new user when it is being created. Use the createcartitem API for that."})

});

const userUpdateSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),

    email: customValidators.zodIsEmail.optional(),
    
    phone_number: customValidators.zodIsMobilePhone.optional(),
    
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}).optional(),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes."}).optional(),

    user_role: z.enum(["user", "admin"], {message: "The user_role field is a required field. It takes 1 of the following values: user, admin."}).optional(),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber.optional(),
    
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}).optional(),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber.optional(),
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}).optional(),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock emails only or Never / Unsubscribe."}).optional(),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values.").optional()

});

const updateUserSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),

    email: customValidators.zodIsEmail.optional(),
    
    phone_number: customValidators.zodIsMobilePhone.optional(),
    
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}).optional(),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes."}).optional(),

    user_role: z.enum(["user", "admin"], {message: "The user_role field is a required field. It takes 1 of the following values: user, admin."}).optional(),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber.optional(),
    
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}).optional(),
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}).optional(),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe."}).optional(),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values.").optional()

});

const updateUserPasswordSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."}),

    password: customValidators.zodIsPassword
});

const userResponseGenericSchema = z.object({
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
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayStandardSchema,

    CartItems: cartItemArraySchema,

    __v: customValidators.zodIsDocumentVersion
})

const getUserByIdSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, {message: "The user_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The user_id can only contain lowercase letters and numbers."})
});

const getUsersByNameSchema = z.object({
    first_name: z.string("The first_name field must be a string.").min(1, {message: "The first_name field is a required field."}).max(100, {message: "The first_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes."}),
    
    last_name: z.string("The last_name field must be a string.").min(1, {message: "The last_name field is a required field."}).max(100, {message: "The last_name field has a maximum permitted length of 100 characters."}).regex(customValidators.nameRegex, {message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes."}).optional()
});

const registerUserResponseSchema = z.object({
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
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayStandardSchema,

    CartItems: cartItemArraySchema,

    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion

});

/** ########## SHIPPING ADDRESS SECTION ########## **/

const userShippingAddressResponseSchema = z.object({
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
    
    others_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The others_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], {message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe."}),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses:  createShippingAddressResponseArraySchema,

    CartItems: cartItemArraySchema,

    __v: customValidators.zodIsDocumentVersion
}).strict();

const userResponseGenericSchemaArray = z.array(userResponseGenericSchema).min(1);

module.exports = {
    userRequestSchema,
    updateUserSchema,
    getUserByIdSchema,
    getUsersByNameSchema,
    updateUserPasswordSchema,
    userResponseGenericSchema,
    registerUserResponseSchema,
    userResponseGenericSchemaArray,
    userShippingAddressResponseSchema
};

// TESTS
// console.log(testUserData);
// const result = userRequestSchema.safeParse(testRequestUserDataFull);
// console.log(" User Request Schema Test Result ", result);
// console.log(" User Request Schema Test Result Errors ", result?.error?.issues);



    

