<template>
  <div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import axios from 'axios';
import Categories from "./components/Categories";
export default {
  components: {Categories},

}
</script>

<style>
.navbar{
  height: 80px;
}
#app{
  margin-top: 100px;
}
</style>