<template lang="html">
  <div class="">
    <player-box :hero="playerOneHero" :player='playerOne'>{{playerOneHero}}</player-box>
    <player-box :hero="playerTwoHero" :player='playerTwo'></player-box>
  </div>
</template>

<script>
import playerBox from "./playerBox"
import {eventBus} from '../main.js'

export default {
  name: "game-grid",
  props: ['playerOne', 'playerTwo', 'playerOneHero', 'playerTwoHero'],
  components: {
    "player-box": playerBox
  }
}
</script>

<style lang="css" scoped>
</style>
