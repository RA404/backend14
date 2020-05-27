require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DATABASE_URL } = require('./config.js');
const users = require('./routes/users');
const cards = require('./routes/cards');
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const crash = require('./routes/crash');

const app = express();

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/crash-test', crash);
app.use('/users', users);
app.use('/cards', cards);

app.use(errorLogger);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send(statusCode === 500 ? { message: 'Internal Server Error' } : message);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening ${PORT}`);
});
