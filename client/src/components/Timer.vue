<template lang="html">
  <div>
    <div v-if="startTotalTimer" id="total-timer">
      <span>Game: </span><br>
      <span id="minutes">{{totalMinutes}}</span>
      <span id="middle">:</span>
      <span id="seconds">{{totalSeconds}}</span>
    </div>
    <div v-if="startRoundTimer" id="round-timer">
      <span id="minutes">{{roundMinutes}}</span>
      <span id="middle">:</span>
      <span id="seconds">{{roundSeconds}}</span>
    </div>

  </div>

</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: "timer",
  data(){
    return{
      totalTimer: null,
      roundTimer: null,
      totalTime: null,
      roundTime: null,


    }},
  mounted() {
    eventBus.$on("form-game-time", gameTime =>{
      this.totalTime = (parseInt(gameTime) * 60)
      this.startTotalTimer()
    })
    eventBus.$on("game-speed", gameSpeed =>{
      this.roundTime = (parseInt(gameSpeed))
      this.startRoundTimer()
    })
    eventBus.$on("winner-chosen-stop-counter", stop =>{
      this.stopRoundTimer()
    })
    eventBus.$on("next-round-starts", newTime =>{
      this.roundTime = (parseInt(newTime))
      console.log("received next round starts");
      this.startRoundTimer()
    })
    eventBus.$on("stop-total-timer", stop =>{
      this.stopTotalTimer()
    })
    eventBus.$on("stop-round-timer", stop =>{
      this.stopRoundTimer()
    })
  },
  methods:{

    startTotalTimer() {
      console.log("total timer running");
    this.totalTimer = setInterval(() => this.totalCountdown(), 1000);
  },
    startRoundTimer() {
      console.log("round timer running");
    this.roundTimer = setInterval(() => this.roundCountdown(), 1000);
  },
    stopRoundTimer() {
      clearInterval(this.roundTimer);
      this.roundTimer = null;
      this.roundTime = null

    },
    stopTotalTimer() {
      clearInterval(this.totalTimer);
      this.totalTimer = null;
      this.totalTime = null

    },
    totalCountdown() {
      if (this.totalTime > 0){
      this.totalTime--;
      }
      else {
        clearInterval(this.totalTimer);
        this.totalTimer = null;
        eventBus.$emit("time-out-end", this.totalTime)
        }
     },
      roundCountdown() {
        if (this.roundTime > 0){
        this.roundTime--;
        }
        else {
          clearInterval(this.roundTimer);
          this.roundTimer = null;
          eventBus.$emit("round-time-end", this.roundTime)
          }
      },
      padTime(time) {
        return (time < 10 ? '0' : '') + time;
      },
  },
  computed: {
    totalMinutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    totalSeconds() {
      const seconds = this.totalTime - (this.totalMinutes * 60);
      return this.padTime(seconds);
    },
    roundMinutes() {
      const minutes = Math.floor(this.roundTime / 60);
      return this.padTime(minutes);
    },
    roundSeconds() {
      const seconds = this.roundTime - (this.roundMinutes * 60);
      return this.padTime(seconds);
    }

  }
}
</script>

<style lang="css" scoped>
#total-timer {
  position: absolute;
  top: 10px;
  right: 10px;
  padding-right: 30px;
  padding-left: 30px;
  color: white;
  font-size: 3rem;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0 black;
}

/* #round-timer {

} */
/* #message {
color: #DDD;
font-size: 50px;
margin-bottom: 20px;
}

#timer {
font-size: 50px;
line-height: 1;
margin-bottom: 40px;
} */
</style>
