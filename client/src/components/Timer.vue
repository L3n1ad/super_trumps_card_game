<template lang="html">
  <div id="timer">
    <span id="minutes">1</span>
    <span id="middle">:</span>
    <span id="seconds">00</span>
  </div>

</template>

<script>
export default {
  name: "timer",
  data(){
    return{
      timer: null,
      totalTime: (1 * 60),
      // resetButton: false,
      // title: "Let the countdown begin!!"

    }},
  mounted() {
  this.startTimer()
  },

  methods:{
    startTimer: function() {
    this.timer = setInterval(() => this.countdown(), 1000);
    // this.resetButton = true;
  },
    // stopTimer: function() {
    //   clearInterval(this.timer);
    //   this.timer = null;
    //   // this.resetButton = true;
    // },

    
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
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
