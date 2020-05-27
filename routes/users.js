const userRouter = require('express').Router();

const {
  findAll,
  findUser,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

userRouter.get('/', auth.auth, findAll);
userRouter.get('/:id', auth.auth, findUser);

module.exports = userRouter;
