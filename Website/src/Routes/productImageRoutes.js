const express = require("express");
const router = express.Router();
const productImageControllers = require('../Controllers/productImageControllers');
const requestValidator = require('../Validators/requestValidator');
const productImageSchemas = require('../Schemas/productImageSchemas');
const { upload } = require('../FileUploader/fileUploader');
const { xss } = require('express-xss-sanitizer');

router.route('/createproductimage').post(upload.single('image'), requestValidator(productImageSchemas.createProductImageSchema), xss(), productImageControllers.createProductImage);

router.route('/searchproductimagebyid').get(requestValidator(productImageSchemas.searchProductImageByIdSchema), xss(), productImageControllers.searchProductImageById);

router.route('/deleteproductimage').delete(requestValidator(productImageSchemas.deleteProductImageSchema), xss(), productImageControllers.deleteProductImage);

module.exports = router;