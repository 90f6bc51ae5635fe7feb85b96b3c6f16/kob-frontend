<template>
  <div>
    <!-- <div class="" style="margin: 0 -2em 0 -1em">
      <b-collapse
        id="example-collapse"
        style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto"
      >
        <div
          v-for="category in categorys"
          :key="category.product_category_code"
        >
          <ul>
            <li>
              <nuxt-link
                :to="{
                  path: `/product/category/${category.product_category_code}`,
                }"
              >
                {{ category.product_category_name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </b-collapse>
    </div> -->
    <b-row class="title-product">
      <b-col md="6" class="mt-md-3 mt-3">
        <button
          @click=""
          class="btn"
          style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important"
        >
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            style="color: #555555; font-size: 10pt"
          />
        </button>
        <button
          @click=""
          class="btn"
          style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important"
        >
          <font-awesome-icon
            :icon="['fas', 'angle-right']"
            style="color: #555555; font-size: 10pt"
          />
        </button>
      </b-col>
      <b-col md="6" class="mt-md-3 mt-2 text-md-right text-left">
        <div style="color: #444444; font-size: 12pt">
          HOME / SHOP /
          <span style="color: #888888; font-size: 12pt"> SIMPLE PRODUCT </span>
        </div>
      </b-col>
    </b-row>

    <b-row
      class="photos"
      style="margin: 2em 0 0 0"
      v-for="(product_mother, index) in product_mothers"
      :key="product_mother.product_code"
    >
      <!-- <carousel :starting-image="3" :images="images"> </carousel> -->

      <div
        v-if="product_mother.product_image"
        style="border: 1px solid #e4e4e4"
      >
        <carousel
          style="border: 1px solid #e4e4e4"
          :starting-image="0"
          :images="images"
        >
        </carousel>
      </div>
      <div v-else style="border: 1px solid #e4e4e4">
        <svg
          class=""
          width="100%"
          height="550"
          role="img"
          aria-label="Placeholder: Kob Giftshop"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title></title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text
            x="30%"
            y="50%"
            fill="#eceeef"
            dy=".3em"
            style="font-size: 30pt"
          >
            Kob Giftshop
          </text>
        </svg>
      </div>

      <div>
        <div style="text-align: left">
          <div style="color: #232323; font-size: 28pt">
            {{ product_mother.product_name }}
          </div>
        </div>
        <div class="product-star-ating">
          <div style="float: left; margin: -2px 5px 0 0">
            <star-rating
              v-bind:increment="0.1"
              v-bind:max-rating="5"
              v-bind:star-size="12"
              v-bind:read-only="true"
              v-bind:show-rating="false"
              v-model:rating="rating"
            >
            </star-rating>
          </div>
          <div style="text-align: right; margin: 0 0 0 0">
            <p
              style="
                text-align: center;
                float: left;
                margin: 0 0 0 0;
                color: #777777;
                font-size: 12pt;
              "
            >
              (5 Customers reviews)
            </p>
          </div>
        </div>
        <br />
        <div style="text-align: left; display: flex">
          <div
            style="
              text-decoration: line-through;
              padding-right: 10px;
              color: #999999;
              font-size: 18pt;
            "
          >
            ฿200.00
          </div>
          <div style="color: #222222; font-size: 18pt">
            ฿{{ product_mother.product_price }}
          </div>
        </div>
        <div style="text-align: left; display: flex; padding-bottom: 10px">
          <div style="color: #777777; font-size: 12pt">
            {{ product_mother.product_detail }}
          </div>
        </div>
        <div
          style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #e4e4e4;
            background-color: #f5fffa;
          "
          v-if="product_childs != ''"
        >
          <div
            v-for="product_child in product_childs"
            :key="product_child.product_code"
          >
            <div class="dotted" style="color: #777777; font-size: 12pt">
              จำนวนชิ้น :
              <span style="color: #222222"
                >{{ product_child.product_unit_name }} ชิ้น</span
              >
              ราคา :
              <span style="color: #222222"
                >{{ product_child.product_price }} บาท</span
              >
            </div>
          </div>
        </div>

        <!-- <div class="qty-button"> -->
        <!-- <div class="quantity"> -->
        <b-row class="mt-3">
          <b-col
            cols="5"
            lg="4"
            class="d-flex justify-content-center align-items-center"
          >
            <b-input-group style="height: 40px">
              <b-input-group-prepend>
                <b-btn variant="info" @click="decrement()">-</b-btn>
              </b-input-group-prepend>

              <b-form-input
                min="0.00"
                :value="quantity"
                class="text-center"
                style="height: 100%"
              ></b-form-input>

              <b-input-group-append>
                <b-btn variant="info" @click="increment()">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-col>
          <b-col cols="7" lg="8" class="d-flex justify-content-start pl-0">
            <div
              class="Add-to-cart"
              style="
                /* width: 65%; */
                /* text-align: left; */
                /* display: flex; */
                /* flex-direction: column; */
                /* padding-top: 20px; */
                /* padding-bottom: 10px; */
                /* border-bottom: 1px solid #e4e4e4; */
                /* margin: 0 -2em 0 0; */
              "
            >
              <!-- <div style="width: 80%"> -->
              <b-button
                variant="dark"
                class=""
                style="height: 45px; width: 100%"
                @click="addToCart(product_mother)"
              >
                ADD TO CART
                <font-awesome-icon
                  :icon="['fa', 'cart-plus']"
                  style="color: #fff"
                />
              </b-button>
              <!-- </div> -->
            </div>
          </b-col>
        </b-row>

        <!-- </div> -->
        <!-- </div> -->
        <hr class="mt-3" />

        <b-row>
          <b-col
            style="
              text-align: left;
              display: flex;
              flex-direction: column;
              padding-bottom: 10px;
              margin: 0 -2em 0 0;
              /* border-bottom: 1px solid #e4e4e4; */
              /* padding-top: 20px; */
            "
          >
            <div style="color: #222222; font-size: 12pt" class="">
              SKU :
              <span style="color: #777777; font-size: 12pt">
                {{ product_mother.product_code }}
              </span>
            </div>
            <div
              v-for="category in categorys"
              :key="category.product_category_code"
            >
              <div
                style="color: #222222; font-size: 12pt"
                class=""
                v-if="
                  product_mother.product_category_code ==
                  category.product_category_code
                "
              >
                Category :
                <span style="color: #777777; font-size: 12pt">
                  {{ category.product_category_name }}
                </span>
              </div>
            </div>
            <div style="color: #222222; font-size: 12pt" class="">
              Tags :
              <span style="color: #777777; font-size: 12pt">
                {{ product_mother.product_tag }}
              </span>
            </div>
          </b-col>
        </b-row>
        <hr />
      </div>
    </b-row>
    <div class="" style="padding-bottom: 30px">
      <b-card no-body>
        <b-tabs pills card nav-wrapper-class="">
          <b-tab title="DESCRIPTION" active>
            <div
              v-for="(product_mother, index) in product_mothers"
              :key="product_mother.product_code"
            >
              <b-card-text>{{
                product_mother.product_description
              }}</b-card-text>
            </div>
          </b-tab>
          <b-tab title="ADDITIONAL INFORMATION">
            <b-card-text>
              <div
                style="
                  text-align: left;
                  display: flex;
                  flex-direction: column;
                  padding-top: 20px;
                  padding-bottom: 10px;
                "
              >
                <div
                  v-for="(product_mother, index) in product_mothers"
                  :key="product_mother.product_code"
                  class="additionnal"
                >
                  <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                    <div
                      style="
                        float: left;
                        width: 20%;
                        color: #444444;
                        font-size: 12pt;
                      "
                      class=""
                    >
                      Weight :
                    </div>
                    <div
                      style="
                        align: right;
                        width: 80%;
                        color: #777777;
                        font-size: 12pt;
                      "
                    >
                      1.5 kg
                    </div>
                  </div>
                  <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                    <div
                      style="
                        float: left;
                        width: 20%;
                        color: #444444;
                        font-size: 12pt;
                      "
                      class=""
                    >
                      Dimensions :
                    </div>
                    <div
                      style="
                        align: right;
                        width: 80%;
                        color: #777777;
                        font-size: 12pt;
                      "
                    >
                      90 x 60 x 90 cm
                    </div>
                  </div>
                  <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                    <div
                      style="
                        float: left;
                        width: 20%;
                        color: #444444;
                        font-size: 12pt;
                      "
                      class=""
                    >
                      Composition :
                    </div>
                    <div
                      style="
                        align: right;
                        width: 80%;
                        color: #777777;
                        font-size: 12pt;
                      "
                    >
                      100% Cotton
                    </div>
                  </div>
                  <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                    <div
                      style="
                        float: left;
                        width: 20%;
                        color: #444444;
                        font-size: 12pt;
                      "
                      class=""
                    >
                      Colour :
                    </div>
                    <div
                      style="
                        align: right;
                        width: 80%;
                        color: #777777;
                        font-size: 12pt;
                      "
                    >
                      Blue, Gray, Red
                    </div>
                  </div>
                  <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                    <div
                      style="
                        float: left;
                        width: 20%;
                        color: #444444;
                        font-size: 12pt;
                      "
                      class=""
                    >
                      Size :
                    </div>
                    <div
                      style="
                        align: right;
                        width: 80%;
                        color: #777777;
                        font-size: 12pt;
                      "
                    >
                      Extra Smail, Large, Medium, Small
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <b-row>
      <b-col class="related-product" sm="6" cols="12">
        <div style="font-size: 18pt; color: #222222">RELATED PRODUCTS</div>
      </b-col>
      <b-col class="related-product" sm="6" cols="12">
        <div class="awesome-product text-left text-sm-right">
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
    <!-- เฉพาะสิ้นค้าประเภทเดียวกัน -->
    <b-row class="">
      <b-col class="p-0">
        <div class="carousel-wrapper">
          <client-only>
            <agile :options="options" ref="carousel">
              <div v-for="product in products" :key="product.product_code">
                <b-col class="card-product">
                  <card-product :item="product" :rating="true" />
                </b-col>
              </div>
            </agile>
          </client-only>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardProduct from "../../components/CardProduct.vue";
import Carousel from "../../plugins/vue-carousel/Carousel.vue";
export default {
  components: {
    Carousel,
    CardProduct,
  },
  async asyncData({ $productService, params }) {
    const products = await $productService.product.getProductPage({
      product_page: 1,
      // page_brand: brand,
      // page_min: min,
      // page_max: max
    });
    const categorys = await $productService.product.getProductCategoryBy();
    const productCodes = await $productService.product.getProductByCode({
      product_code: params.id,
    });
    console.log("productCodes", productCodes);
    let group_child = [];
    let images = [];
    let obj = {};
    let product_mothers = [];
    let product_childs = [];
    if (productCodes.data[0].product_child == 1) {
      // console.log("ลูก");
      const includes = await $productService.product.getProductInclude({
        product_code: productCodes.data[0].product_code,
      });
      const mothers = await $productService.product.getProductByCode({
        product_code: includes.data[0].product_code,
      });
      const productImages = await $productService.product.getProductImageByCode(
        {
          product_code: includes.data[0].product_code,
        }
      );
      const name_child = await $productService.product.getProductIncludeByCode({
        product_code: includes.data[0].product_code,
      });
      mothers.data.forEach((e_img1, i) => {
        let objToAdd1 = {
          big: `https://rvscs-develop.com/km-korat/${e_img1.product_image}`,
          thumb: `https://rvscs-develop.com/km-korat/${e_img1.product_image}`,
        };
        obj = {
          ...obj,
          ...objToAdd1,
        };
        images.push(obj);
      });
      productImages.data.forEach((e_img2, i) => {
        let objToAdd1 = {
          big: `https://rvscs-develop.com/km-korat/${e_img2.product_image_name}`,
          thumb: `https://rvscs-develop.com/km-korat/${e_img2.product_image_name}`,
        };
        obj = {
          ...obj,
          ...objToAdd1,
        };
        images.push(obj);
      });
      name_child.data.forEach(async (e, i) => {
        group_child.push(e.product_main_code);
      });
      const childs = await $productService.product.getProductIncludeByName({
        product_code: group_child,
      });
      childs.data.forEach((e, i) => {
        product_childs.push(e);
      });
      product_mothers.push(mothers.data[0]);
    } else if (productCodes.data[0].product_child == 0) {
      // console.log("แม่");
      const mothers = await $productService.product.getProductByCode({
        product_code: productCodes.data[0].product_code,
      });
      const productImages = await $productService.product.getProductImageByCode(
        {
          product_code: productCodes.data[0].product_code,
        }
      );
      const name_child = await $productService.product.getProductIncludeByCode({
        product_code: productCodes.data[0].product_code,
      });
      if (name_child.data != "") {
        // console.log("แม่มีลูก");
        name_child.data.forEach(async (e, i) => {
          group_child.push(e.product_main_code);
        });
        const childs = await $productService.product.getProductIncludeByName({
          product_code: group_child,
        });
        childs.data.forEach((e, i) => {
          product_childs.push(e);
        });
      } else if (name_child.data == "") {
        // console.log("แม่ไม่มีลูก");
        const childs = "";
        product_childs.push(childs);
      }
      mothers.data.forEach((e_img1, i) => {
        let objToAdd1 = {
          big: `https://rvscs-develop.com/km-korat/${e_img1.product_image}`,
          thumb: `https://rvscs-develop.com/km-korat/${e_img1.product_image}`,
        };
        obj = {
          ...obj,
          ...objToAdd1,
        };
        images.push(obj);
      });
      productImages.data.forEach((e_img2, i) => {
        let objToAdd1 = {
          big: `https://rvscs-develop.com/km-korat/${e_img2.product_image_name}`,
          thumb: `https://rvscs-develop.com/km-korat/${e_img2.product_image_name}`,
        };
        obj = {
          ...obj,
          ...objToAdd1,
        };
        images.push(obj);
      });
      product_mothers.push(mothers.data[0]);
    }
    // console.log("product_mothers", product_mothers);
    // console.log("product_childs", product_childs);
    return {
      products: products.data ? products.data : [],
      categorys: categorys.data ? categorys.data : [],
      // product_mothers: product_mothers.data ? product_mothers.data : [],
      // product_childs: product_childs.data ? product_childs.data : [],
      product_mothers,
      product_childs,
      images,
    };
  },
  data() {
    return {
      quantity: 1,
      options: {
        infinite: true,
        slidesToShow: 5,
        navButtons: false,
        dots: false,
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
            breakpoint: 260,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      rating: 4.4,
      obj_item: {},
      shoppingCart: [],
    };
  },
  mounted() {
    this.shoppingCart = JSON.parse(
      localStorage.getItem("shoppingCart") || "[]"
    );
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
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 0) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    },
    addToCart(product) {
      let exists = false;
      // console.log("product", product);
      for (const cartItem of this.shoppingCart) {
        if (cartItem.product_code === product.product_code) {
          cartItem.amount = cartItem.amount + this.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.shoppingCart.push({
          ...product,
          amount: this.quantity,
        });
      }
      window.location.reload(true);
    },
  },
};
</script>

<style scoped>
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
  text-align: center;
  padding-bottom: 20px;
}

.dotted:before {
  content: "• ";
  color: blue;
}

.card-header {
  background-color: transparent !important;
  padding: 0px !important;
}

.active-nav-item-class {
  background: red;
}

.carousel-wrapper {
  padding-top: 20px;
  padding-bottom: 0;
}

.img-wrapper img {
  margin: auto;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.title-product {
  font-family: "Kanit";
  font-size: 1.5em;
  font-weight: 500;
}

.left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60.5%;
  right: 50%;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.right {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60.5%;
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

/* .card-product:hover {
  box-shadow: 0 0 5px rgba(33, 33, 33, 0.5);
  border: 1px solid #ccc;
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
} */

.text {
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 5px 47.5px;
}

div {
  font-family: "Kanit";
}

.card-product {
  padding-left: 0;
  padding-right: 0;
  flex: 1 0 21%;
  /* explanation below */
  border: 1px solid #e4e4e4;
}

.product-name {
  margin-top: 0.3em;
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

.related-product {
  padding-top: 0.5em;
  font-weight: 600;
  padding-bottom: 0.5em;
  /* margin: auto -2em auto -1em; */
}

.awesome-product {
}

.vue-star-rating {
  justify-content: center;
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
  text-align: center;
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

.divCheckbox {
  display: none !important;
}

.text-overflow {
  padding: 0 1em 0 1em;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .qty-button {
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 20%;
} */

@media only screen and (max-width: 600px) {
  .photos {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2em;
    text-align: center;
    /* padding-bottom: 20px; */
    /* padding: 20px; */
  }

  /* .qty-button {
    text-align: left;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;
  } */
  .Add-to-cart {
    width: 100%;
  }
  agile {
    min-width: 260px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 938px) {
  /* .qty-button {
    width: 30%;
  } */
  .Add-to-cart {
    width: 100%;
  }
}
</style>
