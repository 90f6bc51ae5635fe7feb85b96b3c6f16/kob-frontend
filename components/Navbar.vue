<template>
  <div class="font-navbar">
    <fixed-header>
      <div class="fix-navbar">
        <b-container
          fluid="lg"
          class="d-flex p-2 py-md-4 px-md-0 align-items-center"
        >
          <b-img
            class="d-none d-md-block p-2"
            src="~/assets/Logo.png"
            fluid
            alt="Cart logo: KOB GIFTSHOP"
          ></b-img>
          <b-img
            class="d-block d-md-none px-2"
            src="~/assets/Logo.jpg"
            fluid
            alt="Cart logo: KOB GIFTSHOP"
          ></b-img>
          <form
            class="flex-grow-1 ml-0 ml-md-4"
            :action="`/search/${keyword}`"
            method="post"
          >
            <b-input-group>
              <b-form-input
                type="text"
                v-model="keyword"
                placeholder="ค้นหา"
                style="border-radius: 0"
                pattern=".{1,}"
                required
              >
              </b-form-input>
              <template #append>
                <b-button type="submit" variant="warning">
                  <font-awesome-icon
                    :icon="['fas', 'search']"
                    style="font-size: 12px"
                  />
                </b-button>
              </template>
            </b-input-group>
          </form>

          <div class="d-none d-md-block mr-2 ml-4" v-if="!loggedIn">
            <b-link href="/login" style="color: #8d8d8d">ล็อคอิน</b-link>
            /
            <b-link href="/register" style="color: #8d8d8d">สมัครสมาชิค</b-link>
          </div>

          <b-dropdown
            class="ml-2"
            variant="outline-light"
            toggle-class="bg-white"
            no-caret
            right
          >
            <template slot="button-content">
              <font-awesome-icon
                :icon="['fas', 'basket-shopping']"
                class="text-dark"
              />
              <span class="text-dark" aria-label="Close">
                {{ $store.state.cart.items.length }}
              </span>
            </template>
            <div
              v-if="$store.state.cart.items.length"
              style="max-height: 430px; overflow: auto"
            >
              <b-dropdown-text
                v-for="(product, index) in $store.state.cart.items"
                :key="index"
                class="py-2"
                style="border-bottom: 1px solid #eee"
              >
                <div class="d-flex">
                  <div class="cart-item-img">
                    <img
                      class="cover"
                      width="80px"
                      height="80px"
                      :src="`${
                        product.product_image
                          ? `http://141.98.19.44:6201/${product.product_image}`
                          : `https://placeimg.com/380/200/any?${Math.floor(
                              Math.random() * 50
                            )}`
                      }`"
                      alt="product"
                    />
                    <button
                      class="btn-ic-close"
                      aria-label="Close"
                      @click="removeFromCart(product)"
                    >
                      x
                    </button>
                  </div>
                  <div class="pl-3">
                    <div class="line-clamp-2">
                      {{ product.product_name }}
                      {{ product.product_name }}
                      {{ product.product_name }}
                      {{ product.product_name }}
                    </div>
                    <div class="line-clamp-1">
                      ฿{{ product.product_price }} X {{ product.amount }}
                    </div>
                  </div>
                </div>
              </b-dropdown-text>
              <b-dropdown-text class="my-2">
                <div style="float: left">ORDER TOTAL</div>
                <div class="text-right">฿{{ cartTotalPrice }}</div>
              </b-dropdown-text>
            </div>
            <div v-else class="text-center py-4">
              No item in your shopping cart.
            </div>
            <b-dropdown-text class="mb-2" style="width: 320px">
              <b-row>
                <b-col class="pr-2">
                  <b-button variant="primary" block squared href="/cart"
                    >VIEW CART</b-button
                  >
                </b-col>
                <b-col class="pl-2">
                  <b-button
                    variant="outline-light text-dark"
                    block
                    squared
                    href="/order"
                    >CHECK OUT</b-button
                  >
                </b-col>
              </b-row>
            </b-dropdown-text>
          </b-dropdown>

          <b-dropdown
            v-if="loggedIn"
            class="ml-2"
            variant="outline-light"
            toggle-class="bg-white"
            no-caret
            right
          >
            <template slot="button-content">
              <font-awesome-icon :icon="['fas', 'user']" class="text-dark" />
            </template>
            <b-dropdown-item href="/profile">My Account</b-dropdown-item>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-dropdown>
        </b-container>
        <b-navbar
          class="kg-nav p-lg-0"
          toggleable="lg"
          type="dark"
          variant="info"
        >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-container fluid="lg" class="px-0">
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="pt-2 pt-lg-0">
                <b-nav-item class="py-0 py-lg-2" href="/">หน้าหลัก</b-nav-item>
                <b-nav-item class="py-0 py-lg-2" href="/product"
                  >รายการสินค้า</b-nav-item
                >
                <b-nav-item class="py-0 py-lg-2" href="/aboutus"
                  >เกี่ยวกับเรา</b-nav-item
                >
                <b-nav-item class="py-0 py-lg-2" href="/howtoorder"
                  >วิธีการสั่งซื้อ</b-nav-item
                >
                <b-nav-item class="py-0 py-lg-2" href="/contact"
                  >ติดต่อเรา</b-nav-item
                >
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto d-sm-block d-lg-none d-xl-block">
                <b-nav-text
                  >โทรศัพท์ :
                  <span class="bg-warning text-dark text-center px-2">
                    099-461-9241
                  </span>
                </b-nav-text>
                <b-nav-text class="d-sm-block d-md-none text-center">
                  <b-link href="/login">ล็อคอิน</b-link>
                  /
                  <b-link href="/register">สมัครสมาชิค</b-link>
                </b-nav-text>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
      </div>
    </fixed-header>
  </div>
</template>

<script>
import FixedHeader from "vue-fixed-header";

export default {
  components: {
    FixedHeader,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    cartTotalPrice() {
      let cart_total_price = 0;
      this.$store.state.cart.items.forEach((item) => {
        cart_total_price += item.product_price * item.amount;
      });

      return cart_total_price;
    },
  },
  data() {
    return {
      keyword: "",
      categorys: [],
    };
  },
  async fetch() {
    const categorys = await this.$productService.product.getProductCategoryBy();

    this.categorys = categorys.data;
  },
  mounted() {
    this.$store.commit("cart/initialiseStore");
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
    removeFromCart(product) {
      this.$swal
        .fire({
          title: "คุณแน่ใจไหม ?",
          text: "คุณจะไม่สามารถย้อนกลับได้ !",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ตกลง",
          cancelButtonText: "ยกเลิก",
        })
        .then(
          ({ value }) => value && this.$store.commit("cart/remove", product)
          // this.$swal.fire({
          //   title: "success",
          //   text: "ลบสำเร็จ",
          //   type: "success",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        );
    },
  },
};
</script>

import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

<style scoped>
a {
  font-family: "Kanit";
}

.bg-info {
  background-color: #39b54a !important;
}

.login-user {
  margin-top: 7px;
  margin-bottom: 0;
  margin-right: 28px;
  margin-left: 40px;
}

.font-navbar {
  font-family: "Kanit", sans-serif;
}

.fix-navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999999 !important;
  background-color: #fff;
}
</style>