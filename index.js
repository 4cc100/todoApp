require('dotenv').load();

const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send("hi there!");
});

app.get('/happy', (req, res) => {
  res.send(":)");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});