<template lang="html">
  <div class="">
    <player-box :hero="playerOneHero"></player-box>
    <player-box :hero="playerTwoHero"></player-box>
  </div>
</template>

<script>
import playerBox from "./playerBox"
import {eventBus} from '../main.js'

export default {
  name: "game-grid",
  data(){
    return{
      playerOneHero: {},
      playerTwoHero: {}
    }
  },
  mounted(){
    eventBus.$on('playerOneHero', hero => this.playerOneHero = hero)
    eventBus.$on('playerTwoHero', hero => this.playerTwoHero = hero)
  },
  components: {
    "player-box": playerBox
  }
}
</script>

<style lang="css" scoped>
</style>
