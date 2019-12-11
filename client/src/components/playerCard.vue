<template lang="html">
  <div class="">
    <div v-if='displayPlayer && hero' class="">
      <h4 class="character-name">{{hero.name}}</h4>
      <img class="image" v-bind:src="hero.image.url">
      <div class="attribute-title">
        <div v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute, value)'>{{attribute}}:
        </div>
      </div>
      <div class="attribute-value">
          <div v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute, value)'>{{value}}</div>
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
    color: #d3dbdf;
    letter-spacing: 2px;
    font-size: 1.5rem;
    cursor: default;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
  }

  .attribute-title {
    float: left;
    text-align: left;
    margin-left: 10%;
    cursor: pointer;
    grid-area: 3/1/3/1;
    text-transform: capitalize;
    color: #d3dbdf;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .attribute-title > div:hover {
    float: left;
    text-align: left;
    margin-left: 10%;
    cursor: pointer;
    grid-area: 3/1/3/1;
    text-transform: capitalize;
    color: #d3dbdf;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    transition-property: margin-left;
    transition-duration: 1s;
  }

  .attribute-value {
    float: right;
    text-align:right;
    margin-right: 10%;
    cursor: pointer;
    color: #d3dbdf;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .attribute-value > div:hover {
    float: right;
    text-align:right;
    margin-right: 10%;
    cursor: pointer;
    color: #d3dbdf;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    transition-property: margin-right;
    transition-duration: 1s;
  }

  .image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 5px;
    border: solid 2px black;
    box-shadow: 2px 2px;
  }
</style>
