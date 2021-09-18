<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<Modal v-if="gameEnded" @confirmed="confirmed" teleport to="body"/>
<main class='flex h-full flex-col sm:flex-row items-center sm:items-start justify-evenly bg-gradient-to-tr from-purple-400 to-blue-200'>

<div class='dashboard sm:w-2/12 flex flex-col items-center justify-center '> 
<div class="flex flex-col items-center mt-14">
  <section class='flex flex-col items-center mb-10'>
<h1 class="text-6xl mb-6 text-white">Boggle</h1>
<img class="w-32 rounded-2xl" src="../assets/logo.png" alt="boggle logo">
</section>


<Timer v-show="timer!=0 || isStarted" :isStarted=isStarted :timer="timer" @timer-end='endGame'/>
<form  v-on:submit.prevent="onSubmit" v-if="!isStarted" class="w-full max-w-sm mt-10 mb-2">
  <div class="flex items-center border-b-2 border-indigo-400 py-2">
    <input v-model="timer" v-on:keyup.enter="startGame" type="number" min="1" max="10" class="appearance-none bg-transparent text-center text-8xl font-bold border-none w-full text-black-400 mr-3 py-1 px-2 leading-tight focus:outline-none text-indigo-600"  placeholder="Minutes" aria-label="Full name">
  </div>
</form>

<Button v-on:click="startGame" class="w-full max-w-sm mt-16 " :disabled="timer==0 && !isStarted ">{{gameAction}}</Button>
</div>
</div>

<div class="mt-4 w-8/12"> 

  <Table :isStarted="isStarted"/>

</div>
</main>

</template>

<script>
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'
import Button from '@/components/mini_components/Button.vue'
import Timer from '@/components/mini_components/Timer.vue'
import {ref , computed} from 'vue'
export default {
  components: {
    Table,
    Button,
    Timer,
    Modal
  },
  setup() {
    let isStarted = ref(false);
    let gameAction =computed(()=> {return isStarted.value ? "עצור" : "התחל משחק"}) ;
    let timer = ref(0)
    let realTimer = computed(()=> {return timer.value*60});
    let gameEnded = ref(false);
   return{
     gameEnded,
     realTimer,
     gameAction,
     timer,
     isStarted
   }
  },
methods: {
  startGame(){
      this.isStarted = !this.isStarted;
      this.timer=0
    
  },
  endGame(){
    this.gameEnded = true
  },
  confirmed(){
    this.gameEnded = false;
    this.isStarted = false;
  }
}
}
</script>

<style scoped>

main{
 height: 110vh;
}
h1{
 color:  rgb(75, 44, 200);
 font-weight: bold;
}

</style>