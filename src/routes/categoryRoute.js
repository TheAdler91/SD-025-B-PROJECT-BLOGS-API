const express = require('express');
const { categoryController } = require('../controllers');
const { token } = require('../utils');
const { categoryValidation } = require('../middlewares');

const router = express.Router();

router.post('/', token.tokenValidation, categoryValidation.validateFieldName,
categoryController.insert);

module.exports = router;