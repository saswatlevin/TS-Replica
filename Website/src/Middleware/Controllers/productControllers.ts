import asyncErrorHandler from '../ErrorHandlers/asyncErrorHandler';

import mongoose from 'mongoose';

import ResourceNotFoundError from '../OperationalErrors/ResourceNotFoundError';

import _ from 'lodash';

import EmptyRequestBodyError from '../OperationalErrors/EmptyRequestBodyError';

import createRandomString from '../createRandomString';

import { checkIsEmptyObject } from './SupportFunctions/shippingAddressSupportFunctions';

import checkProduct from './SupportFunctions/productSupportFunctions';

import DuplicateDocumentError from '../OperationalErrors/DuplicateDocumentError';

import Product from '../Models/Product';

const createProduct = async (req: any,  res: any, next: any): Promise<void> => {

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
    const product_not_found_error = new DuplicateDocumentError(`Product document with product_id ${product_id} already exists.`);
    throw product_not_found_error;
}

// Set the docType in the request body
request_body.docType = "PRODUCT";

const result = await Product.create(request_body);

res.status(201).json(result);

}

export default createProduct;