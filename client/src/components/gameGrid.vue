<template lang="html">
  <player-box></player-box>
</template>

<script>
import playerBox from "./playerBox"
export default {
  name: "game-grid",
  components: {
    "player-box": playerBox
  }
}
</script>

<style lang="css" scoped>
</style>
