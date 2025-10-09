const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkIsEmptyObject } = require('../Controllers/SupportFunctions/shippingAddressSupportFunctions');
const mongoose = require('mongoose');
const Product = require('../Models/Product');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const createRandomString = require('../createRandomString');
const checkProduct = require('./SupportFunctions/productSupportFunctions');

const createProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In createProductItem");
    // Get the product_id from the custom property created to have it in the request body 
    const product_id = req.product_id;
    const sku = createRandomString(10);
    
    const request_body = req.body;
    
    // Check that the request body isn't empty
    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product Item for Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    // Create the product item from the sku and request body
    const product_item = {...sku, ...request_body};
    
    // Check that the respective Product document exists
    const check_product_exists = await checkProduct(req, res, next);

    if (check_product_exists === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);
        throw product_not_found_error;
    }

    else {
        // A live mongoose document contains many hidden keys and fields. 
        // The .lean() functions strips these keys and fields completely.
        const result = await Product.findOneAndUpdate({ product_id: product_id }, { $push: { ProductItems: product_item } }, { new: true }).lean(); // return the updated document;
        console.log("Product item created successfully, result ", result);
        // Here, we use 201 since it means that the resource has been created.
        res.status(201).json(result);
    }

});

module.exports = createProductItem;