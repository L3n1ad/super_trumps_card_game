<template lang="html">

</template>

<script>
import GameService from './services/GameService.js'

export default {
  name: 'app',
  data(){
    return{
      allHeroes: [],
      allHeroesID: [],
      playerOne: {},
      playerTwo: {}
    }
  },
  mounted() {
    GameService.getAllSuperHeroes()
    .then(data => this.allHeroes = data)
    .then(() => this.allHeroes.map(obj => {
      return obj._id
    }))
    .then( ids => this.allHeroesID = ids);

    GameService.getAllPlayers()
      .then( data => {
        console.log(data);
        this.playerOne = data[0]
        this.playerTwo = data[1]
      })

  }
}
</script>

<style lang="css" scoped>
</style>
