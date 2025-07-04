const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');
const requestValidator = require('../Validators/requestValidator');
const userSchemas = require('../Schemas/userSchemas');

router.route('/registeruser').post(requestValidator(userSchemas.userRequestSchema), userControllers.registerUser);
router.route('/updateuser').put(requestValidator(userSchemas.updateUserSchema), userControllers.updateUser);
router.route('/updateuserpassword').put(requestValidator(userSchemas.updateUserPasswordSchema), userControllers.updateUserPassword);
router.route('/getuserbyid').get(requestValidator(userSchemas.getUserByIdSchema), userControllers.getUserById);
router.route('/getusersbyname').get(requestValidator(userSchemas.getUsersByNameSchema), userControllers.searchUsersByName);
//router.route('/objectidtest').get(userControllers.objectIdTest);

module.exports = router;