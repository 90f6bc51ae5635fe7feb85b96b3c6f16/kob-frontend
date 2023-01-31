<template>
  <div style="background-color: #fefefe">
    <div style="border-top: 1px solid #e5e7eb; margin-top: 80px">
      <b-container class="py-4" fluid="lg">
        <b-row>
          <b-col lg="3" sm="6" class="text-center">
            <b-img
              class="m-2"
              src="~/assets/free_shipping.png"
              alt="Image"
              height="48px"
            ></b-img>
            <div style="font-weight: 500">FREE SHIPPING</div>
            <div class="font-color">
              Free Shipping on World wide Order Over $99.
            </div>
          </b-col>
          <b-col lg="3" sm="6" class="text-center">
            <b-img
              class="m-2"
              src="~/assets/trust_pay.png"
              alt="Image"
              height="48px"
            ></b-img>
            <div style="font-weight: 500">FREE SHIPPING</div>
            <div class="font-color">
              Free Shipping on World wide Order Over $99.
            </div>
          </b-col>
          <b-col lg="3" sm="6" class="text-center">
            <b-img
              class="m-2"
              src="~/assets/secured_payment.png"
              alt="Image"
              height="48px"
            ></b-img>
            <div style="font-weight: 500">FREE SHIPPING</div>
            <div class="font-color">
              Free Shipping on World wide Order Over $99.
            </div>
          </b-col>
          <b-col lg="3" sm="6" class="text-center">
            <b-img
              class="m-2"
              src="~/assets/shop_on_app.png"
              alt="Image"
              height="48px"
            ></b-img>
            <div style="font-weight: 500">FREE SHIPPING</div>
            <div class="font-color">
              Free Shipping on World wide Order Over $99.
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="bg-info">
      <b-container class="py-4" fluid="lg">
        <b-row align-h="center">
          <p class="mt-auto mr-2 text-white" style="font-size: 14px">
            <b> KEEP IN TOUCH </b>
          </p>
          <b-img class="m-2" src="~/assets/Twiter.png" alt="Image"></b-img>
          <b-img class="m-2" src="~/assets/Fb.png" alt="Image"></b-img>
          <b-img class="m-2" src="~/assets/Instagram.png" alt="Image"></b-img>
          <b-img class="m-2" src="~/assets/Pinterest.png" alt="Image"></b-img>
          <b-img class="m-2" src="~/assets/Vimeo.png" alt="Image"></b-img>
        </b-row>
      </b-container>
    </div>

    <b-container fluid="lg" class="my-4">
      <b-row>
        <b-col cols="12" lg="4">
          <b-img
            src="~/assets/Logo.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <p class="font-color pt-4">
            กิ๊ฟช็อป ของขวัญ ของใช้ เครื่องสำอางค์ อยากได้อะไรขอให้ถามนะจ๊ะ
            ขายปลีก-ส่ง กิฟช็อป หวี กระจก ยางมัดผม โบว์ ผ้าเช็ดหน้า ของขวัญ
            ของชำร่วย งานบวช งานแต่ง งานศพ ยาหม่อง ยาดม ถุงเท้า ถุงมือ แฟชั่น
            นักเรียน เครื่องเขียนทุกชนิด กระเป๋า ลิขสิทธิ์ถูกต้อง กรอบรูป
            อัลบั้มรูป ออมสิน ของใช้ คัตตอนบัต สำลี น้ำยาล้างเล็บ ทาเล็บ
            น้ำมันมะกอก กรรไกรตัดเล็บ ใบมีดโกน ถุงแขน ถุงน่อง
          </p>
          <p>
            ที่อยู่ :
            <span class="font-color"
              >ถนนจันทร์ ตำบลในเมือง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา
              30000</span
            >
          </p>
          <p>เบอร์โทรศัพท์ : <span class="font-color">099-461-9241</span></p>
          <p>ไอดีไลน์ : <span class="font-color">@kob0994619241</span></p>
          <p>อีเมล : <span class="font-color">katai_ee@hotmail.com</span></p>
        </b-col>
        <b-col cols="12" lg="8" class="pt-2">
          <b-row>
            <b-col cols="4">
              <h5 class="mb-4">COMPANY</h5>
              <p class="font-color">Discount Vouches</p>
              <p class="font-color">Spring Collection</p>
              <p class="font-color">Trending</p>
              <p class="font-color">Best Sellers</p>
              <p class="font-color">Special Deals</p>
            </b-col>
            <b-col cols="4">
              <h5 class="mb-4">POLICY INFO</h5>
              <p class="font-color">Orders & Returns</p>
              <p class="font-color">Help & FAQs</p>
              <p class="font-color">Store Locations</p>
            </b-col>
            <b-col cols="4">
              <h5 class="mb-4">MY ACCOUNT</h5>
              <p class="font-color">About Us</p>
              <p class="font-color">Delivery Information</p>
              <p class="font-color">Privacy Policy</p>
              <p class="font-color">Terms & Conditions</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div
      style="
        background-color: #fff;
        border-top: 1px solid #f0f0f0;
        color: #808080;
      "
    >
      <b-container class="py-4" style="font-size: 12px">
        <b> © COPYRIGHT - KOB GIFTSHOP TEMPLATE BY REVELSOFT </b>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
};
</script>

<style scoped>
.navbar-dark {
  color: #fff;
}

a {
  font-family: "Kanit";
}

.bg-info {
  background-color: #39b54a !important;
}

.font-color {
  color: #808080;
}
</style>
