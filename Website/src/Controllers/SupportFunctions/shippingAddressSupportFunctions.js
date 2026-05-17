const User = require('../../Models/User');

const checkShippingAddressExists = async(req) => {
    console.log("In checkShippingAddressExists");

    try {
        
        const shipping_address_id = req.body.shipping_address_id;

        const shipping_address_query = {"ShippingAddresses.shipping_address_id": shipping_address_id};

        const result = await User.findOne(shipping_address_query).lean();

        if (result === null) {
            return false;
        }

        else {
            return true;
        }

    }

    catch (error) {
        console.log("Error in checkShippingAddressExists ", error);
        throw error;
    }
};

const checkDuplicateShippingAddressExists = async(req) => {
    console.log("In checkDuplicateShippingAddressExists");

    try {
        const phone_number = req.body.phone_number;

        const shipping_address_query = {'ShippingAddresses.phone_number': phone_number};

        const result = await User.findOne(shipping_address_query).lean();

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch (error) {
        console.log("Error in checkDuplicateShippingAddressExists ", error);
        throw error;   
    }
    
};

module.exports = {
    checkShippingAddressExists,
    checkDuplicateShippingAddressExists
};