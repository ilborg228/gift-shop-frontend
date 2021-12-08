<template>
  <div style="margin-top: 100px;"><h1 class="h3 text-center my-4">Лучший магазин подарков в Самаре.</h1></div>
  <div class="container margin-top">
    <div class="row">
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="http://samaragiftshop.ru/src/shop/1.jpg">
          <img class="img-fluid" src="http://samaragiftshop.ru/src/shop/1.jpg" alt="">
        </a>
      </div>
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="http://samaragiftshop.ru/src/shop/2.jpg">
          <img class="img-fluid" src="http://samaragiftshop.ru/src/shop/2.jpg" alt="">
        </a>
      </div>
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="http://samaragiftshop.ru/src/shop/3.jpg">
          <img class="img-fluid" src="http://samaragiftshop.ru/src/shop/3.jpg" alt="">
        </a>
      </div>
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="../img/shop/4.jpg">
          <img class="img-fluid" src="../img/shop/4.jpg" alt="">
        </a>
      </div>
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="@/img/shop/5.jpg">
          <img class="img-fluid" src="@/img/shop/5.jpg" alt="">
        </a>
      </div>
      <div class="col-lg-4 col-6 thumb">
        <a data-fancybox="gallery" href="@/img/shop/6.jpg">
          <img class="img-fluid" src="@/img/shop/6.jpg" alt="">
        </a>
      </div>
    </div>
    <h1 class="h3 text-center my-4">Наш магазин с 1996 года предлагает изделия народных художественных промыслов России: гжель, донской фаянс, павловопосадские платки, вологодское кружево, хохлому, изделия с мезенской росписью, лаковую миниатюру и многое другое. В нашем ассортименте посуда, украшения интерьера, текстиль, авторская бижутерия, картины самарских художников и самарские сувениры. Подарки, купленные у нас, обязательно принесут радость, потому что они хранят тепло рук, создавших их художников.</h1>
  </div>

</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.thumb img {
  -webkit-filter: grayscale(0);
  filter: none;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px;
  transition-duration: .2s;
}

.thumb img:hover {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

.thumb {
  padding: 5px;
}
</style>