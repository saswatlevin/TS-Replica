const z = require('zod');
const shippingAddressValidators = require('../Validators/CustomValidators/shippingAddressValidators');
const customFormatValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');

const shippingAddressRequestSchema = z.object({
    shipping_address_id: shippingAddressValidators.zodIsShippingAddressId,
    
    address_type_id: shippingAddressValidators.zodIsAddressTypeId,
    
    company_name: shippingAddressValidators.zodIsCompanyName,
    
    address: shippingAddressValidators.zodIsAddress,
    
    apartment: shippingAddressValidators.zodIsApartment,
    
    city: shippingAddressValidators.zodIsCity,
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision,
    
    country: shippingAddressValidators.zodIsCountry,

    postal_area: shippingAddressValidators.zodIsPostalCode,
    
    phone_number: shippingAddressValidators.zodIsMobilePhone
    
});

const createShippingAddressRequestSchema = z.object({
    shipping_address_id: shippingAddressValidators.zodIsShippingAddressId,
    
    address_type_id: shippingAddressValidators.zodIsAddressTypeId,
    
    company_name: shippingAddressValidators.zodIsCompanyName,
    
    address: shippingAddressValidators.zodIsAddress,
    
    apartment: shippingAddressValidators.zodIsApartment,
    
    city: shippingAddressValidators.zodIsCity,
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision,
    
    country: shippingAddressValidators.zodIsCountry,

    postal_area: shippingAddressValidators.zodIsPostalCode,
    
    phone_number: shippingAddressValidators.zodIsMobilePhone,

    _id: objectIdSchema
    
});

const shippingAddressStandardSchema = z.object({
    _id: objectIdSchema,

    shipping_address_id: shippingAddressValidators.zodIsShippingAddressId,
    
    address_type_id: shippingAddressValidators.zodIsAddressTypeId,
    
    company_name: shippingAddressValidators.zodIsCompanyName,
    
    address: shippingAddressValidators.zodIsAddress,
    
    apartment: shippingAddressValidators.zodIsApartment,
    
    city: shippingAddressValidators.zodIsCity,
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision,
    
    country: shippingAddressValidators.zodIsCountry,

    postal_area: shippingAddressValidators.zodIsPostalCode,
    
    phone_number: shippingAddressValidators.zodIsMobilePhone
    
});

const orderShippingAddressSchema = z.object({
    address_type_id: shippingAddressValidators.zodIsAddressTypeId,
    
    company_name: shippingAddressValidators.zodIsCompanyName,
    
    address: shippingAddressValidators.zodIsAddress,
    
    apartment: shippingAddressValidators.zodIsApartment,
    
    city: shippingAddressValidators.zodIsCity,
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision,
    
    country: shippingAddressValidators.zodIsCountry,

    postal_area: shippingAddressValidators.zodIsPostalCode,
    
    phone_number: shippingAddressValidators.zodIsMobilePhone
    
});

// Contains shipping address objects with _id at the top only.
const shippingAddressArrayStandardSchema = z.array(shippingAddressStandardSchema);
// Contains shipping address objects with _id at the bottom only.
const createShippingAddressRequestArraySchema = z.array(createShippingAddressRequestSchema);

const updateShippingAddressRequestSchema = z.object({
    address_type_id: shippingAddressValidators.zodIsAddressTypeId.optional(),
    
    company_name: shippingAddressValidators.zodIsCompanyName.optional(),
    
    address: shippingAddressValidators.zodIsAddress.optional(),
    
    apartment: shippingAddressValidators.zodIsApartment.optional(),
    
    city: shippingAddressValidators.zodIsCity.optional(),
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision.optional(),
    
    country: shippingAddressValidators.zodIsCountry.optional(),

    postal_area: shippingAddressValidators.zodIsPostalCode.optional(),
    
    phone_number: shippingAddressValidators.zodIsMobilePhone.optional()
}); 

const updateShippingAddressResponseSchema = z.object({
    
    acknowledged: z.boolean("The acknowledged field must be a boolean value of true or false."),
        
    modifiedCount: z.number("The modifiedCount field must be a number (integer).").int("The modifiedCount field must be an integer.").min(0, {message: "The minimum value accepted by the modifiedCount field is 0."}).max(1, {message: "The maximum value accepted by the modifiedCount field is 1."}),

    upsertedId: z.null(),

    upsertedCount: z.number("The upsertedCount field must be a number (integer).").int("The upsertedCount field must be an integer.").min(0, {message: "The minimum value accepted by the upsertedCount field is 0."}).max(1, {message: "The maximum value accepted by the upsertedCount field is 1."}),

    matchedCount: z.number("The matchedCount field must be a number (integer).").int("The matchedCount field must be an integer.").min(0, {message: "The minimum value accepted by the matchedCount field is 0."}).max(1, {message: "The maximum value accepted by the matchedCount field is 1."})

})

module.exports = {
    shippingAddressRequestSchema,
    createShippingAddressRequestArraySchema,
    orderShippingAddressSchema,
    shippingAddressArrayStandardSchema,
    createShippingAddressRequestArraySchema,
    updateShippingAddressRequestSchema,
    updateShippingAddressResponseSchema
};

// TEST
/* const testData = {
	shipping_address_id: "aoplasqwegm1",
	address_type_id: "1",
	company_name: "None",
	address: "6-5-1 Nishi-Shinjuku, Shinjuku-ku",
	apartment: "Room 2503, Shinjuku I-Land Tower",
	city: "Tokyo",
	administrative_division: "Tokyo",
	country: "Japan",
	postal_area: "163-1390",
	phone_number: "81312345678"
}

const testDataArray = [        
        {
            shipping_address_id: "koplasqwegmk",
            address_type_id: "1",
            company_name: "",
            address: "800 Wilson Way",
            apartment: "Fosters Home For Imaginary Friends",
            city: "New York",
            administrative_division: "New York",
            country: "United States",
            postal_area: "10011",
            phone_number: "1-212-456-7890"
        },
        
        {	
            shipping_address_id: "1ko0muljhytd",
            address_type_id: "1",
            company_name: "",
            address: "1234 Ocean Drive",
            apartment: "",
            city: "Miami Beach",
            administrative_division: "Florida",
            country: "United States",
            postal_area: "33139",
            phone_number: "1-212-456-7890"
        }
    ];

console.log("testData ", testData);


try {
    const result = shippingAddressSchema.safeParse(testData);
    console.log("result ", result);
    console.log("result.error.issues ", result?.error?.issues);
}        

catch (error) {
    console.log("validation error ", error);
} */

// const testDataJSON = JSON.stringify(testData);
// const result = shippingAddressRequestSchema.safeParse(testData);
// const result2 = shippingAddressRequestSchema.safeParse(testDataJSON);
// console.log("result ", result);
// console.log("result2 ", result2?.error?.issues);
// console.log("result.error.issues: ", result?.error?.issues);