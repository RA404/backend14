const userRouter = require('express').Router();
const { findAll, findUser, createUser } = require('../controllers/users');

userRouter.get('/', findAll);
userRouter.get('/:id', findUser);
userRouter.post('/', createUser);

module.exports = userRouter;
