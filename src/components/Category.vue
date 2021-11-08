<template>

  <!--Категория-->
  <div class="col-md-4 items" v-for="category in categories">
    <!--Ссылка--><a href="/products/${category.categoryName}"><!--Фото--><img class="logo container-fluid" :src="category.imgSource" alt="category-img"/></a>
    <!--Название--><h4 class="display1 text-center">{{category.categoryName}}</h4>
  </div><!--Категория-->

</template>

<script>
export default {
  name: "category",
  props:{
    categories:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>

</style>