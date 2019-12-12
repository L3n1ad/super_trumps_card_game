<template lang="html">
  <div id='main-screen'>
    <div class="background"></div>
    <form-names v-if="showForm" class="form"></form-names>
    <h1 class="start-game" v-on:click="toggleForm(), stopTotalTimer(), stopRoundTimer()" >{{startButtonText}}</h1>

    <game-grid :playerOne='playerOne' :playerTwo='playerTwo' :playerOneHero='playerOneHero' :playerTwoHero='playerTwoHero' :displayPlayerOne='displayPlayerOne' :displayPlayerTwo='displayPlayerTwo' :draw='draw' :playerOneWins='playerOneWins' :playerTwoWins='playerTwoWins' :scorePlayerOne='scorePlayerOne' :scorePlayerTwo="scorePlayerTwo"></game-grid>
    <h1 class="next-round" v-if="nextRoundButton" v-on:click="nextRound">Next Round</h1>
    <h1 class="end-game" v-if="gameStarted" v-on:click="triggerEndGame(), stopRoundTimer()">End Game</h1>
    <div class="display-winner-container" v-if="endGame || endGameButton || this.totalTime === 0 ">
      <h1 class="display-winner-item" v-if='scorePlayerOne  > scorePlayerTwo'>{{playerOne.name}} wins!</h1>
      <h1 class="display-winner-item" v-else-if="scorePlayerTwo > scorePlayerOne">{{playerTwo.name}} wins!</h1>
      <h1 class="display-winner-item" v-else> DRAW</h1>
    </div>
    <timer>Countdown!</timer>
  </div>

</template>

<script>
import { eventBus } from '@/main.js';
import newGameForm from "@/components/newGameForm";
import gameGrid from "@/components/gameGrid";
import GameService from './services/GameService.js';
import Timer from '@/components/Timer'


export default {
  name: 'app',
  components: {
    "form-names": newGameForm,
    "game-grid": gameGrid,
    "timer": Timer

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
      draw: false,
      scorePlayerOne: 15,
      scorePlayerTwo: 15,
      totalTime: null,
      showForm: false,
      gameStarted: false,
      startButtonText: "Start Game",
      endGameButton: false,
      roundTime: null
    }
  },
  mounted() {


    this.getStartingData()

    eventBus.$on('chosenAttribute', attribute =>{
      this.getWinner(attribute)
      this.displayPlayerOne = true
      this.displayPlayerTwo = true
    });
    //EventBus from Form.
    eventBus.$on('form-card-amount', amountOfCards =>{
      this.splitCards()
      if(amountOfCards != 30){
        let cardsPerPlayer = amountOfCards / 2;
        let manyToRemove = 15 - cardsPerPlayer;
        this.playerOne.hand.splice( cardsPerPlayer, manyToRemove );
        this.playerTwo.hand.splice( cardsPerPlayer, manyToRemove );
      }
    });

    eventBus.$on('form-names', names => {
      this.playerOneWins = this.playerTwoWins = this.draw = false
      this.playerOne.name = names[0];
      this.playerTwo.name = names[1];
      this.playerOne.inTurn = this.trueOrFalse();
      this.playerTwo.inTurn = !this.playerOne.inTurn;
      this.scoreCount();
      this.getTopCards();
      this.sendPlayersToDB();
      this.displayPlayerOne = this.playerOne.inTurn
      this.displayPlayerTwo = this.playerTwo.inTurn
      this.showForm = false
      this.startButtonText = "Start New Game"
      this.endGameButton = false
      this.gameStarted = true
      this.totalTime = null
    })
    eventBus.$on("game-speed", gameSpeed =>{
      this.roundTime = (parseInt(gameSpeed))
    })
    eventBus.$on("round-time-end", roundTimeOut => {
      this.roundTimeOutWinner()
    })

    eventBus.$on("time-out-end", timeOut => {
      this.totalTime = timeOut;
    })

    eventBus.$on('close-window', () => this.showForm = false)
  },
  methods: {
    getStartingData(){
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
            this.playerOne.name = 'Player 1'
            this.playerTwo.name = 'Player 2'
            this.displayPlayerOne = this.playerOne.inTurn
            this.displayPlayerTwo = this.playerTwo.inTurn
          })
          .then(() => this.splitCards())
      });
    },
    splitCards() {
      this.playerOne.hand = []
      this.playerTwo.hand = []
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
    getWinner(attribute){
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
      this.scoreCount()
      eventBus.$emit("winner-chosen-stop-counter")
    },
    roundTimeOutWinner(){
      if(this.playerOne.inTurn){
        this.playerTwo.hand.push(this.inPlay)
        this.playerTwo.hand = this.playerTwo.hand.flat(2)
        this.playerOne.inTurn = false
        this.playerTwo.inTurn = true
        this.inPlay = []
        this.playerTwoWins = true
      }else{
        this.playerOne.hand.push(this.inPlay)
        this.playerOne.hand = this.playerOne.hand.flat(2)
        this.playerOne.inTurn = true
        this.playerTwo.inTurn = false
        this.inPlay = []
        this.playerOneWins = true
      }
      this.sendPlayersToDB()
      this.nextRoundButton = true
      this.scoreCount()
    },
    nextRound(){
      this.nextRoundButton = false
      this.getTopCards()
      this.displayPlayerOne = this.playerOne.inTurn
      this.displayPlayerTwo = this.playerTwo.inTurn
      this.draw = this.playerOneWins = this.playerTwoWins = false
      eventBus.$emit('next-round')
      if(this.roundTime){
        eventBus.$emit("next-round-starts", this.roundTime)
      }


    },
    scoreCount() {
         this.scorePlayerOne = this.playerOne.hand.length
         this.scorePlayerTwo = this.playerTwo.hand.length
    },
    stopTotalTimer(){
      eventBus.$emit("stop-total-timer")
    },
    stopRoundTimer(){
      this.roundTime = null
      eventBus.$emit("stop-round-timer")
    },

    trueOrFalse(){
      return Math.random() >= 0.5;
    },
    toggleForm(){
      this.showForm = !this.showForm
    },
    triggerEndGame(){
      this.endGameButton = true
    }
  },
  computed: {
    // scorePlayerOne() {
    //   if(this.playerOne.hand){
    //     return this.playerOne.hand.length
    //   }
    // },
    // scorePlayerTwo() {
    //   if(this.playerTwo.hand){
    //     return this.playerTwo.hand.length
    //   }
    // },
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
  .display-winner-container{
    grid-area: 2/1/2/1;
    font-size: 6rem;
    text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 4px 4px 0 grey;
    font-family: tomorrow;
    color: white;
    z-index: 5;
    font-weight: bold;
  }

  .display-winner-item {
    text-align: center;
    background-color: #d3dbdf;
    opacity: 0.95;
    padding-bottom: 3%;
    font-weight: bold;
  }
</style>
