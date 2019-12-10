<template lang="html">
  <div v-if='player'>
    <h1>{{player.name}}</h1>
    <div class="splat"><h2>{{score}}</h2></div>
  </div>
</template>

<script>
export default {
  name: "player-head",
  props: ['player', 'score']
}
</script>

<style lang="css" scoped>
</style>
