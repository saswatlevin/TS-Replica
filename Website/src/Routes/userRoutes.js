const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');
const requestValidator = require('../Validators/requestValidator');
const userSchemas = require('../Schemas/userSchemas');
const { xss } = require('express-xss-sanitizer');
const { verifyToken } = require('../Auth/auth');

router.route('/registeruser').post(requestValidator(userSchemas.userRequestSchema), xss(), userControllers.registerUser);

router.route('/loginuser').post(requestValidator(userSchemas.loginRequestSchema), xss(), userControllers.loginUser);

router.route('/logoutuser').post(userControllers.logoutUser);

router.route('/updateuser/:user_id').patch(requestValidator(userSchemas.updateUserSchema), xss(), userControllers.updateUser);

router.route('/updateuserpassword/:user_id').patch(requestValidator(userSchemas.updateUserPasswordSchema), xss(), userControllers.updateUserPassword);

router.route('/getuserbyid').get(requestValidator(userSchemas.getUserByIdSchema), verifyToken(['admin']), xss(), userControllers.getUserById);

router.route('/searchusersbyname').get(requestValidator(userSchemas.searchUsersByNameSchema), verifyToken(['admin']), xss(), userControllers.searchUsersByName);

router.route('/deleteuser').delete(requestValidator(userSchemas.getUserByIdSchema), xss(), userControllers.deleteUser);


module.exports = router;