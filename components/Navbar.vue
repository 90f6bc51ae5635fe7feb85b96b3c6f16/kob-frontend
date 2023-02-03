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
                {{ count_shop }}
              </span>
            </template>
            <div
              v-if="dataValue.length"
              style="max-height: 430px; overflow: auto"
            >
              <b-dropdown-text
                v-for="(product, index) in dataValue"
                :key="'product' + index"
              >
                <button
                  class="close"
                  aria-label="Close"
                  @click="removeFromCart(product)"
                ></button>
                <div class="manu-shop" style="height: 100px">
                  <div style="float: left">
                    <div
                      v-if="product.product_image"
                      style="border: 0.5px solid grey"
                    >
                      <img
                        style="width: 100px; height: 90px"
                        :src="`http://141.98.19.44:6201/${product.product_image}`"
                        alt=""
                      />
                    </div>
                    <div v-else style="border: 0.5px solid grey">
                      <svg
                        width="100px"
                        height="90px"
                        role="img"
                        aria-label="Placeholder: Kob Giftshop"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title></title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text
                          x="3%"
                          y="50%"
                          style="font-size: 12pt"
                          fill="#eceeef"
                          dy=".3em"
                        >
                          Kob Giftshop
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div
                    style="
                      text-align: left;
                      padding-top: 1em;
                      margin: 0 0 0 120px;
                    "
                  >
                    <div class="text-overflow">
                      {{ product.product_name }}
                    </div>
                    <div class="text-overflow">
                      ฿{{ product.product_price
                      }}<span> X {{ product.amount }}</span>
                    </div>
                  </div>
                </div>
              </b-dropdown-text>
              <b-dropdown-text>
                <div style="float: left">ORDER TOTAL</div>
                <div style="text-align: right">฿{{ Sum }}</div>
              </b-dropdown-text>
            </div>
            <div v-else class="text-center py-4">
              No item in your shopping cart.
            </div>
            <b-dropdown-text style="width: 320px">
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

          <div style="float: right; z-index: 9999999 !important">
            <div class="manu-sidebar">
              <a
                href="https://www.facebook.com/kobgiftshop"
                target="_blank"
                style="text-decoration: none !important"
                id="tooltip-target-1"
              >
                <div class="manu-sidebar-a">
                  <img
                    src="~/assets/Fbb.png"
                    style="width: 50px; height: 50px"
                    alt="facebook"
                  />
                </div>
                <b-tooltip
                  target="tooltip-target-1"
                  triggers="hover"
                  placement="left"
                  variant="primary"
                >
                  <h5>เฟสบุ๊ค</h5>
                </b-tooltip>
              </a>
              <a
                href="tel:0994619241"
                style="text-decoration: none !important"
                id="tooltip-target-2"
              >
                <div class="manu-sidebar-a">
                  <img
                    src="~/assets/tel.png"
                    style="width: 45px; height: 45px; margin: 0 0 0"
                    alt="tel"
                  />
                </div>
                <b-tooltip
                  target="tooltip-target-2"
                  triggers="hover"
                  placement="left"
                  variant="success"
                >
                  <h5>เบอร์โทรศัพท์</h5>
                </b-tooltip>
              </a>
              <a
                href="https://www.google.com/maps/dir//%E0%B8%81%E0%B8%9A%E0%B8%81%E0%B8%B4%E0%B9%8A%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2+121+Jant+Rd+Tambon+Nai+Mueang,+Mueang+Nakhon+Ratchasima+District+Nakhon+Ratchasima+30000/@14.9782908,102.087612,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31194ca4b81e8aad:0x3b5d3e95ddf93832"
                target="_blank"
                style="text-decoration: none !important"
                id="tooltip-target-3"
              >
                <div class="manu-sidebar-a">
                  <img
                    src="~/assets/map.png"
                    style="width: 50px; height: 50px"
                    alt="map"
                  />
                </div>
                <b-tooltip
                  target="tooltip-target-3"
                  triggers="hover"
                  placement="left"
                  variant="danger"
                >
                  <h5>แผนที่ร้าน</h5>
                </b-tooltip>
              </a>
              <a
                href="/contact"
                target="_blank"
                style="text-decoration: none !important"
                id="tooltip-target-4"
              >
                <div class="manu-sidebar-a">
                  <img
                    src="~/assets/contact.png"
                    style="width: 50px; height: 50px"
                    alt="contact"
                  />
                </div>
                <b-tooltip
                  target="tooltip-target-4"
                  triggers="hover"
                  placement="left"
                  variant="warning"
                >
                  <h5>ติดต่อเรา</h5>
                </b-tooltip>
              </a>
            </div>
          </div>
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
  props: ["modelValue"],
  components: {
    FixedHeader,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
  watch: {
    modelValue: {
      deep: true,
      handler(newValue) {
        this.count_shop = 0;
        this.Sum = 0;
        localStorage.setItem("shoppingCart", JSON.stringify(newValue));
        this.dataValue = newValue;
        this.dataValue.forEach((element, index) => {
          this.Sum += element.product_price * element.amount;
          this.count_shop = index + 1;
        });
        this.refresh();
      },
    },
  },
  data() {
    return {
      dataValue: [],
      keyword: "",
      Sum: 0,
      count_shop: 0,
      categorys: [],
    };
  },
  async fetch() {
    const categorys = await this.$productService.product.getProductCategoryBy();

    this.categorys = categorys.data;
  },
  async mounted() {
    this.dataValue = JSON.parse(localStorage.getItem("shoppingCart") || "[]");

    this.dataValue.forEach((element, index) => {
      this.Sum += element.product_price * element.amount;
      this.count_shop = index + 1;
    });
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
        .then((result) => {
          if (result.value == true) {
            this.$swal
              .fire({
                title: "success",
                text: "ลบสำเร็จ",
                type: "success",
                showConfirmButton: false,
                timer: 1500,
              })
              .then((e) => {
                if (e.dismiss == "timer") {
                  const shoppingCart = this.dataValue;
                  const productIndex = shoppingCart.findIndex(
                    (item) => item.product_code === product.product_code
                  );
                  shoppingCart.splice(productIndex, 1);
                  this.dataValue = shoppingCart;
                  this.Sum = 0;
                  this.dataValue.forEach((element) => {
                    this.Sum += element.product_price * element.amount;
                  });
                  localStorage.setItem(
                    "shoppingCart",
                    JSON.stringify(shoppingCart)
                  );
                  this.$emit("update:modelValue", shoppingCart);
                  window.location.reload(true);
                }
              });
          }
        });
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

.manu-shop {
  /* padding-top: 1em; */
  /* font-family: "Kanit"; */
  /* font-size: 1em; */
  /* font-weight: 60%; */
  border-bottom: 1px solid #e4e4e4;
  /* padding-bottom: 20px; */
}

.close {
  float: left !important;
  vertical-align: middle;
  color: inherit;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  width: 20px;
  height: 20px;
  opacity: 1;
  border: 1px solid rgba(128, 128, 128, 0.5);
  margin: 0 -3em 0 0 !important;
}

.close:focus,
.close:hover {
  opacity: 1;
  background: rgba(128, 128, 128, 0.5);
  color: #fff;
}

.close:active {
  background: rgba(128, 128, 128, 0.9);
}

/* tines of the X */
.close::before,
.close::after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  height: 10px;
  width: 1px;
  background-color: currentColor;
}

.close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.fix-navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999999 !important;
  background-color: #fff;
}

.manu-sidebar {
  position: fixed !important;
  font-size: 24px !important;
  width: 50px;
  margin-top: 20%;
  margin-left: 2em;
  float: right;
  display: block;
  text-align: center;
}

.manu-sidebar-a {
  /* border: 0.2px solid #e5e5e5; */
  margin-top: 5px;
  /* background-color: #fff; */
}

.tooltip .tooltip-inner {
  max-width: 500px !important;
  width: 400px !important;
}
</style>
