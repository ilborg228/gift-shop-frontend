<template>
  <h1 class="display1 text-center" style="margin-top: 100px;">Каталог</h1>
  <section class="sections random-product">
    <div class="container-fluid">
      <div class="container">
        <div class="row">


          <!--Категория-->
          <div class="col-md-4 items">
            <!--Ссылка--><a href="#"><!--Фото--><img class="logo container-fluid" :src="category.imgSource"></a>
            <!--Название--><h4 class="display1 text-center text-danger">Символ года - 2021</h4>
          </div><!--Категория-->

        </div><!--.row-->
      </div><!--.container-->
    </div><!--.container-fluid-->
  </section>
</template>

<script>
export default {
  name: "Categories",
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