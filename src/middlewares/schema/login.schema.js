const Joi = require('joi');

const bodyValidation = Joi.object().keys({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

module.exports = { bodyValidation };