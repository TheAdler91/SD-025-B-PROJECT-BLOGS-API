const express = require('express');
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares');
const { token } = require('../utils');

const router = express.Router();

router.get('/:id', token.tokenValidation, userController.findById);

router.get('/', token.tokenValidation, userController.getAll);

router.post('/', userValidation.validateUser, userController.insert);

module.exports = router;