const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkUserExists } = require('../Controllers/SupportFunctions/shippingAddressSupportFunctions');
const mongoose = require('mongoose');
const User = require('../Models/User');
const { ValidationError } = mongoose.Error;
const { ZodError } = require('zod');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');

const createShippingAddress =  async(req, res, next) => {
    console.log("In createShippingAddress");

    // Test whether value matches expected value
    const shipping_address = req?.body;
    
    // Test return value
    const user_exists = await checkUserExists(req);

    console.log("user_exists ", user_exists);

    const user_id = req?.params?.user_id;

    //console.log("user_id ", user_id);

    //console.log("shipping_address ", shipping_address);

    if(user_exists === false) {
        const error = new ResourceNotFoundError(`Could not create the shipping address since the user with user_id ${user_id} does not exist.`);
        throw error;
    }
    
    else {
        const result = await User.findOneAndUpdate({ user_id: user_id }, { $push: { ShippingAddresses: shipping_address } }, { new: true }); // return the updated document;
        console.log("Shipping address created successfully, result ", result);
        res.status(201).json(result);
    }
    
};

module.exports = {
    createShippingAddress
};