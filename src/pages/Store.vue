<template xmlns="">
  <h1 class="display1 text-center" style="margin-top: 100px;">Каталог</h1>
  <section class="sections random-product">
    <div class="container-fluid">
      <div class="container">
        <div class="row">

          <Category v-bind:categories="categories"></Category>

        </div><!--.row-->
      </div><!--.container-->
    </div><!--.container-fluid-->
  </section>
</template>

<script>
import Category from "@/components/Category";
import axios from "axios";

export default {
  name: "Store",
  components:{
    Category
  },
  data(){
    return{
      categories:[]
    }
  },
  methods:{
    async fetchItems(){
      try {
        let response = await axios.get(this.host+"/allcategories")
        this.categories = response.data
      }catch (e) {
        alert(e)
      }
    }
  },
  mounted() {
    this.fetchItems()
  }

}
</script>

<style scoped>

</style>