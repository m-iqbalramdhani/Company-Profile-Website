const express = require('express');
const router = express.Router();
const controller = require('../controllers/personilController');
const { validateCreate, validateUpdate } = require('../middleware/personilValidation');

// CRUD Personil
router.get('/', controller.getAll);
router.get('/search', controller.search);
router.get('/:id_personil', controller.getById);
router.post('/', validateCreate, controller.create);
router.put('/:id_personil', validateUpdate, controller.update);
router.delete('/:id_personil', controller.remove);

module.exports = router;

