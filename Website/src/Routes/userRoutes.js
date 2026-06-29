const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');
const requestValidator = require('../Validators/requestValidator');
const userSchemas = require('../Schemas/userSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');

router.route('/registeruser').post(requestValidator(userSchemas.userRequestSchema),  verifyToken(['admin', 'user']), xss(), userControllers.registerUser);

router.route('/loginuser').post(requestValidator(userSchemas.loginRequestSchema), xss(), userControllers.loginUser);

router.route('/logoutuser').post(userControllers.logoutUser);

router.route('/updateuser').patch(requestValidator(userSchemas.updateUserSchema),  verifyToken(['admin', 'user']), xss(), userControllers.updateUser);

router.route('/updateuserpassword').patch(requestValidator(userSchemas.updateUserPasswordSchema),  verifyToken(['admin', 'user']), xss(), userControllers.updateUserPassword);

router.route('/getuserbyid').get(requestValidator(userSchemas.getUserByIdSchema), verifyToken(['admin']), xss(), userControllers.getUserById);

router.route('/searchusersbyname').get(requestValidator(userSchemas.searchUsersByNameSchema), verifyToken(['admin']), xss(), userControllers.searchUsersByName);

router.route('/deleteuser').delete(requestValidator(userSchemas.getUserByIdSchema),  verifyToken(['admin', 'user']), xss(), userControllers.deleteUser);


module.exports = router;