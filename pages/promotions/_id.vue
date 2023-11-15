<template>
  <div class="mt-4">
    <h4>รายละเอียดโปรโมชั่น</h4>
    <hr />
    <div class="text-center pt-4">
      <img
        :src="`${
          promotion.promotion_image
            ? `https://rvscs-prod.com/giftshop-service/${promotion.promotion_image}`
            : `https://picsum.photos/1024/480/?image=12`
        }`"
        style="width: 70%"
      />
    </div>

    <table class="mt-4">
      <tbody>
        <tr>
          <td>ชื่อโปรโมชั่น</td>
          <td>{{ promotion.promotion_name }}</td>
        </tr>
        <tr>
          <td>ระยะเวลา</td>
          <td>
            {{ new Date(promotion.promotion_begin_date).toLocaleString() }}
            <strong>-</strong>
            {{ new Date(promotion.promotion_end_date).toLocaleString() }}
          </td>
        </tr>
        <tr>
          <td>ประเภทลูกค้า</td>
          <td>
            {{ promotion.promotion_customer_type }}
          </td>
        </tr>
        <tr>
          <td style="width: 120px">รายละเอียด</td>
          <td>{{ promotion.promotion_detail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async asyncData({ $promotionService, params }) {
    const promotion = await $promotionService.promotion.getPromotionByCode({
      promotion_code: params.id,
    });

    return {
      promotion: promotion.data ? promotion.data[0] : [],
    };
  },
};
</script>