const express = require('express');
const router = express.Router();
const controller = require('./pesertaController.js');

// route for GET all peserta
router.get('/peserta', controller.get);

// route for POST peserta
router.post('/peserta', controller.post);

// route for PUT peserta
router.put('/peserta/:id', controller.put);

// route for Delete peserta
router.delete('/peserta/:id', controller.delete);

// export router
module.exports = router;
