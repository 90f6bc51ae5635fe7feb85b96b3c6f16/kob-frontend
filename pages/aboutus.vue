<template>
  <div class="mt-4">
    <h4>เกี่ยวกับเรา</h4>
    <hr />
    <div class="content" v-html="filteredHtml"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $companyService }) {
    const company = await $companyService.company.getCompany();
    const url = company.data[0].company_info_about_us;

    let filteredHtml = url.replace(
      /<oembed\s+[^>]*?url="https:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+).*?<\/oembed>/,

      `<div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>
      </div>`
    );

    return {
      company: company.data ? company.data[0] : [],

      filteredHtml,
    };
  },
};
</script>
