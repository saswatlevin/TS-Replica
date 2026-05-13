const CustomError = require('./CustomError');
class ResourceNotFoundError extends CustomError {
        constructor(message) {
        // Passes the message to CustomError
        super(message);
        // Sets the name of the error
        this.name = 'ResourceNotFoundError';
        // Sets the statusCode for this instance of ResourceNotFoundError
        this.statusCode = 404;
        // Sets the status to Operational Error
        this.status = 'Operational Error';
        // Sets the isOperational property to true to indicate that this error is an Operational Error.
        this.isOperational = true;

        // The Error class always creates a Stack Trace. We call the below function to preserve it.
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = ResourceNotFoundError;