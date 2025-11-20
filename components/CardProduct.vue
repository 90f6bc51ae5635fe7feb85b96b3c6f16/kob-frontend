<template>
  <div class="card-product">
    <b-row v-if="item.promotions && item.promotions == 'active'" class="no-gutters card-promotion">
      <b-col class="rounded-0 col-12" >
        <font-awesome-icon :icon="['fa', 'tags']" style="color: #ffc107;font-size: 22px;" />
      </b-col>
    </b-row>
    <nuxt-link :to="{ path: `/product/${item.product_code}` }">
      <img v-if="item.product_image" class="cover" width="100%" height="220px"
        :src="`${$store.state.BASE_ENDPOINT_IMAGE}/${item.product_image}`" alt="kob-image" />
      <img v-else class="cover" width="100%" height="220px" src="~/assets/kob-image.jpg" alt="kob-image" />
    </nuxt-link>
    <div class="card-detail">
      <b-row class="no-gutters card-action">
        <nuxt-link :to="{ path: `/product/${item.product_code}` }" class="col-6">
          <b-col class="btn rounded-0 btn-outline-success">
            <font-awesome-icon class="text-dark" :icon="['fa', 'eye']" />
          </b-col>
        </nuxt-link>
        <b-col class="btn rounded-0 btn-outline-success col-6" @click="addCartItem(item)">
          <font-awesome-icon class="text-dark" :icon="['fa', 'cart-plus']" />
        </b-col>
      </b-row>
      <nuxt-link :to="{ path: `/product/${item.product_code}` }">
        <div class="card-detail-text">
          <div class="product-name">{{ item.product_name }}</div>
          <div class="product-price">฿{{ item.product_price }}</div>
          <star-rating v-if="rating" style="display:flex;justify-content: center;" class="justify-content-center"
            v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true"
            v-bind:show-rating="false" v-model="item.rating">
          </star-rating>
        </div>
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
    addCartItem(item) {
      this.$store.commit("cart/add", item);
    },
  },
};
</script>