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

const createShippingAddress = asyncErrorHandler(async (req, res, next) => {
    console.log("In createShippingAddress");

    const user_id = req.params.user_id;

    console.log("Checking if the request body is empty or not");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create shipping address for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("Checking if the user exists or not");
    if (await checkUserExists(req) === false) {
        const error = new ResourceNotFoundError(`Could not create the shipping address since the user with user_id ${user_id} does not exist.`);
        throw error;
    }

    console.log("Checking if the shipping address already exists");
    if (await checkDuplicateShippingAddressExists(req) === true) {
        const duplicate_subdocument_error = new DuplicateSubDocumentError(`Could not create the shipping_address for the user with user_id ${user_id} since it already exists.`);

        throw duplicate_subdocument_error; 
    }

    // Deep clone the request body
    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    // Generate the shipping_address_id
    const shipping_address_id = createRandomString(6);
    console.log("shipping_address_id ", shipping_address_id);

    // Create the shipping address object
    const shipping_address = {
        shipping_address_id: shipping_address_id,
        ...request_body_deep_clone
    }
    
    console.log("shipping_address ", shipping_address);

    const filter = {user_id: user_id};
    console.log("filter ", filter);

    const shipping_address_object = { $push: { ShippingAddresses: shipping_address } };
    console.log("shipping_address_object ", shipping_address_object);

    // A live mongoose document contains many hiiden keys and fields. 
    // The .lean() functions strips these keys and fields completely.
    const result = await User.findOneAndUpdate(filter, shipping_address_object, { new: true }, {runValidators: true}).lean(); // return the updated document;
    console.log("result in createShippingAddress ", result);
    
    // Here, we use 201 since it means that the resource has been created.
    res.status(201).json(result);
    console.log("===END OF createShippingAddress===");
    

});

const updateShippingAddress = asyncErrorHandler(async (req, res, next) => {
    console.log("In updateShippingAddress");

    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    const shipping_address_id = req.body.shipping_address_id;
    console.log("shipping_address_id ", shipping_address_id);

    console.log("Checking if the request body is empty or not");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update shipping address with shipping_address_id ${shipping_address_id} for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("Checking if the user exists or not");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not update the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    console.log("Check whether the shipping address exists or not");
    if (await checkShippingAddressExists(req) === false) {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not update the shipping address with shipping_address_id ${shipping_address_id} since it does not exist.`);
        throw shipping_address_not_found_error;
    }

    // The user_id of the User document where the shipping address is to be updated.
    // The shipping_address_id of the shipping_address to be updated.
    const filter = { user_id: user_id, "ShippingAddresses.shipping_address_id": shipping_address_id };
    console.log("filter ", filter);

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    // Building the shipping address update request body.
    const update_object = Object.fromEntries(
        Object.entries(request_body_deep_clone).map(([key, value]) => [`ShippingAddresses.$.${key}`, value])
    );

    const final_update_object = pruneObject(update_object, ['shipping_address_id']);
    console.log("final_update_object ", final_update_object);

    const result = await User.findOneAndUpdate(filter, { $set: final_update_object }, {new: true}, {runValidators: true} ).lean();
    
    console.log("result in updateShippingAddress ", result);

    res.status(200).json(result);

    console.log("===END OF updateShippingAddress===");
});

const getShippingAddressById = asyncErrorHandler(async (req, res, next) => {
    console.log("In getShippingAddressById");

    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    console.log("Check if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not get shipping address for user with user_id ${user_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("Check if the user exists or not");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not find the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    const shipping_address_id = req.body.shipping_address_id;
    console.log("shipping_address_id ", shipping_address_id);

    const search_query = { user_id: user_id, "ShippingAddresses.shipping_address_id": shipping_address_id };

    const projection_object = { _id: 0, ShippingAddresses: 1 };

    const result = await User.findOne(search_query, projection_object).lean();
    console.log("result in getShippingAddressById ", result);
    
    res.status(200).json(result);

    console.log("===END OF getShippingAddressById===");

});

const searchShippingAddress = asyncErrorHandler(async (req, res, next) => {
    console.log("In searchShippingAddress");

    const user_id = req.params.user_id;

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not find the shipping address of user with user_id ${user_id} due to empty request body.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not find the shipping address since the user with user_id ${user_id} does not exist.`);
        throw user_id_not_found_error;
    }

    // Make a deep clone of the request body
    const request_body_deep_clone = _.cloneDeep(req.body);

    console.log("request_body in search_shipping_address is ", request_body_deep_clone);

    // Building the preliminary query
    const preliminary_query = Object.fromEntries(
        Object.entries(request_body_deep_clone).map(([key, value]) => [`ShippingAddresses.${key}`, value])
    );

    const shipping_address_search_query = {user_id: user_id, ...preliminary_query};

    const projection_object = { _id: 0, ShippingAddresses: 1 };

    console.log("shipping_address_search_query ", shipping_address_search_query);

    const result = User.find(shipping_address_search_query, projection_object).lean();

    res.status(200).json(result);

    console.log("===END OF searchShippingAddress===");

});

const deleteShippingAddressById = asyncErrorHandler(async (req, res, next) => {
    console.log("In deleteShippingAddress");

    const user_id = req.params.user_id;

    console.log("Checking if the request body is empty or not");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not delete the shipping address that belongs to the user with ${user_id} since the request body is empty.`);
        throw empty_request_body_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    console.log("Checking if the user exists or not");
    if (await checkUserExists(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not find the shipping address to be deleted, of user with user_id ${user_id} due as the user doesn't exist.`);
        throw resource_not_found_error;
    }

    const shipping_address_id = request_body_deep_clone.shipping_address_id;

    console.log("Checking if the shipping address to be deleted exists.");
    if(await checkShippingAddressExists(req) === false) {
        const shipping_address_not_found_error = new ResourceNotFoundError(`Could not delete the shipping address with ${shipping_address_id} since it does not exist.`);
        throw shipping_address_not_found_error;
    }

    const filter = {user_id: user_id, "ShippingAddresses.shipping_address_id": shipping_address_id};
    console.log("filter ", filter);

    const delete_query = {shipping_address_id: shipping_address_id};
    console.log("delete_query ", delete_query);

    const result = await User.findOneAndUpdate(filter, { $pull: { ShippingAddresses: delete_query } }, {new: true}, {runValidators: true}).lean();
    
    console.log("result in deleteShippingAddressById ", result);

    
    res.status(200).json(result);

    console.log("===END OF deleteShippingAddressById===");

});

module.exports = {
    createShippingAddress,
    updateShippingAddress,
    getShippingAddressById,
    searchShippingAddress,
    deleteShippingAddressById
};