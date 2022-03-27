<template>
  <h1 class="display1 text-center" style="margin-top:100px;">{{ $route.params.id }}</h1>
  <hr>

  <!--Фото--><img class="card-img-top container-fluid" :src="product.imgSource" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">
      <!--Название--><p>{{product.name}}</p>
    </h5>
  </div>
  <div class="card-footer">
    <div class="float-left">
      <!--Цена--><p class="text-danger">{{ product.price }} ₽</p>
      <!--Размер--><small class="text-muted">{{ product.height }}</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemPage",
  data(){
    return{
      product: {

      },
      id:this.$route.params.id
    }
  },
  methods:{
    async fetchProductById(id){
      try {
        let response = await axios.get(this.host + "/product/" + id)
        this.product=response.data
        console.log(response.data)
      }catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fetchProductById(this.id)
  }
}
</script>

<style scoped>

</style>