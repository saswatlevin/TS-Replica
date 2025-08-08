const express = require("express");
const router = express.Router();
const shippingAddressControllers = require('../Controllers/shippingAddressControllers');
const requestValidator = require('../Validators/requestValidator');
const shippingAddressSchemas = require('../Schemas/shippingAddressSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/createshippingaddress/:user_id').post(requestValidator(shippingAddressSchemas.createShippingAddressRequestSchema), xss(), shippingAddressControllers.createShippingAddress);

router.route('/updateshippingaddress/:user_id/:shipping_address_id').patch(requestValidator(shippingAddressSchemas.updateShippingAddressRequestSchema), xss(), shippingAddressControllers.updateShippingAddress);

router.route('/getshippingaddressbyid/:user_id').get(requestValidator(shippingAddressSchemas.getShippingAddressByIdRequestSchema), xss(), shippingAddressControllers.getShippingAddressById);

router.route('/searchshippingaddress/:user_id').get(requestValidator(shippingAddressSchemas.searchShippingAddressRequestSchema), xss(), shippingAddressControllers.searchShippingAddress);

router.route('/deleteshippingaddressbyid/:user_id').delete(requestValidator(shippingAddressSchemas.getShippingAddressByIdRequestSchema), xss(), shippingAddressControllers.deleteShippingAddressById);

module.exports = router;