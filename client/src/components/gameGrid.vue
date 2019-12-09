<template lang="html">
  <div class="">
    <player-box :hero="playerOneHero" :player='playerOne' :displayPlayer='displayPlayerOne' :playerWins='playerOneWins' :score='scorePlayerOne'>{{playerOneHero}}</player-box>
    <player-box :hero="playerTwoHero" :player='playerTwo' :displayPlayer='displayPlayerTwo' :playerWins='playerTwoWins' :score="scorePlayerTwo"></player-box>
    <div v-if="draw">
      <h1>Draw</h1>
    </div>
  </div>
</template>

<script>
import playerBox from "./playerBox"
import {eventBus} from '../main.js'

export default {
  name: "game-grid",
  props: ['playerOne', 'playerTwo', 'playerOneHero', 'playerTwoHero', 'displayPlayerOne', 'displayPlayerTwo', 'draw', 'playerOneWins', 'playerTwoWins', 'scorePlayerOne', 'scorePlayerTwo'],
  components: {
    "player-box": playerBox
  }
}
</script>

<style lang="css" scoped>
</style>
