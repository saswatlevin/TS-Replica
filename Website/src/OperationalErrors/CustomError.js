// Error class to define custom operational errors
class CustomError extends Error {
    constructor(message, statusCode) {
        // Passes the message to Error
        super(message);
        // Sets the statusCode for this instance of CustomError
        this.statusCode = statusCode;
        // Sets the status to Operational Error if statuCode >= 400 but < 500
        this.status = statusCode >= 400 && statusCode < 500 ? 'Operational Error' : 'Non-Operational Error';
        // Sets the isOperational property to true to indicate that this error is an Operational Error.
        this.isOperational = true;

        //  The Error class always creates a Stack Trace. We call the below function to preserve it.
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = CustomError;