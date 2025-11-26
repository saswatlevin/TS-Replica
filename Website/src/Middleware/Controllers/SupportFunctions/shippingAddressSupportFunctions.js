const User = require('../../Models/User');
const _ = require('lodash');
const argon2 = require('argon2');

const checkUserExists = async(req) => {
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

const checkDuplicateUserExists = async(req) => {
    console.log("In checkDuplicateUserExists");
    
    try {
        const email = req.body.email;

        const first_name = req.body.first_name;

        const last_name = req.body.last_name
    
        const user_query = {first_name: first_name, last_name: last_name, email: email};
    
        const result = await User.findOne(user_query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkDuplicateUserExists ", error);
        return error;
    }
}

const checkUserValueExists = async(req) => {
    console.log("In checkUserValueExists");

    try{

        const query = req.body;

        if(query['password'] !== undefined || query['password'] !== null) {
            query['password'] = await argon2.hash(query['password']);
        }

        const result = await User.findOne(query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch(error){
        console.log("Error in checkUserValueExists ", error);
        return error;
    }
}

const checkShippingAddressExists = async(req) => {
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

const checkDuplicateShippingAddressExists = async(req) => {
    console.log("In checkDuplicateShippingAddressExists");

    try {
        const phone_number = req.body.phone_number;

        const shipping_address_query = {'ShippingAddresses.phone_number': phone_number};

        const result = await User.findOne(shipping_address_query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch (error) {
        console.log("Error in checkDuplicateShippingAddressExists ", error);
        return error;   
    }
    
};


const checkIsEmptyObject = (object) => {
    console.log("In checkIsEmptyObject");
    
    
    try {
        const object_body = object.body;
        const result = _.isEmpty(object_body);
        return result;
    }

    catch(error) {
        console.log("Error in checkIsEmptyObject ", error);
    }
   
}

module.exports = {
    checkUserExists,
    checkDuplicateUserExists,
    checkUserValueExists,
    checkShippingAddressExists,
    checkDuplicateShippingAddressExists,
    checkIsEmptyObject
};