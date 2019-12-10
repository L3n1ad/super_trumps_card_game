<template>
  <form class="form-contents" v-on:submit.prevent="handleSubmit">
    <label for="player1">Player 1:</label>
    <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
    <label for="player2">Player 2:</label>
    <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
    <input type="range" min="6" max="30" value="18" step="6" v-model="cardAmount" class="slider" id="rangeCards">
    <p>{{cardAmount}}</p>
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
      cardAmount: 18
    }
  },
    methods: {
    handleSubmit() {
      eventBus.$emit("form-card-amount", this.cardAmount);
      const names = [this.player1, this.player2]
      eventBus.$emit("form-names", names);
      }
    }
  }

</script>

<style lang="css" scoped>
  /* .form-contents {
    text-align: center;
    font-size: 3rem;
  } */
</style>
