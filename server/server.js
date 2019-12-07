const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('super_trumps');
    const playersCollection = db.collection('players');
    app.use('/api/players', createRouter(playersCollection));
  })
  .catch(console.error);

MongoClient.connect('mongodb://localhost:27017')
.then(client => {
  const db = client.db('super_trumps');
  const superHeroCollection = db.collection('superHeroes');
  app.use('/api/superHeroes', createRouter(superHeroCollection));
})

app.listen(3000, function() {
  console.log(`Super Trumps server running on port ${this.address().port}`);
});
