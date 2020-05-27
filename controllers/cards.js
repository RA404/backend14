const cardModel = require('../models/cards');
const ErrorNotFound = require('../errors/ErrorNotFound');
// const ErrorForbidden = require('../errors/ErrorForbidden');

module.exports.findAll = (req, res, next) => {
  cardModel.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  cardModel.findOneAndDelete({
    _id: req.params.id,
    owner: req.user._id,
  })
    .orFail(() => new ErrorNotFound({ message: `Card with id '${req.params.id}' not found or you haven't permissions to delete this card` }))
    .then(() => res.send({ message: 'Сard deleted successfully' }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch(next);
};
