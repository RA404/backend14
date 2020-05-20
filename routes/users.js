const userRouter = require('express').Router();
const joi = require('joi');

const {
  findAll,
  findUser,
  createUser,
  login,
} = require('../controllers/users');
const auth = require('../middlewares/auth');
const schemaSignUp = require('../schemas/signUp');

// eslint-disable-next-line no-shadow
const validate = (schemaSignUp) => (req, res, next) => {
  joi.validate(req.body, schemaSignUp)
    .then(() => next())
    .catch((err) => res.status(400).send({ message: err.message }));
};

userRouter.get('/', auth.auth, findAll);
userRouter.get('/:id', auth.auth, findUser);
userRouter.post('/signup', validate(schemaSignUp), createUser);
userRouter.post('/signin', login);

module.exports = userRouter;
