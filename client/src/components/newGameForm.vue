<template>
  <form class="form-contents" v-on:submit.prevent="handleSubmit">
    <div class="players-wrapper">
      <label for="player1" class="label-player player-1">Player 1:</label>
      <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
      <label for="player2" class="label-player player-2">Player 2:</label>
      <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
      <br>
    </div>
    <div class="option-wrapper">

      <div class="option-container">
        <label for="noOfCards" class="label-option">Select number of cards:</label><br><br>
        <input class="input-radio" type="radio" name="cardAmount" value="30"  v-model="cardAmount" id="noOfCards"><p class="input-option">30 cards</p><br>
        <input class="input-radio" type="radio" name="cardAmount" value="16" v-model="cardAmount"><p class="input-option">16 cards</p><br>
        <input class="input-radio" type="radio" name="cardAmount" value="6" v-model="cardAmount"><p class="input-option">6 cards</p>
      </div>
      <div class="option-container">
        <label for="gameTime" class="label-option">Select duration of game:</label><br><br>
        <input class="input-radio" type="radio" name="gameTime" value="0" v-model="gameTime" id="gameTime"><p class="input-option">No time</p><br>
        <input class="input-radio" type="radio" name="gameTime" value="1" v-model="gameTime"><p class="input-option">1 min</p><br>
        <input class="input-radio" type="radio" name="gameTime" value="5" v-model="gameTime"><p class="input-option">5 min</p>
      </div>
      <div class="option-container">
        <label for="gameSpeed" class="label-option">Choose game speed:</label><br><br>
        <input class="input-radio" type="radio" name="gameSpeed" value="0" v-model="gameSpeed" id="gameSpeed"><p class="input-option">No timer</p><br>
        <input class="input-radio" type="radio" name="gameSpeed" value="20" v-model="gameSpeed"><p class="input-option">SLOW</p><br>
        <input class="input-radio" type="radio" name="gameSpeed" value="5" v-model="gameSpeed"><p class="input-option">FAST</p><br>
      </div>

    </div>

    <br>
    <div class="start-button-wrapper">
      <input class="start-button" type="submit" name="submit" value="START" />
    </div>
    <button v-on:click="closeWindow" name="close-window" class="button-close">X</button>
  </form>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: "form-names",
  data(){
    return {
      player1: "Player 1",
      player2: "Player 2",
      cardAmount: 30,
      gameTime: 0,
      gameSpeed: 0
    }
  },
    methods: {
    handleSubmit() {
      eventBus.$emit("form-card-amount", this.cardAmount);
      const names = [this.player1, this.player2]
      eventBus.$emit("form-names", names);
      if(this.gameTime > 0){
        eventBus.$emit("form-game-time", this.gameTime)
        }
      if(this.gameSpeed > 0){
        eventBus.$emit("game-speed", this.gameSpeed);
      }
      },
    closeWindow(){
        eventBus.$emit('close-window')
      }
    }
  }

</script>

<style lang="css" scoped>
  .form-contents {
    padding-top: 60px;

  }
  .option-wrapper{
    padding-top: 40px;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
  }
  .option-container{
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    color: white;
  }
  .option-container input{
    float: left;
    margin-left: 20px;

  }
  .option-container p{
    display: inline-block;
    text-align: left;
    margin: 0;
    float: left;
    padding-left: 25px;
  }
  .label-player{
    margin: 0 10px 0 60px;
  }
  .label-option{
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
    font-size: 1.3em;
    /* letter-spacing: 1px; */
  }
  .input-option{
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
    color: #E6E6E6;
    letter-spacing: 1.5px;
  }

  .input-radio{
    width: 20px;
  }

  .players-wrapper{
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
    margin-bottom: 35px;
  }

  .players-wrapper input {
    width: 200px;
    height: 40px;
    position: relative;
    bottom: 6px;
    font-size: 0.5em;
    color: #4D4D4D;
  }

  .start-button{
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    color: #E2852D;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 4px 4px 0 black;
    font-size: 10em;
    cursor: pointer;
    padding-right: 2px;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    float:left;
    padding-left: 300px;
    background: none;
    position: relative;
    bottom: 0px;
  }

  .start-button:hover{
    transition: 0.5s;
    font-size: 12em;
    padding-left: 250px;
    position: relative;
    bottom: 40px;
  }

  .start-button-wrapper{
    text-align: center;

  }

  .button-close{
    position: absolute;
    left:98.5%;
    top:-2.5%;
    background-color: #1775B6;
    border:0;
    border-radius: 50%;
    width:40px;
    height:40px;
    padding:0;
    margin:0;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.4em;
    color: #4D4D4D;
  }
  .player-1{
    color: #E2852D;
  }
  .player-2{
    color: #1775B6;
  }
</style>
