const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserbyId } = require('../controllers/user');
const validator = require('../middlewares/validator');
const { createUserSchema, paramsSchema } = require('../validations/user');

//Create User
router.post('/user', validator.body(createUserSchema), createUser);

//Get all Users
router.get('/users', getUsers);

//Get Users by Id
router.get('/user/:id', validator.params(paramsSchema), getUserbyId);

module.exports = router;
