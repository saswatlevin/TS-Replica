const z = require('zod');
const objectIdSchema = require('./objectIdSchema');
const { shippingAddressArrayZeroSchema } = require('./shippingAddressSchemas');
const { cartItemArrayZeroSchema } = require('./cartItemSchemas');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');
const userValidators = require('../Validators/CustomValidators/userValidators');
const mongoose = require('mongoose');

const userRequestSchema = z.object({
    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPassword,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: userValidators.zodIsFirstName,

    last_name: userValidators.zodIsLastName,

    user_role: userValidators.zodIsUserRole,

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,

    others_size_letter: productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: userValidators.zodIsEmailCommsType,

    sms_comms: userValidators.zodIsSmsComms,

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema

}).strict();

const updateUserSchema = z.object({

    email: customValidators.zodIsEmail.optional(),

    phone_number: customValidators.zodIsMobilePhone.optional(),

    first_name: userValidators.zodIsFirstName.optional(),

    last_name: userValidators.zodIsLastName.optional(),

    user_role: userValidators.zodIsUserRole.optional(),

    upper_size_number: productItemValidators.zodIsUpperSizeNumber.optional(),

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter.optional(),

    others_size_letter: productItemValidators.zodIsOthersSizeLetter.optional(),

    email_comms_type: userValidators.zodIsEmailCommsType.optional(),

    sms_comms: userValidators.zodIsSmsComms.optional()

}).strict();

const updateUserPasswordSchema = z.object({
    password: customValidators.zodIsPassword
}).strict();

const userResponseSchema = z.object({
    _id: objectIdSchema,

    user_id: userValidators.zodIsUserId,

    docType: userValidators.zodIsUserDocType,

    date_created_at: customValidators.zodIsISO8601,

    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPasswordHash,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: userValidators.zodIsFirstName,

    last_name: userValidators.zodIsLastName,

    user_role: userValidators.zodIsUserRole,

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,

    others_size_letter: productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: userValidators.zodIsEmailCommsType,

    sms_comms: userValidators.zodIsSmsComms,

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema,

    total_item_total: customValidators.zodIsTotalItemTotal,

    total_discount_amount: customValidators.zodIsTotalDiscountAmount,

    total_discounted_total: customValidators.zodIsTotalDiscountedTotal,

    total_discount_percentage: customValidators.zodIsTotalDiscountPercentage,

    total_payable_amount: customValidators.zodIsTotalPayableAmount,

    __v: customValidators.zodIsDocumentVersion
}).strict();

const getUserByIdSchema = z.object({
    user_id: userValidators.zodIsUserId
}).strict();

const searchUsersByNameSchema = z.object({
    first_name: userValidators.zodIsFirstName,
    last_name: userValidators.zodIsLastName.optional()
}).strict();

const registerUserResponseSchema = z.object({
    user_id: userValidators.zodIsUserId,

    docType: userValidators.zodIsUserDocType,

    date_created_at: customValidators.zodIsISO8601,

    email: customValidators.zodIsEmail,

    password: customValidators.zodIsPasswordHash,

    phone_number: customValidators.zodIsMobilePhone,

    first_name: userValidators.zodIsFirstName,

    last_name: userValidators.zodIsLastName,

    user_role: userValidators.zodIsUserRole,

    upper_size_number: productItemValidators.zodIsUpperSizeNumber,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,

    others_size_letter: productItemValidators.zodIsOthersSizeLetter,

    email_comms_type: userValidators.zodIsEmailCommsType,

    sms_comms: userValidators.zodIsSmsComms,

    ShippingAddresses: shippingAddressArrayZeroSchema,

    CartItems: cartItemArrayZeroSchema,

    total_item_total: customValidators.zodIsTotalItemTotal,

    total_discount_amount: customValidators.zodIsTotalDiscountAmount,

    total_discounted_total: customValidators.zodIsTotalDiscountedTotal,

    total_discount_percentage: customValidators.zodIsTotalDiscountPercentage,

    total_payable_amount: customValidators.zodIsTotalPayableAmount,

    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion

}).strict();

const loginRequestSchema = z.object({
    user_id: userValidators.zodIsUserId,
    password: customValidators.zodIsPassword
}).strict();

const messageResponseSchema = z.object({
    responseMessage: customValidators.zodIsMessage
}).strict();

const userResponseSchemaArray = z.array(userResponseSchema).min(0);

module.exports = {
    userRequestSchema,
    updateUserSchema,
    getUserByIdSchema,
    searchUsersByNameSchema,
    updateUserPasswordSchema,
    userResponseSchema,
    registerUserResponseSchema,
    userResponseSchemaArray,
    loginRequestSchema,
    messageResponseSchema
};

//TESTS
//console.log("USER_ID ", userValidators.zodIsUserId);
//console.log("DOCTYPE ", userValidators.zodIsUserDocType);
//console.log("DATE_CREATED_AT ", customValidators.zodIsISO8601);
//console.log("EMAIL ", customValidators.zodIsEmail);
//console.log("PASSWORD ", customValidators.zodIsPasswordHash);
//console.log("PHONE_NUMBER ", customValidators.zodIsMobilePhone);
//console.log("FIRST_NAME ", userValidators.zodIsFirstName);
//console.log("LAST_NAME ", userValidators.zodIsLastName);
//console.log("USER_ROLE ", userValidators.zodIsUserRole);
//console.log("UPPER_SIZE_NUMBER ", productItemValidators.zodIsUpperSizeNumber);
//console.log("UPPER_SIZE_LETTER ", productItemValidators.zodIsUpperSizeLetter);
//console.log("OTHERS_SIZE_LETTER ", productItemValidators.zodIsOthersSizeLetter);
//console.log("EMAIL_COMMS_TYPE ", userValidators.zodIsEmailCommsType);
//console.log("SMS_COMMS ", userValidators.zodIsSmsComms);
//console.log("SHIPPING_ADDRESSES ", shippingAddressArrayZeroSchema);
//console.log("CART_ITEMS ", cartItemArrayZeroSchema);
//console.log("TOTAL_ITEM_TOTAL ", customValidators.zodIsTotalItemTotal);
//console.log("TOTAL_DISCOUNTED_TOTAL ", customValidators.zodIsTotalDiscountedTotal);
//console.log("TOTAL_DISCOUNT_AMOUNT ", customValidators.zodIsTotalDiscountAmount);
//console.log("TOTAL_DISCOUNT_PERCENTAGE ", customValidators.zodIsTotalDiscountPercentage);
//console.log("TOTAL_PAYABLE_AMOUNT ", customValidators.zodIsTotalPayableAmount);
//console.log("DOCUMENT_ID ", objectIdSchema);
//console.log("DOCUMENT_VERSION ", customValidators.zodIsDocumentVersion);

//console.log(testUserData);
//const result = userResponseSchema.parse(testUserData);
//console.log(" User Request Schema Test Result ", result);
//console.log(" User Request Schema Test Result Errors ", result?.error?.issues);