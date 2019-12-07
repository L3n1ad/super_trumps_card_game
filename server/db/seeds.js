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

db.superHeroes.insertMany([
  {
    "response": "success",
    "id": "30",
    "name": "Ant-Man",
    "powerstats": {
      "intelligence": "100",
      "strength": "18",
      "speed": "23",
      "durability": "28",
      "power": "32",
      "combat": "32"
    },
    "biography": {
      "full-name": "Hank Pym",
      "alter-egos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
      "aliases": [
        "Hank Pym",
        "Doctor Pym",
        "Ant-Man",
        "Goliath",
        "Yellowjacket",
        "Wasp",
        "Earth's Scientist Supreme"
      ],
      "place-of-birth": "Elmsford, New York",
      "first-appearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
      "publisher": "Giant-Man",
      "alignment": "good"
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'11",
        "211 cm"
      ],
      "weight": [
        "270 lb",
        "122 kg"
      ],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    "work": {
      "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
      "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
    },
    "connections": {
      "group-affiliation": "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
      "relatives": "-"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/857.jpg"
    }
  },
  {
  "response": "success",
  "id": "38",
  "name": "Aquaman",
  "powerstats": {
    "intelligence": "81",
    "strength": "85",
    "speed": "79",
    "durability": "80",
    "power": "100",
    "combat": "80"
  },
  "biography": {
    "full-name": "Orin",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Dweller in the Depths",
      "Swimmer",
      "Waterbearer",
      "Mental Man",
      "Aquaboy",
      "Water Wraith"
    ],
    "place-of-birth": "Atlantis",
    "first-appearance": "More Fun Comics #73 (November, 1941)",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Atlantean",
    "height": [
      "6'1",
      "185 cm"
    ],
    "weight": [
      "325 lb",
      "146 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "Protector of the Seas and Oceans, King of Poseidonis",
    "base": "Atlantean Royal Palace; Poseidonis, Atlantis"
  },
  "connections": {
    "group-affiliation": "Justice League, Aquaman Family, Atlantean Royal Family; formerly Black Lantern Corps, Justice League International, Justice League Detroit, U.N.",
    "relatives": "Koryak (son), Arthur Curry, Jr. (son), A.J. (son), Orm Marius (half-brother), Debbie Perkins (half-sister), Drin (adopted brother), Atlanna (mother), Atlan (father), Atlena (aunt), Porm (adopted mother), Tom Curry (adopted father), Mera (wife), Hila (sister-in-law), Haumond (uncle), Kraken (uncle), Honsu (grandfather), Lorelei (grandmother), Manu (ancestor), Nala (ancestor), Fatima (ancestor), Kalunga (ancestor), Gana (ancestor), Fiona (ancestor), Regin (ancestor), Kordax (ancestor), Bazil (ancestor), Cora (ancestor), Illya (ancestor), Dardanus (ancestor), Alloroc (ancestor), Cole (ancestor), Narmea (ancestor), Orin (ancestor), Loma (ancestor), Shalako (ancestor), Thorvall (ancestor)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/634.jpg"
  }
}
])
