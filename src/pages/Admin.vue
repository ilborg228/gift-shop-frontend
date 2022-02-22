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

</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data(){
    return{
      category:{
        id:0,
        imgSource:'',
        categoryName:''
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
    }
  }
}
</script>

<style scoped>
form{
  margin:0 50px 0 10px ;
}
</style>