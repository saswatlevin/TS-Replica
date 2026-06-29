const express = require("express");
const router = express.Router();
const shippingAddressControllers = require('../Controllers/shippingAddressControllers');
const requestValidator = require('../Validators/requestValidator');
const shippingAddressSchemas = require('../Schemas/shippingAddressSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');

router.route('/createshippingaddress').post(requestValidator(shippingAddressSchemas.shippingAddressRequestSchema), verifyToken(['admin', 'user']), xss(), shippingAddressControllers.createShippingAddress);

router.route('/updateshippingaddress').patch(requestValidator(shippingAddressSchemas.updateShippingAddressRequestSchema), verifyToken(['admin', 'user']), xss(), shippingAddressControllers.updateShippingAddress);

router.route('/getshippingaddressbyid').get(requestValidator(shippingAddressSchemas.getShippingAddressByIdRequestSchema), verifyToken(['admin', 'user']), xss(), shippingAddressControllers.getShippingAddressById);

router.route('/searchshippingaddress').get(requestValidator(shippingAddressSchemas.searchShippingAddressRequestSchema), verifyToken(['admin', 'user']), xss(), shippingAddressControllers.searchShippingAddress);

router.route('/deleteshippingaddressbyid').delete(requestValidator(shippingAddressSchemas.getShippingAddressByIdRequestSchema), verifyToken(['admin', 'user']), xss(), shippingAddressControllers.deleteShippingAddressById);

module.exports = router;