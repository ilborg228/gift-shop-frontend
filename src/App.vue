<template>
<div>
<p>a</p>
  <button @click="fetchEndpoints" >AAAAAAA</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
  methods:{
    async fetchEndpoints(){
      try {
        const response = await axios.get('http://localhost:8080/endpoints')
        console.log(response)
      }
      catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>

</style>