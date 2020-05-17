const cardModel = require('../models/cards');

module.exports.findAll = (req, res) => {
  cardModel.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Failed to get cards' }));
};

module.exports.deleteCard = (req, res) => {
  cardModel.findByIdAndRemove({ _id: req.params.id })
    .then((card) => ((card) ? res.send({ data: card }) : res.status(404).send({ message: `Card with id '${req.params.id}' not found` })))
    .catch(() => res.status(500).send({ message: 'Failed to delete card' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => ((err.name === 'ValidationError') ? res.status(400).send({ message: 'Link validation failed' }) : res.status(500).send({ message: 'Failed to create card' })));
};
