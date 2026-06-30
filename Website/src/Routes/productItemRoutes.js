const express = require("express");
const router = express.Router();
const productItemControllers = require('../Controllers/productItemControllers');
const requestValidator = require('../Validators/requestValidator');
const productItemSchemas = require('../Schemas/productItemSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');


router.route('/createproductitem').post(requestValidator(productItemSchemas.productItemCreateRequestSchemasDiscriminatedUnion), verifyToken(['admin']), xss(), productItemControllers.createProductItem);

router.route('/updateproductitem').patch(requestValidator(productItemSchemas.productItemUpdateRequestSchemasDiscriminatedUnion), verifyToken(['admin']), xss(), productItemControllers.updateProductItem);

router.route('/deleteproductitem').delete(requestValidator(productItemSchemas.productItemDeleteRequestSchema), verifyToken(['admin']), xss(), productItemControllers.deleteProductItem);

router.route('/searchproductitem').get(requestValidator(productItemSchemas.productItemSearchRequestSchema), xss(), productItemControllers.searchProductItem);

router.route('/getproductitem').get(requestValidator(productItemSchemas.getProductItemRequestSchema), xss(), productItemControllers.getProductItem);

module.exports = router;