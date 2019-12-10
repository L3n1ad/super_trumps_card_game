<template lang="html">
  <div id="timer">
    <span id="minutes">{{minutes}}</span>
    <span id="middle">:</span>
    <span id="seconds">{{seconds}}</span>
    <!-- <span>{{totalTime}}</span> -->
    <div>
      <button v-on:click="startTimer">Start</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "timer",
  data(){
    return{
      timer: null,
      totalTime: (1*60),
      // resetButton: false,
      // title: "Let the countdown begin!!"

    }},
  mounted() {

  },

  methods:{
    startTimer() {
      console.log("timer running");
    this.timer = setInterval(() => this.countdown(), 1000);
    // this.resetButton = true;
  },
    // stopTimer: function() {
    //   clearInterval(this.timer);
    //   this.timer = null;
    //   // this.resetButton = true;
    // },
    // resetTimer: function() {
    //   this.totalTime = (1 * 60);
    //   clearInterval(this.timer);
    //   this.timer = null;
    //   this.resetButton = false;
    // },
    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown() { if (this.totalTime > 0){
      this.totalTime--;
      }
    }
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
}
</script>

<style lang="css" scoped>
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
