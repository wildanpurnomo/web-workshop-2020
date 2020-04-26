const controller = require('./aboutController');
const express = require('express');
const router = express.Router();

router.get('/about', controller.getAboutPage);

module.exports = router