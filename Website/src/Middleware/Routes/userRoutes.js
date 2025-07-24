const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');
const requestValidator = require('../Validators/requestValidator');
const userSchemas = require('../Schemas/userSchemas');
const { xss } = require('express-xss-sanitizer');

router.route('/registeruser').post(requestValidator(userSchemas.userRequestSchema), xss(), userControllers.registerUser);
router.route('/updateuser').patch(requestValidator(userSchemas.updateUserSchema),  xss(), userControllers.updateUser);
router.route('/updateuserpassword').patch(requestValidator(userSchemas.updateUserPasswordSchema),  xss(), userControllers.updateUserPassword);
router.route('/getuserbyid').get(requestValidator(userSchemas.getUserByIdSchema),  xss(), userControllers.getUserById);
router.route('/getusersbyname').get(requestValidator(userSchemas.getUsersByNameSchema),  xss(), userControllers.searchUsersByName);
//router.route('/objectidtest').get(userControllers.objectIdTest);

module.exports = router;