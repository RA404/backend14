const crashRouter = require('express').Router();

crashRouter.get('/', () => {
  setTimeout(() => {
    throw new Error('Server is crashing now');
  }, 0);
});

module.exports = crashRouter;
