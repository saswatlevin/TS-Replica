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
    throw error;
}

};

const checkDuplicateUserExists = async(req) => {
    console.log("In checkDuplicateUserExists");
    
    try {
        const email = req.body.email;

        const first_name = req.body.first_name;

        const last_name = req.body.last_name;

        const phone_number = req.body.phone_number;
    
        const user_query = {first_name: first_name, last_name: last_name, email: email, phone_number: phone_number};
    
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
        throw error;
    }
}

const checkDuplicateUserEmailExists = async(req) => {
    try {
        const email = req.body.email;
    
        const user_query = {email: email};
    
        const result = await User.findOne(user_query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkDuplicateUserEmailExists ", error);
        throw error;
    }
}

const checkDuplicateUserPhoneNumberExists = async(req) => {
    try {
        const phone_number = req.body.phone_number;
    
        const user_query = {phone_number: phone_number};
    
        const result = await User.findOne(user_query);

        if (result === null) {
            return false;
        }

        else {
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkDuplicateUserPhoneNumberExists ", error);
        throw error;
    }
}

const checkUserValueExists = async(req) => {
    console.log("In checkUserValueExists");

    try{

        const user_id = req.params.user_id;
        const query = {user_id: user_id, ...req.body};

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
        throw error;
    }
}

const checkUserPasswordValueExists = async(req) => {
    console.log("In checkUserPasswordExists");
    
    try {
        const user_id = req.params.user_id;

        const query = {user_id: user_id};

        const plaintext_password = req.body.password;

        const user = await User.findOne(query);

        const password_hash = user.password;

        console.log("plaintext_password ", plaintext_password);
        console.log("password_hash ", password_hash);

        const result = await argon2.verify(password_hash, plaintext_password);

        return result;
    }

    catch(error) {
        console.log("Error in checkUserPasswordExists ", error);
        throw error;
    }
    



}

const checkShippingAddressExists = async(req) => {
    console.log("In checkShippingAddressExists");

    try {
        
        const shipping_address_id = req.body.shipping_address_id;

        const shipping_address_query = {"ShippingAddresses.shipping_address_id": shipping_address_id};

        const result = User.findOne(shipping_address_query).lean();

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
        throw error;   
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
        throw error;
    }
   
}

module.exports = {
    checkUserExists,
    checkDuplicateUserEmailExists,
    checkDuplicateUserPhoneNumberExists,
    checkUserValueExists,
    checkUserPasswordValueExists,
    checkShippingAddressExists,
    checkDuplicateShippingAddressExists,
    checkIsEmptyObject
};