<template>
  <form class="form-contents" v-on:submit.prevent="handleSubmit">
    <label for="player1">Player 1:</label>
    <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
    <label for="player2">Player 2:</label>
    <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
    <br>
    <label for="noOfCards">Select number of cards:</label>
    <br>
    <input type="radio" name="cardAmount" value="30"  v-model="cardAmount" id="noOfCards">30 cards<br>
    <input type="radio" name="cardAmount" value="16" v-model="cardAmount">16 cards<br>
    <input type="radio" name="cardAmount" value="6" v-model="cardAmount">6 cards
    <p>OR</p>
    <label for="gameTime">Select duration of game:</label><br>
    <input type="radio" name="gameTime" value="0" v-model="gameTime" id="gameTime">No time<br>
    <input type="radio" name="gameTime" value="1" v-model="gameTime" >1 min<br>
    <input type="radio" name="gameTime" value="5" v-model="gameTime">5 min
    <br>
    <label for="gameSpeed">Choose game speed:</label><br>
    <input type="radio" name="gameSpeed" value="0" v-model="gameSpeed" id="gameSpeed">NO TIMER<br>
    <input type="radio" name="gameSpeed" value="20" v-model="gameSpeed">SLOW<br>
    <input type="radio" name="gameSpeed" value="5" v-model="gameSpeed">FAST<br>


    <br>
    <input type="submit" name="submit" value="START" />
    <button v-on:click="closeWindow" name="close-window">Close Form</button>
  </form>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: "form-names",
  data(){
    return {
      player1: "",
      player2: "",
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
    text-align: center;
    font-size: 1rem;
  }
</style>
