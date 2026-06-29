const express = require("express");
const router = express.Router();
const cartItemControllers = require('../Controllers/cartItemControllers');
const requestValidator = require('../Validators/requestValidator');
const cartItemSchemas = require('../Schemas/cartItemSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');

router.route('/createcartitem').post(requestValidator(cartItemSchemas.cartItemRequestSchema), verifyToken(['admin', 'user']), xss(), cartItemControllers.createCartItem);

router.route('/updatecartitemquantity').patch(requestValidator(cartItemSchemas.updateCartItemQuantitySchema), verifyToken(['admin', 'user']), xss(), cartItemControllers.updateCartItemQuantity);

router.route("/deletecartitem").delete(requestValidator(cartItemSchemas.deleteCartItemSchema), xss(), verifyToken(['admin', 'user']), cartItemControllers.deleteCartItem);

module.exports = router;