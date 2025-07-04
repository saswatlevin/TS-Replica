const userSchemas = require('../Schemas/userSchemas');
const schemaValidator = require('./schemaValidator');
const { registerUserResponseSchema, userResponseGenericSchema, userResponseGenericSchemaArray } = require('../Schemas/userSchemas');

const responseSchemaValidator = (request, object) => {
    
    console.log("In responseSchemaValidator");
    console.log("request.originaUrl ", request.originalUrl);

    if (request.originalUrl === "/users/registeruser" && request.method === "POST") {
        return schemaValidator(registerUserResponseSchema, object['result']);
    }

    else if ((request.originalUrl === "/users/updateuser" || request.originalUrl === "/users/updateuserpassword") && request.method === "PUT") {
        return schemaValidator(userResponseGenericSchema, object);
    }

    else if (request.originalUrl === "/users/getuserbyid" && request.method === "GET") {
        return schemaValidator(userResponseGenericSchema, object);
    }

    else if (request.originalUrl === "/users/getusersbyname" && request.method === "GET") {
        return schemaValidator(userResponseGenericSchemaArray, object);
    }

    else {
        return undefined;
    }
    
};

module.exports = responseSchemaValidator;