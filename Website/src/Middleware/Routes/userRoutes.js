const express = require("express");
const router = express.Router();
const userControllers = require('../Controllers/userControllers');

router.route('/createuser').post(userControllers.createUser);

module.exports = router;