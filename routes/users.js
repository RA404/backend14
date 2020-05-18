const userRouter = require('express').Router();
const { findAll, findUser, createUser, login } = require('../controllers/users');

userRouter.get('/', findAll);
userRouter.get('/:id', findUser);
// userRouter.post('/signup', createUser);
// userRouter.post('/signin', login);

module.exports = userRouter;
