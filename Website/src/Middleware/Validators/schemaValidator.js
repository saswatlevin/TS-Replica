const z = require('zod');

const schemaValidator = (schema, object) => {
    console.log("In schemaValidator");
    // console.log("object ", object);
    const schemaValidationResult = schema.parse(object);
    //console.log("schemaValidationResult ", schemaValidationResult);
    return schemaValidationResult;
    
}



module.exports = schemaValidator;