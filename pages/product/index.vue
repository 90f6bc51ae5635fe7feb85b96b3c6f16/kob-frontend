<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em">
        <b-collapse id="example-collapse" style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto">
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
    <div style="float: right; z-index: 9999999 !important;">
        <div class="manu-sidebar">
            <a href="https://www.facebook.com/kobgiftshop" target="_blank" class="" style="text-decoration: none !important;">
                <div class="manu-sidebar-a" @mouseenter="facebook = true" @mouseleave="facebook = false">
                    <img src="~/assets/Fbb.png" style="width: 50px; height: 50px;" alt="facebook">
                </div>
                <div v-if="facebook" style="float: left; width: 150px; margin: -1.65em 0 0 2.2em; text-align: left;">
                    <span style="margin-right: .2em;">
                        เฟสบุ๊ค
                    </span>
                </div>
            </a>
            <a href="tel:0994619241" class="" style="text-decoration: none !important;">
                <div class="manu-sidebar-a" @mouseenter="tel = true" @mouseleave="tel = false">
                    <img src="~/assets/tel.png" style="width: 45px; height: 45px; margin: 0 0 0 ;" alt="tel">
                </div>
                <div v-if="tel" style=" float: left; width: 150px; margin: -1.65em 0 0 2.2em; text-align: left;">
                    <span style="margin-right: .2em;">
                        เบอร์โทรศัพท์
                    </span>
                </div>
            </a>
            <a href="https://www.google.com/maps/dir//%E0%B8%81%E0%B8%9A%E0%B8%81%E0%B8%B4%E0%B9%8A%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2+121+Jant+Rd+Tambon+Nai+Mueang,+Mueang+Nakhon+Ratchasima+District+Nakhon+Ratchasima+30000/@14.9782908,102.087612,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31194ca4b81e8aad:0x3b5d3e95ddf93832" target="_blank" class="" style="text-decoration: none !important;">
                <div class="manu-sidebar-a" @mouseenter="map = true" @mouseleave="map = false">
                    <img src="~/assets/map.png" style="width: 50px; height: 50px;" alt="map">
                </div>
                <div v-if="map" style=" float: left; width: 150px; margin: -1.75em 0 0 2.2em; text-align: left;">
                    <span style="margin-right: .2em;">
                        แผนที่
                    </span>
                </div>
            </a>
            <a href="/contact" target="_blank" class="" style="text-decoration: none !important;">
                <div class="manu-sidebar-a" @mouseenter="contact = true" @mouseleave="contact = false">
                    <img src="~/assets/contact.png" style="width: 50px; height: 50px;" alt="contact">
                </div>
                <div v-if="contact" style=" float: left; width: 150px; margin: -1.65em 0 0 2.2em; text-align: left;">
                    <span style="margin-right: .2em;">
                        ติดต่อเรา
                    </span>
                </div>
            </a>
        </div>
    </div>
    <b-row class="title-product" style="margin: -1em -2em auto -1em">
        <b-col class="" style="font-size: 16pt; margin: auto 0 auto -0.7em">
            รายการสินค้า
        </b-col>
        <b-col class="" style="text-align: right; font-size: 12pt; margin: auto -1em auto 0">
            HOME / SHOP /
            <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
        </b-col>
    </b-row>

    <b-row style="padding-top: 30px">
        <b-col cols="3" style="margin: 0 0 0 -1em">
            <ul class="w3-ul" style="border: 0.2px solid #e5e5e5l">
                <li style="
              font-weight: 500;
              padding: 5px;
              padding-left: 20px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
              font-size: 12pt;
              color: #222222;
            ">
                    CATEGORIES
                    <b-button v-b-toggle.collapse variant="outline" size="sm" style="float: right; margin-top: -0.2em">
                        <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                    </b-button>
                </li>
                <b-collapse id="collapse" style="margin: 0 0 0 0; background-color: #fff; max-height: 250px; overflow: auto;">
                    <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              " v-for="category in categorys" :key="category.product_category_code">
                        <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }" style="text-decoration: none !important; margin: 0 5px 0 10px; color: #000;">
                            {{ category.product_category_name }}
                        </nuxt-link>
                    </li>
                </b-collapse>
            </ul>
            <b-row>
                <b-col style="font-weight: 500; padding: 15px; font-size: 13pt">FLITER BY</b-col>
            </b-row>
            <ul class="w3-ul" style="border: 0.2px solid #e5e5e5">
                <li style="
              font-weight: 500;
              padding: 5px;
              padding-left: 20px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
              font-size: 12pt;
              color: #222222;
            ">
                    BRANDS
                    <b-button v-b-toggle.collapse1 variant="outline" size="sm" style="float: right; margin-top: -0.2em">
                        <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                    </b-button>
                </li>
                <b-collapse id="collapse1" style="margin: 0 0 0 0; background-color: #fff; max-height: 250px; overflow: auto;">
                    <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              ">
                        <input type="radio" id="id1" checked="checked" name="" value="" style="margin: 0 5px 0 10px" v-model="checkedNames" />
                        ไม่เลือก
                    </li>

                    <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              " v-for="brand in brands" :key="brand.product_brand_code">
                        <input type="radio" id="id1" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" style="margin: 0 5px 0 10px" v-model="checkedNames" />
                        {{ brand.product_brand_name }}
                    </li>
                </b-collapse>
                <li style="
              font-weight: 500;
              padding: 5px;
              padding-left: 20px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
              font-size: 12pt;
              color: #222222;
            ">
                    PRICE
                    <b-button v-b-toggle.collapse2 variant="outline" size="sm" style="float: right; margin-top: -0.2em">
                        <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                    </b-button>
                    <b-collapse id="collapse2" style="margin: 0.45em -0.4em -0.4em -1.3em; background-color: #fff">
                <li style="
                  padding-left: 11px;
                  font-size: 12pt;
                  color: #777777;
                  text-align: left;
                  padding: 5px;
                  border: 0.2px solid #e5e5e5;
                ">
                    <input type="checkbox" id="checkbox1" v-model="checkbox1" name="checkbox1" style="margin: 0 5px 0 10px" />
                    Under ฿50
                </li>
                <li style="
                  padding-left: 11px;
                  font-size: 12pt;
                  color: #777777;
                  text-align: left;
                  padding: 5px;
                  border: 0.2px solid #e5e5e5;
                ">
                    <input type="checkbox" id="checkbox2" v-model="checkbox2" name="checkbox2" style="margin: 0 5px 0 10px" />
                    ฿50 - ฿100
                </li>
                <li style="
                  padding-left: 11px;
                  font-size: 12pt;
                  color: #777777;
                  text-align: left;
                  padding: 5px;
                  border: 0.2px solid #e5e5e5;
                ">
                    <input type="checkbox" id="checkbox3" v-model="checkbox3" name="checkbox3" style="margin: 0 5px 0 10px" />
                    ฿100 - ฿200
                </li>
                <li style="
                  padding-left: 11px;
                  font-size: 12pt;
                  color: #777777;
                  text-align: left;
                  padding: 5px;
                  border: 0.2px solid #e5e5e5;
                ">
                    <input type="checkbox" id="checkbox4" v-model="checkbox4" name="checkbox4" style="margin: 0 5px 0 10px" />
                    ฿200 - ฿500
                </li>
                <li style="
                  padding-left: 11px;
                  font-size: 12pt;
                  color: #777777;
                  text-align: left;
                  padding: 5px;
                  border: 0.2px solid #e5e5e5;
                ">
                    <input type="checkbox" id="checkbox5" v-model="checkbox5" name="checkbox5" style="margin: 0 5px 0 10px" />
                    Above ฿500
                </li>
                </b-collapse>
                </li>
            </ul>
        </b-col>
        <b-col cols="" style="display: flex; flex-wrap: wrap; margin: 0 -2em 0 0">
            <b-col class="card-product" cols="3" v-for="product in products" :key="product.product_code" v-if="
            (product.product_price < 50 &&
              checkbox1.toString() == 'true' &&
              product.product_brand_code == checkedNames) ||
            (product.product_price < 50 &&
              checkbox1.toString() == 'true' &&
              checkedNames == '') ||
            (product.product_brand_code == checkedNames &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false') ||
            (product.product_price >= 50 &&
              product.product_price <= 100 &&
              checkbox2.toString() == 'true' &&
              product.product_brand_code == checkedNames) ||
            (product.product_price >= 50 &&
              product.product_price <= 100 &&
              checkbox2.toString() == 'true' &&
              checkedNames == '') ||
            (product.product_brand_code == checkedNames &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false') ||
            (product.product_price >= 100 &&
              product.product_price <= 200 &&
              checkbox3.toString() == 'true' &&
              product.product_brand_code == checkedNames) ||
            (product.product_price >= 100 &&
              product.product_price <= 200 &&
              checkbox3.toString() == 'true' &&
              checkedNames == '') ||
            (product.product_brand_code == checkedNames &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false') ||
            (product.product_price >= 200 &&
              product.product_price <= 500 &&
              checkbox4.toString() == 'true' &&
              product.product_brand_code == checkedNames) ||
            (product.product_price >= 200 &&
              product.product_price <= 500 &&
              checkbox4.toString() == 'true' &&
              checkedNames == '') ||
            (product.product_brand_code == checkedNames &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false') ||
            (product.product_price > 500 &&
              checkbox5.toString() == 'true' &&
              product.product_brand_code == checkedNames) ||
            (product.product_price > 500 &&
              checkbox5.toString() == 'true' &&
              checkedNames == '') ||
            (product.product_brand_code == checkedNames &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false') ||
            (product.product_code != '' &&
              checkbox1.toString() == 'false' &&
              checkbox2.toString() == 'false' &&
              checkbox3.toString() == 'false' &&
              checkbox4.toString() == 'false' &&
              checkbox5.toString() == 'false' &&
              checkedNames.toString() == '')
          ">
                <nuxt-link :to="{ path: `/product/${product.product_code}` }" style="text-decoration: none !important">
                    <div v-if="product.product_image">
                        <b-card-img :src="`http://54.254.134.236:6201/${product.product_image}`" width="100%" height="220px" alt="Image" class="rounded-0"></b-card-img>
                    </div>
                    <div v-else>
                        <svg class="" width="100%" height="220px" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title></title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                        </svg>
                    </div>
                    <div class="product-name">
                        <div class="text-overflow">
                            {{ product.product_name }}
                        </div>
                    </div>
                    <div class="product-price">฿{{ product.product_price }}</div>
                    <div class="left">
                        <div class="text">
                            <font-awesome-icon :icon="['fa', 'eye']" style="color: #000" />
                        </div>
                    </div>
                    <div class="right">
                        <div class="text">
                            <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #000" />
                        </div>
                    </div>
                    <div class="product-star-ating">
                        <p style="text-align: center">
                            <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                            </star-rating>
                        </p>
                    </div>
                </nuxt-link>
            </b-col>
            <div v-else-if="product.product_code" class="divCheckbox"></div>
            <div v-else>ไม่พิสินค้า</div>
        </b-col>
    </b-row>
</div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",
    async asyncData({
        $productService
    }) {
        const products = await $productService.product.getProductBy();
        const categorys = await $productService.product.getProductCategoryBy();
        const brands = await $productService.product.getProductBandBy();
        
        return {
            products: products.data ? products.data : [],
            categorys: categorys.data ? categorys.data : [],
            brands: brands.data ? brands.data : [],
        };
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                arrows: false,
            },
            options: {
                infinite: true,
                slidesToShow: 3,
                navButtons: false,
                dots: false,
            },
            rating: 4.3,
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkedNames: [],
            contact: false,
            tel: false,
            facebook: false,
            map: false,
        };
    },
};
</script>

<style scoped>
.left {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 59%;
    right: 50%;
    /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
    text-align: center;
}

.right {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 59%;
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

.card-product:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, 0.5);
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
}

.text {
    background-color: white;
    color: white;
    font-size: 16px;
    padding: 5px 42px;
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

.text-overflow {
    padding: 0 1em 0 1em;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.title-product {
    padding-top: 2em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: auto;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}

.carousel-wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
}

.img-wrapper img {
    margin: auto;
    background-image: linear-gradient(gray 100%, transparent 0);
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

.manu-sidebar {

    position: fixed !important;
    font-size: 24px !important;
    width: 50px;
    margin-top: 12%;
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
</style>
