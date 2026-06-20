const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const mongoose = require('mongoose');
const Product = require('../Models/Product');
const _ = require('lodash');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const IllegalUpdateError = require('../OperationalErrors/IllegalUpdateError');
const DuplicateSubDocumentError = require('../OperationalErrors/DuplicateSubDocumentError');
const InvalidFileTypeError = require('../OperationalErrors/InvalidFileTypeError');
const createRandomString = require('../createRandomString');

const { checkProduct } = require('./SupportFunctions/productSupportFunctions');

const { getProductImageArrayLength } = require('./SupportFunctions/productImageSupportFunctions');

const { checkDuplicateProductImageExists } = require('./SupportFunctions/productImageSupportFunctions');

const { checkProductImageExists } = require('./SupportFunctions/productImageSupportFunctions');

const { updateCartItemImageURI } = require('./SupportFunctions/cartItemSupportFunctions');

const { checkIsEmptyObject } = require('./SupportFunctions/userSupportFunctions');

const { getProductImageURI } = require('./SupportFunctions/productImageSupportFunctions');

const { getProductImageFlag } = require('./SupportFunctions/productImageSupportFunctions');

const sharp = require('sharp');
const { fileTypeFromFile } = require('file-type');
const fs = require('fs');
const { IMAGE_DESTINATION_PATH } = require('../FileUploader/fileUploader');
const path = require('path');

// List of trusted MIME types
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);

const createProductImage = asyncErrorHandler(async(req, res, next) => {
    console.log("In createProductImage");

    console.log("Checking if the image upload succeeded.");
    if (req?.file === null || req?.file === undefined) {
        throw new EmptyRequestBodyError(`No image file was uploaded.`);
    }

    const file_path = req.file.path;
    console.log("Filepath of uploaded image ", file_path);

    // Validate the file's REAL type by inspecting its binary content
    console.log("Validating the file's REAL type by inspecting its binary content.");
    const type = await fileTypeFromFile(file_path);

    // If the file isn't of the required type, delete it.
    console.log("Checking if the file is of the required type.");
    if (!type || !ALLOWED_MIME.has(type.mime)) {
        console.log("The file isn't of the required type and so has been deleted from ", file_path);
        fs.unlinkSync(file_path);
        throw new InvalidFileTypeError(`Uploaded file is not a valid image.`);
    }

    console.log("\n Checking if the request_body is empty.");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not create Product Image for Product with product_id ${product_id} as the request body is empty.`);
        console.log("File deleted since request_body is empty from ", file_path);
        fs.unlinkSync(file_path); // Delete the file since the request body is empty. 
        throw empty_request_body_error;
    }

    const product_id = req.body.product_id;

    console.log("\nChecking if the Product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not find Product document with product_id ${product_id}`);
        console.log("File deleted since the Product document doesn't exist from ", file_path);
        fs.unlinkSync(file_path);  // Delete the file since the Product doesn't exist

        throw product_not_found_error;
    }

    const image_id = createRandomString(6);

    const final_file_name = `${image_id}.jpg`;
    const final_path = path.join(IMAGE_DESTINATION_PATH, final_file_name);
    
    const mongodb_transaction_session = await mongoose.startSession();

    let result;

    try{
        await mongodb_transaction_session.withTransaction(async () => {
            console.log("Processing the Uploaded Image");

            var main_image = null;
            
            console.log("Checking if the product image array is empty");
            if (await getProductImageArrayLength(req) > 0) {
                main_image = false;
            }

            else {
                main_image = true;
            }

            console.log("Checking if the product image array is full");
            if (await getProductImageArrayLength(req) >= 5) {
                const error = new IllegalUpdateError(`Cannot create product_image for product with product_id ${product_id} since it already has 5 images.`); 
                console.log("Deleting the original file at ", file_path);
                fs.unlinkSync(file_path);
                throw error;
            }

            console.log("Re-encoding the file to remove malicious payloads and creating the image at destination.");
            await sharp(file_path).resize({width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true}).toFormat('jpeg', { quality: 85 }).withMetadata(false).toFile(final_path);                  
            // Delete the original (unverified) upload
            console.log("Deleting the original file at ", file_path);
            fs.unlinkSync(file_path);

            const image_uri = final_path;
            console.log("image_uri (final_path) ", image_uri);

            //console.log("main_image ", main_image);

            const product_image = {image_id, image_uri, main_image: main_image};
            console.log("product_image ", product_image);
    
            // A live mongoose document contains many hidden keys and fields. 
            // The .lean() functions strips these keys and fields completely.
            result = await Product.findOneAndUpdate({ product_id: product_id }, { $push: { product_images: product_image } }, {new: true, runValidators: true, session: mongodb_transaction_session}).lean(); 
        
            console.log("Product image created successfully, result ", result);
        })
    }

    finally {
        mongodb_transaction_session.endSession();
    }


    // Here, we use 201 since it means that the resource has been created.
    res.status(201).json(result);

    console.log("===END OF createProductImage===");
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

    console.log("Checking if the request body is empty.");
    if (checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not delete the Product Image of Product with product_id ${product_id} as the request body is empty.`);

        throw empty_request_body_error;
    }

    const image_id = req.body.image_id;
    console.log("image_id ", image_id);

    console.log("\nChecking if the Product exists");
    if (await checkProduct(req) === false) {
        const product_not_found_error = new ResourceNotFoundError(`Could not delete the Product Image since the Product with product_id ${product_id} does not exist.`);
        throw product_not_found_error;
    }

    console.log("\nChecking if the Product Image to be deleted exists.");
    if (await checkProductImageExists(req) === false) {
        const product_image_not_found_error = new ResourceNotFoundError(`Could not delete the Product Image since the Product Image sub-document with image_id ${image_id} wasn't found in the Product document with product_id ${product_id}`);

        throw product_image_not_found_error;
    }

    console.log("Checking if the product_image to be deleted is the main_image");
    if (await getProductImageFlag(req) === true) {
        const error = new IllegalUpdateError(`Cannot delete product_image with image_id ${image_id} since it is the main image`);
        throw error;
    }

    const filter = {product_id: product_id};
    console.log("filter ", filter);

    const delete_object = {
            $pull: {
                product_images: { image_id: image_id }
        }
    };


    const mongodb_transaction_session = await mongoose.startSession();

    let result;

    try {
        await mongodb_transaction_session.withTransaction(async () => {
            console.log("Starting the process of deleting the product_image");

            console.log("Getting the image_uri");
            const image_uri = await getProductImageURI(req, mongodb_transaction_session);

            console.log("Deleting the corresponding image");
            fs.unlinkSync(image_uri);
   
            result = await Product.findOneAndUpdate(filter, delete_object, {new: true, runValidators: true, session: mongodb_transaction_session}).lean();

            console.log("result in deleteProductImage is ", result);
        })
        
    }

    finally {
        mongodb_transaction_session.endSession();
    }
    
    
    res.status(200).json(result);
    console.log("===END OF deleteProductImage===");
});

module.exports = {
    createProductImage,
    searchProductImageById,
    deleteProductImage
};