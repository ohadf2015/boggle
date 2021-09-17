<template>
      <button  class="transition-all duration-300 whitespace-nowrap text-2xl inline-flex items-center justify-center px-24 py-5 border border-transparent rounded-lg shadow-md font-bold text-white bg-indigo-600 hover:bg-indigo-800">
           <slot></slot>
          </button>
</template>

<script>
export default {

}
</script>

<style>
button:disabled {
      background-color: rgb(203, 203, 203);
      cursor:not-allowed;
}
button[disabled]:hover{
      background-color: rgb(171, 171, 171) !important;
      transform: scale(0.99);

}
</style>