const deck = [];
let playerOne = [];
let playerTwo = [];

for(let num = 1; num < 53; num ++){
  deck.push(num);
};


function shuffleDeck(deck) {
  let randomCard;
  let temperoryCard;
  for (let index = deck.length - 1; index > -1 ; index -= 1) {
    randomCard = Math.floor(Math.random() * index);
    temperoryCard = deck[index];
    deck[index] = deck[randomCard];
    deck[randomCard] = temperoryCard;
  }
  return deck
}

function splitDeck(deck){
  const shuffledDeck = shuffleDeck(deck);
  playerOne = shuffledDeck.splice(0, 15)
  playerTwo = shuffledDeck.splice(0, 15)
}

console.log(playerOne);
console.log(playerTwo);

splitDeck(deck);

console.log(playerOne);
console.log(playerTwo);
