<template>
  <div style="background-color: #fefefe">
    <div class="bg-success position-relative">
      <b-container class="py-4" fluid="lg">
        <b-row class="no-gutters" align-h="center">
          <p class="mt-auto mr-2 text-white" style="font-size: 14px">
            <b> KEEP IN TOUCH </b>
          </p>
          <b-row class="no-gutters" align-h="center">
            <b-img class="m-2" src="~/assets/Twiter.png" alt="Image"></b-img>
            <b-img class="m-2" src="~/assets/Fb.png" alt="Image"></b-img>
            <b-img class="m-2" src="~/assets/Instagram.png" alt="Image"></b-img>
            <b-img class="m-2" src="~/assets/Pinterest.png" alt="Image"></b-img>
            <b-img class="m-2" src="~/assets/Vimeo.png" alt="Image"></b-img>
          </b-row>
        </b-row>
      </b-container>
    </div>

    <b-container fluid="lg" class="my-4">
      <b-row>
        <b-col cols="12" lg="4">
          <b-img
            src="~/assets/Logo.png"
            alt="Image"
            style="margin: 5px;width: 300px;padding: 0px !important;"
          ></b-img>
          <div class="content" v-html="recruitment.company_info_contact"></div>
          <!-- <p class="text-secondary pt-4" v-html="test_value"></p> -->
          <!-- <p class="text-secondary pt-4">
            กิ๊ฟช็อป ของขวัญ ของใช้ เครื่องสำอางค์ อยากได้อะไรขอให้ถามนะจ๊ะ
            ขายปลีก-ส่ง กิฟช็อป หวี กระจก ยางมัดผม โบว์ ผ้าเช็ดหน้า ของขวัญ
            ของชำร่วย งานบวช งานแต่ง งานศพ ยาหม่อง ยาดม ถุงเท้า ถุงมือ แฟชั่น
            นักเรียน เครื่องเขียนทุกชนิด กระเป๋า ลิขสิทธิ์ถูกต้อง กรอบรูป
            อัลบั้มรูป ออมสิน ของใช้ คัตตอนบัต สำลี น้ำยาล้างเล็บ ทาเล็บ
            น้ำมันมะกอก กรรไกรตัดเล็บ ใบมีดโกน ถุงแขน ถุงน่อง
          </p> -->
          <!-- <p>
            ที่อยู่ :
            <span class="text-secondary"
              >ถนนจันทร์ ตำบลในเมือง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา
              30000</span
            >
          </p>
          <p>
            เบอร์โทรศัพท์ : <span class="text-secondary">099-461-9241</span>
          </p>
          <p>ไอดีไลน์ : <span class="text-secondary">@kob0994619241</span></p>
          <p>
            อีเมล : <span class="text-secondary">katai_ee@hotmail.com</span>
          </p> -->
        </b-col>
        <b-col cols="12" lg="8" class="pt-2">
          <b-row>
            <!-- <b-col cols="12" sm="4">
              <h5 class="mb-4">COMPANY</h5>
              <p class="text-secondary">Discount Vouches</p>
              <p class="text-secondary">Spring Collection</p>
              <p class="text-secondary">Trending</p>
              <p class="text-secondary">Best Sellers</p>
              <p class="text-secondary">Special Deals</p>
            </b-col> -->
            <b-col cols="12" sm="4">
              <h5 class="mb-4">POLICY INFO</h5>
              <p class="text-secondary">Orders & Returns</p>
              <p class="text-secondary">Help & FAQs</p>
              <p class="text-secondary">Store Locations</p>
              
              <p class="text-secondary">About Us</p>
              <p class="text-secondary">Delivery Information</p>
              <p class="text-secondary">Privacy Policy</p>
              <p class="text-secondary">Terms & Conditions</p>
            </b-col>
            <!-- <b-col cols="12" sm="4">
              <h5 class="mb-4">MY ACCOUNT</h5>
              <p class="text-secondary">About Us</p>
              <p class="text-secondary">Delivery Information</p>
              <p class="text-secondary">Privacy Policy</p>
              <p class="text-secondary">Terms & Conditions</p>
            </b-col> -->
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <hr class="my-0" />
    <div class="bg-white">
      <b-container class="py-4 text-secondary" style="font-size: 12px">
        © COPYRIGHT - KOB GIFTSHOP TEMPLATE BY REVELSOFT
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recruitment : {},
    };
  },
  
  async fetch(){
    const recruitment = await this.$companyService.company.getCompany();

    this.recruitment = recruitment.data ? recruitment.data[0] : [];
  }
};
</script>