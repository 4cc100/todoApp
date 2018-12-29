require('dotenv').load();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();


function getMongoClient(callback) {
  MongoClient.connect(process.env.DB_URI, { useNewUrlParser: true }, (err, db) => {
    if(err) {
      throw new Error(err);
    } else {

      const clientPlatfrom = db.topology.clientInfo.platform;
      const dbName = db.s.options.db;
      console.info(`Successfully connected to ${dbName} database from the ${clientPlatfrom} clientplatform...`);

      callback(db);
    }
  });
}

function getDB() {
  getMongoClient((mongoClient) => mongoClient.db(mongoClient.s.options.db));
}
getDB();

function disconnect() {
  return mongoClient.close();
}

app.get('/', (req, res) => {
  res.send("hi there!");
});

app.get('/happy', (req, res) => {
  res.send(":)");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});