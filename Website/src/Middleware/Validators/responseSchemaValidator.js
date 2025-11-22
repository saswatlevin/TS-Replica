const schemaValidator = require('./schemaValidator');
const { registerUserResponseSchema, userResponseGenericSchema, userResponseGenericSchemaArray, userShippingAddressResponseSchema } = require('../Schemas/userSchemas');
const { updateShippingAddressResponseSchema, shippingAddressStandardSchema, shippingAddressArrayStandardSchema } = require('../Schemas/shippingAddressSchemas');
const { productResponseSchema, updateProductResponseSchema, searchProductsArrayResponseSchema } = require('../Schemas/productSchemas');
const { cartItemResponseSchema } = require('../Schemas/cartItemSchemas');


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
        return schemaValidator(userShippingAddressResponseSchema, object);
    }

    else if ( (request.originalUrl.includes("/shippingaddresses/updateshippingaddress") === true && request.method === "PATCH") || (request.originalUrl.includes("/shippingaddresses/deleteshippingaddress") === true && request.method === "DELETE"))   {
        return schemaValidator(updateShippingAddressResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/getshippingaddressbyid") === true) && request.method === "GET") {
        return schemaValidator(shippingAddressStandardSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/searchshippingaddress") === true) && request.method === "GET") {
        return schemaValidator(shippingAddressArrayStandardSchema, object);
    }

    else if ((request.originalUrl.includes("/products/createproduct") === true && request.method === "POST")) {
        return schemaValidator(productResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/products/updateproductgarmentweight") === true && request.method === "PATCH") || (request.originalUrl.includes("/products/updateproduct") === true && request.method === "PATCH")) {
        console.log("##DEBUG - In updateProductResponseSchemaValidator option");
        return schemaValidator(updateProductResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/products/searchproducts") === true && request.method === "GET")) {
        return schemaValidator(searchProductsArrayResponseSchema, object);
    }

    else if (request.originalUrl.includes('/cartitems/createcartitem') === true && request.method === "POST") {
        return schemaValidator(cartItemResponseSchema, object);
    }

    else {
        return undefined;
    }

   
    
};

module.exports = responseSchemaValidator;