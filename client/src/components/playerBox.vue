<template lang="html">
  <div>
    <h1 v-if='playerWins'>Winner</h1>
    <player-head :player='player'></player-head>
    <player-card :hero='hero' :displayPlayer='displayPlayer'></player-card>
  </div>

</template>

<script>
import playerHead from "./playerHead"
import playerCard from "./playerCard"

export default {
  name: "player-box",
  props: ['hero', 'player', 'displayPlayer', 'playerWins'],
  components: {
    "player-head": playerHead,
    "player-card": playerCard
  }
}
</script>

<style lang="css" scoped>
</style>
