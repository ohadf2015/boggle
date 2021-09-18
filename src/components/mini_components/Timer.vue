<template>
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
 
     <div class="flex flex-col p-3 sm:p-4 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-6xl sm:text-8xl countdown">
      <span :style="sec"></span>
    </span>
        sec
    </div>
  <div class="flex flex-col  p-3 sm:p-4 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-6xl sm:text-8xl countdown">
      <span :style="min"></span>
    </span>
        min
  </div> 

</div>
</template>

<script>
import { reactive, computed, toRefs , ref} from "vue";
export default {
    
setup(){
const currentTimer= ref(0);
const countdown = reactive({
      sec:computed(() => { return `--value:${Math.floor(currentTimer.value%60)?? 0}` }),
      min: computed(() => { return `--value:${Math.floor(currentTimer.value/60)?? 0}` })
});



return{
     ...toRefs(countdown),
     currentTimer
}


},
props:['isStarted','timer'],
 watch: { 
  isStarted: function(newVal) { // watch it
         if(newVal){
           this.startTimer();
         }
         else{
           
           this.currentTimer = 0
           return;}
},
 timer: function(newVal) { // watch it
         if(newVal){
          this.currentTimer=newVal*60;
         }
         else{ return;}
}
 },

methods:{
startTimer(){
const interval = setInterval(() => {
  if (this.currentTimer === 0) {
    this.$emit('timer-end')
    clearInterval(interval)                
  } else {
    this.currentTimer--
  }             
}, 1000)
}

}
}
</script>

<style>

</style>