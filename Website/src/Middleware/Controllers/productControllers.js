const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const CustomError = require('../OperationalErrors/CustomError');
const createRandomString = require('../createRandomString');
const { checkIsEmptyObject } = require('./SupportFunctions/shippingAddressSupportFunctions');
const { checkProduct } = require('./SupportFunctions/productSupportFunctions');
const { checkDuplicateProduct } = require('./SupportFunctions/productSupportFunctions');
const { checkProductValueExists } = require('./SupportFunctions/productSupportFunctions');
const { checkProductGarmentWeightValueExists } = require('./SupportFunctions/productSupportFunctions');
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

    const final_result = result.toObject({
        getters: false,
        virtuals: false,
        minimize: false,
        versionKey: true,
        flattenMaps: true
      });
    console.log("final_result ", final_result);

    console.log("Sending the result to the client as JSON with status 201");
    res.status(201).json(final_result);

});

const updateProductPrice = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProduct");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }


    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);
    
    const product_id = req.params.product_id;
    console.log("Getting the product_id from the request params ", product_id);

    
    const product_exists = await checkProduct(req, res, next);
    console.log("Checking if the product exists ", product_exists);

    if (product_exists === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product documentwith product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const update_object = request_body_deep_clone;
    console.log("update_object ", update_object);


    const update_product_price_result = await Product.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true}).lean();
    console.log("update_product_price_result ", update_product_price_result);

    req.params.updated_product_price = update_product_price_result.product_price;
    console.log("Storing the updated_product_price in the request params ", req.params.updated_product_price);

    const update_cart_item_price_result = await updateCartItemPrice(req, res, next);
    console.log("update_cart_item_price_result ", update_cart_item_price_result);

    const result_array = [update_product_price_result, update_cart_item_price_result];
    console.log("result_array ", result_array);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result_array);
});

const updateProduct = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProduct");

    const product_id = req.params.product_id;
    console.log("Got the product_id from the request params ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }
    
    console.log("Checking if the product exists");
    if (checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product documentwith product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    console.log("Checking if the product value to be updated already exists");
    if (checkProductValueExists(req) === false) {
        const product_value_error = new CustomError(`Could not update Product document with product_id ${product_id} since the value(s) ${req.body} already exist(s).`, 400);
        throw product_value_error;
    }


    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const update_object = request_body_deep_clone;
    console.log("update_object ", update_object);

    console.log("Calling findOneAndUpdate to update the product document");    
    const result = await Product.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true}).lean();


    console.log("The updated product document, result ", result);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result);
    
});

const updateProductGarmentWeight = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProductGarmentWeight");
    const product_id = req.params.product_id;
    console.log("Got the product_id from the request params ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }
    
    console.log("Checking if the product exists");
    if (checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product 
        document with product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }
    
    
    const garment_weight_value_exists = await checkProductGarmentWeightValueExists(req);
    console.log("garment_weight_value_exists ", garment_weight_value_exists);

    if (garment_weight_value_exists === true) {
        const product_garment_weight_value_error = new CustomError(`Could not update Product document with product_id ${product_id} since the product_garment_weight value(s) already exist(s).`, 400);
        throw product_garment_weight_value_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const update_object = {"product_garment_weight": request_body_deep_clone};
    console.log("update_object ", update_object);

    console.log("Calling findOneAndUpdate to update the product document");    
    const result = await Product.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true}).lean();
    console.log("The updated product document, result ", result);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result);

});

module.exports = {
    createProduct,
    updateProductPrice,
    updateProduct,
    updateProductGarmentWeight
};