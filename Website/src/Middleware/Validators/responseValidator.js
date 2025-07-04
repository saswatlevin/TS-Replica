const { z, ZodError} = require('zod');
const responseSchemaValidator = require('./responseSchemaValidator');

const responseValidator = (req, res, next) => {
    console.log("In responseValidator");
    
     // Storing the original json method
    const originalJson = res.json;


    // Overriding the json method
    res.json = function (body) {
        console.log("Original Response Body ", body);
        
        // If the response body is null, then replace it with an empty array
        // Done for getUserById, updateUser, updateUserPassword, etc.
        if (body === null) {
            body = [];
        }


        // If a successful request returns no data
        // i.e., there's an empty response body []
        else if (body.length === 0) {
            console.log("Successful request returned no data");

            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
        }

        // If there's an error
        // i.e., the response body contains an error object (We will detect this by detecting its message).
        else if (body.length !== 0 && body.message) {
            console.log("An error occurred due to the request data or in the API function.");
            
            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
            
        }

        // If a successful request has returned some data
        // i.e., there's some data in the response body
        else { 
            console.log("A successful request has returned some data from the database.");
            const validationResult = responseSchemaValidator(req, body);

            if ( (validationResult !== undefined) && !(validationResult instanceof ZodError)) {
                console.log("Response body successfully validated.");

            }

            else if (validationResult instanceof ZodError) {
                console.log("Response body validation failed.");
                return next(validationResult);
            }

            else {
                console.log("Incorrect request route or method name specified.");
            }
            
            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
             
        }

        console.log("Before next() in responseValidator");
        next();
        
    }


    console.log("Before next() in responseValidator");
    next();

}

module.exports = responseValidator;



