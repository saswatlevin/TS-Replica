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
    const request_body = req.body;

    // Check if the request body is empty
    if (checkIsEmptyObject(request_body) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product as the request body is empty.`);
        throw empty_request_body_error;
    }

    // Check if the product exists
    if (checkDuplicateProduct(request_body) === false) {
        const product_already_exists_error = new DuplicateDocumentError(`Product document with product_name ${product_name} and product_description ${product_description} already exists.`);
        throw product_already_exists_error;
    }

    const product_id = createRandomString(6);

    // Set the product_id in the request body
    request_body.product_id = product_id;

    // Set the docType in the request body
    request_body.docType = "PRODUCT";

    const result = await Product.create(request_body);

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

    if (update_product_price_result.product_price === update_cart_item_price_result.CartItems[0].cart_item_price) {
        console.log("Updated corresponding product and cart item price.");
        res.status(200).json("Updated corresponding product and cart item price.");
    }

    else {
        console.log("Could not update corresponding product and cart item price.");
        res.status(400).json("Could not update corresponding product and cart item price.");
    }
});

module.exports = {
    createProduct,
    updateProductPrice
};

