const express = require("express");
const router = express.Router();
const shippingAddressControllers = require('../Controllers/shippingAddressControllers');
const requestValidator = require('../Validators/requestValidator');
const shippingAddressSchemas = require('../Schemas/shippingAddressSchemas');

router.route('/createshippingaddress/:user_id').post(requestValidator(shippingAddressSchemas.shippingAddressSchema), shippingAddressControllers.createShippingAddress);

module.exports = router;