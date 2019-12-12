<template>
  <form class="form-contents" v-on:submit.prevent="handleSubmit">
    <div class="players-wrapper">
      <label for="player1" class="label-player">Player 1:</label>
      <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
      <label for="player2" class="label-player">Player 2:</label>
      <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
      <br>
    </div>
    <div class="option-wrapper">

      <div class="option-container">
        <label for="noOfCards" class="label-option">Select number of cards:</label><br>
        <input class="input-option" type="radio" name="cardAmount" value="30"  v-model="cardAmount" id="noOfCards"><p class="input-option">30 cards</p><br>
        <input class="input-option" type="radio" name="cardAmount" value="16" v-model="cardAmount"><p class="input-option">16 cards</p><br>
        <input class="input-option" type="radio" name="cardAmount" value="6" v-model="cardAmount"><p class="input-option">6 cards</p>
      </div>
      <div class="option-container">
        <label for="gameTime" class="label-option">Select duration of game:</label><br>
        <input class="input-option" type="radio" name="gameTime" value="0" v-model="gameTime" id="gameTime"><p>No time</p><br>
        <input class="input-option" type="radio" name="gameTime" value="1" v-model="gameTime"><p>1 min</p><br>
        <input class="input-option" type="radio" name="gameTime" value="5" v-model="gameTime"><p>5 min</p>
      </div>
      <div class="option-container">
        <label for="gameSpeed" class="label-option">Choose game speed:</label><br>
        <input class="input-option" type="radio" name="gameSpeed" value="0" v-model="gameSpeed" id="gameSpeed"><p>No timer</p><br>
        <input class="input-option" type="radio" name="gameSpeed" value="20" v-model="gameSpeed"><p>SLOW</p><br>
        <input class="input-option" type="radio" name="gameSpeed" value="5" v-model="gameSpeed"><p>FAST</p><br>
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
      gameSpeed: null
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
    font-size: 1rem;
  }
  .option-wrapper{
    padding-top: 40px;
    display: flex;
    justify-content: space-evenly;
  }
  .option-container{
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  .option-container input{
    float: left;
    margin-left: 20px;
    /* text-align: left; */

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

  }
  .input-option{

  }

  .players-wrapper{
    text-align: center;

  }

  .start-button{
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
    font-size: 3em;
    text-align: center;
    cursor: pointer;
    padding-right: 2px;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: center;
  }
  .start-button-wrapper{
    text-align: center;
    color:white;
  }

  .button-close{
    position: absolute;
    left:99%;
    top:-1%;
    background-color: red;
    border:0;
    border-radius: 50%;
    width:40px;
    height:40px;
    padding:0;
    margin:0;
    font-weight: bold;
    cursor: pointer;
  }
</style>
