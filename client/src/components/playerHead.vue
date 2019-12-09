<template lang="html">
  <div v-if='player'>
    <h1>{{player.name}}</h1>
    <p>{{score}}</p>
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
