const validateRequestAsync = async (schema, data) => {
    console.log("In validateRequest ");
    try {
       const parseResult =  await schema.parseAsync(data);
       console.log("parseResult ", parseResult);
    }

    catch (error) {
        console.log("Request validation error ", error);
    }
}

module.exports = validateRequestAsync;