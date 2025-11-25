const z = require('zod');

const schemaValidator = (schema, object) => {
    console.log("In schemaValidator");
    //console.log("##DEBUG - object ", object);
    const result = schema.parse(object);
    //console.log("schema validation result ", result);
    
    if (!result.success){
        console.log("schema validation errors - ", result?.error?.errors);
    }
    
    return result;
    
}



module.exports = schemaValidator;