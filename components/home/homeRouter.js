const controller = require('./homeController');
const express = require('express');
const router = express.Router();

router.get('/', controller.getHomePage);

module.exports = router