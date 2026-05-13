const dataSanitizer = require('../Sanitizers/dataSanitizer');
const schemaValidator = require('./schemaValidator');
const {ZodError} = require('zod');

// Validates and sanitizes the request body
const requestValidator = (schema) => {
    return (req, res, next) => {
        console.log("In requestValidator");
        //console.log("Request body ", req.body);

        const requestBody = req.body;
        const validationResult = schemaValidator(schema, requestBody);

        /*if(!validationResult.success) {
            console.log("validationResult?.error?.errors ", validationResult?.error?.errors);
        } */

        req.body = validationResult;

        next();
    }
};

module.exports = requestValidator;