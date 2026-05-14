const z = require('zod');
const objectIdSchema = require('./objectIdSchema');
const { shippingAddressArrayZeroSchema } = require('./shippingAddressSchemas');
const { cartItemArrayZeroSchema } = require('./cartItemSchemas');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');

const userRequestSchema = z.object({
    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPassword,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes." }),

    last_name: z.string("The last_name field must be a string.").min(1, { message: "The last_name field is a required field." }).max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes." }),

    user_role: z.enum(["user", "admin"], { message: "The user_role field is a required field. It takes 1 of the following values: user, admin." }),

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    others_size_letter: productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], { message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock emails only or Never / Unsubscribe." }),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema

});

const updateUserSchema = z.object({

    email: customValidators.zodIsEmail.optional(),

    phone_number: customValidators.zodIsMobilePhone.optional(),

    first_name: z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes." }).optional(),

    last_name: z.string("The last_name field must be a string.").min(1, { message: "The last_name field is a required field." }).max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }).optional(),

    user_role: z.enum(["user", "admin"], { message: "The user_role field is a required field. It takes 1 of the following values: user, admin." }).optional(),

    upper_size_number: productItemValidators.zodIsUpperSizeNumber.optional(),

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter.optional(),

    others_size_letter: productItemValidators.zodIsOthersSizeLetter.optional(),

    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], { message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe." }).optional(),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values.").optional()

});

const updateUserPasswordSchema = z.object({
    password: customValidators.zodIsPassword
});

const userResponseSchema = z.object({
    _id: objectIdSchema,

    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, { message: "The user_id must be 12 characters long." }).regex(customValidators.twelveCharacterRegex, { message: "The user_id can only contain lowercase letters and numbers." }),

    docType: z.literal("USER", { message: "The docType field is a required field. It takes the value: USER." }),

    date_created_at: customValidators.zodIsISO8601,

    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPasswordHash,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uupercase letters, lowercase letters, hyphens and single-quotes." }),

    last_name: z.string("The last_name field must be a string.").min(1, { message: "The last_name field is a required field." }).max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }),

    user_role: z.enum(["user", "admin"], { message: "The user_role field is a required field. It takes 1 of the following values: user, admin." }),

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,

    others_size_letter:  productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], { message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe." }),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema,

    total_item_total: customValidators.zodIsTotalItemTotal,

    total_discount_amount: customValidators.zodIsTotalDiscountAmount,

    total_discounted_total: customValidators.zodIsTotalDiscountedTotal,

    total_discount_percentage: customValidators.zodIsTotalDiscountPercentage,

    total_payable_amount: customValidators.zodIsTotalPayableAmount,

    __v: customValidators.zodIsDocumentVersion
})

const getUserByIdSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, { message: "The user_id must be 12 characters long." }).regex(customValidators.twelveCharacterRegex, { message: "The user_id can only contain lowercase letters and numbers." })
});

const searchUsersByNameSchema = z.object({
    first_name: z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }),

    last_name: z.string("The last_name field must be a string.").max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }).optional()
});

const registerUserResponseSchema = z.object({
    user_id: z.string("The user_id field must be a string. It is a required field.").length(12, { message: "The user_id must be 12 characters long." }).regex(customValidators.twelveCharacterRegex, { message: "The user_id can only contain lowercase letters and numbers." }),

    docType: z.literal("USER", { message: "The docType field is a required field. It takes the value: USER." }),

    date_created_at: customValidators.zodIsISO8601,

    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPasswordHash,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }),

    last_name: z.string("The last_name field must be a string.").min(1, { message: "The last_name field is a required field." }).max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." }),

    user_role: z.enum(["user", "admin"], { message: "The user_role field is a required field. It takes 1 of the following values: user, admin." }),

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    others_size_letter: productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], { message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe." }),

    sms_comms: z.boolean("The sms_comms field is a required field. It only accepts boolean values."),

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema,

    total_item_total: customValidators.zodIsTotalItemTotal,

    total_discount_amount: customValidators.zodIsTotalDiscountAmount,

    total_discounted_total: customValidators.zodIsTotalDiscountedTotal,

    total_discount_percentage: customValidators.zodIsTotalDiscountPercentage,

    total_payable_amount: customValidators.zodIsTotalPayableAmount,

    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion

});


const userResponseSchemaArray = z.array(userResponseSchema).min(1);

module.exports = {
    userRequestSchema,
    updateUserSchema,
    getUserByIdSchema,
    searchUsersByNameSchema,
    updateUserPasswordSchema,
    userResponseSchema,
    registerUserResponseSchema,
    userResponseSchemaArray
};

/* TESTS
testUserData = {
  "user_id": '4bade49c4a60',
  "docType": 'USER',
  "date_created_at": '2026-05-14T18:39:49',
  "email": 'els001@server.com',
  "password": '$argon2id$v=19$m=65536,t=3,p=4$ghl7cmGOJIReLv8V3+o3WQ$dTzfVf4RdBSuqHiuCF6/PjujtntZJYhgINrlxVnrOac',
  "phone_number": '918297161384',
  "first_name": 'ELSOne',
  "last_name": 'SLEOne',
  "user_role": 'user',
  "upper_size_number": 40,
  "upper_size_letter": 'L',
  "others_size_letter": 'L',
  "email_comms_type": 'One weekly recap',
  "sms_comms": true,
  "ShippingAddresses": [],
  "CartItems": [],
  "total_item_total": 0,
  "total_discount_amount": 0
}

testUserData2 = {
  "user_id": '4bade49c4a60',
  "docType": 'USER',
  "date_created_at": '2026-05-14T18:39:49',
  "email": 'els001@server.com',
  "password": '$argon2id$v=19$m=65536,t=3,p=4$ghl7cmGOJIReLv8V3+o3WQ$dTzfVf4RdBSuqHiuCF6/PjujtntZJYhgINrlxVnrOac',
  "phone_number": '918297161384',
  "first_name": 'ELSOne',
  "last_name": 'SLEOne',
  "user_role": 'user',
  "upper_size_number": 40,
  "upper_size_letter": 'L',
  "others_size_letter": 'L',
  "email_comms_type": 'One weekly recap',
  "sms_comms": true,
  "ShippingAddresses": [],
  "CartItems": [],
  "total_item_total": 0,
  "total_discount_amount": 0,
  "total_discounted_total": 0,
  "total_discount_percentage": 0,
  "total_payable_amount": 0,
  "_id": '6a0616f54b6344ba32b83953',
  "__v": 0
}

//console.log(testUserData);
console.log({
    zodIsISO8601: customValidators.zodIsISO8601,
    zodIsEmail: customValidators.zodIsEmail,
    zodIsPasswordHash: customValidators.zodIsPasswordHash,
    zodIsMobilePhone: customValidators.zodIsMobilePhone,

    zodIsUpperSizeNumber: productItemValidators.zodIsUpperSizeNumber,
    zodIsUpperSizeLetter: productItemValidators.zodIsUpperSizeLetter,
    zodIsOthersSizeLetter: productItemValidators.zodIsOthersSizeLetter,

    shippingAddressArrayZeroSchema,
    cartItemArrayZeroSchema,
    objectIdSchema
});


const result = registerUserResponseSchema.parse(testUserData);
//console.log(" User Request Schema Test Result ", result);
//console.log(" User Request Schema Test Result Errors ", result?.error?.issues); */





