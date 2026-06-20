const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkIsEmptyObject } = require('./SupportFunctions/userSupportFunctions');

const { checkProduct } = require('./SupportFunctions/productSupportFunctions');
const { checkProductItemExists } = require('./SupportFunctions/productItemSupportFunctions');
const { checkProductItemValueExists } = require('./SupportFunctions/productItemSupportFunctions');
const { checkDuplicateProductItemExists } = require('./SupportFunctions/productItemSupportFunctions');
const { checkMinimumProductItemQuantity } = require('./SupportFunctions/productItemSupportFunctions');

const { deleteAllCartItems } = require('./SupportFunctions/cartItemSupportFunctions');

const { calculateAndUpdateCartItemTotals } = require('./SupportFunctions/cartItemSupportFunctions');

const mongoose = require('mongoose');

const Product = require('../Models/Product');

const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const DuplicateSubDocumentError = require('../OperationalErrors/DuplicateSubDocumentError'); 
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const IllegalUpdateError = require('../OperationalErrors/IllegalUpdateError');

const _ = require('lodash');

const createRandomString = require('../createRandomString');

const pruneObject = require('../pruneObject');


const createProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In createProductItem");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create the product item since the request body is empty`);
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    console.log("Checking if the Product document exists");
    if (await checkProduct(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not create the product item for the Product with product_id ${product_id} since the Product does not exist`);
        throw resource_not_found_error;
    }

    console.log("Checking if the product_item to be created already exists");
    if (await checkDuplicateProductItemExists(req) === true) {
        const duplicate_sub_document_error = new DuplicateSubDocumentError(`Could not create the product_item of Product with product_id ${product_id} as the product_item already exists`);
        throw duplicate_sub_document_error;
    }

    const request_body_deep_clone = _.cloneDeep(req.body);
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const sku = createRandomString(5);
    console.log("sku ", sku);

    console.log("Removing the product_id from the request_body_deep_clone");
    const pruned_request_body_deep_clone = pruneObject(request_body_deep_clone, ['product_id']);

    const product_item_query = {sku: sku, ...pruned_request_body_deep_clone};
    console.log("product_item_query ", product_item_query);

    const result = await Product.findOneAndUpdate(filter, { $push: { product_items: product_item_query } }, {new: true, runValidators: true}).lean();

    console.log("result ", result);
    
    res.status(201).json(result);
    console.log("===END OF createProductItem===");

});


const updateProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProductItem");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create the product item since the request body is empty`);
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    const sku = req.body.sku;
    console.log("sku ", sku);

    console.log("Checking if the Product document exists");
    if (await checkProduct(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not update the product item for the Product with product_id ${product_id} since the Product does not exist`);
        throw resource_not_found_error;
    }

    console.log("Checking if the product item which we need to update exists");
    if (await checkProductItemExists(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not update the product item with sku ${sku} for the Product with product_id ${product_id} since the product item does not exist`);
        throw resource_not_found_error;
    }

    console.log("Checking if the product_item values to be updated will result in the said product_item becoming a duplicate.");
    if (await checkDuplicateProductItemExists(req) === true) {
        const duplicate_sub_document_error = new DuplicateSubDocumentError(`Could not update the product_item of Product with product_id ${product_id} as that will result in a duplicate product_item`);
        throw duplicate_sub_document_error;
    }

    const filter = {product_id: product_id, "product_items.sku": sku};
    console.log("filter ", filter);

    const request_body_deep_clone = _.cloneDeep(req.body);
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const pruned_request_body_deep_clone = pruneObject(request_body_deep_clone, ['product_id', 'sku', 'item_type']);
    console.log("pruned_request_body_deep_clone ", pruned_request_body_deep_clone);

    // When a product_item has more than 1 field to be updated
    // Then, remember to ask the user to update both fields together.
    const update_product_item_query = Object.fromEntries(
        Object.entries(pruned_request_body_deep_clone).map(
        (
            [key, value]) => [`product_items.$.${key}`, value]
        )
    );

    const update_product_item_object = {
            $set: update_product_item_query
    };

    console.log("update_product_item_object ", update_product_item_object);

    const result = await Product.findOneAndUpdate(filter, update_product_item_object, {new: true, runValidators: true}).lean();
    console.log("result in updateProductItem ", result);

    res.status(200).json(result);
    console.log("===END OF updateProductItem===");

});

const deleteProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In deleteProductItem");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create the product item since the request body is empty`);
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    const sku = req.body.sku;
    console.log("sku ", sku);

    console.log("Checking if the product exists");
    if (await checkProduct(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not delete the product item with sku ${sku} for the Product with product_id ${product_id} since the Product does not exist`);
        throw resource_not_found_error;
    }

    console.log("Checking if the product item to be deleted exists");
    if (await checkProductItemExists(req) === false) {
        const resource_not_found_error = new ResourceNotFoundError(`Could not delete the product item with sku ${sku} for the Product with product_id ${product_id} since the product item does not exist`);
        throw resource_not_found_error;
    }

    console.log("Checking if the Product Items Array has only 1 item left");
    if (await checkMinimumProductItemQuantity(req) === true) {
        const illegal_update_error = new IllegalUpdateError(`Cannot delete last product_item from Product with product_id ${product_id} since each Product must have at least one product_item.`);

        throw illegal_update_error;
    }

    const filter = {product_id: product_id};
    console.log("filter ", filter);


    const delete_product_item_query = {
            $pull: {
                product_items: { sku: sku }
        }
    };

    const mongodb_transaction_session = await mongoose.startSession();

    let result_1;

    let result_2;

    let result_3;

    let result;

    try {
    await mongodb_transaction_session.withTransaction(async () => {
            result_1 = await Product.findOneAndUpdate(filter, delete_product_item_query, {new: true, runValidators: true, session: mongodb_transaction_session}).lean();
            console.log("result of findOneAndUpdate in deleteProductItem ", result_1);

            result_2 = await deleteAllCartItems(req, "DELETE_BY_SKU", mongodb_transaction_session);
            console.log("result of deleteAllCartItems in deleteProductItem ", result_2);

            result_3 = await calculateAndUpdateCartItemTotals(req, mongodb_transaction_session);
            console.log("result of calculateAndUpdateCartItemTotals in deleteProductItem ", result_3);

            result = [result_1, result_2, result_3];
        })
    }

    finally {
        mongodb_transaction_session.endSession();
    }

    res.status(200).json(result[0]);   

    console.log("===END OF deleteProductItem===");

});

const searchProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In searchProductItem");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create the product item since the request body is empty`);
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    const find_query = {product_id: product_id};
    console.log("find_query ", find_query);

    const result = await Product.find(find_query).select({ product_items: 1, _id: 0 }).lean();
    console.log("result in searchProductItem ", result[0]);

    /*for (var i = 0; i < result.length; ++i) {
        console.log("result [", i, "] ", result[i]);
    }*/

    res.status(200).json(result);
    console.log("===END OF searchProductItem===");

});

const getProductItem = asyncErrorHandler(async(req, res, next) => {
    console.log("In getProductItem");

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create the product item since the request body is empty`);
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);
    
    const sku = req.body.sku;
    console.log("sku ", sku);
    
    const find_query = {product_id: product_id, "product_items.sku": sku};
    console.log("find_query ", find_query);

    const result = await Product.find(find_query).select({ product_items: 1, _id: 0 }).lean();
    console.log("result in getProductItem ", result[0]);

    /*for (var i = 0; i < result.length; ++i) {
        console.log("result [", i, "] ", result[i]);
    }*/

    res.status(200).json(result);
    console.log("===END OF getProductItem===");

});



module.exports = { 
    createProductItem, 
    updateProductItem,
    deleteProductItem,
    searchProductItem,
    getProductItem
}