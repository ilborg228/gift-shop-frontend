<template>
  <h1 class="display1 text-center" style="margin-top:100px;">category name</h1>
  <hr>

  <section class="sections random-product">
    <div class="container-fluid">
      <div class="container">
        <div class="row ">

          <!--Товар-->
          <div class="col-md-4 items">
            <div class="card">
              <!--Фото--><img class="card-img-top container-fluid" src="imgsource" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">
                  <!--Название--><p>name item</p>
                </h5>
              </div>
              <div class="card-footer">
                <div class="float-left">
                  <!--Цена--><p class="text-danger">price ₽</p>
                  <!--Размер--><small class="text-muted">height</small>
                </div>
              </div>
            </div>
          </div>
          <!--Товар-->

        </div><!--.row-->
      </div><!--.container-->
    </div><!--.container-fluid-->
  </section>
</template>

<script>
export default {
  name: "item"

}
</script>

<style scoped>

</style>