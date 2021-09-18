<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col pt-2">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full px-2 sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b  border-gray-200 sm:rounded-lg">
          <table class="min-w-full border divide-y divide-gray-200 border-collapse rounded-3xl ">

            <tbody class="bg-white divide-y divide-gray-200 ">
              <tr v-for=" (row, index) in tableData" :key="index">
                <td onclick="" v-for=" (col, i) in row" :key="i"  class="py-3 whitespace-nowrap  border-gray-400">
                  <div :class="{'animate-spin': animation}" class="text-2xl  sm:text-8xl  text-gray-900">{{ col }}</div>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  const ab = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת','א','ו','י'];
  const numCol = 7;
import {ref} from 'vue';
export default {
  setup() {

  function getRandomLetter(){
    return ab[parseInt(Math.random()*(ab.length -1))];
  }

  function createTableData(){
    let tableData = [];
    let row= [];
    for (let i = 0; i < numCol; i++) {
        for(let j= 0; j < numCol; j++){
        row.push(getRandomLetter());
      }
      tableData.push(row);
      row = [];
    }
    return tableData;
  } 
  let tableData = createTableData() ;
  let animation = ref(false)
  return {
      tableData ,
      createTableData,
      animation
  }
  },
  methods: {
    restart(){
     this.tableData=this.createTableData()
    },



}
,
props:['isStarted'],
 watch: { 
  isStarted: function(newVal) { // watch it
         if(newVal){
           this.restart();
           this.animation = true;
           setTimeout(function(){ this.animation = false;}.bind(this), 1000);
         }
 
  }
}
}

</script>

<style scoped>

</style>