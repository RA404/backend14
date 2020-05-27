const joi = require('joi');
const ErrorBadRequest = require('../errors/ErrorBadRequest');

module.exports = joi.object().keys({
  name: joi.string().required().min(2).max(30)
    .error(() => new ErrorBadRequest({ message: 'The name must be longer than 2 and less than 30 characters' })),
  link: joi.string().required().uri().error(() => new ErrorBadRequest({ message: 'Invalid url' })),
  owner: joi.string(),
  likes: joi.array(),
  createAt: joi.date(),
});
