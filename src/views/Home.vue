<template>
  <div class="home">
<!-- <Actions/> -->
    <Hero />
    
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue'
// import Actions from '@/components/Actions.vue'
// import Table from '@/components/Table.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    // Actions
  

  }
}
</script>

<style scoped>
.home{
  height:100vh
}
</style>