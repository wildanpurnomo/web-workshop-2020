const express = require('express');
const router = express.Router();
const controller = require('./searchController');

router.get('/search/:keyword', controller.getWiki);

module.exports = router;