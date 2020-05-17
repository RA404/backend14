const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(avatar) {
        return validator.isURL(avatar);
      },
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(email){
        return validator.isEmail(email);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

userSchema.statics.findUserByCredentials = function(email, password){
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(`Can't find user`));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched){
            return Promise.reject(new Error('Wrong login or password'));
          }
          return user;
        })
    })
};

module.exports = mongoose.model('user', userSchema);
