<template lang="html">
  <h1 v-if='player'>{{player.name}}</h1>
</template>

<script>
export default {
  name: "player-head",
  props: ['player']
}
</script>

<style lang="css" scoped>
</style>
