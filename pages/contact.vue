<template>
  <div class="mt-4">
    <h4>ติดต่อเรา</h4>
    <hr />
    <b-row class="m-4">
      <div class="content" v-html="recruitment.company_info_contact"></div>
    </b-row>

    <!-- <b-row class="mt-4">
      <b-col offset-md="1" cols="12" md="11">
        <span class="ml-5">ขายปลีก-ส่ง</span>
        กิ๊ฟช็อป ของขวัญ ของใช้ เครื่องสำอางค์ อยากได้อะไรขอให้ถามนะจ๊ะ
        ขายปลีก-ส่ง กิฟช็อป หวี กระจก ยางมัดผม โบว์ ผ้าเช็ดหน้า ของขวัญ
        ของชำร่วย งานบวช งานแต่ง งานศพ ยาหม่อง ยาดม ถุงเท้า ถุงมือ แฟชั่น
        นักเรียน เครื่องเขียนทุกชนิด กระเป๋า ลิขสิทธิ์ถูกต้อง กรอบรูป อัลบั้มรูป
        ออมสิน ของใช้ คัตตอนบัต สำลี น้ำยาล้างเล็บ ทาเล็บ น้ำมันมะกอก
        กรรไกรตัดเล็บ ใบมีดโกน ถุงแขน ถุงน่อง
        <br />
        <span class="bg-warning px-2"
          >สามารถติดต่อเราได้ทางเฟสบุ๊ค และไลน์ได้เลยค่ะ</span
        >
      </b-col>
    </b-row> -->

    <div class="mapouter mt-4">
      <iframe
        class="gmap-iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15417.038183033315!2d102.087612!3d14.9782908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b5d3e95ddf93832!2z4LiB4Lia4LiB4Li04LmK4Lif4LiK4LmH4Lit4Lib4LmB4Lil4Liw4Lih4LiU4LiH4Liy4LiZ4Lia4Li04Lin4LiV4Li14LmJ4Lie4Lil4Liy4LiL4LmI4Liy!5e0!3m2!1sen!2sth!4v1659264800153!5m2!1sen!2sth"
      >
      </iframe>
    </div>

    <div class="mt-4" v-html="recruitment.company_info_recruitment"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $companyService }) {
    const recruitment = await $companyService.company.getCompany();

    return {
      recruitment: recruitment.data ? recruitment.data[0] : [],
    };
  },
};
</script>

<style>
.gmap-iframe {
  width: 100% !important;
  height: 400px !important;
}
</style>