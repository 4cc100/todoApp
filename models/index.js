require('dotenv').load();

const Todo = require('./todo');

// console.log(process.env)

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.TODOAPPCOLT_DB_URI, {useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = {
  Todo: Todo,
}
