const express = require("express");
const router = express.Router();
const cartItemControllers = require('../Controllers/cartItemControllers');
const requestValidator = require('../Validators/requestValidator');
const cartItemSchemas = require('../Schemas/cartItemSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createcartitem/:user_id').post(requestValidator(cartItemSchemas.cartItemRequestSchema), xss(), cartItemControllers.createCartItem);

module.exports = router;