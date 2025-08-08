const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkUserExists, checkShippingAddressExists, checkIsEmptyObject } = require('../Controllers/SupportFunctions/shippingAddressSupportFunctions');
const mongoose = require('mongoose');
const User = require('../Models/User');
const { ValidationError } = mongoose.Error;
const { ZodError } = require('zod');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const createRandomString = require('../createRandomString');

const createShippingAddress = asyncErrorHandler(async(req, res, next) => {
    console.log("In createShippingAddress");

    const user_id = req.params.user_id;

    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create shipping address for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    // Test whether value matches expected value
    var shipping_address = req.body;
    
    // Test return value
    const user_exists = await checkUserExists(req);

    //console.log("user_exists ", user_exists);

    // Assign the shipping_address_id
    shipping_address['shipping_address_id'] = createRandomString(6);

    console.log("shipping_address ", shipping_address);

    if(user_exists === false) {
        const error = new ResourceNotFoundError(`Could not create the shipping address since the user with user_id ${user_id} does not exist.`);
        throw error;
    }
    
    else {
        // A live mongoose document contains many hiiden keys and fields. 
        // The .lean() functions strips these keys and fields completely.
        const result = await User.findOneAndUpdate({ user_id: user_id }, { $push: { ShippingAddresses: shipping_address } }, { new: true }).lean(); // return the updated document;
        console.log("Shipping address created successfully, result ", result);
        // Created
        res.status(201).json(result);
    }
    
});

const updateShippingAddress = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateShippingAddress");

    const user_id = req.params.user_id;

    const shipping_address_id = req.params.shipping_address_id;

    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update shipping address with shipping_address_id ${shipping_address_id} for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

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

    console.log("request_body in updateShippingAddress ", request_body);

    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update the shipping address with shipping_address_id ${shipping_address_id} of user with user_id ${user_id} due to empty request body.`);
        throw empty_request_body_error; 
    }

    // Building the shipping address update request body.
    const update_request = Object.fromEntries(
        Object.entries(request_body).map(([key, value]) => [`ShippingAddresses.$.${key}`, value])
    );

    console.log("shipping_address_selector ", shipping_address_selector);

    console.log("update_request ", update_request);

    // Returns some stats regardless of successful update or not.
    // A live mongoose document contains many hiiden keys and fields. 
    // The .lean() functions strips these keys and fields completely.
    const result = await User.updateOne(
                shipping_address_selector, 
            
                {
                    $set: update_request
                }
            ).lean();
    console.log("shipping address update result ", result);

    if (result["modifiedCount"] === 1 && result["matchedCount"] === 1) {
        // OK
        res.status(200).json(result);
    }

    else {
        // No Change
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

const getShippingAddressById = asyncErrorHandler( async(req, res, next) => {
    console.log("In getShippingAddressById");

    const user_id = req.params.user_id;

    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not get shipping address for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    if (checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not find the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    const shipping_address_id = req.body.shipping_address_id;

    // Aggregation pipeline to get the shipping_address sub-document
    /**
     * Here, the first $match operator matches the User document where we want to search addresses.
     * Here, the $unwind operator splits the ShippingAddresses array into individual sub-documents (array elements).
     * The 2nd $match operator then matches the sub-document with the given shipping_address_id.
     * The $project operator then extracts the given fields from the array elements.  
     */
    const shipping_address_aggregation_pipeline = [
        { $match : { user_id : user_id } },

        {$unwind : "$ShippingAddresses"},
        
        {$match : {"ShippingAddresses.shipping_address_id" : shipping_address_id}},
        {   
            $project : {_id : 1, 
            shipping_address_id : "$ShippingAddresses.shipping_address_id", 
            address_type_id : "$ShippingAddresses.address_type_id", 
            company_name: "$ShippingAddresses.company_name",
            address: "$ShippingAddresses.address",
            apartment: "$ShippingAddresses.apartment",
            city: "$ShippingAddresses.city",
            administrative_division: "$ShippingAddresses.city",
            country: "$ShippingAddresses.country",
            postal_area: "$ShippingAddresses.postal_area",
            phone_number: "$ShippingAddresses.phone_number"
        }
        }
    ];

    // Returns [] if resource not found
    const result = await User.aggregate(shipping_address_aggregation_pipeline);
    
    //console.log("Shipping Address returned from getShippingAddressById ", result);
    //console.log("result[0] ", result[0]);

    if (result.length === 1) {
        // Resource Found
        // Return the shipping address in the Shipping Addresses array.
        res.status(302).json(result[0]);
    }

    else {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not find the shipping address with ${shipping_address_id} since it does not exist.`);
        throw shipping_address_not_found_error;
    }

});

const searchShippingAddress = asyncErrorHandler(async(req, res, next) => {
    console.log("In searchShippingAddress");
    
    const user_id = req.params.user_id;

    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not find shipping address for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    if (checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not find the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    // Make a deep clone of the request body
    const request_body =  _.cloneDeep(req.body);

    console.log("request_body in search_shipping_address is ", request_body);

    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not find the shipping address of user with user_id ${user_id} due to empty request body.`);
        throw empty_request_body_error; 
    }

    // Building the shipping address search query
    const shipping_address_search_query = Object.fromEntries(
        Object.entries(request_body).map(([key, value]) => [`ShippingAddresses.${key}`, value])
    );


    console.log("shipping_address_search_query ", shipping_address_search_query);

    const shipping_address_aggregation_pipeline = [
        { $match : { user_id : user_id } },

        {$unwind : "$ShippingAddresses"},
        
        {$match : shipping_address_search_query},
        {   
            $project : {_id : 1, 
            shipping_address_id : "$ShippingAddresses.shipping_address_id", 
            address_type_id : "$ShippingAddresses.address_type_id", 
            company_name: "$ShippingAddresses.company_name",
            address: "$ShippingAddresses.address",
            apartment: "$ShippingAddresses.apartment",
            city: "$ShippingAddresses.city",
            administrative_division: "$ShippingAddresses.city",
            country: "$ShippingAddresses.country",
            postal_area: "$ShippingAddresses.postal_area",
            phone_number: "$ShippingAddresses.phone_number"
        }
        }
    ];

    // Returns [] if resource not found
    const result = await User.aggregate(shipping_address_aggregation_pipeline);
    
    //console.log("Shipping Address returned from getShippingAddressById ", result);
    //console.log("result[0] ", result[0]);

    if (result.length > 0) {
        // Resources Found
        // Return the shipping addresses in the Shipping Addresses array.
        res.status(302).json(result);
    }

    else {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not find the shipping addresse(s) with ${request_body} since they do not exist.`);
        throw shipping_address_not_found_error;
    }

});

const deleteShippingAddressById = asyncErrorHandler(async (req, res, next) => {
    console.log("In deleteShippingAddress");

    const user_id = req.params.user_id;

    const request_body = req.body;

    const user_exists = await checkUserExists(req);

    console.log("user_exists ", user_exists);

    if (user_exists === false) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not find the shipping address to be deleted, of user with user_id ${user_id} due to empty request body.`);
        throw empty_request_body_error; 
    }

    else if (user_exists !== true) {
            throw user_exists;
            
    }

    else {
        ;
    }
    

    //const shipping_address_id = request_body.shipping_address_id;

    /*if(checkShippingAddressExists(request_body) === false) {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not delete the shipping address with ${shipping_address_id} since it does not exist.`);
        throw shipping_address_not_found_error;
    }*/

    const deletion_result = await User.updateOne({user_id: user_id}, {$pull: {"ShippingAddresses": request_body}});

    res.status(200).json(deletion_result);

});

module.exports = {
    createShippingAddress,
    updateShippingAddress,
    getShippingAddressById,
    searchShippingAddress,
    deleteShippingAddressById
};