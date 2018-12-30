require('dotenv').load();

const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');


app.get('/', (req, res) => {
  res.send("hello from the root route");
});

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});