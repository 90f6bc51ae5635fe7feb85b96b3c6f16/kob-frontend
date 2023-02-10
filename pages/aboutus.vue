<template>
  <div class="mt-4">
    <h4>เกี่ยวกับเรา</h4>
    <hr />
    <div v-html="company.company_info_about_us"></div>
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