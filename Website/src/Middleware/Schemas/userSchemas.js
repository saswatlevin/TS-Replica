const z = require('zod');
const objectIdSchema = require('./objectIdSchema');
const { shippingAddressSchema, shippingAddressArraySchema} = require('./shippingAddressSchemas'); 
const { cartItemSchema, cartItemArraySchema } = require('./cartItemSchemas');
const customValidators = require('../CustomValidators/customValidators');
const { testUserData, testUserDataFull } = require('./testUserObjects');

const userRequestSchema = z.object({
    user_id: customValidators.zodIsTwelveCharacterId,
    
    docType: z.literal("USER"),
    
    date_created_at: customValidators.zodIsISO8601,
    
    email: customValidators.zodIsEmail,
    
    password: customValidators.zodIsPasswordHash,
    
    phoneno: customValidators.zodIsMobilePhone,
    
    first_name: customValidators.zodIsName,
    
    last_name: customValidators.zodIsName,

    user_role: z.enum(["user", "admin"]),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    upper_size_letter: customValidators.upperSizeLetterEnum,
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    others_size_letter: z.enum(["XXL", "XL", "L", "M", "S", "XS"], {message: "The others_size_letter must be one of XXL, XL, L, M, S or XS "}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock emails only", "Never / Unsubscribe"]),
    
    sms_comms: z.boolean(),

    ShippingAddresses: shippingAddressArraySchema,

    CartItems: cartItemArraySchema

});


const userResponseSchema = z.object({
    _id: objectIdSchema,

    user_id: customValidators.zodIsTwelveCharacterId,
    
    docType: z.literal("USER"),
    
    date_created_at: customValidators.zodIsISO8601,
    
    email: customValidators.zodIsEmail,
    
    password: customValidators.zodIsPasswordHash,
    
    phoneno: customValidators.zodIsMobilePhone,
    
    first_name: customValidators.zodIsName,
    
    last_name: customValidators.zodIsName,

    user_role: z.enum(["user", "admin"]),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    upper_size_letter: customValidators.upperSizeLetterEnum,
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    others_size_letter: z.enum(["XXL", "XL", "L", "M", "S", "XS"], {message: "The others_size_letter must be one of XXL, XL, L, M, S or XS "}),
    
    email_comms_type: z.enum(["I want all emails", "One weekly recap", "Stock emails only", "Never / Unsubscribe"]),
    
    sms_comms: z.boolean(),

    ShippingAddresses: shippingAddressArraySchema,

    CartItems: cartItemArraySchema

});

module.exports = {
    userRequestSchema,
    userResponseSchema
}

// TESTS
try {
    // console.log(testUserData);
    const result = userRequestSchema.safeParse(testUserDataFull);
    console.log(" User Request Schema Test Result ", result);
    console.log(" User Request Schema Test Result Errors ", result?.error);
}

catch(error) {
    console.log(" User Request Schema Test Error ", error);
}
