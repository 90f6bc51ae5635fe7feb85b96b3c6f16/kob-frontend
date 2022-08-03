<template lang="">
<div>
    <div class="" style="margin: 0 -2em 0 -1em;">
        <b-collapse id="example-collapse" style=" width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto; ">
            <div v-for="category in categorys" :key="category.product_category_code">
                <ul>
                    <li>
                        <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }">
                            {{ category.product_category_name }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </b-collapse>
    </div>
    <b-row style=" margin: 0 -2em 0
  -1em;">
        <b-col class="title-product" style="font-size: 16pt;">ติดต่อเรา</b-col>
    </b-row>
    <b-row style=" margin: 0 -2em 0 -1em;">
        <b-col cols="12" style="margin-top: 1em;">
            <b-row>
                <b-col cols="1"> </b-col>
                <b-col cols="7">
                    <div><b>ที่อยู่ : </b><span>121
                            ถนนจันทร์ ตำบลในเมือง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา 30000</span></div>
                    <div><b>เบอร์โทรศัพท์ : </b><span>099-461-9241</span></div>
                    <div><b>เบอร์แฟกซ์ :
                        </b><span>-</span></div>
                    <div><b>ไอดีไลน์ : </b><span>@kob0994619241</span> หรือ
                        @modnganbeauty</div>
                    <div><b>อีเมล : </b><span>katai_ee@hotmail.com</span></div>
                    <div><b>เฟสบุ๊ค : </b><span><a href="https://www.facebook.com/kobgiftshop">กบกิ๊ฟช็อปและมดงานบิวตี้ @
                                ตรอกจันทร์(ตึกเขียวส้ม)</a></span></div>
                    <div><b>เวลาเปิด-ปิด วันจันทร์-วันเสาร์ :
                        </b><span style="color: red;">08.00 - 17.30</span></div>
                    <div><b>เวลาเปิด-ปิด วันอาทิตย์
                            : </b><span style="color: red;">08.00 - 17.00</span></div>
                </b-col>
                <b-col cols="3">
                    <div>ไลน์บาร์โค้ด : -</div>
                    <div style="margin: -3em 0 0 4em;">
                        <!-- <img
  style="width:150px;height:150px;"
  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
  alt="" /> -->
                    </div>
                </b-col>
                <b-col cols="1"> </b-col>
            </b-row>
            <b-row style="margin: 1em 0 0 0;">
                <b-col cols="1"></b-col>
                <b-col cols="10">
                    <div>
                        <span style="margin: 0 0 0 5em;">ขายปลีก-ส่ง</span>
                        กิ๊ฟช็อป ของขวัญ ของใช้
                        เครื่องสำอางค์ อยากได้อะไรขอให้ถามนะจ๊ะ ขายปลีก-ส่ง กิฟช็อป หวี กระจก ยางมัดผม โบว์
                        ผ้าเช็ดหน้า ของขวัญ ของชำร่วย งานบวช งานแต่ง งานศพ ยาหม่อง ยาดม ถุงเท้า ถุงมือ แฟชั่น
                        นักเรียน เครื่องเขียนทุกชนิด กระเป๋า ลิขสิทธิ์ถูกต้อง กรอบรูป อัลบั้มรูป ออมสิน ของใช้
                        คัตตอนบัต สำลี น้ำยาล้างเล็บ ทาเล็บ น้ำมันมะกอก กรรไกรตัดเล็บ ใบมีดโกน ถุงแขน ถุงน่อง
                        <br>
                        <span style="background-color: #ffd000;">สามารถติดต่อเราได้ทางเฟสบุ๊ค และไลน์ได้เลยค่ะ</span>
                    </div>
                </b-col>
                <b-col cols="1"> </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" style="margin-top: 2em;">
                    <div class="mapouter" style="margin: 0 0 0 0;">
                        <div class="gmap_canvas"> <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15417.038183033315!2d102.087612!3d14.9782908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b5d3e95ddf93832!2z4LiB4Lia4LiB4Li04LmK4Lif4LiK4LmH4Lit4Lib4LmB4Lil4Liw4Lih4LiU4LiH4Liy4LiZ4Lia4Li04Lin4LiV4Li14LmJ4Lie4Lil4Liy4LiL4LmI4Liy!5e0!3m2!1sen!2sth!4v1659264800153!5m2!1sen!2sth">
                            </iframe> <a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/"> FNF </a>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    async asyncData({
        $axios,
        params
    }) {
        const categorys = await $axios.$get("http://127.0.0.1:3001/api/category");
        return {
            categorys,
        };
    },
};
</script>

<style scoped>
div {
    font-family: "Kanit", sans-serif;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
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

/* map */
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 400px;
}

.gmap_iframe {
    width: 100% !important;
    height: 400px !important;
}
</style>
