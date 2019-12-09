<template lang="html">
  <div>
    <form-names></form-names>
    <game-grid :playerOne='playerOne' :playerTwo='playerTwo' :playerOneHero='playerOneHero' :playerTwoHero='playerTwoHero' :displayPlayerOne='displayPlayerOne' :displayPlayerTwo='displayPlayerTwo' :draw='draw' :playerOneWins='playerOneWins' :playerTwoWins='playerTwoWins' :scorePlayerOne='scorePlayerOne' :scorePlayerTwo="scorePlayerTwo"></game-grid>
    <button v-if="nextRoundButton" v-on:click="nextRound" type="button" name="button">Next Round</button>
    <div v-if="endGame">
      <h1 v-if='playerOne.inTurn'>{{playerOne.name}} wins!</h1>
      <h1 v-else>{{playerTwo.name}} wins!</h1>
    </div>
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
      inPlay: [],
      nextRoundButton: false,
      displayPlayerOne: "",
      displayPlayerTwo: "",
      playerOneWins: false,
      playerTwoWins: false,
      draw: false
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
          this.displayPlayerOne = this.playerOne.inTurn
          this.displayPlayerTwo = this.playerTwo.inTurn
        })
        .then(() => this.splitCards())
    });
    eventBus.$on('chosenAttribute', (attribute, value) =>{
      this.getWinner(attribute, value)
      this.displayPlayerOne = true
      this.displayPlayerTwo = true
    });
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
    getWinner(attribute, value){
      const playerOneAttr = parseInt(this.playerOneHero.powerstats[attribute])
      const playerTwoAttr = parseInt(this.playerTwoHero.powerstats[attribute])

      if(playerOneAttr > playerTwoAttr){
        this.playerOne.hand.push(this.inPlay)
        this.playerOne.hand = this.playerOne.hand.flat(2)
        this.playerOne.inTurn = true
        this.playerTwo.inTurn = false
        this.inPlay = []
        this.playerOneWins = true
      } else if (playerOneAttr < playerTwoAttr){
        this.playerTwo.hand.push(this.inPlay)
        this.playerTwo.hand = this.playerTwo.hand.flat(2)
        this.playerOne.inTurn = false
        this.playerTwo.inTurn = true
        this.inPlay = []
        this.playerTwoWins = true
      } else {
        this.draw = true
      }
      this.sendPlayersToDB()
      this.nextRoundButton = true
    },
    nextRound(){
      this.nextRoundButton = false
      this.getTopCards()
      this.displayPlayerOne = this.playerOne.inTurn
      this.displayPlayerTwo = this.playerTwo.inTurn
      this.draw = this.playerOneWins = this.playerTwoWins = false

    }
  },
  computed: {
    scorePlayerOne() {
      if(this.playerOne.hand){
        return this.playerOne.hand.length + this.inPlay.length / 2;
      }
    },
    scorePlayerTwo() {
      if(this.playerTwo.hand){
        return this.playerTwo.hand.length + this.inPlay.length / 2;
      }
    },
    playerOneHero(){
      return this.allHeroes.filter(hero => hero._id == this.playerOneCard)[0];
    },
    playerTwoHero(){
      return this.allHeroes.filter(hero => hero._id == this.playerTwoCard)[0]
    },
    endGame(){
      return this.scorePlayerOne === 0 || this.scorePlayerTwo === 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
