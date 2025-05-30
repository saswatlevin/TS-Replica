const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');

router.route('/registeruser').post(userControllers.registerUser);
router.route('/updateuser').put(userControllers.updateUser);
router.route('/updateuserpassword').put(userControllers.updateUserPassword);

module.exports = router;