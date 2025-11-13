const express = require('express');
const router = express.Router();
const controller = require('../controllers/databaseController');

// GET semua personil + riwayat
router.get('/', controller.getAllJoined);

// GET personil + riwayat berdasarkan id
router.get('/:id_personil', controller.getById);

module.exports = router;