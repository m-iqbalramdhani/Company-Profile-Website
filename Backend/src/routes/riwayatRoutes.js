const express = require('express');
const router = express.Router();
const controller = require('../controllers/riwayatController');
const { validateCreate } = require('../middleware/riwayatValidation');

router.get('/', controller.getAll);
router.get('/personil/:id_personil', controller.getByPersonil);
router.post('/', validateCreate, controller.create);
router.put('/:id_riwayat', controller.update);
router.delete('/:id_riwayat', controller.remove);

module.exports = router;
