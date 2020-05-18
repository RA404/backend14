const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PORT, DATABASE_URL } = require('./config.js');
const users = require('./routes/users');
const cards = require('./routes/cards');
const auth = require('./middlewares/auth')

const app = express();

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/signup', createUser);
app.post('/signin', login);
app.use(auth);
app.use('/users', users);
app.use('/cards', cards);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening ${PORT}`);
});
