const userModel = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.findAll = (req, res) => {
  userModel.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Failed to get users' }));
};

module.exports.findUser = (req, res) => {
  userModel.findById({ _id: req.params.id })
    .then((user) => ((user) ? res.send({ data: user }) : res.status(404).send({ message: `User with id '${req.params.id}' not found` })))
    .catch(() => res.status(500).send({ message: 'Failed to get user' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar, email, password } = req.body;
  bcryptjs.hash(password, 10)
    .then(hash => userModel.create({ name, about, avatar, email, password: hash }))
    .then((user) => res.send({ data: user }))
    .catch((err) => ((err.name === 'ValidationError') ? res.status(400).send({ message: 'Validation error' }) : res.status(500).send({ message: 'Failed to create user' })));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  return findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    })
};