const cardModel = require('../models/cards');
const ErrorNotFound = require('../errors/ErrorNotFound');

module.exports.findAll = (req, res, next) => {
  cardModel.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  cardModel.findByIdAndRemove({ _id: req.params.id })
    .then((card) => {
      if (!card) {
        throw new ErrorNotFound({ message: `Card with id '${req.params.id}' not found` });
      }
      res.send({ data: card });
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch(next);
};
