const { Router } = require('express');
const controller = require('../controllers/plants.controller');
const { validateId, validatePlant } = require('../middlewares/validate');

const router = Router();

router.get('/', controller.list);
router.get('/:id', validateId, controller.getById);
router.post('/', validatePlant, controller.create);
router.put('/:id', validateId, validatePlant, controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;