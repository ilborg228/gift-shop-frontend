<template>

  <!--Категория-->
  <div class="col-md-4 items" v-for="category in categories">
    <!--Ссылка--><a href="/products/"+category.categoryId>
    <!--Фото--><img class="logo container-fluid" :src="category.imgSource" alt="category-img"/></a>
    <!--Название--><h4 class="display1 text-center">{{category.categoryName}}</h4>
    <redact-button></redact-button>
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
  },
  methods:{
    redactCategory(){

    }
  }
}
</script>

<style scoped>
.logo{
  margin-bottom:10px;
  border-radius: 20%;
}
</style>