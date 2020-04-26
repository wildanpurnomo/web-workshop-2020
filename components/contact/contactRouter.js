const controller = require('./contactController');
const express = require('express');
const router = express.Router();

router.get('/contact', controller.getContactPage);

module.exports = router