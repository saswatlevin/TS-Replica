const schemaValidator = require('./schemaValidator');
const {ZodError} = require('zod');

const requestValidator = (schema) => {
    return (req, res, next) => {
        try{
            console.log("In requestValidator");
            //console.log("Request body ", req.body);

            const requestBody = req.body;
            const validationResult = schemaValidator(schema, requestBody);

            req.body = validationResult;

            next();
        }
        
        catch(error) {

            if (error instanceof ZodError) {
                console.log("Schema validation error ", error);
                res.status(400).json({
                    message: "Schema validation failed.",
                    Error: error
                });
            }

            else {
                console.log("Internal Server Error ", error);
                res.status(500).json({
                    message: "Internal Server Error.",
                    Error: error});
            }
            
            
        }
    }
};

module.exports = requestValidator;