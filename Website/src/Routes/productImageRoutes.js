const express = require("express");
const router = express.Router();
const productImageControllers = require('../Controllers/productImageControllers');
const requestValidator = require('../Validators/requestValidator');
const productImageSchemas = require('../Schemas/productImageSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createproductimage').post(requestValidator(productImageSchemas.createProductImageSchema), xss(), productImageControllers.createProductImage);

router.route('/updateproductimageuri/:user_id').patch(requestValidator(productImageSchemas.updateProductImageURISchema), xss(), productImageControllers.updateProductImageURI);

router.route('/searchproductimagebyid').get(requestValidator(productImageSchemas.searchProductImageByIdSchema), xss(), productImageControllers.searchProductImageById);

router.route('/deleteproductimage').delete(requestValidator(productImageSchemas.deleteProductImageSchema), xss(), productImageControllers.deleteProductImage);

module.exports = router;