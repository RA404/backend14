const joi = require('joi');

module.exports = joi.object().keys({
  name: joi.string(),
  about: joi.string(),
  avatar: joi.string(),
  email: joi.string().email(),
  password: joi.string().min(8).required(),
});
