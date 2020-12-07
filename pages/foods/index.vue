<template>
  <div class="container">
    <!-- title page -->
    <div class="row mt-4">
      <div class="col">
        <h2>
          Daftar
          <strong>Makanan</strong>
        </h2>
      </div>
    </div>

    <!-- search input  -->
    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="queryParams"
            placeholder="Cari Makanan Kesukaan Anda .."
            aria-label="Cari"
            aria-describedby="basic-addon1"
            @keyup="searchingFood"
          />

          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- list product  -->
    <div class="row mb-4" v-if="isLoading">
      <div
        class="col-md-4 mt-4 d-flex justify-content-center"
        v-for="product in foods"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>

    <div class="text-center mt-3" v-else>
      <b-spinner label="Spinning" />
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseUrl } from "../../config";
export default {
  data() {
    return {
      products: [],
      queryParams: "",
      isLoading: false,
    };
  },
  computed: {
    foods() {
      return this.$store.state.foods;
    },
  },
  methods: {
    searchingFood: function () {
      axios
        .get(`${baseUrl}/products?q=${this.queryParams}`)
        .then((result) => {
          this.$store.commit("setFoods", result.data);
          // console.log(this.$store.state.bestFood);
          // this.setProduct(this.$store.state.foods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //fire when page rendered
  created() {
    axios
      .get(`${baseUrl}/products`)
      .then((result) => {
        this.$store.commit("setFoods", result.data);
        this.isLoading = true;
        // console.log(this.$store.state.bestFood);
        // this.setProduct(this.$store.state.foods);
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
