const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');

const urlNotFoundController = (req, res, next) => {
    console.log("In urlNotFoundController");
    // Create the custom error
    const error = new ResourceNotFoundError(`The given resource at ${req.originalUrl} could not be found`);
    // Pass it to next, so that it is passed on to the global error handler.
    next(error);
};

module.exports = urlNotFoundController;