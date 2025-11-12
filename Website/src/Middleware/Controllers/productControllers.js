const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const createRandomString = require('../createRandomString');
const { checkIsEmptyObject } = require('./SupportFunctions/shippingAddressSupportFunctions');
const checkProduct = require('./SupportFunctions/productSupportFunctions');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');
const Product = require('../Models/Product');

const createProduct = asyncErrorHandler(async(req, res, next) => {
    
    console.log("In createProduct");
    
    // Get the request body.
    const request_body = req.body;

    // Check if the request body is empty
    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product as the request body is empty.`);
        throw empty_request_body_error;
    }

    const product_id = createRandomString(6);

    // Set the product_id in the request params
    // This is done to pass it on to checkProduct
    req.params.product_id = product_id;

    const product_exists = await checkProduct(req, res, next);

    // Check if the product exists
    if (product_exists === false) {
        const product_already_exists_error = new DuplicateDocumentError(`Product document with product_id ${product_id} already exists.`);
        throw product_already_exists_error;
    }

    // Set the product_id in the request body
    request_body.product_id = product_id;

    // Set the docType in the request body
    request_body.docType = "PRODUCT";

    const result = await Product.create(request_body);

    res.status(201).json(result);

});

const updateProduct = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProduct");
    
});

module.exports = {
    createProduct,
    updateProduct
};

