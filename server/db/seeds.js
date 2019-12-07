use super_trumps;
db.dropDatabase();

db.players.insertMany([
  {
    "name": "Eugene",
    "hand": [30],
    "inTurn": true
  },
  {
    "name": "Nelson",
    "hand": [655],
    "inTurn": true
  }
]);
