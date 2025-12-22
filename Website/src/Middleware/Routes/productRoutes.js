const express = require("express");
const router = express.Router();
const productControllers = require('../Controllers/productControllers');
const requestValidator = require('../Validators/requestValidator');
const productSchemas = require('../Schemas/productSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createproduct').post(requestValidator(productSchemas.productRequestSchema), xss(), productControllers.createProduct);

router.route('/updateproductprice/:user_id').patch(requestValidator(productSchemas.updateProductPriceSchema), xss(), productControllers.updateProductPrice);

router.route('/updateproductname/:user_id').patch(requestValidator(productSchemas.updateProductNameSchema), xss(), productControllers.updateProductName);

router.route('/updateproduct').patch(requestValidator(productSchemas.updateProductSchema), xss(), productControllers.updateProduct);

router.route('/updateproductgarmentweight').patch(requestValidator(productSchemas.productGarmentWeightSchema), xss(), productControllers.updateProductGarmentWeight );

router.route('/updateproductsupplytype').patch(requestValidator(productSchemas.productSupplyTypeSchema), xss(), productControllers.updateProductSupplyType);

router.route('/searchproducts').get(requestValidator(productSchemas.searchProductSchema), xss(), productControllers.searchProducts);

module.exports = router;