<template lang="html">
  <div class="game-grid-grid">
    <player-box class="player-box-1" :hero="playerOneHero" :player='playerOne' :displayPlayer='displayPlayerOne' :playerWins='playerOneWins' :score='scorePlayerOne' :clickable='clickable'>{{playerOneHero}}</player-box>
    <player-box class="player-box-2" :hero="playerTwoHero" :player='playerTwo' :displayPlayer='displayPlayerTwo' :playerWins='playerTwoWins' :score="scorePlayerTwo" :clickable='clickable'></player-box>
    <h1 class="draw" v-if="draw">Draw</h1>
  </div>
</template>

<script>
import playerBox from "./playerBox"
import {eventBus} from '../main.js'

export default {
  name: "game-grid",
  props: ['playerOne', 'playerTwo', 'playerOneHero', 'playerTwoHero', 'displayPlayerOne', 'displayPlayerTwo', 'draw', 'playerOneWins', 'playerTwoWins', 'scorePlayerOne', 'scorePlayerTwo'],
  data(){
    return {
      clickable: true
    }
  },
  mounted(){
    eventBus.$on('chosenAttribute', () => this.clickable = false)

    eventBus.$on('round-time-end', () => this.clickable = false)

    eventBus.$on('next-round', () => this.clickable = true)

    eventBus.$on('form-names', () => this.clickable = true)
  },
  components: {
    "player-box": playerBox
  }
}
</script>

<style lang="css" scoped>
.game-grid-grid {
  grid-area: 2 / 1 / 2 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
}

.player-box-1 {
  grid-area: 1 / 1 / 2 / 1;
  display: grid;
  grid-template-rows: 1fr;
  width: 400px;
  margin: auto;
}

.player-box-2 {
  grid-area: 1 / 2 / 2 / 2;
  display: grid;
  grid-template-rows: 1fr;
  width: 400px;
  margin: auto;
}
 .player-box-1 >>> .player-head {
  grid-area: 1/1/1/1;
  margin-left: 12%;
  color: #e57e14;
  text-shadow: -2px -2px 0 #d3dbdf, 2px -2px 0 #d3dbdf, -2px 2px 0 #d3dbdf, 2px 2px 0 #d3dbdf;
  letter-spacing: 2px;
  cursor: default;
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 1.2rem;
}



.player-box-1 >>> .splat {
  background-image: url('../../public/images/splat-offwhite-2.png');
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
  background-image: url("../../public/images/frontcard2.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  display: grid;
  grid-template-rows: auto;
  padding-bottom: 18px;
  box-shadow: 2px 2px;
}

.player-box-1 >>> .back-card-div{
  background-image: url("../../public/images/backcard2.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  width: 276px;
  height: 396px;
  border-radius: 23px;
}

/* .player-box-1 >>> .selected-attribute:hover {
  background-color: green;
} */

.player-box-2 >>> .player-head {
  grid-area: 1/1/1/1;
  margin-left: 12%;
  color: #0473ba;
  text-shadow: -2px -2px 0 #d3dbdf, 2px -2px 0 #d3dbdf, -2px 2px 0 #d3dbdf, 2px 2px 0 #d3dbdf;
  letter-spacing: 2px;
  cursor: default;
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 1.2rem;
}

.player-box-2 >>> .splat {
  background-image: url('../../public/images/splat-offwhite-1.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  text-shadow: -0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white;
  font-size: 1.2rem;
}

.player-box-2 >>> .player-card {
    grid-area: 2/1/2/1;
    margin-left: 15%;
    margin-right:15%;
    border: solid 2px black;
    border-radius: 25px;
    text-align: center;
    background-image: url("../../public/images/frontcard1.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    display: grid;
    grid-template-rows: auto;
    padding-bottom: 18px;
    box-shadow: 2px 2px;
}

.player-box-2 >>> .back-card-div{
  background-image: url("../../public/images/backcard1.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  width: 276px;
  height: 396px;
  border-radius: 23px;
}

.draw {
  grid-area: 2/1/2/3;
  font-size: 6rem;
  text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
  font-family: tomorrow;
  color: white;
  z-index: 5;
  text-align: center;
}
</style>
