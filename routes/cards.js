const cardRouter = require('express').Router();
const { findAll, deleteCard, createCard } = require('../controllers/cards');

cardRouter.get('/', findAll);
cardRouter.delete('/:id', deleteCard);
cardRouter.post('/', createCard);

module.exports = cardRouter;
