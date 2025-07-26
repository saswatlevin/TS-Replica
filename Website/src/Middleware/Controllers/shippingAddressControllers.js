const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkUserExists, checkShippingAddressExists } = require('../Controllers/SupportFunctions/shippingAddressSupportFunctions');
const mongoose = require('mongoose');
const User = require('../Models/User');
const { ValidationError } = mongoose.Error;
const { ZodError } = require('zod');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const { keyBy } = require('lodash');

const createShippingAddress = asyncErrorHandler(async(req, res, next) => {
    console.log("In createShippingAddress");

    // Test whether value matches expected value
    const shipping_address = req?.body;
    
    // Test return value
    const user_exists = await checkUserExists(req);

    console.log("user_exists ", user_exists);

    const user_id = req.params.user_id;

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
    
});

const updateShippingAddress = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateShippingAddress");

    const user_id = req.params.user_id;

    const shipping_address_id = req.params.shipping_address_id;

    if (checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not update the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }
    
    if (checkShippingAddressExists(req) === false) {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not update the shipping address with ${shipping_address_id} since it does not exist.`);
        throw shipping_address_not_found_error;
    }

    // The user_id of the User document where the shipping address is to be updated.
    // The shipping_address_id of the shipping_address to be updated.
    const shipping_address_selector = {user_id: user_id, "ShippingAddresses.shipping_address_id": shipping_address_id};

    const request_body = req.body;

        // Building the shipping address update request body.
    const updated_shipping_address = Object.fromEntries(
        Object.entries(request_body).map(([key, value]) => [`ShippingAddresses.$.${key}`, value])
    );

    console.log("shipping_address_selector ", shipping_address_selector);

    console.log("updated_shipping_address ", updated_shipping_address);

    const result = await User.updateOne(
                shipping_address_selector, 
            
                {
                    $set: updated_shipping_address
                }
            );
    console.log("shipping address update result ", result);

    if (result["modifiedCount"] === 1 && result["matchedCount"] === 1) {
        res.status(200).json(result);
    }

    else {
        res.status(304).json(result);
    }


    

    // The positional operator, $, holds the matched position in the array.
    // The $set operator makes only the specified elements go to the server.
    // The $set operator replaces the value of a field with the specified value.
    
    /**
     * If the field does not exist, $set will add a new field with the specified value, provided that the new field does not violate a type constraint. If you specify a dotted path for a non-existent field, $set will create the embedded documents as needed to fulfill the dotted path to the field.
    
     * If you specify multiple field-value pairs, $set will update or create each field.
     **/
    
    // The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
    // The Object.fromEntries() static method transforms a list of key-value pairs into an object.
    
    // Here, what we are doing is: we are passing the request body to the Object.entries() function.
    // The object.entries() function converts the request body from {"key": "value"} / {"key": value} to [key, "value"] / [key, value].
    // It then maps each [key, "value"] / [key, value] pair to [ShippingAddresses.$.key, "value"] / [ShippingAddresses.$.key, "value"].
    // The Object.FromEntries() function then converts each [ShippingAddresses.$.key, "value"] / [ShippingAddresses.$.key, value] pair to key:"value" / key:value pair and then puts all of them in a single JS object.


    

});

const searchShippingAddress = asyncErrorHandler( async(req, res, next) => {
    console.log("In searchShippingAddress");

    
});

module.exports = {
    createShippingAddress,
    updateShippingAddress,
    searchShippingAddress
};