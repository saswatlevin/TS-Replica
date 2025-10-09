const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const Product = require('../Models/Product');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const createRandomString = require('../createRandomString');
const checkProduct = require('./SupportFunctions/productSupportFunctions');
const CustomError = require('../OperationalErrors/CustomError');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');
const pruneObject = require('../pruneObject');

const createProduct = asyncErrorHandler( async(req, res, next) => {
    
    // Check that the respective Product document exists
    const check_product_exists = await checkProduct(req, res, next);

    // Check if the product already exists
    if (check_product_exists === true) {
        const duplicate_document_error = DuplicateDocumentError('Cannot create Product document since it already exists.');
        throw duplicate_document_error;
    }

    // Create the product id of the Product Document
    const product_id = createRandomString(12);

    const request_body = req.body;

    const request_body_copy = JSON.parse(JSON.stringify(request_body));

    // Get the array of product_item sub-documents from the request body.
    const product_item_array = request_body_copy['product_items'];

    // Get the array of product_image sub-documents from the request body.
    const product_image_array = request_body_copy['product_images'];

    
    // Throw an error if the Product document in the request has more than 1 product item.
    if (product_item_array.length > 1) {
        const bad_request_error = CustomError('Failed to create product. Cannot create a product with multiple product items at once. Please add product items one by one.', 400);
        throw bad_request_error;
    }

    // Throw an error if the Product document in the request has more than 1 product image.
    if (product_image_array.length > 1) {
        const bad_request_error = CustomError('Failed to create product. Cannot create a product with multiple product images at once. Please add product images one by one.', 400);
        throw bad_request_error;

    }

    // Get the product item 
    const product_item = product_item_array[0];
    // Get the product image
    const product_image = product_image_array[0];
    
    // Pass the product_id by creating a custom property called product_id on the request body.
    req.product_id = product_id;

    // Prune the request body copy of the product_items and product_images sub-document arrays.
    const product = pruneObject(request_body_copy, ['product_images', 'product_items']);

    // Create the Product Document
    const result1 = await Product.create(product);

    
});

module.exports = createProduct;