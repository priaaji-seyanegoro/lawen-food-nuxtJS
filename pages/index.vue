<template>
  <div class="container">
    <Banner />
    <div class="row mt-5">
      <div class="col">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link class="btn btn-success float-right" to="/foods">
          <b-icon-eye></b-icon-eye> Lihat Semua
        </router-link>
      </div>

      <div class="row mb-3 text-center mx-auto">
        <div
          class="col-md-4 mt-4 d-flex justify-content-center"
          v-for="product in bestFoods"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseUrl } from "../config";
export default {
  computed: {
    bestFoods() {
      return this.$store.state.bestFood;
    },
  },
  //fire when page rendered
  mounted() {
    axios
      .get(`${baseUrl}/best-products`)
      .then((result) => {
        this.$store.commit("setBestFood", result.data);
        console.log(this.$store.state.bestFood);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        this.$toast.error(
          "You're Offline, Please Check your internet connection",
          {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          }
        );
      });
  },
};
</script>

<style>
</style>
