const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const createRandomString = require('../createRandomString');
const { checkIsEmptyObject } = require('./SupportFunctions/shippingAddressSupportFunctions');
const { checkDuplicateProduct } = require('./SupportFunctions/productSupportFunctions');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');
const Product = require('../Models/Product');

const createProduct = asyncErrorHandler(async(req, res, next) => {
    console.log("In createProduct");
    
    // Get the request body.

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));

    console.log("request_body_deep_clone before modification ", request_body_deep_clone);
    //console.log("request_body_deep_clone.ProductItems before modification ", request_body_deep_clone.product_items[0]);
    //console.log("request_body_deep_clone.ProductImages before modification ", request_body_deep_clone.product_images[0]);
    

    // Check if the request body is empty
    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product as the request body is empty.`);
        throw empty_request_body_error;
    }

    // Check if the product exists
    console.log("Checking if the product document exists");
    if (checkDuplicateProduct(req) === false) {
        const product_already_exists_error = new DuplicateDocumentError(`Product document with product_name ${product_name} and product_description ${product_description} already exists.`);
        throw product_already_exists_error;
    }

    // Generate the product_id
    const product_id = createRandomString(6);
    console.log("Generated product_id ", product_id);

    // Generate the sku
    const sku = createRandomString(5);
    console.log("Generated sku ", sku);
    // Generate the image_id
    const image_id = createRandomString(6);
    console.log("Generated image_id ", image_id);
    
    const doc_type = "PRODUCT";
    console.log("Generated doc_type ", doc_type);

    request_body_deep_clone.product_items[0] = {sku: sku, ...request_body_deep_clone.product_items[0]};
    request_body_deep_clone.product_images[0] = {image_id: image_id, ...request_body_deep_clone.product_images[0]};

    console.log("request_body_deep_clone after modification ", request_body_deep_clone);
    

    // Create the porduct object
    const product = {
        product_id: product_id,
        docType: doc_type,
        ...request_body_deep_clone
    };

    console.log("The product object to be created ", product);
    const result = await Product.create(product);
    
    res.status(201).json(result);

});

const updateProductPrice = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProduct");
    const request_body = req.body;

    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    const product_id = req.params.product_id;

    const product_exists = await checkProduct(req, res, next);

    if (product_exists === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product documentwith product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    const filter = {product_id: product_id};

    const update_object = request_body;

    const update_product_price_result = await Product.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true});

    req.params.updated_product_price = result.product_price;

    const update_cart_item_price_result = await updateCartItemPrice(req, res, next);

    const result_array = [update_product_price_result, update_cart_item_price_result];
    res.status(200).json(result_array);
});

module.exports = {
    createProduct,
    updateProductPrice
};

