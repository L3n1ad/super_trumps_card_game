<template lang="html">
  <div class="game-timer" v-if="startTimer" id="timer">
    <span id="minutes">{{minutes}}</span>
    <span id="middle">:</span>
    <span id="seconds">{{seconds}}</span>
    <!-- <span>{{totalTime}}</span> -->
    <div>
      <!-- <button v-on:click="startTimer">Start</button> -->
    </div>
  </div>

</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: "timer",
  data(){
    return{
      timer: null,
      totalTime: null,


    }},
  mounted() {
    eventBus.$on("form-game-time", gameTime =>{
      this.totalTime = (parseInt(gameTime) * 60)
      this.startTimer()
    })
  },
  methods:{

    startTimer() {
      console.log("timer running");
    this.timer = setInterval(() => this.countdown(), 1000);

  },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;

    },
    // resetTimer: function() {
    //   this.totalTime = (1 * 60);
    //   clearInterval(this.timer);
    //   this.timer = null;
    // },
    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown() {
      if (this.totalTime > 0){
      this.totalTime--;
      }
      else {
        clearInterval(this.timer);
        this.timer = null;
        eventBus.$emit("time-out-end", this.totalTime)
        }

    }
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }

  }
}
</script>

<style lang="css" scoped>
.game-timer {
  position: absolute;
  right: 0;
  padding-top: 20px;
  padding-right: 40px;
  color: #d3dbdf;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
}

#message {
color: #DDD;
font-size: 50px;
margin-bottom: 20px;
}

#timer {
font-size: 50px;
line-height: 1;
margin-bottom: 40px;
}
</style>
