<template>
  <div class="pb-3">
    <b-row class="mt-3">
      <b-col class="title-product" style="font-size: 16pt">การซื้อของฉัน</b-col>
    </b-row>

    <hr class="mt-2" />
    <b-row class="row-header" no-gutters style="height: 50px">
      <b-col class="">
        <div class="row-header-content d-flex justify-content-between align-items-center">
          <nuxt-link :to="{ path: `/order` }" class="header d-flex justify-content-center align-items-center"
            style="width: 100%; height: 50px" @click="countorder()">ทั้งหมด
          </nuxt-link>
          <nuxt-link active-class="" :to="{ path: `/order/payment` }"
            class="header d-flex justify-content-center align-items-center" style="width: 100%; height: 50px">ที่ต้องชำระ
            <span class="notification-badge" v-if="paymentordercount > 0">({{ paymentcount }})
            </span>
          </nuxt-link>
          <nuxt-link :to="{ path: `/order/delivery` }" class="header d-flex justify-content-center align-items-center"
            style="width: 100%; height: 50px">ที่ต้องจัดส่ง
            <span class="notification-badge" v-if="deliveryordercount > 0">({{ deliverycount }})
            </span>
          </nuxt-link>
          <nuxt-link :to="{ path: `/order/success` }" class="header d-flex justify-content-center align-items-center"
            style="width: 100%; height: 50px">
            สำเร็จแล้ว
            <span class="notification-badge" v-if="successordercount > 0">
              ({{ successfulcount }})
            </span>
          </nuxt-link>
          <nuxt-link :to="{ path: `/order/cancel` }" class="header d-flex justify-content-center align-items-center"
            style="width: 100%; height: 50px">ยกเลิก
            <span class="notification-badge" v-if="cancelordercount > 0">({{ cancelcount }})</span>
          </nuxt-link>
          <nuxt-link :to="{ path: `/order/failed` }" class="header d-flex justify-content-center align-items-center"
            style="width: 100%; height: 50px">ไม่สำเร็จ
            <span class="notification-badge" v-if="failedordercount > 0">({{ failedcount }})</span>
          </nuxt-link>
        </div>
      </b-col>
    </b-row>

    <div class="mt-4" v-for="(order, index) in orders" :key="index" style="border: 1px solid #e5e5e5">
      <div class="bg-light-gray" style="border-bottom: 1px solid #e4e4e4">
        <b-row>
          <b-col cols="12" md="6">
            <div class="px-3 pt-3 pb-0 pb-sm-3 bg-light-gray">
              {{ order.order_code.toUpperCase() }}
              {{ new Date(order.order_date).toLocaleString() }}
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="px-3 pb-3 pt-sm-3 bg-light-gray text-sm-right">
              <a v-b-modal.modal-2 @click="setOrderCode(order.order_code, order)">
                <span style="color: #39b44f" v-if="order.order_status == 'success'">
                  {{ status[order.order_status] }}
                </span>
                <span style="color: #c82333" v-if="order.order_status == 'cancel' ||
                  order.order_status == 'payment_failed' ||
                  order.order_status == 'customer_request_cancel'
                  ">
                  {{ status[order.order_status] }}
                </span>
                <span style="color: #f8b708" v-if="order.order_status == 'request_check_price' ||
                  order.order_status == 'request_check_confirm' ||
                  order.order_status == 'request_check_slip' ||
                  order.order_status == 'request_check_track'
                  ">
                  {{ status[order.order_status] }}
                </span>
              </a>
              |
              <span style="color: #39b44f" v-if="order.order_shipping || order.order_track_number">
                <a v-if="order.order_shipping == 'thailand-post' &&
                  order.order_shipping_status == 1 &&
                  order.order_status == 'success'
                  " :href="`https://track.thailandpost.co.th/?trackNumber=${order.order_track_number}`"
                  target="_blank">
                  {{ order.order_shipping }}
                  {{ order.order_track_number }}
                </a>
                <a v-if="order.order_shipping == 'flash' &&
                  order.order_shipping_status == 1 &&
                  order.order_status == 'success'
                  " :href="`https://www.flashexpress.co.th/fle/tracking?se=${order.order_track_number}`"
                  target="_blank">
                  {{ order.order_shipping }}
                  {{ order.order_track_number }}
                </a>
                <a v-if="order.order_shipping == 'kerry' &&
                  order.order_shipping_status == 1 &&
                  order.order_status == 'success'
                  " :href="`https://th.kerryexpress.com/en/track/?track=${order.order_track_number}`" target="_blank">
                  {{ order.order_shipping }}
                  {{ order.order_track_number }}
                </a>
                <a v-if="order.order_shipping != 'thailand-post' &&
                  order.order_shipping != 'flash' &&
                  order.order_shipping != 'kerry' &&
                  order.order_shipping_status == 1 &&
                  order.order_status == 'success'
                  ">
                  {{ order.order_shipping }}
                  {{ order.order_track_number }}
                </a>
                <a v-if="order.order_shipping_status == 0 &&
                  order.order_status == 'success'
                  ">
                  รับเองที่ร้าน
                </a>
              </span>
              <span style="color: #39b44f" v-else></span>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-for="(order_list, index) in order.order_lists" :key="index" style="border-bottom: 1px solid #ccc">
        <b-row>
          <b-col sm="8">
            <div class="d-flex p-3">
              <img v-if="order_list.product_image" class="cover" width="90" height="90"
                :src="`${$store.state.BASE_ENDPOINT_IMAGE}/${order_list.product_image}`" alt="kob-image" />
              <img v-else class="cover" width="90" height="90" src="~/assets/kob-image.jpg" alt="kob-image" />
              <span class="ml-4">
                <div>{{ order_list.order_list_name }}</div>
                <div>
                  ฿{{ order_list.order_list_price }} x
                  {{ order_list.order_list_qty }}
                </div>
              </span>
            </div>
          </b-col>
          <b-col sm="4">
            <div class="p-sm-3 pt-0 pb-3 px-3 text-right">
              ฿{{ order_list.order_list_total_price }}
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="text-right pr-3 bg-light-gray pt-3" style="font-size: 1.1em">
        <div v-if="order.order_discount_price">
          ส่วนลด :
          <span> ฿{{ order.order_discount_price }}</span>
        </div>
        <div>
          ยอดคำสั่งซื้อทั้งหมด :
          <span>฿{{ order.order_product_price }}</span>
        </div>
        <div v-if="order.order_predict_price">
          ค่าขนส่ง :
          <span>฿{{ order.order_predict_price - order.order_product_price }}</span>
        </div>
        <div v-if="order.order_predict_price">
          ยอดคำสั่งซื้อรวมค่าขนส่ง :
          <span>฿{{ order.order_predict_price }}</span>
        </div>
        <div v-if="order.order_box_qty">
          จำนวนลัง : {{ order.order_box_qty }}
        </div>
        <div v-if="order.order_vat" style="color: green">
          ขอใบกำกับภาษี {{ order.order_invoice_address }}
        </div>
      </div>
      <div class="p-3 bg-light-gray" style="max-width: 100%" v-if="order.order_status == 'request_check_confirm' ||
        order.order_status == 'request_check_slip'
        " v-html="company.company_info_payment_method"></div>
      <div class="p-3 text-right bg-light-gray">
        <b-button v-if="order.order_status == 'request_check_confirm' ||
          order.order_status == 'request_check_slip'
          " variant="success" squared v-b-modal.modal-1 @click="setOrderCode(order.order_code, order)">
          แนบเอกสารการโอน
        </b-button>
        <b-button variant="danger" squared v-if="order.order_status != 'success' &&
          order.order_status != 'customer_request_cancel' &&
          order.order_status != 'cancel'
          " @click="setOrderCode(order.order_code, order), showCancelOrder()">
          ยกเลิกออร์เดอร์
        </b-button>
        <b-button variant="primary" squared @click="gotoContact">
          ติดต่อผู้ขาย
        </b-button>
      </div>
    </div>

    <div v-if="orders.length == 0" class="d-flex flex-column align-items-center justify-content-center"
      style="height: 600px">
      <img src="~/assets/document.png" width="200px" />
      <p style="font-size: 20px; font-weight: 600">ยังไม่มีการสั่งซื้อ</p>
    </div>

    <b-modal id="modal-1" title="แจ้งหลักฐานการโอน" @ok="handleSubmit('request_check_slip')" centered>
      <div id="preview" v-if="url != 'https://km-korat.com/km-korat-web/slip/'">
        <img v-if="url" :src="url" />
      </div>
      <b-form-file v-model="file" ref="file-input" class="mb-2" @change="onFileChange" required
        style="margin-top: 10px"></b-form-file>
      <div style="padding-bottom: 10px">
        <b-form-input v-model="order_slip_date" placeholder="วันที่" required :type="date"></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input v-model="order_slip_time" placeholder="เวลา" required :type="time"></b-form-input>
      </div>
    </b-modal>

    <b-modal id="modal-2" title="ประวัติทำรายการ" centered scrollable style="z-index: 9999999 !important">
      <div style="
          text-align: left;
          display: flex;
          flex-direction: column;
          padding: 10px;
          border: 1px solid #e4e4e4;
          background-color: #f5fffa;
        ">
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_code">
          {{ new Date(order_selected.adddate) }} <br /><span style="color: green">สร้างคำสั่งซื้อ {{
            order_selected.order_code }} <br />ที่อยู่ :
            {{ order_selected.order_name }} {{ order_selected.order_address }}
          </span>
        </div>
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_status == 'cancel'">
          {{ new Date(order_selected.lastupdate) }} <br /><span style="color: green">ยกเลิกคำสั่งซื้อ</span>
        </div>
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_predict_price">
          {{ new Date(order_selected.order_predict_price_date) }} <br /><span style="color: green">ประเมินราคาเสร็จสิ้น
            {{ order_selected.order_predict_price }} บาท</span>
        </div>
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_slip">
          {{ new Date(order_selected.order_slip_lastupdate) }} <br /><span style="color: green">แนบหลักฐานชำระเงิน</span>
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_track_number">
          {{ new Date(order_selected.order_track_date) }} <br /><span style="color: green">จัดส่งสินค้าแล้ว {{
            order_selected.order_shipping }}
            {{ order_selected.order_track_number }}</span>
        </div>
        <div class="dotted" style="color: #212529; font-size: 12pt" v-if="order_selected.order_payment_return_slip">
          {{ new Date(order_selected.lastupdate) }} <br /><span style="color: green">โอนคืนลูกค้า
          </span>
          <div id="preview">
            <img v-if="url_payment" :src="url_payment" />
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-cancel" title="แจ้งยกเลิกรายการ" centered no-close-on-esc no-close-on-backdrop hide-header-close
      hide-footer>
      <div style="padding-bottom: 10px">
        <b-form-input v-model="order_customer_cancel_user_remark" placeholder="หมายเหตุ" required>
        </b-form-input>
      </div>
      <b-button class="mt-3 btn-danger" block @click="confirmCancelOrder()">ยกเลิกรายการ</b-button>
      <b-button class="mt-3" block @click="this.$bvModal.hide('modal-cancel')">ปิด</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  middleware: "auth",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      status: {
        request_check_price: "รอประเมินราคา",
        request_check_confirm: "รอยืนยันคำสั่งซื้อ",
        request_check_slip: "รอตรวจสอบหลักฐาน",
        request_check_track: "รอระบุเลขขนส่ง",
        cancel: "ยกเลิกออเดอร์",
        success: "จัดส่งสำเร็จ",
        customer_request_cancel: "ลูกค้าขอยกเลิกออเดอร์",
        payment_failed: "ชำระเงินไม่สำเร็จ",
      },
      order_code: "",
      order_slip_date: "",
      order_slip_time: "",
      order_customer_cancel_user_remark: "",
      order_selected: "",
      url: "",
      file: null,
      countorders: "",
    };
  },
  async asyncData({ $orderService, $companyService, store }) {
    try {
      const user = store.state.auth.user;
      const company = await $companyService.company
        .getCompany()
        .then((res) => res.data[0]);

      //warning! data leak to another user.
      //solution => change to use customer_code form JWT token.
      const orders = await $orderService.order.getOrderBy({
        customer_code: user.customer_code,
      });

      let successordercount = 0;
      let failedordercount = 0;
      let cancelordercount = 0;
      let paymentordercount = 0;
      let deliveryordercount = 0;
      //warning! http request loop will drop performance so much, this affect to SEO.
      //solution => new service in server to get full detail instead (loop in service).
      for (let order of orders.data) {
        const order_lists = await $orderService.order.getOrderListBy({
          order_code: order.order_code,
        });

        order.order_lists = order_lists.data;
        if (order.order_status === "success") {
          successordercount++;
        }
        if (order.order_status === "payment_failed") {
          failedordercount++;
        }
        if (
          order.order_status === "cancel" ||
          order.order_status == "customer_request_cancel"
        ) {
          cancelordercount++;
        }
        if (
          order.order_status === "request_check_price" ||
          order.order_status == "request_check_confirm"
        ) {
          paymentordercount++;
        }
        if (
          order.order_status === "request_check_slip" ||
          order.order_status == "request_check_track"
        ) {
          deliveryordercount++;
        }
      }

      return {
        company,
        orders: orders.data || [],

        successordercount,
        failedordercount,
        cancelordercount,
        paymentordercount,
        deliveryordercount,
      };
    } catch (error) {
      //handle error state redirect to error page
      console.log(error);
      return {
        company: {},
        orders: [],
      };
    }
  },
  methods: {
    async handleSubmit(status) {
      this.order_status = status;

      try {
        if (status == "customer_request_cancel") {
          await this.$axios
            .post(
              "https://km-korat.com/km-korat-web/api/order-status-update",
              {
                order_status: this.order_status,
                order_code: this.order_code,
                order_customer_cancel_user_remark:
                  this.order_customer_cancel_user_remark,
              }
            )
            .then((response) => {
              console.log("true", response);
              if (response.data == "error") {
                // console.log("Email");
                this.$swal.fire({
                  type: "error",
                  title: "ไม่สามารถเพิ่มข้อมูล",
                  text: "ไม่สามารถเพิ่มข้อมูล",
                });
                setTimeout(() => {
                  this.$router.push("/order");
                }, 2000);
              } else {
                this.$swal.fire({
                  type: "success",
                  title: "สำเร็จ",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setTimeout(() => {
                  this.$router.go();
                }, 2000);
              }
            })
            .catch((error) => {
              console.log("err", error);
            });
          setTimeout(() => {
            this.$router.go();
          }, 2000);
        } else {
          if (
            this.file != null &&
            this.file != "" &&
            this.order_slip_date != "" &&
            this.order_slip_time != "" &&
            this.order_code != ""
          ) {
            var formData = new FormData();
            formData.append("photo", this.file);
            formData.append("order_status", this.order_status);
            formData.append("order_slip_date", this.order_slip_date);
            formData.append("order_slip_time", this.order_slip_time);
            formData.append("order_code", this.order_code);

            await this.$axios
              .post(
                "https://km-korat.com/km-korat-web/api/upload-slip",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then(async (response) => {
                console.log("true", response);
                if (response.data == "error") {
                  // console.log("Email");
                  this.$swal.fire({
                    type: "error",
                    title: "ไม่สามารถเพิ่มข้อมูล",
                    text: "ไม่สามารถเพิ่มข้อมูล",
                  });
                  // setTimeout(() => { this.$router.push("/order"); }, 2000);
                } else {
                  this.order_slip = response.data.filename;
                  if (this.order_slip != "") {
                    await this.$axios
                      .post(
                        "https://km-korat.com/km-korat-web/api/order-slip-update",
                        {
                          order_status: this.order_status,
                          order_slip_date: this.order_slip_date,
                          order_slip_time: this.order_slip_time,
                          order_slip: this.order_slip,
                          order_code: this.order_code,
                        }
                      )
                      .then((response) => {
                        console.log("true", response);
                        if (response.data == "error") {
                          // console.log("Email");
                          this.$swal.fire({
                            type: "error",
                            title: "ไม่สามารถเพิ่มข้อมูล",
                            text: "ไม่สามารถเพิ่มข้อมูล",
                          });
                          setTimeout(() => {
                            this.$router.push("/order");
                          }, 2000);
                        } else {
                          this.$swal.fire({
                            type: "success",
                            title: "สำเร็จ",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                          setTimeout(() => {
                            this.$router.go();
                          }, 2000);
                        }
                      })
                      .catch((error) => {
                        console.log("err", error);
                      });
                    setTimeout(() => {
                      this.$router.go();
                    }, 2000);
                  }
                }
              })
              .catch((error) => {
                console.log("err", error);
              });
          } else {
            this.$swal.fire({
              type: "error",
              title: "ไม่สามารถเพิ่มข้อมูล",
              text: "ไม่สามารถเพิ่มข้อมูล",
            });
          }
        }
      } catch (error) {
        //handle error state redirect to error page
        this.error = error;
      }
    },
    confirmCancelOrder() {
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
            this.$bvModal.hide("modal-cancel");
            this.handleSubmit("customer_request_cancel");
          }
        });
    },
    showCancelOrder() {
      this.$bvModal.show("modal-cancel");
    },
    setOrderCode(value, order) {
      this.order_code = value;
      this.url =
        "https://km-korat.com/km-korat-web/slip/" + order.order_slip;
      this.url_payment =
        this.$store.state.BASE_ENDPOINT_IMAGE + "/" + order.order_payment_return_slip;
      this.order_slip_date = order.order_slip_date;
      this.order_slip_time = order.order_slip_time;
      this.order_selected = order;
    },
    gotoContact() {
      this.$router.push("/contact");
    },
    onFileChange(e) {
      const file = e.target.files[0];
      console.log("file", file);
      if (file != null) {
        this.url = URL.createObjectURL(file);
        console.log(" this.url", this.url);
      } else {
        this.url = null;
      }
    },
  },
  computed: {
    successfulcount() {
      return this.successordercount;
    },
    failedcount() {
      return this.failedordercount;
    },
    cancelcount() {
      return this.cancelordercount;
    },
    paymentcount() {
      return this.paymentordercount;
    },
    deliverycount() {
      return this.deliveryordercount;
    },
  },
};
</script>

<style scoped>
a {
  color: #39b44f;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 200px;
}

/* .title-product {
  padding-top: 1em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 20px;
} */

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

.dotted:before {
  content: "• ";
  color: green;
}

#modal-2___BV_modal_outer_ {
  z-index: 999999999 !important;
}

.header {
  color: black;
  text-decoration: none;
}

.header:active {
  color: #39b44f;
  /* border-bottom: 5px solid #39b44f; */
}

.header:hover:not(.active) {
  color: #39b44f;
}

.header.nuxt-link-active {
  color: #39b44f;
  border-bottom: 5px solid #39b44f;
}

@media only screen and (max-width: 767px) {
  .row-header-content {
    overflow-x: auto;
  }

  .row-header-content::-webkit-scrollbar {
    display: none;
  }

  .header {
    min-width: 123px;
  }
}

.header .notification-badge {
  color: #39b44f;
  padding: 3px;
}
</style>
