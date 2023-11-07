const express = require('express');
const router = express.Router();
const {
  createBaby,
  getBabies,
  getBabyById,
  updateBaby,
  deleteBabyById,
} = require('../controllers/baby');
const validator = require('../middlewares/validator');
const {
  schemaCreateBaby,
  schemaUpdateBaby,
  paramsSchema
} = require('../validations/baby.js');
const jwtValidator = require('../middlewares/jwt');

//Create Baby
router.post('/baby', jwtValidator, validator.body(schemaCreateBaby), createBaby);

//Get all Babys
router.get('/babys', jwtValidator, getBabies);

//Get Baby by Id
router.get('/babys/:id', jwtValidator, validator.params(paramsSchema), getBabyById);

//Update Baby by Id
router.put("/babys/:id", jwtValidator, validator.params(paramsSchema), validator.body(schemaUpdateBaby), updateBaby);

//Delete Baby by Id
router.delete("/babys/:id", jwtValidator, validator.params(paramsSchema), deleteBabyById);

module.exports = router;
