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
    "inTurn": false
  }
]);

db.superHeroes.insertMany([
  {
    "response": "success",
    "id": "30",
    "name": "Ant-Man",
    "powerstats": {
      "intelligence": "231",
      "strength": "766",
      "speed": "12",
      "durability": "7",
      "power": "312",
      "combat": "3"
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
    "intelligence": "90",
    "strength": "843",
    "speed": "6800",
    "durability": "8",
    "power": "301",
    "combat": "7"
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
    "intelligence": "257",
    "strength": "378",
    "speed": "14",
    "durability": "5",
    "power": "442",
    "combat": "9"
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
    "intelligence": "177",
    "strength": "489",
    "speed": "37",
    "durability": "7",
    "power": "376",
    "combat": "9"
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
    "intelligence": "231",
    "strength": "311",
    "speed": "24",
    "durability": "6",
    "power": "411",
    "combat": "5"
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
  "id": "376",
  "name": "Justice",
  "powerstats": {
    "intelligence": "165",
    "strength": "723",
    "speed": "1100",
    "durability": "8",
    "power": "421",
    "combat": "7"
  },
  "biography": {
    "full-name": "Vance Astrovik",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Marvel Boy",
      "Manglin' John Mahoney",
      "Astounding Astrovik",
      "Superhuman Penitentiary Prisoner 344678",
      "\"Super Tights\""
    ],
    "place-of-birth": "-",
    "first-appearance": "Giant-Size Defenders #5 (July, 1975)",
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
      "180 lb",
      "81 kg"
    ],
    "eye-color": "Hazel",
    "hair-color": "Brown"
  },
  "work": {
    "occupation": "Adventurer",
    "base": "Mobile, formerly New Warriors and Avengers Headquarters, Camp Hammond"
  },
  "connections": {
    "group-affiliation": "New Warriors; formerly Avengers Academy, Initiative, partner of Firestar, Avengers, Triune Understanding, Unlimited Class Wrestling Federation, Taskmaster's Circus, Secret Avengers (Civil War)",
    "relatives": "Jerzy Astroyevicht (aka Jerry Astrovik; paternal grandfather); Katerina Astroyevicht (aka Katerina Astrovik; paternal grandmother); Arnold Astrovik (father, deceased); Norma Astrovik (mother);"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/88.jpg"
  }
},
{
  "response": "success",
  "id": "149",
  "name": "Captain America",
  "powerstats": {
    "intelligence": "117",
    "strength": "915",
    "speed": "18",
    "durability": "10",
    "power": "447",
    "combat": "9"
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
    "intelligence": "201",
    "strength": "947",
    "speed": "1537",
    "durability": "10",
    "power": "487",
    "combat": "7"
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
    "intelligence": "153",
    "strength": "342",
    "speed": "33",
    "durability": "6",
    "power": "198",
    "combat": "7"
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
    "intelligence": "249",
    "strength": "901",
    "speed": "95",
    "durability": "8",
    "power": "264",
    "combat": "4"
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
    "intelligence": "183",
    "strength": "369",
    "speed": "19",
    "durability": "7",
    "power": "351",
    "combat": "9"
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
    "intelligence": "78",
    "strength": "801",
    "speed": "117",
    "durability": "9",
    "power": "372",
    "combat": "3"
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
    "intelligence": "151",
    "strength": "954",
    "speed": "3806",
    "durability": "10",
    "power": "488",
    "combat": "6"
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
    "intelligence": "268",
    "strength": "769",
    "speed": "2785",
    "durability": "9",
    "power": "462",
    "combat": "8"
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
  "id": "456",
  "name": "Mister Fantastic",
  "powerstats": {
    "intelligence": "231",
    "strength": "845",
    "speed": "2789",
    "durability": "9",
    "power": "400",
    "combat": "7"
  },
  "biography": {
    "full-name": "Reed Richards",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Mr Fantastic"
    ],
    "place-of-birth": "Central City, California",
    "first-appearance": "FANTASTIC FOUR #1",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Human / Radiation",
    "height": [
      "6'1",
      "185 cm"
    ],
    "weight": [
      "180 lb",
      "81 kg"
    ],
    "eye-color": "Brown",
    "hair-color": "Brown"
  },
  "work": {
    "occupation": "Scientist, adventurer",
    "base": "New York City"
  },
  "connections": {
    "group-affiliation": "Fantastic Four",
    "relatives": "Nathaniai (father), Evelyn (mother, deceased), Susan Storm - Invisible Woman (wife), Franklin (son), Johnny Storm - Human Torch (brother-inlaw), Cassandra (stepmother, deceased), Immortus (father's descendant, see Immortus, Kang, Rama-Tut)."
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/408.jpg"
  }
},
{
  "response": "success",
  "id": "659",
  "name": "Thor",
  "powerstats": {
    "intelligence": "122",
    "strength": "913",
    "speed": "12789",
    "durability": "10",
    "power": "453",
    "combat": "6"
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
    "intelligence": "163",
    "strength": "632",
    "speed": "146",
    "durability": "6",
    "power": "410",
    "combat": "7"
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
    "intelligence": "213",
    "strength": "993",
    "speed": "2785",
    "durability": "10",
    "power": "489",
    "combat": "6"
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
  "id": "687",
  "name": "Venom",
  "powerstats": {
    "intelligence": "198",
    "strength": "869",
    "speed": "78",
    "durability": "9",
    "power": "409",
    "combat": "7"
  },
  "biography": {
    "full-name": "Eddie Brock",
    "alter-egos": "Anti-Venom, Toxin",
    "aliases": [
      "-"
    ],
    "place-of-birth": "New York, New York",
    "first-appearance": "(as alien costume) Secret Wars #8, (behind the scenes) Web of Spider-Man #18, (actual appearance) Amazing Spider-Man #300",
    "publisher": "Anti-Venom",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Symbiote",
    "height": [
      "6'3",
      "191 cm"
    ],
    "weight": [
      "260 lb",
      "117 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Strawberry Blond"
  },
  "work": {
    "occupation": "Vigilante; former journalist for the Daily Globe, government operative",
    "base": "New York, New York"
  },
  "connections": {
    "group-affiliation": "Sinister Six (formerly)",
    "relatives": "Eddie Brock: Carl Brock (father), Jamie Brock (mother), Anne Weying (She-Venom, ex wife, deceased); Venom symbiote: Carnage (bonded to Cletus Kasidy, 1st generation offspring), five forced offspring - one independant (bonded to Donna, last name unrevealed, 1st generation offspring), four forming a composite symbiote (Hybrid (bonded to Scott Washington, 1st generation offspring), Toxin (bonded to Patrick Mulligan, 2nd generation offspring)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg"
  }
},
{
  "response": "success",
  "id": "717",
  "name": "Wolverine",
  "powerstats": {
    "intelligence": "132",
    "strength": "679",
    "speed": "21",
    "durability": "9",
    "power": "398",
    "combat": "5"
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
  "id": "433",
  "name": "Marvel Girl",
  "powerstats": {
    "intelligence": "210",
    "strength": "789",
    "speed": "2678",
    "durability": "8",
    "power": "376",
    "combat": "9"
  },
  "biography": {
    "full-name": "Rachel Anne Summers",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Rachel Grey",
      "formerly Phoenix",
      "Mother Askani",
      "Bright Lady",
      "Aly'zrn Summerset"
    ],
    "place-of-birth": "-",
    "first-appearance": "UNCANNY X-MEN #141",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "null",
    "height": [
      "5'7'",
      "170 cm"
    ],
    "weight": [
      "125 lb",
      "56 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Red"
  },
  "work": {
    "occupation": "Adventurer",
    "base": "Xavier Institute of Higher Learning, Salem Center, Westchester County, New York (formerly) Braddock Lighthouse, England"
  },
  "connections": {
    "group-affiliation": "Starjammers, formerly X-Men, former servant of Elias Bogan, formerly Clan Askani (leader), Excalibur, former servant of Ahab",
    "relatives": "Scott Summers (Cyclops, alternate timeline father, deceased in own time), Jean Grey-Summers (Phoenix, alternate timeline mother, deceased in own time), Alex Summers (Havok, alternate timeline uncle), Franklin Richards (alternate future husband), Jonathan Reed Richards (Hyperstorm, alternate future son), David Richards (alternate future son)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/94.jpg"
  }
},
{
  "response": "success",
  "id": "265",
  "name": "Flash",
  "powerstats": {
    "intelligence": "146",
    "strength": "345",
    "speed": "94578",
    "durability": "7",
    "power": "341",
    "combat": "3"
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
    "intelligence": "213",
    "strength": "942",
    "speed": "2315",
    "durability": "9",
    "power": "402",
    "combat": "7"
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
  "id": "475",
  "name": "Mr Immortal",
  "powerstats": {
    "intelligence": "178",
    "strength": "768",
    "speed": "235",
    "durability": "10",
    "power": "356",
    "combat": "7"
  },
  "biography": {
    "full-name": "Craig Hollis",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "-"
    ],
    "place-of-birth": "-",
    "first-appearance": "West Coast Avengers Vol 2 #46",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Mutant",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "156 lb",
      "70 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Blond"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "-",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10794.jpg"
  }
},
{
  "response": "success",
  "id": "487",
  "name": "Nebula",
  "powerstats": {
    "intelligence": "178",
    "strength": "768",
    "speed": "21",
    "durability": "7",
    "power": "380",
    "combat": "9"
  },
  "biography": {
    "full-name": "",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "-"
    ],
    "place-of-birth": "-",
    "first-appearance": "Avengers #257 (July, 1985)",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Female",
    "race": "Luphomoid",
    "height": [
      "6'1",
      "185 cm"
    ],
    "weight": [
      "185 lb",
      "83 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "No Hair"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Graces, United Front, former leader of a mercenary band",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10632.jpg"
  }
},
{
  "response": "success",
  "id": "498",
  "name": "Odin",
  "powerstats": {
    "intelligence": "231",
    "strength": "921",
    "speed": "3765",
    "durability": "9",
    "power": "451",
    "combat": "8"
  },
  "biography": {
    "full-name": "Odin Borson",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "All-Father,Sky-Father",
      "Atum-Re",
      "Woden",
      "Wotan",
      "Oden",
      "Orrin",
      "Harbard",
      "King of Asgard"
    ],
    "place-of-birth": "Asgard",
    "first-appearance": "Journey into Mystery #85",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "God / Eternal",
    "height": [
      "6'9",
      "206 cm"
    ],
    "weight": [
      "650 lb",
      "293 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "White"
  },
  "work": {
    "occupation": "Deity, Monarch of Asgard, Asgardian God of the Sky, Wind, Wisdom, Crafts, Time, and the Dead, Warrior",
    "base": "City of Asgard, Asgard"
  },
  "connections": {
    "group-affiliation": "Asgardians, Council of Godheads",
    "relatives": "Buri (Tiwaz) (paternal grandfather), Bolthorn (maternal grandfather), Bor Burison (father, deceased), Bestla (mother), Mimir Burison (paternal uncle), Njord (paternal uncle), Vili, Ve, Cul (brothers), Frigga (wife), Freyr (father-in-law), Gullveig (sister-in-law), Thor (son by Jord), Vidar (son by Grid), Balder (son by Frigga), Tyr, Hermod (allegedly sons by Frigga), Angela (daughter by Frigga), Laussa (daughter by Frigga and Surtur), Loki (foster son), Hoder (nephew), Skadi (niece)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10388.jpg"
  }
},
{
  "response": "success",
  "id": "275",
  "name": "Gamora",
  "powerstats": {
    "intelligence": "135",
    "strength": "678",
    "speed": "41",
    "durability": "8",
    "power": "364",
    "combat": "8"
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
  "id": "414",
  "name": "Loki",
  "powerstats": {
    "intelligence": "210",
    "strength": "793",
    "speed": "2145",
    "durability": "7",
    "power": "342",
    "combat": "7"
  },
  "biography": {
    "full-name": "Loki Laufeyson",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "God of Mischief",
      "Gem-Keeper",
      "Walter Lawson",
      "Lester",
      "Loren Olsen",
      "Tyfon",
      "Father Williams",
      "Willie",
      "Tso Zhung; has also impersonated hundreds of others."
    ],
    "place-of-birth": "Jotunheim, Asgard",
    "first-appearance": "Journey into Mystery Vol. 1 #85",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Male",
    "race": "Asgardian",
    "height": [
      "6'4",
      "193 cm"
    ],
    "weight": [
      "525 lb",
      "236 kg"
    ],
    "eye-color": "Green",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "God of evil; former god of mischief and madness",
    "base": "Asgard"
  },
  "connections": {
    "group-affiliation": "Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, \"Acts of Vengeance\" prime movers (Dr. Doom, Magneto, Red Skull, Mandari",
    "relatives": "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/928.jpg"
  }
},
{
  "response": "success",
  "id": "426",
  "name": "Man of Miracles",
  "powerstats": {
    "intelligence": "199",
    "strength": "796",
    "speed": "1765",
    "durability": "8",
    "power": "390",
    "combat": "7"
  },
  "biography": {
    "full-name": "",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Mother Of Existence"
    ],
    "place-of-birth": "-",
    "first-appearance": "Spawn #75",
    "publisher": "Image Comics",
    "alignment": "-"
  },
  "appearance": {
    "gender": "-",
    "race": "God / Eternal",
    "height": [
      "-",
      "0 cm"
    ],
    "weight": [
      "- lb",
      "0 kg"
    ],
    "eye-color": "Blue",
    "hair-color": "Silver"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "-",
    "relatives": "-"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/10889.jpg"
  }
},
{
  "response": "success",
  "id": "655",
  "name": "Thanos",
  "powerstats": {
    "intelligence": "267",
    "strength": "942",
    "speed": "5",
    "durability": "10",
    "power": "467",
    "combat": "9"
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
