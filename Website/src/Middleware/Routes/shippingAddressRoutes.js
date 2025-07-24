const express = require("express");
const router = express.Router();
const shippingAddressControllers = require('../Controllers/shippingAddressControllers');
const requestValidator = require('../Validators/requestValidator');
const shippingAddressSchemas = require('../Schemas/shippingAddressSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createshippingaddress/:user_id').post(requestValidator(shippingAddressSchemas.shippingAddressRequestSchema), xss(), shippingAddressControllers.createShippingAddress);

module.exports = router;