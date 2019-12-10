<template lang="html">
  <div class="">
    <div v-if='displayPlayer && hero' class="">
      <h4 class="character-name">{{hero.name}}</h4>
      <img class="image" v-bind:src="hero.image.url" alt="" width="100">
      <div class="attributes">
        <p>Intelligence</p>
        <p>Strength</p>
        <p>Speed</p>
        <p>Durability</p>
        <p>Power</p>
        <p>Combat</p>
      </div>
      <div>
        <p v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute, value)'>{{value}}</p>
      </div>
    </div>
    <div v-else class="">
      <h1>Whatever</h1>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: "player-card",
  props: ['hero', 'displayPlayer'],
  data(){
    return{
      attribute: ''
    }
  },
  methods:{
    chooseAttribute(attribute, value){
      eventBus.$emit('chosenAttribute', attribute, value)
    }
  }
}
</script>

<style lang="css" scoped>
  .character-name {
    margin: 2%;
    color: white;
    letter-spacing: 2px;
    font-size: 1.5rem;
    cursor: default;
  }

  .attributes p {
    text-align: left;
    margin-left: 10%;
    cursor: pointer;
  }
  .image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 5px;
    border: solid 5px black;
  }
</style>
