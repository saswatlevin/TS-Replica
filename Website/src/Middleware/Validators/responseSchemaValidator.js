const userSchemas = require('../Schemas/userSchemas');
const schemaValidator = require('./schemaValidator');
const { registerUserResponseSchema, userResponseGenericSchema, userResponseGenericSchemaArray, createShippingAddressResponseSchema } = require('../Schemas/userSchemas');
const { shippingAddressResponseSchema, updateShippingAddressResponseSchema, shippingAddressStandardSchema } = require('../Schemas/shippingAddressSchemas');

// Validates the responses of different APIs based on their respective schemas.
const responseSchemaValidator = (request, object) => {
    
    console.log("In responseSchemaValidator");
    console.log("request.originaUrl ", request.originalUrl);

    if (request.originalUrl === "/users/registeruser" && request.method === "POST") {
        return schemaValidator(registerUserResponseSchema, object['result']);
    }

    else if ((request.originalUrl === "/users/updateuser" || request.originalUrl === "/users/updateuserpassword") && request.method === "PATCH") {
        return schemaValidator(userResponseGenericSchema, object);
    }

    else if (request.originalUrl === "/users/getuserbyid" && request.method === "GET") {
        return schemaValidator(userResponseGenericSchema, object);
    }

    else if (request.originalUrl === "/users/getusersbyname" && request.method === "GET") {
        return schemaValidator(userResponseGenericSchemaArray, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/createshippingaddress") === true) && request.method === "POST") {
        return schemaValidator(createShippingAddressResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/updateshippingaddress") === true) && request.method === "PATCH") {
        return schemaValidator(updateShippingAddressResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/getshippingaddressbyid") === true) && request.method === "GET") {
        return schemaValidator(shippingAddressStandardSchema, object);
    }

    else {
        return undefined;
    }

   
    
};

module.exports = responseSchemaValidator;