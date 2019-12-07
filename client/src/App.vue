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

    //EventBus from Form.
    eventBus.$on('form-names', names) => {
      this.playerOne.name = names[0];
      this.playerTwo.name = names[1];
      sendPlayersToDB();
    }

  }
}
</script>

<style lang="css" scoped>
</style>
