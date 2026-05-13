const express = require('express');
const router = express.Router();
const urlNotFoundController = require('../Controllers/urlNotFoundController');

router.route('/{*any}').all(urlNotFoundController);

module.exports = router;