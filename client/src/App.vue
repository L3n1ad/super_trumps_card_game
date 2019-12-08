<template lang="html">
  <div>
    <form-names></form-names>
    <player-box></player-box>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import newGameForm from "@/components/newGameForm";
import gameGrid from "@/components/gameGrid";
import GameService from './services/GameService.js'

export default {
  name: 'app',
  components: {
    "form-names": newGameForm,
    "game-grid": gameGrid

  },
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
    .then( ids => this.allHeroesID = ids);

    GameService.getAllPlayers()
      .then( data => {
        console.log(data);
        this.playerOne = data[0]
        this.playerTwo = data[1]
      })

      //EventBus from Form.
      eventBus.$on('form-names', names => {
        this.playerOne.name = names[0];
        this.playerTwo.name = names[1];
        this.sendPlayersToDB();
      })
  },
  methods: {
    //Send Players to DB and retrieve Players.
    sendPlayersToDB() {
      GameService.updateData(this.playerOne)
        .then(dbDetailsOne => this.playerOne = dbDetailsOne);
      GameService.updateData(this.playerTwo)
        .then(dbDetailsTwo => this.playerTwo = dbDetailsTwo)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
