<template>
  <div class="mt-4">
    <h4>โปรโมชั่น</h4>
    <hr />
    <b-row>
      <b-col
        md="6"
        class="pt-4"
        v-for="(promotion, idx) in promotions"
        :key="idx"
      >
        <b-card
          :img-src="`${
            promotion.promotion_image
              ? `${$store.state.BASE_ENDPOINT_IMAGE}/${promotion.promotion_image}`
              : `https://picsum.photos/1024/480/?image=12`
          }`"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            {{ promotion.promotion_name }}
          </b-card-text>
          <table>
            <tbody>
              <tr>
                <td style="width: 120px">ระยะเวลาเริ่มต้น</td>
                <td>
                  {{
                    new Date(promotion.promotion_begin_date).toLocaleString()
                  }}
                </td>
              </tr>
              <tr>
                <td style="width: 120px">ระยะเวลาสิ้นสุด</td>
                <td>
                  {{ new Date(promotion.promotion_end_date).toLocaleString() }}
                </td>
              </tr>
            </tbody>
          </table>
          <b-button
            class="mt-2"
            variant="outline-info"
            :to="{ path: `/promotions/${promotion.promotion_code}` }"
          >
            รายละเอียดเพิ่มเติม
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $promotionService }) {
    const promotions = await $promotionService.promotion.getPromotion();

    return {
      promotions: promotions.data ? promotions.data : [],
    };
  },
};
</script>