const express = require("express");
const router = express.Router();
const productControllers = require('../Controllers/productControllers');
const requestValidator = require('../Validators/requestValidator');
const productSchemas = require('../Schemas/productSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createproduct').post(requestValidator(productSchemas.productRequestSchema), xss(), productControllers.createProduct);

router.route('/updateproductprice/:product_id').patch(requestValidator(productSchemas.updateProductPriceSchema), xss(), productControllers.updateProductPrice);

module.exports = router;