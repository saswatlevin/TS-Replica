const asyncErrorHandler = require('../../ErrorHandlers/asyncErrorHandler');
const User = require('../../Models/User');
const _ = require('lodash');

const checkUserExists = asyncErrorHandler( async(req, res, next) => {
    console.log("In checkUserExists");
    
    // So that we don't have an undefined user_id
    const user_id = req.params.user_id;

    const user_query = {user_id: user_id};

    // Check if findOne is called with the correct input and return value is as expected.
    const result = await User.findOne(user_query);

    if (result === null) {
        return false;
    }

    else {
        return true;
    }
});

const checkShippingAddressExists = asyncErrorHandler(async(req, res, next) => {
    // So that we don't have an undefined shipping_address_id
    const shipping_address_id = req.params.shipping_address_id;

    const shipping_address_query = {"ShippingAddresses.shipping_address_id": shipping_address_id};

    const result = User.findOne(shipping_address_query);

    if (result === null) {
        return false;
    }

    else {
        return true;
    }

});

const checkIsEmptyObject = (object) => {
    console.log("In checkIsEmptyObject");
    const result = _.isEmpty(object);
    return result;
}

module.exports = {
    checkUserExists,
    checkShippingAddressExists,
    checkIsEmptyObject
};

