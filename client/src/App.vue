<template lang="html">

</template>

<script>
require('dotenv').config()

export default {
  name: 'app',
  data(){
    return{
      firstSuperHeroes: [],
      secondSuperHeroes: []
    }
  },
  mounted() {
    // fetch('https://www.superheroapi.com/api.php/2799932793374589/122')
    // .then(res => res.json())
    // .then(data => this.allSuperHeroes.push(data))
    // fetch('https://www.superheroapi.com/api.php/2799932793374589/31')
    // .then(res => res.json())
    // .then(data => this.allSuperHeroes.push(data))
    // fetch('https://www.superheroapi.com/api.php/2799932793374589/32')
    // .then(res => res.json())
    // .then(data => this.allSuperHeroes.push(data))
    // fetch('https://www.superheroapi.com/api.php/2799932793374589/344')
    // .then(res => res.json())
    // .then(data => this.allSuperHeroes.push(data))
    // fetch('https://www.superheroapi.com/api.php/2799932793374589/34')
    // .then(res => res.json())
    // this.getFirstSuperHeroes().then(() => this.getSecondSuperHeroes())
    this.getFirstSuperHeroes()
    this.getSecondSuperHeroes()
  },
  methods: {
    getFirstSuperHeroes: function() {
      console.log(process.env.TEST);
      const promises = [30, 38, 70, 106, 104, 127, 149, 157, 165, 194, 201, 332, 720, 346].map(id => {
        return fetch(`https://www.superheroapi.com/api.php/2799932793374589/${id}`)
          .then(res => res.json())
      });
      console.log(promises);
      Promise.all(promises).then(data => this.firstSuperHeroes = data)
    },
    getSecondSuperHeroes: function() {
      console.log(process.env.TEST);
      const promises = [659, 620, 644, 423, 717, 298, 265, 432, 370, 514, 530, 275, 310, 650].map(id => {
        return fetch(`https://www.superheroapi.com/api.php/2799932793374589/${id}`)
          .then(res => res.json())
      });
      console.log(promises);
      Promise.all(promises).then(data => this.secondSuperHeroes = data)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
Array of super heroes IDs =[30, 38, 70, 106, 104, 127, 149, 157, 165, 194, 201, 332, 720, 346, 561, 659, 620, 644, 423, 717, 298, 265, 432, 370, 514, 530, 275, 310, 650, 655]

https://www.superheroapi.com/api.php/2799932793374589/30
