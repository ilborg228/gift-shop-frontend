<template>

  <!--Категория-->
  <div class="col-md-4 items" v-for="category in categories">
    <!--Ссылка--><a href="#"><!--Фото--><img class="logo container-fluid" src="#" alt="category-img"/></a>
    <!--Название--><h4 class="display1 text-center text-danger">{{category.categoryName}}</h4>
  </div><!--Категория-->

</template>

<script>
export default {
  name: "categories",
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