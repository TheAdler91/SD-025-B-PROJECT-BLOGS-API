const express = require('express');
const { loginValidation } = require('../middlewares');
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', loginValidation, loginController.userLogin);

module.exports = router;