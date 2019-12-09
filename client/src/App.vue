<template lang="html">
  <div>
    <form-names></form-names>
    <game-grid :playerOne='playerOne' :playerTwo='playerTwo' :playerOneHero='playerOneHero' :playerTwoHero='playerTwoHero'></game-grid>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import newGameForm from "@/components/newGameForm";
import gameGrid from "@/components/gameGrid";
import GameService from './services/GameService.js'

export default {
  name: 'app',
  components: {
    "form-names": newGameForm,
    "game-grid": gameGrid

  },
  data(){
    return{
      allHeroes: [],
      allHeroesID: [],
      playerOne: {},
      playerTwo: {},
      playerOneCard: "",
      playerTwoCard: "",
      inPlay: []
    }
  },
  mounted() {
    GameService.getAllSuperHeroes()
    .then(data => this.allHeroes = data)
    .then(() => this.allHeroes.map(obj => {
      return obj._id
    }))
    .then( ids => this.allHeroesID = ids)
    .then(() =>{
      GameService.getAllPlayers()
        .then( data => {
          this.playerOne = data[0]
          this.playerTwo = data[1]
        })
        .then(() => this.splitCards())
    });

    eventBus.$on('chosenAttribute', (attribute, value, heroid) => {
      this.getWinner(attribute, value, heroid);
    })

      //EventBus from Form.
      eventBus.$on('form-names', names => {
        this.playerOne.name = names[0];
        this.playerTwo.name = names[1];
        this.getTopCards();
        this.sendPlayersToDB();
      })
  },
  methods: {
    splitCards() {
      const arrayToRandomise = this.allHeroesID.slice(0)
      const numCards = arrayToRandomise.length
      const numOfSlices = 2
      const n = numCards/numOfSlices
      const randomisedArray = arrayToRandomise.sort(() => Math.random() - 0.5);
      this.playerOne.hand = randomisedArray.slice(0,n)
      this.playerTwo.hand = randomisedArray.slice(n,numCards)
    },
    getWinner(attribute, value, heroid){
      const heroes = [this.playerOneCard, this.playerTwoCard]
      const playerOnHero = heroes.filter( hero => hero === heroid )
      const playerOther = heroes.filter(hero => hero !== heroid)
      console.log(playerOnHero);
      console.log(playerOther);
    },
    getTopCards(){
      this.playerOneCard = this.playerOne.hand.shift()
      this.playerTwoCard = this.playerTwo.hand.shift()
      this.inPlay.push(this.playerOneCard, this.playerTwoCard)
    },
    //Send Players to DB and retrieve Players.
    sendPlayersToDB() {
      GameService.updateData(this.playerOne)
        .then(dbDetailsOne => this.playerOne = dbDetailsOne);
      GameService.updateData(this.playerTwo)
        .then(dbDetailsTwo => this.playerTwo = dbDetailsTwo)
    },
    // Shuffle deck with Fisher-Yates shuffle
    shuffleDeck(deck){
      let randomCard;
      let temperoryCard;
      for (let index = deck.length - 1; index > -1 ; index -= 1) {
        randomCard = Math.floor(Math.random() * index);
        temperoryCard = deck[index];
        deck[index] = deck[randomCard];
        deck[randomCard] = temperoryCard;
      }
    },
    // SPLIT DECK
    splitDeck(deck){
      const shuffledDeck = this.shuffleDeck(deck);
      const playerOneHand = this.playerOne.hand
      const playerTwoHand = this.playerTwo.hand
      playerOneHand.push(shuffledDeck.splice(0, 15))
      playerTwoHand.push(shuffledDeck.splice(0, 15))
    }
  },
  computed: {
    scorePlayerOne() {
      if(this.playerOne.hand){
        return this.playerOne.hand.length;
      }
    },
    scorePlayerTwo() {
      if(this.playerTwo.hand){
        return this.playerTwo.hand.length;
      }
    },
    playerOneHero(){
      return this.allHeroes.filter(hero => hero._id == this.playerOneCard)[0];
    },
    playerTwoHero(){
      return this.allHeroes.filter(hero => hero._id == this.playerTwoCard)[0]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
