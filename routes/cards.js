const cardRouter = require('express').Router();
const joi = require('joi');
const { findAll, deleteCard, createCard } = require('../controllers/cards');
const auth = require('../middlewares/auth');
const schemaCards = require('../schemas/cards');

// eslint-disable-next-line no-shadow
const validate = (schemaCards) => (req, res, next) => {
  joi.validate(req.body, schemaCards)
    .then(() => next())
    .catch(next);
};

cardRouter.get('/', auth.auth, findAll);
cardRouter.delete('/:id', auth.auth, deleteCard);
cardRouter.post('/', auth.auth, validate(schemaCards), createCard);

module.exports = cardRouter;
