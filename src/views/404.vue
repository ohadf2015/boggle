<template>
  <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl">Oh no..</h1>
      <p class="text-2xl mt-6">404 we could not find this page</p>
    <router-link :to="{ path: '/' }"><vs-button class="max-w-md mt-6">{{$t('go_back_home')}}</vs-button></router-link>
  </div>
</template>


<script>
// @ is an alias to /src
// import Welcome from '@/components/Welcome.vue'

export default {
//   name: 'Home',
  components: {
 
  }

}
</script>
