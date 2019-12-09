<template lang="html">
  <h1 v-if='hero'>{{hero.name}}</h1>
</template>

<script>
export default {
  name: "player-card",
  props: ['hero']
}
</script>

<style lang="css" scoped>
</style>
