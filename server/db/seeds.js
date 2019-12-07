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
},
{
  "response": "success",
  "id": "70",
  "name": "Batman",
  "powerstats": {
    "intelligence": "100",
    "strength": "26",
    "speed": "27",
    "durability": "50",
    "power": "47",
    "combat": "100"
  },
  "biography": {
    "full-name": "Bruce Wayne",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Insider",
      "Matches Malone"
    ],
    "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
    "first-appearance": "Detective Comics #27",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "210 lb",
      "95 kg"
    ],
    "eye-color": "blue",
    "hair-color": "black"
  },
  "work": {
    "occupation": "Businessman",
    "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
  },
  "connections": {
    "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
    "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
  }
},
{
  "response": "success",
  "id": "106",
  "name": "Black Panther",
  "powerstats": {
    "intelligence": "88",
    "strength": "16",
    "speed": "30",
    "durability": "60",
    "power": "41",
    "combat": "100"
  },
  "biography": {
    "full-name": "T'Challa",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Mr. Okonkwo",
      "The Man Without Fear",
      "Luke Charles",
      "Black Leopard",
      "the Client",
      "Coal Tiger",
      "has impersonated Daredevil and others on occasion"
    ],
    "place-of-birth": "Wakanda, Africa",
    "first-appearance": "Fantastic Four Vol. 1 #52 (1966)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "200 lb",
      "90 kg"
    ],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "King and Chieftain of Wakanda, scientist; former school teacher",
    "base": "Wakanda, Mobile"
  },
  "connections": {
    "group-affiliation": "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
    "relatives": "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T�Chaka (father, deceased), S'Yan (uncle, deceased), N�Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/247.jpg"
  }
},
{
  "response": "success",
  "id": "104",
  "name": "Black Mamba",
  "powerstats": {
    "intelligence": "75",
    "strength": "10",
    "speed": "35",
    "durability": "42",
    "power": "88",
    "combat": "65"
  },
  "biography": {
    "full-name": "Tanya Sealy",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Tanya Sweet"
    ],
    "place-of-birth": "Chicago, Illinois",
    "first-appearance": "Marvel Two-In-One #64",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Female",
    "race": "null",
    "height": [
      "5'7",
      "170 cm"
    ],
    "weight": [
      "115 lb",
      "52 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Mercenary, professional criminal, former call girl",
    "base": "Mobile, formerly Serpent Citadel"
  },
  "connections": {
    "group-affiliation": "Serpent Squad, Serpent Society, BAD Girls",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/1106.jpg"
  }
},
{
  "response": "success",
  "id": "127",
  "name": "Boba Fett",
  "powerstats": {
    "intelligence": "63",
    "strength": "10",
    "speed": "38",
    "durability": "36",
    "power": "68",
    "combat": "70"
  },
  "biography": {
    "full-name": "",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Teff",
      "Sava Brek Madak",
      "Jaster Mereel",
      "Mandalore",
      "Mand'alor"
    ],
    "place-of-birth": "Kamino",
    "first-appearance": "-",
    "publisher": "George Lucas",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human / Clone",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "- lb",
      "0 kg"
    ],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Bounty Hunter",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "-",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10467.jpg"
  }
},
{
  "response": "success",
  "id": "149",
  "name": "Captain America",
  "powerstats": {
    "intelligence": "69",
    "strength": "19",
    "speed": "38",
    "durability": "55",
    "power": "60",
    "combat": "100"
  },
  "biography": {
    "full-name": "Steve Rogers",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Nomad",
      "The Captain"
    ],
    "place-of-birth": "Manhattan, New York City, New York",
    "first-appearance": "Captain America Comics #1 (March 1941)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "240 lb",
      "108 kg"
    ],
    "eye-color": "blue",
    "hair-color": "blond"
  },
  "work": {
    "occupation": "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
    "base": "New York City"
  },
  "connections": {
    "group-affiliation": "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
    "relatives": "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"
  }
},
{
  "response": "success",
  "id": "157",
  "name": "Captain Marvel",
  "powerstats": {
    "intelligence": "84",
    "strength": "88",
    "speed": "71",
    "durability": "95",
    "power": "100",
    "combat": "90"
  },
  "biography": {
    "full-name": "Carol Danvers",
    "alter-egos": "Binary, Warbird",
    "aliases": [
      "Ace",
      "Binary",
      "Lady Marvel",
      "Warbird",
      "others used during her espionage career"
    ],
    "place-of-birth": "Boston, Massachusetts",
    "first-appearance": "Ms. Marvel #1",
    "publisher": "Binary",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "Human-Kree",
    "height": [
      "5'11",
      "180 cm"
    ],
    "weight": [
      "165 lb",
      "74 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
    "base": "Avengers Mansion"
  },
  "connections": {
    "group-affiliation": "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
    "relatives": "Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) (\"son\", deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/103.jpg"
  }
},
{
  "response": "success",
  "id": "165",
  "name": "Catwoman",
  "powerstats": {
    "intelligence": "69",
    "strength": "11",
    "speed": "33",
    "durability": "28",
    "power": "27",
    "combat": "85"
  },
  "biography": {
    "full-name": "Selina Kyle",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "The Cat",
      "Irena Dubrovna",
      "Elva Barr",
      "Sadie Kelowski",
      "Madame Moderne",
      "Marguerite Tone"
    ],
    "place-of-birth": "Gotham City",
    "first-appearance": "Detective Comics #569",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "Human",
    "height": [
      "5'9",
      "175 cm"
    ],
    "weight": [
      "135 lb",
      "61 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Thief",
    "base": "Gotham City"
  },
  "connections": {
    "group-affiliation": "Batman Family, Outsiders; formerly Birds of Prey, Injustice League, Secret Society of Super-Villains",
    "relatives": "Brian Kyle (father, deceased), Maria Kyle (mother, deceased), Maggie Kyle (sister), Helena Kyle (daughter)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/659.jpg"
  }
},
{
  "response": "success",
  "id": "194",
  "name": "Cyborg",
  "powerstats": {
    "intelligence": "75",
    "strength": "53",
    "speed": "42",
    "durability": "85",
    "power": "71",
    "combat": "64"
  },
  "biography": {
    "full-name": "Victor Stone",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Cyberion Technis",
      "Omegadrome",
      "Planet Cyberion"
    ],
    "place-of-birth": "New York City, New York",
    "first-appearance": "DC Comics Presents #26 (October, 1980)",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Cyborg",
    "height": [
      "6'6",
      "198 cm"
    ],
    "weight": [
      "385 lb",
      "173 kg"
    ],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Adventurer, Teen Titan",
    "base": "San Francisco"
  },
  "connections": {
    "group-affiliation": "Justice League; formerly Teen Titans, Titans, Titans East, New Teen Titans",
    "relatives": "Silas Stone (father), Elinore Stone (mother), Tucker Stone (grandfather), Maude Stone (grandmother)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/1204.jpg"
  }
},
{
  "response": "success",
  "id": "201",
  "name": "Daredevil",
  "powerstats": {
    "intelligence": "75",
    "strength": "13",
    "speed": "25",
    "durability": "35",
    "power": "61",
    "combat": "100"
  },
  "biography": {
    "full-name": "Matt Murdock",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Matt",
      "Jack Batlin",
      "Kingpin of Crime",
      "Laurent LeVasseur",
      "Michael \"Mike\" Murdock",
      "Scarlet Swashbuckler",
      "Nameless One",
      "Kingpin of Hell's Kitchen",
      "The Man Without Fear",
      "The Guardian Devil",
      "DD",
      "Red",
      "Hornhead",
      "Cooper Peyton",
      "Captain Universe"
    ],
    "place-of-birth": "New York City, New York",
    "first-appearance": "Daredevil #1 (April, 1964)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "200 lb",
      "90 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Red"
  },
  "work": {
    "occupation": "Adventurer, vigilante, Attorney at Law",
    "base": "Hell's Kitchen, New York, New York, Shadowland (formerly)"
  },
  "connections": {
    "group-affiliation": "none; Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.",
    "relatives": "Jonathan \"Battling Jack\" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/52.jpg"
  }
},
{
  "response": "success",
  "id": "332",
  "name": "Hulk",
  "powerstats": {
    "intelligence": "88",
    "strength": "100",
    "speed": "63",
    "durability": "100",
    "power": "98",
    "combat": "85"
  },
  "biography": {
    "full-name": "Bruce Banner",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Annihilator",
      "Captain Universe",
      "Joe Fixit",
      "Mr. Fixit",
      "Mechano",
      "Professor",
      "Jade Jaws",
      "Golly Green Giant"
    ],
    "place-of-birth": "Dayton, Ohio",
    "first-appearance": "Incredible Hulk #1 (May, 1962)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human / Radiation",
    "height": [
      "8'0",
      "244 cm"
    ],
    "weight": [
      "1400 lb",
      "630 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Green"
  },
  "work": {
    "occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
    "base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
  },
  "connections": {
    "group-affiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
    "relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
  }
},
{
  "response": "success",
  "id": "720",
  "name": "Wonder Woman",
  "powerstats": {
    "intelligence": "88",
    "strength": "100",
    "speed": "79",
    "durability": "100",
    "power": "100",
    "combat": "100"
  },
  "biography": {
    "full-name": "Diana Prince",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Princess Diana",
      "Princess of the Amazons",
      "Goddess of Truth",
      " Wondy",
      "Wonder Girl",
      "The Amazon Princess"
    ],
    "place-of-birth": "Themyscira",
    "first-appearance": "All-Star Comics #8 (December, 1941)",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "Amazon",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "165 lb",
      "74 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
    "relatives": "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
  }
},
{
  "response": "success",
  "id": "346",
  "name": "Iron Man",
  "powerstats": {
    "intelligence": "100",
    "strength": "85",
    "speed": "58",
    "durability": "85",
    "power": "100",
    "combat": "64"
  },
  "biography": {
    "full-name": "Tony Stark",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Iron Knight",
      "Hogan Potts",
      "Spare Parts Man",
      "Cobalt Man II",
      "Crimson Dynamo",
      "Ironman"
    ],
    "place-of-birth": "Long Island, New York",
    "first-appearance": "Tales of Suspence #39 (March, 1963)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'6",
      "198 cm"
    ],
    "weight": [
      "425 lb",
      "191 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
    "base": "Seattle, Washington"
  },
  "connections": {
    "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
    "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
  }
},
{
  "response": "success",
  "id": "561",
  "name": "Robin",
  "powerstats": {
    "intelligence": "88",
    "strength": "11",
    "speed": "27",
    "durability": "28",
    "power": "32",
    "combat": "85"
  },
  "biography": {
    "full-name": "Dick Grayson",
    "alter-egos": "Batman II, Nightwing",
    "aliases": [
      "Renegade",
      "The Target",
      "Freddie Dinardo"
    ],
    "place-of-birth": "-",
    "first-appearance": "Detective Comics #38 (April, 1940)",
    "publisher": "Batman II",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "5'10",
      "178 cm"
    ],
    "weight": [
      "175 lb",
      "79 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "-",
    "base": "Wayne Tower, Gotham City; formerly the Batcave;  formerly Bl�dhaven;  formerly New York City"
  },
  "connections": {
    "group-affiliation": "Batman Family, Batman Incorporated, Justice League; formerly Teen Titans, Outsiders, Bludhaven Police Department, Secret Society of Super-Villains",
    "relatives": "John Grayson (father), Mary Grayson (mother), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Jason Todd (adoptive brother), Tim Drake (adoptive brother), Cassandra Cain (adoptive sister)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/850.jpg"
  }
},
{
  "response": "success",
  "id": "659",
  "name": "Thor",
  "powerstats": {
    "intelligence": "69",
    "strength": "100",
    "speed": "83",
    "durability": "100",
    "power": "100",
    "combat": "100"
  },
  "biography": {
    "full-name": "Thor Odinson",
    "alter-egos": "Rune King Thor",
    "aliases": [
      "Donald Blake",
      "Sigurd Jarlson",
      "Jake Olsen",
      "Donar the Mighty"
    ],
    "place-of-birth": "Asgard",
    "first-appearance": "Journey into Mystery #83 (August, 1962)",
    "publisher": "Rune King Thor",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Asgardian",
    "height": [
      "6'6",
      "198 cm"
    ],
    "weight": [
      "640 lb",
      "288 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "King of Asgard; formerly EMS Technician; Physician",
    "base": "New York, New York"
  },
  "connections": {
    "group-affiliation": "Avengers",
    "relatives": "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
  }
},
{
  "response": "success",
  "id": "620",
  "name": "Spider-Man",
  "powerstats": {
    "intelligence": "90",
    "strength": "55",
    "speed": "67",
    "durability": "75",
    "power": "74",
    "combat": "85"
  },
  "biography": {
    "full-name": "Peter Parker",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Spiderman",
      "Bag-Man",
      "Black Marvel",
      "Captain Universe",
      "Dusk",
      "Green Hood",
      "Hornet",
      "Mad Dog 336",
      "Peter Palmer",
      "Prodigy",
      "Ricochet",
      "Scarlet Spider",
      "Spider-Boy",
      "Spider-Hulk",
      "Spider-Morphosis"
    ],
    "place-of-birth": "New York, New York",
    "first-appearance": "Amazing Fantasy #15",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "5'10",
      "178 cm"
    ],
    "weight": [
      "165 lb",
      "74 kg"
    ],
    "eye-color": "Hazel",
    "hair-color": "Brown"
  },
  "work": {
    "occupation": "Freelance photographer, teacher",
    "base": "New York, New York"
  },
  "connections": {
    "group-affiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
    "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"
  }
},
{
  "response": "success",
  "id": "644",
  "name": "Superman",
  "powerstats": {
    "intelligence": "94",
    "strength": "100",
    "speed": "100",
    "durability": "100",
    "power": "100",
    "combat": "85"
  },
  "biography": {
    "full-name": "Clark Kent",
    "alter-egos": "Superman Prime One-Million",
    "aliases": [
      "Clark Joseph Kent",
      "The Man of Steel",
      "the Man of Tomorrow",
      "the Last Son of Krypton",
      "Big Blue",
      "the Metropolis Marvel",
      "the Action Ace"
    ],
    "place-of-birth": "Krypton",
    "first-appearance": "ACTION COMICS #1",
    "publisher": "Superman Prime One-Million",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Kryptonian",
    "height": [
      "6'3",
      "191 cm"
    ],
    "weight": [
      "225 lb",
      "101 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Reporter for the Daily Planet and novelist",
    "base": "Metropolis"
  },
  "connections": {
    "group-affiliation": "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
    "relatives": "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
  }
},
{
  "response": "success",
  "id": "423",
  "name": "Magneto",
  "powerstats": {
    "intelligence": "88",
    "strength": "80",
    "speed": "27",
    "durability": "84",
    "power": "91",
    "combat": "80"
  },
  "biography": {
    "full-name": "Erik Magnus Lensherr",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "The Creator",
      "Erik Magnus Lehnsherr",
      "Michael Xavier",
      "White Pilgrim",
      "Erik the RedThe Master of Magnetism"
    ],
    "place-of-birth": "Unrevealed, probably somewhere in Northern Europe",
    "first-appearance": "X-MEN Vol. 1 #1",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Mutant",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "190 lb",
      "86 kg"
    ],
    "eye-color": "Grey",
    "hair-color": "White"
  },
  "work": {
    "occupation": "Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent",
    "base": "Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
  },
  "connections": {
    "group-affiliation": "Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes",
    "relatives": "Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/12.jpg"
  }
},
{
  "response": "success",
  "id": "717",
  "name": "Wolverine",
  "powerstats": {
    "intelligence": "63",
    "strength": "32",
    "speed": "50",
    "durability": "100",
    "power": "89",
    "combat": "100"
  },
  "biography": {
    "full-name": "Logan",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Weapon X",
      "Weapon Ten",
      "Death",
      "Mutate 9601",
      "Jim Logan",
      "Emilio Garra",
      "Weapon Chi",
      "Experiment X",
      "Agent Ten",
      "Peter Richards",
      "Mai kethLogan",
      "Mr. Patch"
    ],
    "place-of-birth": "Alberta, Canada",
    "first-appearance": "Incredible Hulk Vol. 2 #180",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Mutant",
    "height": [
      "5'3",
      "160 cm"
    ],
    "weight": [
      "300 lb",
      "135 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner",
    "base": "Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"
  },
  "connections": {
    "group-affiliation": "X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army",
    "relatives": "John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/161.jpg"
  }
},
{
  "response": "success",
  "id": "298",
  "name": "Green Arrow",
  "powerstats": {
    "intelligence": "81",
    "strength": "12",
    "speed": "35",
    "durability": "28",
    "power": "39",
    "combat": "90"
  },
  "biography": {
    "full-name": "Oliver Queen",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "The Emerald Archer",
      "Battling Bowman"
    ],
    "place-of-birth": "-",
    "first-appearance": "More Fun Comics #73 (November 1941)",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "195 lb",
      "88 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "Professional Crime-fighter; Multi-Billionaire",
    "base": "Star City, California; Formerly Seattle, Washington"
  },
  "connections": {
    "group-affiliation": "Justice League Reserve, Connor Hawke, Mia Dearden,  Arsenal, Green Arrows of the World, Black Canary, Green Lantern Hal Jordan, Shado, Eddie Fyers, Justice League Elite, Seven Soldiers of Victory, All-Star Squadron",
    "relatives": "Conner Hawke (son); Robert (son); Cissie King (possible daughter); Roy Harper - Red Arrow (adoptive son); Dinah Laurel Lance (wife); Dinah Drake Lance (mother-in-law, deceased); Larry Lance (father-in-law, deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/696.jpg"
  }
},
{
  "response": "success",
  "id": "265",
  "name": "Flash II",
  "powerstats": {
    "intelligence": "88",
    "strength": "48",
    "speed": "100",
    "durability": "60",
    "power": "100",
    "combat": "60"
  },
  "biography": {
    "full-name": "Barry Allen",
    "alter-egos": "Black Racer",
    "aliases": [
      "The Scarlet Speedster",
      "the Fastest Man Alive",
      "the Monarch of Motion",
      "the Sultan of Speed"
    ],
    "place-of-birth": "Fallville, Iowa",
    "first-appearance": "Showcase #4 (October, 1956)",
    "publisher": "Black Racer",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Black Racer",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "195 lb",
      "88 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "Forensic Scientist",
    "base": "Central City, Missouri"
  },
  "connections": {
    "group-affiliation": "Flash Family, Justice League of America; formerly Blue Lantern Corps",
    "relatives": "Henry and Nora (parents), Malcolm Thawne (twin), Iris West Allen (wife), Wally West (Flash III, nephew), Don and Dawn Allen (son and daughter), Bart Allen (Flash IV, grandson), Jenni Ognats (granddaughter)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/892.jpg"
  }
},
{
  "response": "success",
  "id": "432",
  "name": "Martian Manhunter",
  "powerstats": {
    "intelligence": "100",
    "strength": "95",
    "speed": "92",
    "durability": "100",
    "power": "100",
    "combat": "85"
  },
  "biography": {
    "full-name": "J'onn J'onzz",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "ohn Jones; J'Onn J'Onzz (alternate spelling); Big Green Buddy; J.J.; Jolly Green Giant; Light to the Light; Manhunter; Manhunter from Mars; Son of Mars; Bronze Wraith",
      "Bloodwynd",
      "many others"
    ],
    "place-of-birth": "-",
    "first-appearance": "Detective Comics #225 (1955)",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Martian",
    "height": [
      "6'7",
      "201 cm"
    ],
    "weight": [
      "300 lb",
      "135 kg"
    ],
    "eye-color": "Red",
    "hair-color": "No Hair"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Darkstars, Justice League of Aliens, Justice League Of America, Justice League Task Force, Justice League Unlimited, Martians, Outsiders",
    "relatives": "M'yrnn J'onzz (father, deceased); Sha'sheen J'onzz (mother, deceased); M'yri'ah (wife, deceased); K'hym (daughter, deceased); Ma'alefa'ak (twin brother); D'all (father-in-law, deceased); J'ahrl J'onzz (ancestor, deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/733.jpg"
  }
},
{
  "response": "success",
  "id": "370",
  "name": "Joker",
  "powerstats": {
    "intelligence": "100",
    "strength": "10",
    "speed": "12",
    "durability": "60",
    "power": "43",
    "combat": "70"
  },
  "biography": {
    "full-name": "Jack Napier",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Red Hood I",
      "Clown Prince of Crime",
      "Harlequin of Hate",
      "Jack Napier",
      "Joe Kerr",
      "Mr. J"
    ],
    "place-of-birth": "-",
    "first-appearance": "Batman #1 (Spring 1940)",
    "publisher": "DC Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'5",
      "196 cm"
    ],
    "weight": [
      "192 lb",
      "86 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Green"
  },
  "work": {
    "occupation": "-",
    "base": "Arkham Asylum, Gotham City; Ha-Hacienda"
  },
  "connections": {
    "group-affiliation": "Black Glove, Injustice Gang, Injustice League, Joker League of Anarchy",
    "relatives": "Jeannie (wife, deceased); Unborn son (deceased); Melvin Reipan (cousin, deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg"
  }
},
{
  "response": "success",
  "id": "514",
  "name": "Penguin",
  "powerstats": {
    "intelligence": "75",
    "strength": "10",
    "speed": "12",
    "durability": "28",
    "power": "30",
    "combat": "45"
  },
  "biography": {
    "full-name": "Oswald Chesterfield Cobblepot",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "-"
    ],
    "place-of-birth": "-",
    "first-appearance": "DETECTIVE COMICS #58 (December, 1941)",
    "publisher": "DC Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "5'2",
      "157 cm"
    ],
    "weight": [
      "175 lb",
      "79 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Trader",
    "base": "Gotham City"
  },
  "connections": {
    "group-affiliation": "-",
    "relatives": "Miranda Cobblepot (Aunt), Miranda (Mother, deceased), Father (deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/753.jpg"
  }
},
{
  "response": "success",
  "id": "530",
  "name": "Punisher",
  "powerstats": {
    "intelligence": "69",
    "strength": "16",
    "speed": "21",
    "durability": "45",
    "power": "42",
    "combat": "100"
  },
  "biography": {
    "full-name": "Frank Castle",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Big Nothing",
      "Major Bateman",
      "Ted Bishop",
      "Cliff Callador",
      "Castigo",
      "Chaloner",
      "Fred D'Amato",
      "Eastman",
      "Charles Fort",
      "Frank Loomis",
      "McRook",
      "Melchior",
      "Joe Rainey",
      "Frank Rook",
      "Richard Rook",
      "Tony Knowlen Ross",
      "Francis Stronghold",
      "Johnny Tower",
      "Dmitri Velikoff",
      "Fra"
    ],
    "place-of-birth": "Queens, New York",
    "first-appearance": "AMAZING SPIDER-MAN #129",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'0'",
      "183 cm"
    ],
    "weight": [
      "200 lb",
      "90 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Former United States Marine turned professional vigilante",
    "base": "Mobile, usually in New York City"
  },
  "connections": {
    "group-affiliation": "None; Formerly Secret Avengers, Daredevil's Unnamed Super-Hero Team, Green Berets, U.S. Marine Corps",
    "relatives": "Maria Castle (Wife, deceased), Christie Castle (Daughter, deceased), Frank Castle Junior (Son, deceased), Mario Castle (Father, deceased), Louisa Castle (Mother, deceased), Rocco Castiglione (Uncle, deceased), Esmerelda Castiglione (Aunt, deceased), Michael Castle (Brother, stillborn, deceased)."
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/112.jpg"
  }
},
{
  "response": "success",
  "id": "275",
  "name": "Gamora",
  "powerstats": {
    "intelligence": "75",
    "strength": "85",
    "speed": "42",
    "durability": "85",
    "power": "53",
    "combat": "100"
  },
  "biography": {
    "full-name": "Gamora Zen Whoberi Ben Titan",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "The Deadliest Woman In The Universe",
      "The Most Dangerous Woman in the Galaxy"
    ],
    "place-of-birth": "Planet Zen Whoberi, Silican System, Milky Way",
    "first-appearance": "Strange Tales #180 (June, 1975)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "Zen-Whoberian",
    "height": [
      "6'0",
      "183 cm"
    ],
    "weight": [
      "170 lb",
      "77 kg"
    ],
    "eye-color": "Yellow",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Assassin, mercenary, adventurer",
    "base": "C.I.T.T.; formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem; Earth-7528"
  },
  "connections": {
    "group-affiliation": "Guardians of the Galaxy ; formerly Phalanx's Selects, Graces (Leader), Infinity Watch ; United Front ; former minion of Thanos; ally of Adam Warlock and Pip the Troll",
    "relatives": "Thanos (foster father), Thane (foster brother), Unnamed former Symbiote"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/65.jpg"
  }
},
{
  "response": "success",
  "id": "310",
  "name": "Harry Potter",
  "powerstats": {
    "intelligence": "75",
    "strength": "7",
    "speed": "21",
    "durability": "10",
    "power": "100",
    "combat": "50"
  },
  "biography": {
    "full-name": "Harry James Potter",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Triwizard Champion",
      "Seeker",
      "Quidditch Captain",
      "Leader of Dumbledore's Army",
      "Master of Death"
    ],
    "place-of-birth": "-",
    "first-appearance": "Harry Potter and the Philosopher's Stone",
    "publisher": "J. K. Rowling",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "-",
      "0 cm"
    ],
    "weight": [
      "- lb",
      "0 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "Head of the Department of Magical Law Enforcement[",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "-",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10878.jpg"
  }
},
{
  "response": "success",
  "id": "650",
  "name": "T-800",
  "powerstats": {
    "intelligence": "75",
    "strength": "34",
    "speed": "17",
    "durability": "60",
    "power": "73",
    "combat": "65"
  },
  "biography": {
    "full-name": "Cyberdyne Systems Series 800 Terminator Model 101",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Terminator"
    ],
    "place-of-birth": "-",
    "first-appearance": "The Terminator (1984)",
    "publisher": "Dark Horse Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Cyborg",
    "height": [
      "-",
      "0 cm"
    ],
    "weight": [
      "390 lb",
      "176 kg"
    ],
    "eye-color": "Red",
    "hair-color": "-"
  },
  "work": {
    "occupation": "Assassin",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Skynet",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10409.jpg"
  }
},
{
  "response": "success",
  "id": "655",
  "name": "Thanos",
  "powerstats": {
    "intelligence": "100",
    "strength": "100",
    "speed": "33",
    "durability": "100",
    "power": "100",
    "combat": "80"
  },
  "biography": {
    "full-name": "Thanos",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "The Mad Titan",
      "Masterlord",
      "The Overmaster",
      "Chins"
    ],
    "place-of-birth": "Titan",
    "first-appearance": "Iron Man #55",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Eternal",
    "height": [
      "6'7",
      "201 cm"
    ],
    "weight": [
      "985 lb",
      "443 kg"
    ],
    "eye-color": "Red",
    "hair-color": "No Hair"
  },
  "work": {
    "occupation": "Conqueror, worshiper of Death",
    "base": "Mobile, formerly Sanctuary II, Titan"
  },
  "connections": {
    "group-affiliation": "Zodiac (ally); formerly Infinity Watch, Defenders",
    "relatives": "A'Lars (father): Sui-San (mother, deceased; Eros (brother);Kronos (paternal Grandfather, deceased); Daina (paternal grandmother, deceased); Zuras (uncle, deceased); Thena (cousin); Gamora (foster daughter);Nebula (alleged granddaughter); Rot (\"child\" by Death);"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
  }
}
])
