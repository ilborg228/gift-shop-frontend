<template>
  <div class="card">
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
  </div>
</template>

<script>
export default {
  name: "item",
  props:{
    product:{
      type:Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>