<template lang="html">

</template>

<script>
import GameService from './services/GameService.js'

export default {
  name: 'app',
  data(){
    return{
      allHeroes: []
    }
  },
  mounted() {
    GameService.getAllSuperHeroes().then(data => this.allHeroes = data);

  }
}
</script>

<style lang="css" scoped>
</style>
