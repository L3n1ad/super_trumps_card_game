<template>
  <form class="" v-on:submit.prevent="handleSubmit">
    <label for="player1">Player 1:</label>
    <input type="text" id="player1" placeholder="Name" v-model="player1" required/>
    <label for="player2">Player 2:</label>
    <input type="text" id="player2" placeholder="Name" v-model="player2" required/>
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
      player2: ""
    }
  },
    methods: {
    handleSubmit() {
      const names = [this.player1, this.player2]
      eventBus.$emit("form-names", names);
      }
    }
  }

</script>

<style lang="css" scoped>
</style>
