<template>
  <div>
    <Navbar></Navbar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import axios from 'axios';
import Categories from "./components/Category";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";

export default {
  components: {
    Store,
    Navbar,
    Main,
    Categories
  },
  methods:{

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
#app{
  margin-top: 100px;
}

.jumbotron{
  padding: 1em;
  border-radius: 0;
  width: 70%;
  margin:0 auto;
  margin-top:20px;
}
.logo{
  margin-bottom:10px;
  border-radius: 20%;
}
.alert{
  width: 75%;
  margin: 0 auto;
  padding-top: 2em;
}
.alert hr{
  border-top:2px solid silver;
  width: 95%;
  margin-top: 0.3em;
  margin-bottom: 1em;
}
.address{
  text-decoration: underline;
  margin:10px;
}
.items{
  margin-top: 50px;
}
h1{
  font-family: 'Courgette', cursive;
}

hr{
  border-top: 1px dotted #808080;
  width: 60%;
}
p{
  font-family: 'Courgette', cursive;
}
h4{
  font-family: 'Courgette', cursive;
}
.text-adres{
  font-size: 200%;
}
</style>