<template>
  <categories v-bind:categories="categories"></categories>
  <button @click="fetchEndpoints">ff</button>
</template>

<script>
import axios from 'axios';
import Categories from "./components/categories";
export default {
  components: {Categories},
  data(){
    return{
      categories:[]
    }
  },
  methods:{
    async fetchEndpoints(){
      const body = {
        "name": "test2",
        "price": 1.2,
        "imgSource": "https://via.placeholder.com/150/771796"
      }
      try {
        const response = await axios.get('http://localhost:8080/allcategories')
        console.log(response)
        this.categories = response.data
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