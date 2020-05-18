const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>  {
  const { authorization } = req.headers;

  if (!authorization|| !authorization.startsWith('Bearer ')){
    req.status(401).send({ message: 'Sign in to your account'});
  }

  const token = authorization.replace('Bearer ', '');

  let payload;
  try{
    payload = jwt.verify(token, 'some-secret-key');
  }catch(err){
    req.status(401).send({ message: 'Sign in to your account'});
  }

  req.user = payload;

  next();
}