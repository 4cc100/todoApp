require('dotenv').load();

const bodyParser = require('body-parser');
const express    = require('express');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send("hello from the root route");
});

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});