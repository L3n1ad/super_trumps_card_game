<template lang="html">
  <div>
    <h1 class="winner" v-if='playerWins'>Winner</h1>
    <player-head class="player-head":player='player' :score='score'></player-head>
    <player-card class="player-card" :hero='hero' :displayPlayer='displayPlayer' :clickable='clickable'></player-card>
  </div>

</template>

<script>
import playerHead from "./playerHead"
import playerCard from "./playerCard"

export default {
  name: "player-box",
  props: ['hero', 'player', 'displayPlayer', 'playerWins', 'score', 'clickable'],
  components: {
    "player-head": playerHead,
    "player-card": playerCard
  }
}
</script>

<style lang="css" scoped>
  .winner {
    font-size: 6rem;
    text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
    margin: auto;
    font-family: tomorrow;
    color: white;
    grid-area: 2/1/2/1;
    z-index: 5;
  }
</style>
