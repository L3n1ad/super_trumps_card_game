<template lang="html">
  <div v-if='hero' class="">
    <h3>{{hero.name}}</h3>
    <img v-bind:src="hero.image.url" alt="" width="100">
    <div class="">
      <p>Intelligence</p>
      <p>Strength</p>
      <p>Speed</p>
      <p>Durability</p>
      <p>Power</p>
      <p>Combat</p>
    </div>
    <div class="">
      <p v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute, value)'>{{value}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: "player-card",
  props: ['hero'],
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
</style>
