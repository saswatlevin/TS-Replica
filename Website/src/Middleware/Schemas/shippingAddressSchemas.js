const z = require('zod');
const shippingAddressValidators = require('../Validators/CustomValidators/shippingAddressValidators');
const customFormatValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');

const shippingAddressRequestSchema = z.object({
    address_type_id: shippingAddressValidators.zodIsAddressTypeId,
    
    company_name: shippingAddressValidators.zodIsCompanyName,
    
    address: shippingAddressValidators.zodIsAddress,
    
    apartment: shippingAddressValidators.zodIsApartment,
    
    city: shippingAddressValidators.zodIsCity,
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision,
    
    country: shippingAddressValidators.zodIsCountry,

    postal_area: shippingAddressValidators.zodIsPostalCode,
    
    phone_number: shippingAddressValidators.zodIsMobilePhone
}).strict();

const shippingAddressResponseSchema = z.object({    
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
}).strict();

const shippingAddressArrayZeroSchema = z.array(shippingAddressResponseSchema).min(0);

const shippingAddressArrayNonzeroSchema = z.array(shippingAddressResponseSchema).min(1);

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
}).strict();

const updateShippingAddressSuccessResponseSchema = z.object({
    
    acknowledged: shippingAddressValidators.zodIsAcknowledged,
        
    modifiedCount:  shippingAddressValidators.zodIsModifiedCount,

    upsertedId:  shippingAddressValidators.zodIsUpsertedId,

    upsertedCount:  shippingAddressValidators.zodIsUpsertedCount,

    matchedCount: shippingAddressValidators.zodIsMatchedCount
}).strict();

const updateShippingAddressFailureResponseSchema = z.object({
    acknowledged: z.literal(false)
}).strict();

const updateShippingAddressResponseSchema = z.union([updateShippingAddressSuccessResponseSchema, updateShippingAddressFailureResponseSchema]);

const getShippingAddressByIdRequestSchema = z.object({
    shipping_address_id: shippingAddressValidators.zodIsShippingAddressId
}).strict();

const searchShippingAddressRequestSchema = z.object({
    shipping_address_id: shippingAddressValidators.zodIsShippingAddressId.optional(),

    address_type_id: shippingAddressValidators.zodIsAddressTypeId.optional(),
    
    company_name: shippingAddressValidators.zodIsCompanyName.optional(),
    
    address: shippingAddressValidators.zodIsAddress.optional(),
    
    apartment: shippingAddressValidators.zodIsApartment.optional(),
    
    city: shippingAddressValidators.zodIsCity.optional(),
    
    administrative_division: shippingAddressValidators.zodIsAdministrativeDivision.optional(),
    
    country: shippingAddressValidators.zodIsCountry.optional(),

    postal_area: shippingAddressValidators.zodIsPostalCode.optional(),
    
    phone_number: shippingAddressValidators.zodIsMobilePhone.optional()
}).strict(); 

module.exports = {
    shippingAddressRequestSchema,
    shippingAddressResponseSchema,
    shippingAddressArrayZeroSchema,
    shippingAddressArrayNonzeroSchema,
    updateShippingAddressResponseSchema,
    getShippingAddressByIdRequestSchema,
    searchShippingAddressRequestSchema
};

