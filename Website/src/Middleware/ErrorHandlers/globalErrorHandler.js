const {ZodError} = require('zod');

const globalErrorHandler = (error, req, res, next) => {
    console.log("In globalErrorHandler");

    // The error status code will be set to a value or if there is none, to 500.
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if ((error instanceof ZodError) === false) {

        res.status(error?.statusCode).json({
            status: error?.status,
            statusCode: error?.statusCode,
            message: error?.message,
            name: error?.name,
            code: error?.code,
            type: error?.type,
            errno: error?.errno,
            errorsArray: error?.errorsArray,
            stack: error.stack
        });
    }

    else {
        console.log("Error Handler detects a ZodError");
        res.status(400).json(error);
    }
        

    /* console.log("Error: ", {
            status: error?.statusCode,
            message: error?.message,
            name: error?.name,
            code: error?.code,
            type: error?.type,
            errno: error?.errno,
            errorsArray: error?.errorsArray,
            stacktrace: error?.stack
        }); */
};

module.exports = globalErrorHandler;

