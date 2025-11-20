<template>
  <div>
    <b-row class="mt-3">
      <b-col cols="6">
        <h4>ตะกร้าสินค้า</h4>
      </b-col>
      <b-col cols="6" class="text-right" style="color: #e4e4e4">
        <nuxt-link to="/" style="text-decoration: none">
          <p style="font-size: 13pt; color: #8f8888">
            <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #8f8888" />
            กลับไปที่หน้าหลัก
          </p>
        </nuxt-link>
      </b-col>
    </b-row>

    <hr />

    <div class="mt-2 overflow-auto">
      <table class="table" style="min-width: 720px; border: 1px solid #e8e8e8">
        <thead>
          <tr style="background-color: #f8f8f8">
            <td>สินค้า</td>
            <td class="text-center" width="90">ราคา</td>
            <td class="text-center" width="120">จำนวน</td>
            <td class="text-center" width="90">ราคารวม</td>
            <td width="40"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in $store.state.cart.items" :key="index">
            <td>
              <div class="d-flex align-items-center">

                <img v-if="product.product_image" class="cover" width="80px" height="80px"
                  :src="`${$store.state.BASE_ENDPOINT_IMAGE}/${product.product_image}`" alt="kob-image" />
                <img v-else class="cover" width="80px" height="80px" src="~/assets/kob-image.jpg" alt="kob-image" />

                <span class="cart-item-name line-clamp-3">
                  {{ product.product_name }}
                </span>
              </div>
            </td>
            <td class="align-middle text-center">
              ฿{{ product.product_price }}
            </td>
            <td class="align-middle">
              <div class="d-flex align-items-center">
                <b-input-group-prepend>
                  <b-btn class="btn-qty" squared @click="reduceCartQty(product)">-</b-btn>
                </b-input-group-prepend>
                <b-form-input class="text-center" :value="product.amount" @keydown="keydownNumber"
                  @change="(e) => updateCartQty(product, e)" style="
                    width: 60px;
                    border-top: 1px solid black;
                    border-bottom: 1px solid black;
                  "></b-form-input>
                <b-input-group-prepend>
                  <b-btn class="btn-qty" squared @click="addCartItem(product)">+</b-btn>
                </b-input-group-prepend>
              </div>
            </td>
            <td class="align-middle text-center">
              ฿{{ product.product_price * product.amount }}
            </td>
            <td class="align-middle text-center">
              <button class="btn p-0" @click="removeCartItem(product)">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" style="color: red; font-size: 25px" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-row>
      <b-alert show variant="success" v-for="promotion_received in promotion_receiveds"
        :key="promotion_received.promotion_code" style="width: 100%">
        {{ promotion_received.promotion_received_name }}
      </b-alert>
      <b-alert show variant="success" v-for="promotion_suggest in promotion_suggests"
        :key="promotion_suggest.promotion_code" style="width: 100%">
        <h5>{{ promotion_suggest.promotion_name }}</h5>
        <h5>{{ promotion_suggest.promotion_suggest_name }}</h5>
      </b-alert>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" class="d-flex align-items-center mt-2 mt-md-0">
        <input type="text" class="pl-2 mr-1 mr-sm-2" placeholder="รหัสคูปอง"
          style="border: 1px solid #f2f2f2; height: 48px" />
        <b-button class="apply-coupon-button" variant="light" style="
                                height: 48px
                                border: 1px solid #f2f2f2;
                                background-color: #f2f2f2;
                                color: #a6a6a6;
                                min-width: 140px;
                              ">
          ใช้คูปอง
        </b-button>
      </b-col>
      <b-col cols="12" md="6" class="mt-2 mt-md-0 text-md-right">
        <b-button class="ml-auto" variant="warning" squared style="height: 48px">
          อัปเดตตะกร้าสินค้า
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-md="6" md="6" sm="12" class="title-product">
        <div class="text-dark">
          <h5 class="mb-4">ยอดรวมของตะกร้าสินค้า</h5>
          <table class="table table-bordered">
            <tr>
              <td width="50%" class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ใบกำกับภาษี
              </td>
              <td>
                <b-form-checkbox id="checkbox-1" v-model="order_vat" name="checkbox-1" value="1" unchecked-value="0">
                  ขอใบกำกับภาษี (กรุณาติดต่อทางร้าน)
                </b-form-checkbox>
                <b-form-textarea v-model="order_invoice_address" placeholder="ข้อมูลใบกำกับภาษี" rows="5"
                  max-rows="5"></b-form-textarea>
              </td>
            </tr>
            <tr>
              <td class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ที่อยู่จัดส่ง
              </td>
              <td>
                <b-form-group v-slot="{ ariaDescribedby }" label="เลือกที่อยู่จัดสั่ง">
                  <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" style="padding-top: 10px"
                    name="some-radios" @change="selectAddress('', 0)">
                    {{ `รับเองที่ร้าน` }}
                    <br />
                  </b-form-radio>

                  <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" style="padding-top: 10px"
                    name="some-radios" :value="address_.customer_address_id" v-for="(address_, idx) in address"
                    @change="selectAddress(address_, 1)" :key="'B' + idx">
                    {{ address_.customer_name }}
                    <br />
                    {{ address_.customer_address }}
                    {{ address_.customer_zipcode }} <br />
                    {{ address_.customer_tel }}
                  </b-form-radio>
                </b-form-group>
              </td>
            </tr>
            <tr>
              <td class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ส่วนลด
              </td>
              <td>
                <div v-for="(discount, idx) in promotion_discount" :key="idx">
                  {{ discount.receipt_discount_list_name }}
                  {{ discount.receipt_discount_list_price }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ยอดรวมก่อนหัก
              </td>
              <td>฿{{ cartSubTotalPrice }}</td>
            </tr>
            <tr>
              <td class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ราคาส่วนลด
              </td>
              <td>฿{{ discountPrice }}</td>
            </tr>
            <tr>
              <td class="d-none d-md-table-cell" style="background-color: rgb(248, 248, 248)">
                ยอดรวมทั้งหมด
              </td>
              <td>฿{{ cartTotalPrice }}</td>
            </tr>
          </table>
          <b-button variant="success" size="lg" class="mb-2" block squared @click="_submitData()">
            สั่งซื้อสินค้า
          </b-button>
        </div>
      </b-col>
    </b-row>

    <b-modal id="modal-1" title="สั่งซื้อเรียบร้อย" centered hide-footer @hidden="gotoOrderPage()" no-close-on-esc
      no-close-on-backdrop hide-header-close>
      <div id="preview">
        <img src="~/assets/qr1.png" />
      </div>
      <div id="preview">
        <img src="~/assets/qr2.png" />
      </div>
      <div style="padding-bottom: 10px; text-align: center">
        <div><b>แจ้งหรือสอบถามข้อมูลการสั่งซื้อได้ที่</b></div>
        <div>
          <b>ไอดีไลน์ : </b><span>@kob0994619241</span> หรือ @modnganbeauty
        </div>
        <div><b>เบอร์โทรศัพท์ : </b><span>099-461-9241</span></div>
      </div>
      <b-button class="mt-3 btn-success" block @click="gotoOrderPage()">ไปที่คำสั่งซื้อ</b-button>
    </b-modal>
  </div>
</template>
<script>


export default {
  name: "Homepage",
  middleware: "checkAuth",
  computed: {
    cartSubTotalPrice() {
      let total_price = 0;
      this.$store.state.cart.items.forEach((item) => {
        total_price += item.product_price * item.amount;
      });

      return total_price;
    },
    cartTotalPrice() {
      let total_price = 0;
      let discount = 0;
      this.$store.state.cart.items.forEach((item) => {
        total_price += item.product_price * item.amount;
      });
      this.promotion_discount.forEach((item) => {
        discount += item.receipt_discount_list_price;
      });

      this.discount = discount;
      total_price = total_price - discount;
      this.total_price = total_price;
      return total_price;
    },
    discountPrice() {
      let discount = 0;
      this.promotion_discount.forEach((item) => {
        discount += item.receipt_discount_list_price;
      });
      return discount;
    },
  },

  data() {
    return {
      order_vat: 0,
      selected: null,
      user: "",
      customer_code: "",
      order_invoice_address: "",
      selected_address: {},
      cart: this.$store.state.cart,
      promotions: [],
      total_price: 0,
      promotions_show: [],
      promotion_receiveds: [],
      promotion_suggests: [],
      promotion_discount: [],
      order_shipping_status: 1,
    };
  },
  async asyncData({
    $userService,
    $productService,
    $promotionService,
    $cookies,
    store,
  }) {
    try {
      const user = store.state.auth.user;
      const categorys = await $productService.product.getProductCategoryBy();
      const address = await $userService.user.getMemberAddress({
        customer_code: user.customer_code,
      });
      const promotions_temp =
        await $promotionService.promotion.getPromotionActive();

      const promotions = JSON.parse(promotions_temp.data);

      return {
        address: address.data ? address.data : [],
        categorys: categorys.data ? categorys.data : [],
        promotions: promotions.data ? promotions.data : [],
      };
    } catch (error) {
      //handle error state redirect to error page
      console.log(error);
      return {
        address: [],
        categorys: [],
        promotions: [],
      };
    }
  },
  mounted() {
    this.user = this.$store.state.auth.user;
    this.address.map((address) => {
      if (address.customer_default_address == 1) {
        this.selected = address.customer_address_id;
        this.selected_address = address;
        this.order_shipping_status = 1;
      }
    });

    this.calibratePromotion();
  },
  methods: {
    async _submitData() {
      if (this.$store.state.app_config.cart_status) {
        try {
          let today = new Date();
          let now_date = `${today.getFullYear()}-${today.getMonth() + 1
            }-${today.getDate()}`;
          let now_time = `${today.getHours()}:${today.getMinutes() + 1
            }:${today.getSeconds()}`;

          let address = "";
          if (this.order_shipping_status == 0) {
            address = "";
          } else if (this.order_shipping_status != 0) {
            address =
              this.selected_address.customer_address +
              " " +
              this.selected_address.customer_zipcode +
              " " +
              this.selected_address.customer_tel;
          }
          await this.$axios.post(""+this.$config.BASE_ENDPOINT+"/api/order-insert/", {
              customer_code: this.user.customer_code,
              sale_station_code: "",
              user_code: "",
              order_date: `${now_date} ${now_time}`,
              order_name: this.selected_address.customer_name,
              order_address: address,
              order_predict_price: "",
              order_product_price: this.total_price,
              order_discount_price: this.discount,
              order_status: "request_check_price",
              order_shipping: "",
              order_slip: "",
              order_track_number: "",
              order_invoice_address: this.order_invoice_address,
              order_list: this.$store.state.cart.items,
              order_vat: this.order_vat,
              order_shipping_status: this.order_shipping_status,
              addby: this.user.customer_code,
            })
            .then((response) => {
              if (response.data == "error") {
                this.$swal.fire({
                  type: "error",
                  title: "ไม่สามารถเพิ่มข้อมูล",
                  text: "ไม่สามารถเพิ่มข้อมูล",
                });
                setTimeout(() => {
                  this.$router.push("/cart");
                }, 2000);
              } else {
                localStorage.removeItem("shoppingCart");
                this.$swal.fire({
                  type: "success",
                  title: "สร้างออเดอร์แล้ว",
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.$bvModal.show("modal-1");
              }
            })
            .catch((error) => {
              console.log("err", error);
            });
        } catch (error) {
          console.log("err", error);
          this.error = error;
        }
      } else {
        this.$swal.fire({
          icon: "info",
          title: "Coming soon",
          text: "Coming soon",
        });
      }
    },
    async calibratePromotion() {
      // loading state ===> start
      const carts = this.$store.state.cart.items;

      if (this.promotions.length) {
        await this.$axios
          .post(""+this.$config.BASE_ENDPOINT+"/api/check-promotion", {
            promotions: this.promotions,
            carts: carts.map((cart) => ({
              receipt_list_code: "",
              product_code: cart.product_code,
              product_group_code: cart.product_group_code || "",
              sale_scale_type: "retail",
              receipt_list_name: cart.product_name,
              receipt_list_qty: cart.amount,
              receipt_list_price: cart.product_price,
              receipt_list_discount_price: "",
              receipt_list_total_price:
                parseFloat(cart.product_price) * parseFloat(cart.amount),
              product_price: cart.product_price,
              promotions: [],
              require_fetch_price: true,
              product_group_scales: [],
            })),
          })
          .then((response) => {
            if (response.data) {
              this.promotions_show = response.data;
              this.promotion_receiveds =
                this.promotions_show.promotion_receiveds;
              this.promotion_suggests = this.promotions_show.promotion_suggests;
              this.promotion_discount =
                this.promotions_show.receipt_discount_lists;
            } else {
              this.promotions_show = [];
              this.promotion_receiveds = [];
              this.promotion_suggests = [];
              this.promotion_discount = [];
            }

            // loading state <=== end
          })
          .catch((error) => {
            console.log("err", error);
            // loading state <=== end
          });
      }
    },
    gotoOrderPage() {
      this.$bvModal.hide("modal-1");
      this.$router.push("/order");
    },
    setDefaultAddress(value) {
      if (value.customer_default_address == 1) {
        this.selected_address = value;
        this.selected = value.customer_address_id;
      }
    },
    selectAddress(value, order_shipping_status) {
      if (order_shipping_status === 0) {
        console.log("00000000000000000000000000000000000");
        this.selected_address = [];
        this.order_shipping_status = order_shipping_status;
      } else {
        console.log("111111111111111111111111");
        this.selected_address = value;
        this.order_shipping_status = order_shipping_status;
      }
      // console.log("order_shipping_status", this.order_shipping_status);
      // console.log("selected_address", this.selected_address);
    },
    updateCartQty(product, e) {
      this.$store.commit("cart/updateQty", product, e);
      this.calibratePromotion();
    },
    reduceCartQty(product) {
      this.$store.commit("cart/reduceQty", product);
      this.calibratePromotion();
    },
    removeCartItem(product) {
      this.$store.commit("cart/remove", product);
      this.calibratePromotion();
    },
    addCartItem(product) {
      this.$store.commit("cart/add", product);
      this.calibratePromotion();
    },
    keydownNumber(e) {
      const allowed_keys = ["Backspace"];

      if (!allowed_keys.includes(e.key) && !/^[0-9]+$/.test(e.key)) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 200px;
}

div {
  font-family: "Kanit", sans-serif;
}

.title-product {
  padding-top: 2em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  padding-bottom: 10px;
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

.btn-qty {
  background: #fff;
  color: black;
  font-weight: 700;
}

.btn-qty:hover {
  background: #39b54a;
  color: #fff;
  font-weight: 700;
}
</style>
