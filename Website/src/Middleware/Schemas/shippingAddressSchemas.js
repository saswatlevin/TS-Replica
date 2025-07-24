const z = require('zod');
const shippingAddressValidators = require('../Validators/CustomValidators/shippingAddressValidators');
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

const shippingAddressCreationSchema = z.object({
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
const shippingAddressArrayCreationSchema = z.array(shippingAddressCreationSchema);

module.exports = {
    shippingAddressRequestSchema,
    shippingAddressCreationSchema,
    orderShippingAddressSchema,
    shippingAddressArrayStandardSchema,
    shippingAddressArrayCreationSchema
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