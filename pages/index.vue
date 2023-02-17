<template>
  <div>
    <b-row>
      <b-col md="3" class="mt-4">
        <b-card class="h-100" no-body border-variant="warning">
          <b-card-header header-bg-variant="warning"
            >รายการสินค้า</b-card-header
          >
          <b-list-group class="category-list-group" flush>
            <b-list-group-item
              v-for="(category, idx) in categorys"
              class="hover-warning"
              :key="idx"
              :href="`/product/category/${category.product_category_code}`"
            >
              {{ category.product_category_name }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col md="9" class="mt-4">
        <promotion-banner />
      </b-col>
    </b-row>
    <div class="kg-carousel-b">
      <client-only>
        <agile :options="options" ref="carousel">
          <div
            v-for="(product, idx) in product_randoms"
            :key="idx"
            class="img-wrapper px-2"
          >
            <nuxt-link :to="{ path: `/product/${product.product_code}` }">
              <div class="text-dark text-center">
                <img
                  class="cover"
                  width="100%"
                  height="220px"
                  :src="`${
                    product.product_image
                      ? `https://rvscs-develop.com/km-korat/${product.product_image}`
                      : `https://placeimg.com/380/200/any?${idx}`
                  }`"
                />
                {{ product.product_name }}
              </div>
            </nuxt-link>
          </div>
        </agile>
      </client-only>
    </div>

    <b-row>
      <b-col cols="8" class="title-product"> สินค้าใหม่ล่าสุด </b-col>
      <b-col cols="4" class="title-product">
        <div style="text-align: right">
          <button
            @click="$refs.carousel.goToPrev()"
            class="btn"
            style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important"
          >
            <font-awesome-icon
              :icon="['fas', 'angle-left']"
              style="color: #555555; font-size: 10pt"
            />
          </button>
          <button
            @click="$refs.carousel.goToNext()"
            class="btn"
            style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important"
          >
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              style="color: #555555; font-size: 10pt"
            />
          </button>
        </div>
      </b-col>
    </b-row>

    <div class="title-product-sub">ขายง่าย ขายดี กำไรงาม</div>

    <b-row
      class="
        no-gutters
        mt-4
        product-bestseller
        justify-content-around justify-content-lg-center
      "
    >
      <b-col
        class="grid-5"
        v-for="(product, idx) in products.slice(0, 5)"
        :key="idx"
        style="min-width: 220px"
      >
        <card-product :item="product" />
      </b-col>
    </b-row>

    <client-only>
      <b-row
        class="no-gutters mt-5"
        v-for="(category, category_idx) in categorys"
        :key="category_idx"
        :style="`border-top: 4px solid ${category.product_category_color};`"
      >
        <b-col
          md="3"
          class="pt-4 grid-lg-5 d-none d-md-block"
          :style="`background-color: ${category.product_category_color}`"
        >
          <div class="text-center mb-4">
            <b-img
              :src="`https://rvscs-develop.com/km-korat/${category.product_category_icon}`"
              alt="Image"
              class="rounded"
              width="56"
              height="56"
            ></b-img>
            <p class="my-2" style="font-size: 15pt; color: #fff">
              {{ category.product_category_name }}
            </p>
          </div>
          <div
            class="pl-4 py-2"
            style="
              font-size: 13pt;
              color: #fff;
              border-top: 1px solid #fff;
              border-bottom: 1px solid #fff;
            "
            v-for="(brand, idx) in brands"
            :key="idx"
          >
            {{ brand.product_brand_name }}
          </div>
        </b-col>
        <b-col
          cols="12"
          class="p-2 d-block d-md-none"
          :style="`background-color: ${category.product_category_color}`"
        >
          <div class="d-flex">
            <b-img
              :src="`https://rvscs-develop.com/km-korat/${category.product_category_icon}`"
              alt="Image"
              class="rounded cover"
              width="36"
              height="36"
            ></b-img>
            <p class="ml-2 mb-0" style="font-size: 15pt; color: #fff">
              {{ category.product_category_name }}
            </p>
            <b-dropdown
              class="ml-auto bg-transparent drop-icon"
              variant="light"
              no-caret
              right
            >
              <template slot="button-content">
                <font-awesome-icon :icon="['fas', 'angle-left']" />
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </template>
              <b-dropdown-item
                v-for="(brand, brand_idx) in brands"
                :key="brand_idx"
                >{{ brand.product_brand_name }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </b-col>
        <b-col class="card-product-blog">
          <b-row class="no-gutters">
            <b-col
              sm="6"
              md="4"
              v-for="(product, idx) in category.product_randoms"
              :key="idx"
            >
              <card-product :item="product" :rating="true" />
            </b-col>
          </b-row>
        </b-col>
        <b-col
          sm="4"
          md="3"
          class="card-product-hot grid-lg-5 d-block d-sm-none d-lg-block"
        >
          <div style="background-color: #adadad; margin: 0.6em">
            <h4 style="padding-top: 1em; text-align: center; color: #fff">
              NEW GADJETS
            </h4>
            <p style="text-align: center; font-size: 11px">
              SUMMER SPECIAL COLLECTION <br />40% OFFER
            </p>
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
              style="height: 405px"
            ></b-card-img>
          </div>
        </b-col>
      </b-row>
    </client-only>
    <b-row class="pt-5">
      <b-col
        md="6"
        v-for="(category, idx) in categorys.slice(0, 2)"
        :key="category.product_category_code"
      >
        <nuxt-link
          :to="{ path: `/product/category/${category.product_category_code}` }"
        >
          <div :class="`card-category pattern-${idx + 1}`">
            <b-card-img
              :src="`https://rvscs-develop.com/km-korat/${category.product_category_image}`"
              width="100%"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="category-text">
              <div class="category-title">
                {{ category.product_category_name }}
              </div>
              <div class="category-detail">
                {{ category.product_category_detail }}
              </div>
              <b-button variant="light">SHOP NOW</b-button>
            </div>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import PromotionBanner from "@/components/PromotionBanner.vue";

export default {
  components: { CardProduct, PromotionBanner },
  name: "Homepage",
  data() {
    return {
      options: {
        infinite: true,
        navButtons: false,
        dots: false,
        min: "undefined",
        max: "undefined",
        brand: "undefined",
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  async asyncData({ $productService }) {
    try {
      const products = await $productService.product.getProductPage({
        product_page: 1,
      });

      const brands = await $productService.product.getProductBandBy();
      const categorys = await $productService.product.getProductCategoryBy();
      const product_randoms = await $productService.product.getProductRandom();

      //warning! http request loop will drop performance so much, this affect to SEO.
      //solution => new service in server to get full detail instead (loop in service).
      for (let category of categorys.data) {
        let products =
          await $productService.product.getProductCategoryByCodeRandom({
            category_code: category.product_category_code,
          });

        category.product_randoms = products.data;
      }

      return {
        brands: brands.data || [],
        categorys: categorys.data || [],
        products: products.data || [],
        product_randoms: product_randoms.data || [],
      };
    } catch (error) {
      //handle error state redirect to error page
      console.log(error);
      return {
        brands: [],
        categorys: [],
        products: [],
        product_randoms: [],
      };
    }
  },
};
</script>

<style scoped>
div {
  font-family: "Kanit", sans-serif;
}

.title-product {
  font-family: "Kanit", sans-serif;
  font-size: 20pt;
  font-weight: 500;
  color: #222222;
}

.title-product-sub {
  font-family: "Kanit", sans-serif;
  font-size: 12pt;
  font-weight: 500;
  color: #999999;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgb(0 0 0 / 14%);
  border-left: 1px solid rgb(0 0 0 / 14%);
  border-right: 1px solid rgb(0 0 0 / 14%);
}

.img-wrapper img {
  margin: auto;
  background-image: linear-gradient(gray 100%, transparent 0);
}

a.nuxt-link-active {
  font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>