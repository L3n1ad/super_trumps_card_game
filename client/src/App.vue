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
    .then( ids => this.allHeroesID = ids)
    .then(() =>{
      GameService.getAllPlayers()
        .then( data => {
          this.playerOne = data[0]
          this.playerTwo = data[1]
        })
        .then(() => {
          this.playerOne.hand = [this.allHeroesID[5]]
          this.playerTwo.hand = [this.allHeroesID[27]]
        })
    });
  }
}
</script>

<style lang="css" scoped>
</style>
