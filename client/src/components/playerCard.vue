<template lang="html">
  <div class="fix-height">
    <div v-if='displayPlayer && hero' class="">
      <h4 class="character-name">{{hero.name}}</h4>
      <img class="image" v-bind:src="hero.image.url">
      <div class="attribute-title">
        <div class="selected-attribute" v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute)'>
          <div :class='{chosen: attribute === chosen }'>
            {{attribute}}
          </div>
        </div>
      </div>
      <div class="attribute-value">
          <div class="selected-value" v-for='(value, attribute) in hero.powerstats' v-on:click='chooseAttribute(attribute)'>
            <div :class='{chosen: attribute === chosen }'>
              {{value}}
            </div>
          </div>
      </div>
    </div>
    <div v-else class="back-card-div">
      <!-- <img class="back-card" src="../../public/images/backcard.jpg" alt="" width="285" > -->
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "player-card",
  props: ['hero', 'displayPlayer', 'clickable'],
  mounted(){
    eventBus.$on('chosenAttribute', attribute => this.chosen = attribute)

    eventBus.$on('next-round', () => this.chosen = "")

    eventBus.$on('form-names', () => this.chosen = "")
  },
  data(){
    return {
      chosen: ""
    }
  },
  methods:{
    chooseAttribute(attribute){
      if(this.clickable === true){
        eventBus.$emit('chosenAttribute', attribute)
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .chosen {
    color: #FFEB3B;
    font-size: 1.2rem;
    transition: 1s;
  }

  .selected-attribute {
    margin-bottom: 2px;
  }

  .selected-value {
    margin-bottom: 2px;
  }

  .character-name {
    margin: 2%;
    color: white;
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
    text-align: left;
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
    display: block;
    text-align:right;
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
    margin-bottom: 13px;
    border: solid 2px black;
    box-shadow: 2px 2px;
  }
  .back-card{

  }
  .fix-height{
    height: 91%;
  }
</style>
