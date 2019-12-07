<template lang="html">
  <player-head></player-head>
  <player-card></player-card>
</template>

<script>
import PlayerHead from "./PlayerHead"
import PlayerCard from "./PlayerCard"
export default {
  name: "player-box"
  components: {
    "player-head": PlayerHead,
    "player-card": PlayerCard
  }
}
</script>

<style lang="css" scoped>
</style>
