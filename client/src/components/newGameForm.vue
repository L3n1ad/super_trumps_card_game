<template>
  <form class="" v-on:submit.prevent="handleSubmit">
    <label for="player1">Player 1:</label>
    <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
    <label for="player2">Player 2:</label>
    <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
    <br>
    <label for="noOfCards">Select number of cards:</label>
    <br>
    <input type="radio" name="cardAmount" value="30"  v-model="cardAmount" id="noOfCards">30 cards<br>
    <input type="radio" name="cardAmount" value="16" v-model="cardAmount">16 cards
    <p>OR</p>
    <label for="gameTime">Select duration of game:</label><br>
    <input type="radio" name="gameTime" value="2" v-model="gameTime" id="gameTime">2 min<br>
    <input type="radio" name="gameTime" value="5" v-model="gameTime">5 min
    <br>
    <input type="submit" name="submit" value="START" />
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
      gameTime: 0
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
      }
    }
  }

</script>

<style lang="css" scoped>
</style>
