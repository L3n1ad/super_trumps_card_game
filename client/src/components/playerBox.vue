<template lang="html">
  <div >
    <player-head></player-head>
    <player-card></player-card>
  </div>

</template>

<script>
import playerHead from "./playerHead"
import playerCard from "./playerCard"
export default {
  name: "player-box",
  components: {
    "player-head": playerHead,
    "player-card": playerCard
  }
}
</script>

<style lang="css" scoped>
</style>
