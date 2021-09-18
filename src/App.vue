<template>


<div>

  <router-view class="hidden md:block" dir="rtl"/>
  
<div class="  md:hidden h-screen bg-gradient-to-tr from-blue-400 bg-blue-400 to-purple-400  flex flex-col justify-center items-center">
<p class="px-6  text-white text-3xl">
כדי לשחק את המשחק <strong class="animate-bounce block my-4 text-6xl">בוגל</strong>
יש לשחק בו במסך מחשב
</p>

</div>
  
   </div>

</template>


<script>
// @ is an alias to /src

export default {

  name: 'App',
  components: {


  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

#nav {
  z-index: 10;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
