const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const dataSanitizer = require("./dataSanitizer");

const responseSanitizer = (req, res, next) => {
    console.log("In responseSanitizer");
    
     // Storing the original json method
    const originalJson = res.json;


    // Overriding the json method
    res.json = function (body) {
        // console.log("Original Response Body ", body);
        
        // If the response body is null, then replace it with an empty array
        // Done for getUserById, updateUser, updateUserPassword, etc.
        if (body === null) {
           console.log(" (RESPONSE SANITIZER) Successful request returned null, which is replaced with an empty array.");
           body = [];
           // Get the original response
           res.json = originalJson;
           // Return the response body
           return res.json(body);
        }


        // If a successful request returns no data
        // i.e., there's an empty response body []
        else if (body.length === 0) {
            console.log(" (RESPONSE SANITIZER) Successful request returned no data");

            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
        }

        // If there's an error
        // i.e., the response body contains an error object (We will detect this by detecting its message).
        else if (body.length !== 0 && body.message) {
            console.log("(RESPONSE SANITIZER) An error occurred due to the request data or in the API function.");
            
            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
            
        }

        // If a successful request has returned some data
        // i.e., there's some data in the response body
        else { 
            console.log("(RESPONSE SANITIZER) A successful request has returned some data from the database.");

            const sanitizationResult = dataSanitizer(body['result']);

            console.log("(RESPONSE SANITIZER) Response body successfully sanitized ", sanitizationResult);
            
            // Get the original response
            res.json = originalJson;
            // Return the response body
            return res.json(body);
             
        }
        
    }


    console.log("(RESPONSE SANITIZER) Before next() in responseSanitizer");
    next();

}

module.exports = responseSanitizer;



