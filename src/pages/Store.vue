<template>
  <h1 class="display1 text-center" style="margin-top:100px;">{{ title }}</h1>
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
export default {
  name: "Store",
  components: {Item},
  data(){
    return {
      products:[
        {
          name:"test",
          price:99.90,
          imgSource:"http://samaragiftshop.ru/src/shop/2.jpg",
          height:100
        },
        {
          name:"test2",
          price:99.90,
          imgSource:"http://samaragiftshop.ru/src/shop/3.jpg",
          height:100
        },
        {
          name:"test3",
          price:99.90,
          imgSource:"http://samaragiftshop.ru/src/shop/3.jpg",
          height:100
        }
      ],
      title:"Category"
    }
  }
}
</script>

<style scoped>

</style>