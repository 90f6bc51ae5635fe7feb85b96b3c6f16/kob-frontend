<template>
  <div class="mt-4">
    <h4>วิธีการสั่งซื้อ</h4>
    <hr />
    <div v-html="company.company_info_how_to_order"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $companyService }) {
    const company = await $companyService.company.getCompany();

    return {
      company: company.data ? company.data[0] : [],
    };
  },
};
</script>