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
      <h1 class="display-winner-item" v-else>DRAW</h1>
    </div>
    <timer class="round-timer">Countdown!</timer>
    <div v-if="(this.playerOneTotalBoosts >= 0) && this.playerOne.inTurn === true && this.gameStarted && !this.nextRoundButton" class="player-one-boost-container" >
      <h2 class="player-one-boost" v-if="this.playerOneBoost === 1" v-on:click="addBoostOne()">{{playerOneTotalBoosts}} Boosts!</h2>
      <h2 class="chosen-boost-1" v-else>+{{((playerOneBoost -1) * 100).toFixed()}}%</h2>
    </div>
    <div v-if="(this.playerTwoTotalBoosts >= 0) && this.playerTwo.inTurn === true && this.gameStarted && !this.nextRoundButton" class="player-two-boost-container" >
      <h2 class="player-two-boost" v-if="this.playerTwoBoost === 1" v-on:click="addBoostTwo()">{{playerTwoTotalBoosts}} Boosts!</h2>
      <h2 class="chosen-boost-2" v-else>+{{((playerTwoBoost -1) * 100).toFixed()}}%</h2>
    </div>
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
      playerOneBoost: 1,
      playerTwoBoost: 1,
      playerOneTotalBoosts: 3,
      playerTwoTotalBoosts: 3,
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
      this.playerOneTotalBoosts = this.playerTwoTotalBoosts = 3
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
      //Not neccesarily here
      this.clearBoosts()
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

      if((playerOneAttr * this.playerOneBoost) > (playerTwoAttr * this.playerTwoBoost)){
        console.log(`P1 WIN P1 Attr: ${playerOneAttr}`)
        console.log(`P1 WIN P1 Boost: ${this.playerOneBoost}`)
        console.log(`P1 WIN P1Combined: ${(playerOneAttr * this.playerOneBoost)}`)
        console.log(`P1 WIN P2 Attr: ${playerTwoAttr}`)
        console.log(`P1 WIN P2 Boost: ${this.playerTwoBoost}`)
        console.log(`P1 WIN P2 Combo: ${(playerTwoAttr * this.playerTwoBoost)}`)
        console.log("////////////////////")
        this.playerOne.hand.push(this.inPlay)
        this.playerOne.hand = this.playerOne.hand.flat(2)
        this.playerOne.inTurn = true
        this.playerTwo.inTurn = false
        this.inPlay = []
        this.playerOneWins = true
      } else if ((playerOneAttr * this.playerOneBoost) < (playerTwoAttr * this.playerTwoBoost)){
        console.log(`P2 WIN P1 Attr: ${playerOneAttr}`)
        console.log(`P2 WIN P1 Boost: ${this.playerOneBoost}`)
        console.log(`P2 WIN P1 Combo: ${(playerOneAttr * this.playerOneBoost)}`)
        console.log(`P2 WIN P2 Attr: ${playerTwoAttr}`)
        console.log(`P2 WIN P2 Boost: ${this.playerTwoBoost}`)
        console.log(`P2 WIN P2 Combo: ${(playerTwoAttr * this.playerTwoBoost)}`)
        console.log("////////////////////")
        this.playerTwo.hand.push(this.inPlay)
        this.playerTwo.hand = this.playerTwo.hand.flat(2)
        this.playerOne.inTurn = false
        this.playerTwo.inTurn = true
        this.inPlay = []
        this.playerTwoWins = true
      } else {
        this.draw = true
        console.log(`P2 WIN P1 Attr: ${playerOneAttr}`)
        console.log(`P2 WIN P1 Boost: ${this.playerOneBoost}`)
        console.log(`P2 WIN P1 Combo: ${(playerOneAttr * this.playerOneBoost)}`)
        console.log(`P2 WIN P2 Attr: ${playerTwoAttr}`)
        console.log(`P2 WIN P2 Boost: ${this.playerTwoBoost}`)
        console.log(`P2 WIN P2 Combo: ${(playerTwoAttr * this.playerTwoBoost)}`)
        console.log("////////////////////")
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
      this.clearBoosts()
      if(this.playerOneTotalBoosts === 0){
        this.playerOneTotalBoosts -= 1
      } else if (this.playerTwoTotalBoosts === 0 ){
        this.playerTwoTotalBoosts -=1
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
    },
    boostByAmount(){
      return (Math.random() / 2)
    },
    addBoostOne(){
      this.playerOneBoost = this.playerOneBoost + this.boostByAmount()
      this.playerOneTotalBoosts -= 1
    },
    addBoostTwo(){
      this.playerTwoBoost = this.playerTwoBoost + this.boostByAmount()
      this.playerTwoTotalBoosts -= 1
    },
    clearBoosts(){
      this.playerOneBoost = 1
      this.playerTwoBoost = 1
    },
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
    },
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

  .player-one-boost {
    background-image: url('../public/images/splat-offwhite-2.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    padding:40px;
    position: absolute;
    top: 38%;
    color: #e57e13;
    font-size: 2.3rem;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 4px 4px 0 black;
    cursor: pointer;
  }

  .player-one-boost:hover {
    position: absolute;
    top: 38%;
    color: green;
    font-size: 2.3rem;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 4px 4px 0 black;
    cursor: pointer;
    transition: 0.3s;
  }

  .chosen-boost-1{
    position: absolute;
    top: 45%;
    left: 4%;
    color: green;
    font-size: 3rem;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 4px 4px 0 black;
    cursor: pointer;
    transition: 0.5s;
  }

  .player-two-boost {
    background-image: url('../public/images/splat-offwhite-1.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    padding:50px;
    top: 42%;
    right: 0;
    color: #0373ba;
    font-size: 2.3rem;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 4px 4px 0 black;
    cursor: pointer;
}

  .player-two-boost:hover {
    position: absolute;
    top: 42%;
    color: green;
    font-size: 2.3rem;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 4px 4px 0 black;
    cursor: pointer;
    transition: 0.3s;
  }

  .chosen-boost-2{
    position: absolute;
    top: 45%;
    right: 4%;
    color: green;
    font-size: 3rem;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 4px 4px 0 black;
    cursor: pointer;
    transition: 0.5s;
  }
</style>
