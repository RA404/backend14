const cardRouter = require('express').Router();
const { findAll, deleteCard, createCard } = require('../controllers/cards');
const auth = require('../middlewares/auth');

cardRouter.get('/', auth.auth, findAll);
cardRouter.delete('/:id', auth.auth, deleteCard);
cardRouter.post('/', auth.auth, createCard);

module.exports = cardRouter;
