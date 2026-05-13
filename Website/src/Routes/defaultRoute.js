const express = require('express');
const router = express.Router();
const defaultController = require('../Controllers/defaultController');

router.route('/').get(defaultController);

module.exports = router;