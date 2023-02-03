<template>
  <div class="card-product">
    <nuxt-link :to="{ path: `/product/${item.product_code}` }">
      <img
        class="cover"
        width="100%"
        height="220px"
        :src="`${
          item.product_image
            ? `http://141.98.19.44:6201/${item.product_image}`
            : `https://placeimg.com/380/200/any?${Math.floor(
                Math.random() * 50
              )}`
        }`"
      />
    </nuxt-link>
    <div class="card-detail">
      <b-row class="no-gutters card-action">
        <b-col class="btn rounded-0 btn-outline-success">
          <font-awesome-icon class="text-dark" :icon="['fa', 'eye']" />
        </b-col>
        <b-col class="btn rounded-0 btn-outline-success">
          <font-awesome-icon class="text-dark" :icon="['fa', 'cart-plus']" />
        </b-col>
      </b-row>
      <nuxt-link :to="{ path: `/product/${item.product_code}` }">
        <div class="product-name text-overflow">{{ item.product_name }}</div>
        <div class="product-price">฿{{ item.product_price }}</div>
        <star-rating
          v-if="rating"
          class="justify-content-center"
          v-bind:increment="0.1"
          v-bind:max-rating="5"
          v-bind:star-size="12"
          v-bind:read-only="true"
          v-bind:show-rating="false"
          v-model="item.rating"
        >
        </star-rating>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    rating: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addToCart() {},
  },
};
</script>