const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const _ = require('lodash');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const CustomError = require('../OperationalErrors/CustomError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const createRandomString = require('../createRandomString');
const { checkIsEmptyObject } = require('./SupportFunctions/shippingAddressSupportFunctions');
const { checkProduct } = require('./SupportFunctions/productSupportFunctions');
const { checkDuplicateProduct } = require('./SupportFunctions/productSupportFunctions');
const { checkProductValueExists } = require('./SupportFunctions/productSupportFunctions');
const { checkProductNameExists } = require('./SupportFunctions/productSupportFunctions');
const { checkProductPriceExists } = require('./SupportFunctions/productSupportFunctions');
const { checkProductGarmentWeightValueExists } = require('./SupportFunctions/productSupportFunctions');
const { checkProductSupplyTypeValueExists } = require('./SupportFunctions/productSupportFunctions');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');
const { updateCartItemPrice, updateCartItemName } = require('./cartItemControllers');
const Product = require('../Models/Product');

const createProduct = asyncErrorHandler(async (req, res, next) => {
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
    console.log("Checking if a duplicate product document exists");
    if (await checkDuplicateProduct(req) === true) {
        const product_already_exists_error = new DuplicateDocumentError(`Could not create Product since it already exists.`);
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

    request_body_deep_clone.product_items[0] = { sku: sku, ...request_body_deep_clone.product_items[0] };
    request_body_deep_clone.product_images[0] = { image_id: image_id, ...request_body_deep_clone.product_images[0] };

    console.log("request_body_deep_clone after modification ", request_body_deep_clone);


    // Create the product object
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

    console.log("===END OF createProduct===");

});

const updateProductPrice = asyncErrorHandler(async (req, res, next) => {
    // Here, we supply the sku value in the request body to ensure that 
    // the checkCartItem() function works. This is because the checkCartItem() function needs to check whether at least one cart_item (or product_item) of a particular Product exists.

    console.log("In updateProductPrice");
 
    const product_id = req.body.product_id;
    console.log("Getting the product_id from the request params ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the product to be updated exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product document with product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }
    
    console.log("Check if the updated price value already exists");
    if (await checkProductPriceExists(req) === true) {
        const redundant_update_error = new RedundantUpdateError(`Could not update Product document with product_id ${product_id} since the product_price value ${req.body.product_price} already exists.`);
        throw redundant_update_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    //console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = { product_id: product_id };
    console.log("filter ", filter);

    const update_object = request_body_deep_clone;
    console.log("update_object ", update_object);

    const update_product_price_result = await Product.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();
    //console.log("update_product_price_result ", update_product_price_result);

    // If a discount is applied, then the cart_item_price is updated with the discounted_total
    if (req.body?.discounted_total === 0) {
        req.params.updated_product_price = update_product_price_result.product_price;
        console.log("Storing the updated_product_price in the request params ", req.params.updated_product_price);
    }
    
    else {
        req.params.updated_product_price = update_product_price_result.discounted_total;
        console.log("Storing the updated_product_price in the request params (DISCOUNTED TOTAL) ", req.params.updated_product_price);
    }

    const update_cart_item_price_result = await updateCartItemPrice(req);
    //console.log("update_cart_item_price_result ", update_cart_item_price_result);

    const result_array = [update_product_price_result, update_cart_item_price_result];
    //console.log("result_array ", result_array);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result_array[0]);

    console.log("===END OF updateProductPrice===");
});

const updateProductName = asyncErrorHandler(async(req, res, next) => {
    // Here, we supply the sku value in the request body to ensure that 
    // the checkCartItem() function works. This is because the checkCartItem() function needs to check whether at least one cart_item (or product_item) of a particular Product exists.
    
    console.log("In updateProductName");

    const product_id = req.body.product_id;
    console.log("Getting the product_id from the request params ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product document with product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }
    
    console.log("Check if the updated name value already exists");
    if(await checkProductNameExists(req) === true) {
        const redundant_update_error = new RedundantUpdateError(`Could not update Product document with product_id ${product_id} since the product_name value ${req.body.product_name} already exists.`);
        throw redundant_update_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = { product_id: product_id };
    console.log("filter ", filter);

    const update_object = request_body_deep_clone;
    console.log("update_object ", update_object);

    const update_product_name_result = await Product.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();
    console.log("update_product_name_result ", update_product_name_result);

    req.params.updated_product_name = update_product_name_result.product_name;
    console.log("Storing the updated_product_name in the request params ", req.params.updated_product_name);

    const update_cart_item_name_result = await updateCartItemName(req);
    //console.log("update_cart_item_name_result ", update_cart_item_name_result);

    const result_array = [update_product_name_result, update_cart_item_name_result];
    //console.log("result_array ", result_array);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result_array[0]);

    console.log("===END OF updateProductName===");
});

const updateProduct = asyncErrorHandler(async (req, res, next) => {
    console.log("In updateProduct");

    const product_id = req.body.product_id;
    console.log("Got the product_id from the request body ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product documentwith product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    console.log("Checking if the product value to be updated already exists");

    if (await checkProductValueExists(req) === true) {
        const product_value_error = new RedundantUpdateError(`Could not update Product document with product_id ${product_id} since the value(s) ${req.body} already exist(s).`);
        throw product_value_error;
    }


    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const filter = { product_id: product_id };
    console.log("filter ", filter);

    const update_object = request_body_deep_clone;
    console.log("update_object ", update_object);

    console.log("Calling findOneAndUpdate to update the product document");
    const result = await Product.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();


    console.log("The updated product document, result ", result);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result);

    console.log("===END OF updateProduct===");

});

const updateProductGarmentWeight = asyncErrorHandler(async (req, res, next) => {
    console.log("In updateProductGarmentWeight");
    
    const product_id = req.body.product_id;
    console.log("Got the product_id from the request body ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the product to be updated exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product 
        document with product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    console.log("Checking if the product_garment_weight value already exists");
    if ( await checkProductGarmentWeightValueExists(req) === true) {
        const product_garment_weight_value_error = new RedundantUpdateError(`Could not update Product document with product_id ${product_id} since the product_garment_weight value(s) already exist(s).`);
        throw product_garment_weight_value_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const filter = { product_id: product_id };
    console.log("filter ", filter);

    const update_object = { "product_garment_weight": request_body_deep_clone };
    console.log("update_object ", update_object);

    console.log("Calling findOneAndUpdate to update the product document");
    const result = await Product.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();
    console.log("The updated product document, result ", result);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result);

    console.log("===END OF updateProductGarmentWeight===");

});

const updateProductSupplyType = asyncErrorHandler(async (req, res, next) => {
    console.log("In updateProductSupplyType");

    const product_id = req.body.product_id;
    console.log("Got the product_id from the request body ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update Product with product_id ${product_id} as the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the product to be updated exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not update Product document with product_id ${product_id} since it does not exist.`);
        throw product_not_found_error;
    }

    console.log("Checking if the product supply type value to be updated already exists");
    if (await checkProductSupplyTypeValueExists(req) === true) {
        const product_supply_type_value_error = new RedundantUpdateError(`Could not update Product document with product_id ${product_id} since the product_supply_type value(s) already exist(s).`);
        throw product_supply_type_value_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const filter = { product_id: product_id };
    console.log("filter ", filter);

    const update_object = { "product_supply_type": request_body_deep_clone };
    console.log("update_object ", update_object);

    console.log("Calling findOneAndUpdate to update the product document");
    const result = await Product.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();
    console.log("The updated product document, result ", result);

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result);

    console.log("===END OF updateProductSupplyType===");
});

const searchProducts = asyncErrorHandler(async (req, res, next) => {
    console.log("In searchProducts");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not search Products since the request body is empty.`);
        throw empty_request_body_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("Got the request_body_deep_clone ", request_body_deep_clone);

    const result = await Product.find(request_body_deep_clone).lean();
    console.log("result ", result.slice(-2));

    console.log("Sending the result to the client as JSON with status 200");
    res.status(200).json(result.slice(-2));

    console.log("===END OF searchProducts===");
});

module.exports = {
    createProduct,
    updateProductPrice,
    updateProductName,
    updateProduct,
    updateProductGarmentWeight,
    updateProductSupplyType,
    searchProducts
};