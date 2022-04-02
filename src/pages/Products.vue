<template>
  <h1 class="display1 text-center" style="margin-top:100px;">{{ products.categoryName }}</h1>
  <hr>

  <section class="sections random-product">
    <div class="container-fluid">
      <div class="container">
        <div class="row ">
          <!--Товар-->
          <div class="col-md-4 items" v-for="product in products">
          <Item v-bind:product="product"></Item>

          </div>
        </div><!--.row-->
      </div><!--.container-->
    </div><!--.container-fluid-->
  </section>
</template>

<script>
import Item from "../components/Item";
import axios from "axios";

export default {
  name: "Products",
  components: {Item},
  data(){
    return{
      products:{
        categoryName: ''
        [{

        }]
      },
      categoryId:this.$route.params.categoryId
    }
  },
  methods:{
    async fetchProductByName(categoryId){
       try {
         let response = await axios.get(this.host+"/products/" + categoryId)
         this.products=response.data
         console.log(response.data)
       }catch (e) {
         alert(e)
       }
    }
  },
  mounted() {
    this.fetchProductByName(this.categoryId)
  }
}
</script>

<style scoped>

</style>