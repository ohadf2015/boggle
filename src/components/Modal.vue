<template>
  <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
<div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<svg  xmlns="http://www.w3.org/2000/svg"
				class="ml-6 w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div class="flex flex-col ml-3">
				<div class="font-medium text-xl leading-none">המשחק נגמר, עכשיו נשאר לחשב את הנקודות!</div>
				
			</div>
           
		</div>
        
	</div>
     <Button @click="$emit('confirmed')" class="max-w-lg mt-6">יאללה לניקוד</Button>
</div>

</div>
</template>

<script>
import Button from '@/components/mini_components/Button.vue'
export default {
emits: ['confirmed'],
components: {
    Button
}
}
</script>

<style>

</style>