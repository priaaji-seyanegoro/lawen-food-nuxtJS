<template>
  <div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3" v-if="isLoading">
        <!-- img order pemesanan  -->
        <div class="col-md-6">
          <img
            :src="require(`~/assets/food-image/${product.gambar}`)"
            class="img-fluid shadow"
          />
        </div>

        <!-- info order pemesanan  -->
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ product.harga }}</strong>
          </h4>

          <!-- form pemesanan  -->
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                min="0"
                oninput="this.value = Math.abs(this.value)"
                v-model="order.qty_order"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                class="form-control"
                placeholder="Keterangan spt : Pedes, Nasi Setengah .."
                v-model="order.desc_order"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="ordered">
              <b-icon-cart /> Pesan {{ totalPrice }}
            </button>
          </form>
        </div>
      </div>

      <div class="text-center mt-3" v-else>
        <b-spinner label="Spinning" />
        <h1>Loading</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseUrl } from "../../config";

export default {
  data() {
    return {
      product: {},
      order: {},
      isLoading: false,
    };
  },
  computed: {
    totalPrice: function () {
      if (this.order.qty_order) {
        return `Rp. ${this.order.qty_order * this.product.harga}`;
      } else {
        return `Rp. 0`;
      }
    },
  },
  methods: {
    setProduct: function (res) {
      this.product = res;
    },
    ordered: function () {
      if (this.order.qty_order) {
        this.order.product = this.product;
        axios
          .post(`${baseUrl}/keranjangs`, this.order)
          .then((res) => {
            console.log(res);
            this.$store.commit("updatedCarts", res.data);
            // redirect to cart
            this.$router.push({ path: "/cart" });
            // this.$toast.success("Sukses Masuk Keranjang", {
            //   type: "success",
            //   position: "top-right",
            //   duration: 3000,
            //   dismissible: true,
            // });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // this.$toast.error("Jumlah Pesanan Harus diisi", {
        //   type: "error",
        //   position: "top-right",
        //   duration: 3000,
        //   dismissible: true,
        // });
      }
    },
  },
  //fire when page rendered
  created() {
    axios
      .get(`${baseUrl}/products/${this.$route.params.id}`)
      .then((result) => {
        this.setProduct(result.data);
        this.isLoading = true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
