const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const createRandomString = require('../createRandomString');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const DuplicateSubdocumentError = require('../OperationalErrors/DuplicateSubdocumentError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const User = require('../Models/User');
const { checkIsEmptyObject, checkUserExists }= require('./SupportFunctions/shippingAddressSupportFunctions');
const checkCartItemExists = require('./SupportFunctions/cartItemSupportFunctions');

const createCartItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In createCartItem");
    
    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Cart Item for user with user_id ${user_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists");
    if (await checkUserExists(req) === false) {
        const user_id_not_found_error = new ResourceNotFoundError(`Could not create Cart Item for user with user_id ${user_id} as the user does not exist.`);
        throw user_id_not_found_error;
    }

    console.log("Checking if the cart item already exists");
    if (await checkCartItemExists(req) === true) {
        const cart_item_already_exists_error = new DuplicateSubdocumentError(`Could not create Cart Item for user with user_id ${user_id} as the cart item already exists.`);
        throw cart_item_already_exists_error;
    }

    const cart_item_id = createRandomString(6);
    console.log("cart_item_id ", cart_item_id);

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = {user_id: user_id};
    console.log("filter ", filter);

    const cart_item = {cart_item_id: cart_item_id, ...request_body_deep_clone};
    console.log("cart_item ", cart_item);

    console.log("Creating the cart item");
    const result = await User.findOneAndUpdate(filter, {$push: {CartItems: cart_item}}, {new: true}, {runValidators: true}).lean();
    
    console.log("result ", result);
    console.log("Sending the result to the client as JSON with status code 200.");

    res.status(200).json(result);
});

const updateCartItemPrice = async(req, res, next) => {
    
    try {
        console.log("In updateCartItemPrice");
        const request_body = req.body;

        const user_id = req.params.user_id;

        if (checkIsEmptyObject(req) === true) {
            const empty_request_body_error = new EmptyRequestBodyError(`Could not update Cart Item with cart_item_id ${cart_item_id} as the request body is empty.`);
            throw empty_request_body_error;
        }
    

        if (checkUserExists(req) === false) {
            const user_id_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item price since the user with user_id ${user_id} does not exist.`);
            throw user_id_not_found_error;
        }
        

        const cart_item_id = req.params.cart_item_id;

        const cart_item_exists = await checkCartItemExists(req, res, next);
        

        if (cart_item_exists === false) {
            const cart_item_not_found_error = new ResourceNotFoundError(`Could not update the Cart Item price since the cart item with cart_item_id ${cart_item_id} does not exist.`);
            throw cart_item_not_found_error;
        }
        
        const filter = {user_id: user_id, "CartItems.cart_item_id": cart_item_id};
        
        const updated_cart_item_price = req.params.updated_product_price;
        
        const update_object = {
            $set: {
                "CartItems.$.cart_item_price": updated_cart_item_price
            }
        };

        
        const result = await User.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true});

        console.log("updateCartItemPrice result ", result);
        
        return result;
    }

    catch(error) {
        console.log("Error in updateCartItemPrice ", error);
        return error;
    }
   
};


module.exports = {
    createCartItem, 
    updateCartItemPrice
};
