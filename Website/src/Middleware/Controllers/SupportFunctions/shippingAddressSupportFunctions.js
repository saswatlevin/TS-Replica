const asyncErrorHandler = require('../../ErrorHandlers/asyncErrorHandler');
const User = require('../../Models/User');
const _ = require('lodash');

const checkUserExists = async(req, res, next) => {
    console.log("In checkUserExists");
    
    try {

    
    // So that we don't have an undefined user_id
    const user_id = req.params.user_id;

    //console.log("user_id ", user_id);

    const user_query = {user_id: user_id};

    //console.log("user_query ", user_query);

    // Check if findOne is called with the correct input and return value is as expected.
    const result = await User.findOne(user_query);

    //console.log("result ", result);

    if (result === null) {
        return false;
    }

    else {
        return true;
    }
}

catch(error) {
    console.log("Error in checkUserExists ", error);
    return error;
}

};

const checkShippingAddressExists = async(req, res, next) => {
    console.log("In checkShippingAddressExists");

    try {
        
        // So that we don't have an undefined shipping_address_id
        const shipping_address_id = req.params.shipping_address_id || req.body.shipping_address_id || undefined;

        const shipping_address_query = {"ShippingAddresses.shipping_address_id": shipping_address_id};

        const result = User.findOne(shipping_address_query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    

    }

    catch (error) {
        console.log("Error in checkShippingAddressExists ", error);
        return error;
    }

    

};

const checkIsEmptyObject = (object) => {
    console.log("In checkIsEmptyObject");
    
    try {
        const result = _.isEmpty(object);
        return result;
    }

    catch(error) {
        console.log("Error in checkIsEmptyObject ", error);
    }
   
}

module.exports = {
    checkUserExists,
    checkShippingAddressExists,
    checkIsEmptyObject
};

