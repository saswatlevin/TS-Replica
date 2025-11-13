const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const User = require('../Models/User');
const { checkIsEmptyObject, checkUserExists }= require('./SupportFunctions/shippingAddressSupportFunctions');
const checkCartItemExists = require('./SupportFunctions/cartItemSupportFunctions');

const updateCartItemPrice = async(req, res, next) => {
    
    try {
        console.log("In updateCartItemPrice");
        const request_body = req.body;

        const user_id = req.params.user_id;

        if (checkIsEmptyObject(request_body) === true) {
            const empty_request_body_error = new EmptyRequestBodyError(`Could not update Cart Item with cart_item_id ${cart_item_id} as the request body is empty.`);
            throw empty_request_body_error;
        }
    

        if (checkUserExists(request_body) === false) {
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


module.exports = updateCartItemPrice
