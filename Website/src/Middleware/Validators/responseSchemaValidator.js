const schemaValidator = require('./schemaValidator');
const { registerUserResponseSchema, userResponseSchema, userResponseSchemaArray} = require('../Schemas/userSchemas');
const { updateShippingAddressResponseSchema, shippingAddressResponseSchema, shippingAddressArrayZeroSchema } = require('../Schemas/shippingAddressSchemas');
const { createProductResponseSchema, productResponseSchema, searchProductsArrayResponseSchema } = require('../Schemas/productSchemas');
const { cartItemResponseSchema } = require('../Schemas/cartItemSchemas');


// Validates the responses of different APIs based on their respective schemas.
const responseSchemaValidator = (request, object) => {

    console.log("In responseSchemaValidator");
    console.log("request.originaUrl ", request.originalUrl);

    if (request.originalUrl === "/users/registeruser" && request.method === "POST") {
        return schemaValidator(registerUserResponseSchema, object['result']);
    }

    else if ((request.originalUrl.includes("/users/updateuser") === true || request.originalUrl.includes("/users/updateuserpassword") === true) && request.method === "PATCH") {
        return schemaValidator(userResponseSchema, object);
    }

    else if (request.originalUrl === "/users/getuserbyid" && request.method === "GET") {
        return schemaValidator(userResponseSchema, object);
    }

    else if (request.originalUrl === "/users/getusersbyname" && request.method === "GET") {
        return schemaValidator(userResponseSchemaArray, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/createshippingaddress") === true) && request.method === "POST") {
        return schemaValidator(userResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/updateshippingaddress") === true && request.method === "PATCH") || (request.originalUrl.includes("/shippingaddresses/deleteshippingaddress") === true && request.method === "DELETE")) {
        return schemaValidator(updateShippingAddressResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/getshippingaddressbyid") === true) && request.method === "GET") {
        return schemaValidator(shippingAddressResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/shippingaddresses/searchshippingaddress") === true) && request.method === "GET") {
        return schemaValidator(shippingAddressArrayZeroSchema, object);
    }

    else if ((request.originalUrl.includes("/products/createproduct") === true && request.method === "POST")) {
        return schemaValidator(createProductResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/products/updateproductgarmentweight") === true && request.method === "PATCH") || (request.originalUrl.includes("/products/updateproduct") === true && request.method === "PATCH")) {
        //console.log("##DEBUG - In productResponseSchemaValidator option");
        return schemaValidator(productResponseSchema, object);
    }

    else if ((request.originalUrl.includes("/products/searchproducts") === true && request.method === "GET")) {
        return schemaValidator(searchProductsArrayResponseSchema, object);
    }

    else if (request.originalUrl.includes("/cartitems/createcartitem") === true && request.method === "POST") {
        return schemaValidator(userResponseSchema, object);
    }

     else if (request.originalUrl.includes("/cartitems/updatecartitemquantity") === true && request.method === "PATCH") {
        return schemaValidator(userResponseSchema, object);
    }

    else {
        return undefined;
    }



};

module.exports = responseSchemaValidator;