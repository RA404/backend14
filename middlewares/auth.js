const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, data) => {
      if (err){
        reject(err);
      }
      resolve(data);
    })
  })
}

module.exports.auth = async (req, res, next) =>  {
  try{
    const data = await verifyToken(req.cookies.jwt);
    const user = await userModel.findById(data._id);
    if (!user){
      return res.status(401).send({ message: 'Sign in to your account'});  
    }
    req.user = user;
    next();
  }
  catch(err){
    return res.status(401).send({ message: 'Sign in to your account'});
  }

}