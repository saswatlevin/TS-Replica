const schemaValidator = require('./schemaValidator');
const {ZodError} = require('zod');

const requestValidator = (schema) => {
    return (req, res, next) => {
        try{
            console.log("In requestValidator");

            const requestBody = req.body;
            const validationResult = schemaValidator(schema, requestBody);

            req.body = validationResult;

            console.log("Request body after schema validation ", req.body);

            next();
        }
        
        catch(error) {

            if (error instanceof ZodError) {
                console.log("Schema validation error ", error);
                res.status(400).json({
                    message: "Schema validation failed.",
                    Error: error
                });

                next();
            }

            else {
                console.log("Internal Server Error ", error);
                res.status(500).json({
                    message: "Internal Server Error.",
                    Error: error});
                
                next();
            }
            
            
        }
    }
};

module.exports = requestValidator;