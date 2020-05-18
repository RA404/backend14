const userRouter = require('express').Router();
const { findAll, findUser, createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const schemaSignUp = require('../schemas/signUp');
const joi = require('joi');

const validate = (schemaSignUp) => {
  return (req, res, next) => {
    joi.validate(req.body, schemaSignUp)
      .then(() => next())
      .catch((err) => {
        return res.status(400).send({ message: err.message })
      })
  }
}

userRouter.get('/', auth.auth, findAll);
userRouter.get('/:id', auth.auth, findUser);
userRouter.post('/signup', validate(schemaSignUp), createUser);
userRouter.post('/signin', login);

module.exports = userRouter;
