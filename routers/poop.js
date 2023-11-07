const express = require('express');
const router = express.Router();
const {
  createPoop,
  getPoops,
  getPoopByScore,
  updatePoop,
  deletePoopById,
} = require('../controllers/poop');
const validator = require('../middlewares/validator');
const {
  schemaCreatePoop,
  schemaUpdatePoop,
  paramsSchema
} = require('../validations/baby.js');
const jwtValidator = require('../middlewares/jwt');

//Create Poop
router.post('/poop', jwtValidator, validator.body(schemaCreatePoop), createPoop);

//Get all Poops
router.get('/poops', jwtValidator, getPoops);

//Get Poop by Score
router.get('/poops/:score', jwtValidator, validator.params(paramsSchema), getPoopByScore);

//Update Poop by Id
router.put("/poops/:id", jwtValidator, validator.params(paramsSchema), validator.body(schemaUpdatePoop), updatePoop);

//Delete Poop by Id
router.delete("/poops/:id", jwtValidator, validator.params(paramsSchema), deletePoopById);

module.exports = router;
