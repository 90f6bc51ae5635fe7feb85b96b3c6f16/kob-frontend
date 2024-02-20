<template>
  <div class="mt-4">
    <h4>เกี่ยวกับเรา</h4>
    <hr />
    <div class="content" v-html="filteredHtml"></div>
    <div v-for="gellery in galleries_array" :key="gellery.gellery_code">
      <h4>{{ gellery.gallery_name }}</h4>
      <hr />
      <b-container class="py-4" fluid="lg">
        <b-row  no-gutters>

          <b-col lg="3" sm="6" class="text-center p-2" v-for="image in gellery.item" :key="image.gallery_list_code">
            <img class="cover" width="100%" height="100%" :src="`${image.gallery_list_image
              ? `${$store.state.BASE_ENDPOINT_IMAGE}/${image.gallery_list_image}`
              : `https://placeimg.com/380/200/any?${Math.floor(
                Math.random() * 50
              )}`
              }`" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $companyService }) {
    const company = await $companyService.company.getCompany();
    const galleries = await $companyService.company.getGallery();

    const url = company?.data[0]?.company_info_about_us;
    let filteredHtml
    if (company?.data != undefined) {
      filteredHtml = url.replace(
        /<oembed\s+[^>]*?url="https:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+).*?<\/oembed>/,

        `<div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>
      </div>`
      );
    }
    let galleries_array = []
    for (let gallery of galleries.data) {
      const gallery_list = await $companyService.company.getGalleryList({ gallery_code: gallery.gallery_code });
      let temp = {
        ...gallery,
        item: gallery_list.data
      }
      galleries_array.push(
        temp
      )
      console.log('galleries_array', galleries_array);
    }
    return {
      company: company.data ? company.data[0] : [],
      galleries_array,
      filteredHtml,
    };
  },
};
</script>
