<template lang="html">
  <div class="game-grid-grid">
    <player-box class="player-box-1" :hero="playerOneHero" :player='playerOne' :displayPlayer='displayPlayerOne' :playerWins='playerOneWins' :score='scorePlayerOne'>{{playerOneHero}}</player-box>
    <player-box class="player-box-2" :hero="playerTwoHero" :player='playerTwo' :displayPlayer='displayPlayerTwo' :playerWins='playerTwoWins' :score="scorePlayerTwo"></player-box>
    <h1 class="draw" v-if="draw">Draw</h1>
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
.game-grid-grid {
  /* grid-area: 2 / 3 / 2 / 10; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
  position: fixed;
  top: 25%;
  left: 17%;
}

.player-box-1 {
  grid-area: 1 / 1 / 3 / 2;
  display: grid;
  grid-template-rows: 1fr;
  width: 400px;
  margin: auto;
}

.player-box-2 {
  grid-area: 1 / 3 / 3 / 3;
  display: grid;
  grid-template-rows: 1fr auto auto;
  width: 400px;
  margin: auto;
}
 .player-box-1 >>> .player-head {
  grid-area: 1/1/1/1;
  text-align: center;
  color: #0c5f95;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  letter-spacing: 2px;
  cursor: default;
  display: grid;
  grid-template-columns: 2fr 1fr 50px;
  margin-left: 20px;
}
.player-box-1 >>> .splat {
  background-image: url('../../public/images/splat-white-1.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  text-shadow: -0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white;
}

.player-box-1 >>> .player-card {
  grid-area: 2/1/2/1;
  margin-left: 15%;
  margin-right:15%;
  border: solid 2px black;
  border-radius: 25px;
  text-align: center;
  background-color: #0c5f95;
  display: grid;
  grid-template-rows: auto;
}


.player-box-2 >>> .player-head {
  grid-area: 1/1/1/1;
  text-align: center;
  color: #af6214;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  letter-spacing: 2px;
  cursor: default;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.player-box-2 >>> .splat {
  background-image: url('../../public/images/splat-white-2.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  text-shadow: -0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white;
}

.player-box-2 >>> .player-card {
  grid-area: 2/1/2/1;
  margin-left: 15%;
  margin-right:15%;
  border: solid 2px black;
  border-radius: 25px;
  text-align: center;
  background-color: #af6214;
  display: grid;
  grid-template-rows: auto;
}

.draw {
  font-size: 6rem;
  text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
  font-family: tomorrow;
  color: white;
  z-index: 5;
  bottom: 50%;
  top: 50%;
  text-align: center;
}
</style>
