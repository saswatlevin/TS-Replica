const { checkUserExists } = require('../Controllers/SupportFunctions/shippingAddressSupportFunctions');
const mongoose = require('mongoose');
const User = require('../Models/User');
const { ValidationError } = mongoose.Error;
const { ZodError } = require('zod');

const createShippingAddress = async(req, res, next) => {
    console.log("In createShippingAddress");

    // Test whether value matches expected value
    const shippingAddress = req?.body;
    
    // Test return value
    const userExists = await checkUserExists(req);

    const userID = req?.params?.userID;

    if(userExists === false) {
        res.status(400).json("Could not create shipping address as user could not be found.");
    }
    
    else {
        try {
            const result = await User.findOneAndUpdate({ user_id: userID }, { $push: { ShippingAddresses: shippingAddress } }, { new: true }); // return the updated document;
            res.status(201).json(result);
        }

        catch(error) {
            
            if (error instanceof ZodError || error instanceof ValidationError) {
                res.status(400).json(error);
            }
            
            else {
                console.log(error);
                res.status(500).json(error);
            }
           
        }
    }
    
};

module.exports = {
    createShippingAddress
};