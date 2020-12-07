<template>
  <div class="banner">
    <!-- desktop view -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="https://raw.githubusercontent.com/priaaji-seyanegoro/lawencon-food-vue/master/src/assets/img/banner-ilustration.png"
            alt="banner"
            width="100%"
          />
        </div>
      </div>
    </div>

    <!-- mobile view -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="https://raw.githubusercontent.com/priaaji-seyanegoro/lawencon-food-vue/master/src/assets/img/banner-ilustration.png"
            alt="banner"
            width="100%"
          />
        </div>
        <div class="col-md-6 mt-4">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center text-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
