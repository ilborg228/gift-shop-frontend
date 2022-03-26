<template>
<h1 class="display1 text-center">Admin</h1>

  <div class="col-md-4 items">
    <form @submit.prevent>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Имя категории" v-model="category.categoryName" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Ссылка на фото" v-model="category.imgSource" required>
      </div>
      <button class="btn btn-primary" @click="createCategory">Создать категорию</button>
    </form>
  </div>

  <div class="col-md-4 items">
    <form @submit.prevent>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Имя товара" v-model="product.name" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Ссылка на фото" v-model="product.imgSource" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Id категории" v-model="product.categeoryId" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Цена" v-model="product.price" required>
      </div>
      <button class="btn btn-primary" @click="createProduct">Создать товар</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data(){
    return{
      category:{
        imgSource:'',
        categoryName:''
      },
      product:{
        categeoryId:'',
        imgSource: '',
        name: '',
        height: '',
        price: '',
      }
    }
  },
  methods:{
    async createCategory(){
      try {
        let response = await axios.post(this.host+"/category",this.category)
        console.log(response.data)
        this.category.categoryName=''
        this.category.imgSource=''
        alert('Добавление прошло успешно')
      }catch (e) {
        alert(e)
      }
    },

    async createProduct(){
      try {
        let response = await axios.post(this.host+"/product/"+this.product.categeoryId,this.product)
        console.log(response.data)
        this.category.categoryName=''
        this.category.imgSource=''
        alert('Добавление прошло успешно')
      }catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>
form{
  margin:0 50px 0 10px ;
}
</style>