<template>
  <div class="card shadow-lg product-card" style="width: 18rem">
    <img
      :src="require(`~/assets/food-image/${this.product.gambar}`)"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <NuxtLink
        class="btn btn-lg btn-success"
        :to="`/foods/${this.product.id}`"
      >
        <b-icon-cart />
        Pesan
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
