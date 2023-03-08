const express = require('express');
const { postController } = require('../controllers');
const { token } = require('../utils');

const router = express.Router();

router.get('/', token.tokenValidation, postController.findAll);

module.exports = router;