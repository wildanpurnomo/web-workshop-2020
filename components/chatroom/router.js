const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getGroupRoom);

router.get('/bot', controller.getBotRoom);

module.exports = router;