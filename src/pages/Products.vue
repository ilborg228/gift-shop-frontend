<template>
  <h1 class="display1 text-center" style="margin-top:100px;">{{ category.categoryName }}</h1>
  <hr>

  <section class="sections random-product">
    <div class="container-fluid">
      <div class="container">
        <div class="row ">

          <Item v-bind:products="products"></Item>

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
      //products: [],
      products: [{

      }],
      categoryName:this.$route.params.categoryName
    }
  },
  props:{
    category:{
      required:true,
      type: Object
    }
  },
  methods:{
    async fetchProductByName(categoryName){
       try {
         let response = await axios.get(this.host+"/products/" + categoryName)
         this.products=response.data
         console.log(response.data)
       }catch (e) {
         alert(e)
       }
    }
  },
  mounted() {
    //this.fetchProductByName(this.categoryName)
  }
}
</script>

<style scoped>

</style>