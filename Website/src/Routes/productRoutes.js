const express = require("express");
const router = express.Router();
const productControllers = require('../Controllers/productControllers');
const requestValidator = require('../Validators/requestValidator');
const productSchemas = require('../Schemas/productSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');

router.route('/createproduct').post(requestValidator(productSchemas.productRequestSchema), verifyToken(['admin']), xss(), productControllers.createProduct);

router.route('/updateproductprice').patch(requestValidator(productSchemas.updateProductPriceSchema), verifyToken(['admin']), xss(), productControllers.updateProductPrice);

router.route('/updateproductdiscount').patch(requestValidator(productSchemas.updateProductDiscountSchema), verifyToken(['admin']), xss(), productControllers.updateProductDiscount);

router.route('/updateproductname').patch(requestValidator(productSchemas.updateProductNameSchema), verifyToken(['admin']), xss(), productControllers.updateProductName);

router.route('/updateproduct').patch(requestValidator(productSchemas.updateProductSchema), verifyToken(['admin']), xss(), productControllers.updateProduct);

router.route('/updateproductgarmentweight').patch(requestValidator(productSchemas.productGarmentWeightRequestSchema), verifyToken(['admin']), xss(), productControllers.updateProductGarmentWeight );

router.route('/updateproductsupplytype').patch(requestValidator(productSchemas.productSupplyTypeRequestSchema), verifyToken(['admin']), xss(), productControllers.updateProductSupplyType);

router.route('/searchproducts').get(requestValidator(productSchemas.searchProductSchema), xss(), productControllers.searchProducts);

router.route('/deleteproduct').delete(requestValidator(productSchemas.productIdSchema), verifyToken(['admin']), xss(), productControllers.deleteProduct);


module.exports = router;