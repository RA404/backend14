const joi = require('joi');
const ErrorBadRequest = require('../errors/ErrorBadRequest');

module.exports = joi.object().keys({
  name: joi.string(),
  about: joi.string(),
  avatar: joi.string(),
  email: joi.string().email().error(() => new ErrorBadRequest({ message: 'Invalid email' })),
  password: joi.string().min(8).required().error(() => new ErrorBadRequest({ message: 'Password must be longer than 8 character' })),
});
