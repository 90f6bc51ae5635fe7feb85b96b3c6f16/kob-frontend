<template>
  <b-carousel no-animation indicators img-width="1024" img-height="480">
    <nuxt-link
      v-for="(promotion, idx) in promotions"
      :key="idx"
      :to="{ path: `/promotions/${promotion.promotion_code}` }"
      class="link-text-color"
    >
      <b-carousel-slide
        class="baner-promotion-item"
        :caption="`${promotion.promotion_name}`"
        :img-src="`${
          promotion.promotion_image
            ? `${$store.state.BASE_ENDPOINT_IMAGE}/${promotion.promotion_image}`
            : `https://picsum.photos/1024/480/?image=12`
        }`"
      >
      </b-carousel-slide>
    </nuxt-link>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      promotions: [],
    };
  },
  async fetch() {
    const promotions = await this.$promotionService.promotion.getPromotion();

    this.promotions = promotions.data || [];
  },
};
</script>