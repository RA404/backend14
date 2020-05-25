const joi = require('joi');
const ErrorBadRequest = require('../errors/ErrorBadRequest');

module.exports = joi.object().keys({
  name: joi.string(),
  link: joi.string().uri().error(() => new ErrorBadRequest({ message: 'Invalid url' })),
  owner: joi.string(),
  likes: joi.array(),
  createAt: joi.date(),
});
