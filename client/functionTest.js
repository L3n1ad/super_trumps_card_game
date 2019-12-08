// take players name save it in the DB
// save hands in the DB(randomised split every time)
// take players data from DB
// take first cards out from hands save in in play array
// find superHeroes fort cards in play
// pass superHeroes to relevant components with player data
// display superHeroes detail in the right component
// player be eable to chose a tribute
// calculate which players tribute is higher
// IF TIE
// give the next cards to players
// give the same player a choice again
// IF ITS WIN
// give in play cards to winner
// display next cards from their hands
// let winner choose a tribute
// LOOP TILL HERE
// IF one players hand array = 0
// Game ends winner is with not empty array
// add a score to players in database

const deck = [];
let playerOne = [];
let playerTwo = [];

for(let num = 1; num < 53; num ++){
  deck.push(num);
};


function shuffleDeck(deck) {
  let randomisedDeck = deck
  let randomCard;
  let temperoryCard;
  for (let index = deck.length - 1; index > -1 ; index -= 1) {
    randomCard = Math.floor(Math.random() * index);
    temperoryCard = randomisedDeck[index];
    randomisedDeck[index] = randomisedDeck[randomCard];
    randomisedDeck[randomCard] = temperoryCard;
  }
  return randomisedDeck
}

function splitDeck(deck){
  const shuffledDeck = shuffleDeck(deck);
  playerOne = shuffledDeck.splice(0, 15)
  playerTwo = shuffledDeck.splice(0, 15)
}
const randomised = deck.sort(() => Math.random() - 0.5);
console.log(randomised);
console.log(playerOne);
console.log(playerTwo);

splitDeck(deck);

console.log(playerOne);
console.log(playerTwo);
