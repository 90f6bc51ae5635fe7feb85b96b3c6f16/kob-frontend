<template>
  <div>
    <b-carousel
      id="carousel-no-animation"
      class="mt-4"
      no-animation
      indicators
      img-width="1024"
      img-height="480"
    >
      <nuxt-link
        v-for="(promotion, idx) in promotions"
        :key="idx"
        :to="{ path: `/promotions/${promotion.promotion_code}` }"
        class="link-text-color"
      >
        <b-carousel-slide
          :caption="`${promotion.promotion_name}`"
          :img-src="`${
            promotion.promotion_image
              ? `http://141.98.19.44:6201/${promotion.promotion_image}`
              : `https://picsum.photos/1024/480/?image=12`
          }`"
        >
        </b-carousel-slide>
      </nuxt-link>
    </b-carousel>

    <div class="kg-carousel-b">
      <client-only>
        <agile :options="options" ref="carousel">
          <div
            v-for="(products_random, idx) in products_randoms"
            :key="idx"
            class="img-wrapper px-2"
          >
            <nuxt-link
              :to="{ path: `/product/${products_random.product_code}` }"
              class="link-text-color"
            >
              <img
                v-if="products_randoms.product_image"
                :src="`${
                  products_random.product_image
                    ? `http://141.98.19.44:6201/${products_random.product_image}`
                    : `https://placeimg.com/380/200/any?${idx}`
                }`"
                style="margin: 0.6rem"
              />
              <svg
                v-else
                width="100%"
                height="220px"
                role="img"
                aria-label="Placeholder: Kob Giftshop"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title></title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="30%" y="50%" fill="#eceeef" dy=".3em">
                  Kob Giftshop
                </text>
              </svg>
              <div style="text-align: center">
                {{ products_random.product_name }}
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

    <b-row class="no-gutters mt-4">
      <b-col
        v-for="product in products.slice(0, 5)"
        :key="product.product_code"
        class="card-product"
      >
        <nuxt-link :to="{ path: `/product/${product.product_code}` }">
          <b-card-img
            v-if="product.product_image"
            :src="`http://141.98.19.44:6201/${product.product_image}`"
            width="100%"
            height="220px"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <svg
            v-else
            width="100%"
            height="220px"
            role="img"
            aria-label="Placeholder: Kob Giftshop"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title></title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
          </svg>
          <div class="card-product-shop">
            <div class="product-name">
              <div class="text-overflow">
                {{ product.product_name }}
              </div>
            </div>
            <div class="product-price">฿{{ product.product_price }}</div>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>

    <client-only>
      <b-row
        class="no-gutters mt-5"
        v-for="(category, idx) in categorys"
        :key="idx"
      >
        <b-col
          md="12"
          class="pt-4 grid-5-col d-none d-md-block"
          :style="`border-top: 4px solid ${category.product_category_color};background-color: ${category.product_category_color}`"
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
              border-top: 1px solid #61c46e;
              border-bottom: 1px solid #61c46e;
            "
            v-for="(brand, idx) in brands"
            :key="idx"
          >
            {{ brand.product_brand_name }}
          </div>
        </b-col>
        <b-col
          class="card-product-blog"
          :style="`border-top: 4px solid ${category.product_category_color};`"
        >
          <b-row
            class="no-gutters"
            v-for="(
              product_category_random_data, idx
            ) in product_category_random"
            :key="idx"
          >
            <b-col
              sm="6"
              md="4"
              class="card-product"
              v-for="(
                product_category_random_data_show, idx
              ) in product_category_random_data[category.product_category_code]"
              :key="idx"
            >
              <nuxt-link
                :to="{
                  path: `/product/${product_category_random_data_show.product_code}`,
                }"
                style="text-decoration: none !important"
                v-if="
                  product_category_random_data_show &&
                  product_category_random_data_show.product_name
                "
              >
                <b-card-img
                  v-if="product_category_random_data_show.product_image"
                  :src="`http://141.98.19.44:6201/${product_category_random_data_show.product_image}`"
                  width="100%"
                  height="220px"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
                <svg
                  v-else
                  width="100%"
                  height="220px"
                  role="img"
                  aria-label="Placeholder: Kob Giftshop"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title></title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="30%" y="50%" fill="#eceeef" dy=".3em">
                    Kob Giftshop
                  </text>
                </svg>
                <div class="product-name">
                  <div class="text-overflow">
                    {{ product_category_random_data_show.product_name }}
                  </div>
                </div>
                <div class="product-price">
                  ฿{{ product_category_random_data_show.product_price }}
                </div>
                <div class="product-star-ating">
                  <p style="text-align: center">
                    <star-rating
                      v-bind:increment="0.1"
                      v-bind:max-rating="5"
                      v-bind:star-size="12"
                      v-bind:read-only="true"
                      v-bind:show-rating="false"
                      v-model="rating"
                    >
                    </star-rating>
                  </p>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          class="card-product-hot grid-5-col d-none d-md-block"
          :style="`width : 100%;height 100%; border-top: 4px solid ${category.product_category_color};`"
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
import "slick-carousel/slick/slick.css";
export default {
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
      rating: 4.5,
      shoppingCart: [],
      product_category_random_fetch: [],
      product_category_random: [],
    };
  },
  async mounted() {
    this.shoppingCart = JSON.parse(
      localStorage.getItem("shoppingCart") || "[]"
    );
    this.cate = await this.$productService.product.getProductCategoryBy();

    await this.cate.data.forEach(async (item, index, arr) => {
      this.product_category_random_fetch =
        await this.$productService.product.getProductCategoryByCodeRandom({
          category_code: item.product_category_code,
        });

      var key = item.product_category_code;
      var obj = {};

      obj[key] = this.product_category_random_fetch.data;
      this.product_category_random.push(obj);
    });
    console.log("this.product_category_random", this.product_category_random);
  },
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem("shoppingCart", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  methods: {
    addToCart(product) {
      let exists = false;
      // console.log("product", product);
      for (const cartItem of this.shoppingCart) {
        // console.log("cartItem.product_code", cartItem.product_code);
        // console.log("this.shoppingCart", this.shoppingCart);
        if (cartItem.product_code === product.product_code) {
          cartItem.amount = cartItem.amount + 1;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.shoppingCart.push({
          ...product,
          amount: 1,
        });
      }
      window.location.reload(true);
    },
  },
  async asyncData({ $productService, $promotionService }) {
    const products = await $productService.product.getProductPage({
      product_page: 1,
    });
    const promotions = await $promotionService.promotion.getPromotion();
    var categorys = await $productService.product.getProductCategoryBy();
    const brands = await $productService.product.getProductBandBy();
    const products_randoms = await $productService.product.getProductRandom();

    return {
      products: products.data || [],
      categorys: categorys.data || [],
      promotions: promotions.data || [],
      products_randoms: products_randoms.data || [],
      brands: brands.data || [],
    };
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50% !important;
}

.left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60%;
  right: 50%;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.right {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.left:hover .text {
  background-color: #39b44f;
}

.right:hover .text {
  background-color: #39b44f;
}

style .card-product:hover .image {
  opacity: 0.3;
}

.card-product:hover .left {
  opacity: 1;
  background-color: green;
  width: 50%;
  border: 1px solid #eaecee;
}

.card-product:hover .right {
  opacity: 1;
  background-color: green;
  width: 50%;
  border: 1px solid #eaecee;
}

.text {
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 5px 47.5px;
}

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

.row-product {
  padding-top: 30px;
  margin: 0 -2.1em 0 -1em;
}

.product-name {
  text-align: center;
  color: #444444;
  font-size: 12pt;
  /* font-family: "Myriad"; */
  text-decoration: none !important;
}

.product-price {
  font-weight: 500;
  text-align: center;
  color: #222222;
  font-size: 12pt;
  /* font-family: "Myriad Pro"; */
}

.row-product-type {
  text-align: center;
  padding-top: 2em;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 20px;
}

.card-product-blog {
  border: 1px solid rgb(0 0 0 / 14%);
  padding-left: 0;
  padding-right: 0;
}

.card-product-shop {
  padding: 1em 0 2em 0;
}

.card-product-hot {
  border-right: 1px solid rgb(0 0 0 / 14%);
  border-bottom: 1px solid rgb(0 0 0 / 14%);
  padding-left: 0;
  padding-right: 0;
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

#example-collapse {
  padding-right: 1.5px;
}

#example-collapse a {
  font-size: 12pt;
  text-align: left;
  color: #666666;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
}

#example-collapse a:hover {
  color: #fff;
  background-color: #39b44f !important;
  box-sizing: border-box;
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

.vue-star-rating {
  justify-content: center;
}

img.navber-show {
  width: 1000px;
}

/* .home-hover-show:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, .5);
    border: 1px solid #ccc;
} */

.text-overflow {
  padding: 0 1em 0 1em;
  white-space: nowrap;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link-text-color {
  color: black;
}
</style>
