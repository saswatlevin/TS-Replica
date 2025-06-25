const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');

const shippingAddressSchema = z.object({
    shipping_address_id: z.string("The shipping_address_id field must be a string. It is a required field.").length(12, {message: "The shipping_address_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The shipping_address_id can only contain lowercase letters and numbers."}),
    
    address_type_id: customValidators.zodIsAddressTypeId,
    
    company_name: customValidators.zodIsCompanyName,
    
    address: customValidators.zodIsAddress,
    
    apartment: customValidators.zodIsApartment,
    
    city: customValidators.zodIsCity,
    
    administrative_division: customValidators.zodIsAdministrativeDivision,
    
    country: z.enum(["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "Singapore", "Hong Kong", "Japan"], {message: "The country field is a required field. It takes one of the following values: United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Singapore, Hong Kong, Japan."}),

    postal_area: customValidators.zodIsPostalCode,
    
    phone_number: customValidators.zodIsMobilePhone
    
});

const orderShippingAddressSchema = z.object({
    address_type_id: customValidators.zodIsAddressTypeId,
    
    company_name: customValidators.zodIsCompanyName,
    
    address: customValidators.zodIsAddress,
    
    apartment: customValidators.zodIsApartment,
    
    city: customValidators.zodIsCity,
    
    administrative_division: customValidators.zodIsAdministrativeDivision,
    
    country: z.enum(["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "Singapore", "Hong Kong", "Japan"], {message: "The country field is a required field. It takes one of the following values: United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Singapore, Hong Kong, Japan."}),

    postal_area: customValidators.zodIsPostalCode,
    
    phone_number: customValidators.zodIsMobilePhone
    
});

const shippingAddressArraySchema = z.array(shippingAddressSchema);

module.exports = {
    shippingAddressSchema,
    orderShippingAddressSchema,
    shippingAddressArraySchema
};

// TEST
/* const testData = {
	shipping_address_id: "koplasqwegmk",
	address_type_id: "1",
	company_name: "None",
	address: "6-5-1 Nishi-Shinjuku, Shinjuku-ku",
	apartment: "Room 2503, Shinjuku I-Land Tower",
	city: "Tokyo",
	administrative_division: "Tokyo",
	country: "United States",
	postal_area: "3168",
	phone_number: "+917349700297"
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
            phone_number: "+1-212-456-7890"
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
            phone_number: "+1-212-456-7890"
        }
    ];

// console.log("testData ", testData);    */    


/* try {
    const result = shippingAddressArraySchema.safeParse(testDataArray);
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