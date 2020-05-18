const userRouter = require('express').Router();
const { findAll, findUser, createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

userRouter.get('/', auth.auth, findAll);
userRouter.get('/:id', auth.auth, findUser);
userRouter.post('/signup', createUser);
userRouter.post('/signin', login);

module.exports = userRouter;
