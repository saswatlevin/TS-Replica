const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const Product = require('../Models/Product');
const _ = require('lodash');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const IllegalUpdateError = require('../OperationalErrors/IllegalUpdateError');
const DuplicateSubDocumentError = require('../OperationalErrors/DuplicateSubDocumentError');
const createRandomString = require('../createRandomString');

const { checkProduct } = require('./SupportFunctions/productSupportFunctions');

const { getProductImageArrayLength } = require('./SupportFunctions/productImageSupportFunctions');

const { checkDuplicateProductImageExists } = require('./SupportFunctions/productImageSupportFunctions');

const { checkProductImageExists } = require('./SupportFunctions/productImageSupportFunctions');

const { updateCartItemImageURI } = require('./cartItemControllers');

const { checkIsEmptyObject } = require('./SupportFunctions/shippingAddressSupportFunctions');


const createProductImage = asyncErrorHandler(async(req, res, next) => {
    console.log("In createProductImage");

    console.log("\n Checking if the request_body is empty.");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product Image for Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    console.log("\nChecking if the Product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);
        throw product_not_found_error;
    }

    console.log("Checking if the product image already exists");
    if (await checkDuplicateProductImageExists(req) === true) {
        const product_image_already_exists_error = new DuplicateSubDocumentError(`Could not create the Product Image for the Product Document with ${product_id} as it already exists.`);
        throw product_image_already_exists_error;
    }

    const image_id = createRandomString(6);
    console.log("Generated image_id ", image_id);

    const image_uri = req.body.image_uri;
    console.log("image_uri ", image_uri);

    var main_image = undefined;

    console.log("Checking if the product image array is empty or not");
    if (await getProductImageArrayLength(req) > 0) {
        main_image = false;
    }

    else {
        main_image = true;
    }

    console.log("main_image ", main_image);

    const product_image = {image_id, image_uri, main_image: main_image};
    console.log("product_image ", product_image);
    
    // A live mongoose document contains many hidden keys and fields. 
    // The .lean() functions strips these keys and fields completely.
    const result = await Product.findOneAndUpdate({ product_id: product_id }, { $push: { product_images: product_image } }, { new: true }, { runValidators: true }).lean(); // return the updated document;
        
    console.log("Product image created successfully, result ", result);
    // Here, we use 201 since it means that the resource has been created.
    res.status(201).json(result);

    console.log("===END OF createProductImage===");
});


const updateProductImageURI = asyncErrorHandler(async(req, res, next) => {
    console.log("In updateProductImageURI");

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    console.log("\nChecking if the request_body is empty.");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update the image_uri for the Product Image of Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("\nChecking if the Product exists.");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);

        throw product_not_found_error;
    }

    const image_id = req.body.image_id;
    console.log("image_id ", image_id);

    console.log("\nChecking if the Product Image to be updated exists");
    if (await checkProductImageExists(req) === false) {
        const product_image_not_found_error = new ResourceNotFoundError(`Could not update the Product Image URI since the Product Image sub-document with image_id ${image_id} wasn't found in the Product document with product_id ${product_id}`);

        throw product_image_not_found_error;
    }

    const updated_image_uri = req.body.image_uri;
    console.log("updated_image_uri ", updated_image_uri);

    console.log("Checking if the image URI to be updated already exists");
    if (await checkDuplicateProductImageExists(req) === true) {
        const redundant_update_error = new RedundantUpdateError(`Could not update the Product Image URI ${updated_image_uri} since it already exists for the product image with image_id ${image_id}`);

        throw redundant_update_error;
    }

    const filter = {product_id: product_id, "product_images.image_id": image_id};
    console.log("filter ", filter);

    const update_object = {
            $set: {
                "product_images.$.image_uri": updated_image_uri
        }
    };

    const result_1 = await Product.findOneAndUpdate(filter, update_object, {new: true}, {runValidators: true}).lean();

    console.log("result in updateProductImagePath ", result_1);

    const main_image = req.body.main_image;
    console.log("main_image ", main_image);

    req.params.updated_cart_item_image_uri = updated_image_uri;

    if (main_image === true) {
        console.log("Updating the Image URI of the corresponding cart items containing the product image URI.")
        const result_2 = await updateCartItemImageURI(req);
    }

    console.log("result of updateProductImageURI ", result_1);

    res.status(200).json(result_1);
    console.log("===END OF updateProductImageURI===");
});


const searchProductImageById = asyncErrorHandler(async(req, res, next) => {
    console.log("In searchProductImageById");

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    const image_id = req.body.image_id;
    console.log("image_id ", image_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not search for the Product Image of Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("Checking if the Product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);

        throw product_not_found_error;
    }

    const search_query = {product_id: product_id, "product_images.image_id": image_id};
    console.log("search_query ", search_query);
     

    const result = await Product.find(search_query).lean();
    console.log("result in searchProductImageById ", result);

    res.status(200).json(result);
    console.log("===END OF searchProductImageById()===");

});

const deleteProductImage = asyncErrorHandler(async(req, res, next) => {
    console.log("In deleteProductImage");

    const product_id = req.body.product_id;
    console.log("product_id ", product_id);

    console.log("Checking if the request body is empty");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not delete the Product Image of Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    console.log("Checking if the Product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);

        throw product_not_found_error;
    }

    const image_id = req.body.image_id;
    console.log("image_id ", image_id);

    console.log("\nChecking if the Product Image to be deleted exists");
    if (await checkProductImageExists(req) === false) {
        const product_image_not_found_error = new ResourceNotFoundError(`Could not delete the Product Image since the Product Image sub-document with image_id ${image_id} wasn't found in the Product document with product_id ${product_id}`);

        throw product_image_not_found_error;
    }

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const delete_object = {
            $pull: {
                product_images: { image_id: image_id }
        }
    };


    const main_image = req.body.main_image;
    console.log("main_image value ", main_image);

    // Can't delete main image, throw error
    if (main_image === true) {
        const illegal_update_error = new IllegalUpdateError('Cannot delete the Product Image designated as the main image ');

        throw illegal_update_error;
    }
   
    const result = await Product.findOneAndUpdate(filter, delete_object, { new: true }, {runValidators: true}).lean();

    console.log("result in deleteCartItem is ", result);
    
    res.status(200).json(result);
    console.log("===END OF deleteProductImage===");
});

module.exports = {
    createProductImage,
    updateProductImageURI,
    searchProductImageById,
    deleteProductImage
};