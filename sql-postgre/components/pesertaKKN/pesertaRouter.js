const express = require('express');
const controller = require('./pesertaController');
const router = express.Router();

router.get('/peserta', controller.getAll);

router.post('/peserta', controller.insert);

module.exports = router;