<template>
<div>
    <div>
        <b-row class="no-gutters">
            <div class="">
                <b-col cols="">
                    <b-collapse id="example-collapse" style="
                width: 260px;
                margin: 0 2.1em 0 -1.85em;
                max-height: 440px;
                overflow: auto;
              ">
                        <div v-for="category in categorys" :key="category.product_category_code">
                            <ul>
                                <li>
                                    <nuxt-link :to="{ path: `/product/category/${category.product_category_code}`}">
                                        {{ category.product_category_name }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </b-collapse>
                </b-col>
            </div>
            <b-col cols="">
                <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000; margin: 20px -2em 0 -2.8em" no-animation indicators img-width="1024" img-height="480">
                    <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
                    </b-carousel-slide>
                    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12">
                    </b-carousel-slide>
                    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22">
                    </b-carousel-slide>
                    <b-carousel-slide caption="Fourth Slide" img-src="https://picsum.photos/1024/480/?image=23">
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
    </div>
    <!-- <div class="carousel-wrapper">
      <client-only>
        <slick :options="slickOptions" ref="refs">
          <div v-for="i in 5" :key="i" class="img-wrapper">
            <img src="https://placeimg.com/480/480/any?1" />
          </div>
        </slick>
      </client-only>
    </div> -->

    <div class="carousel-wrapper" style="margin: 0 -2em 0 -1.5em">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="i in 5" :key="i" class="img-wrapper">
                    <img :src="`https://placeimg.com/380/200/any?${i}`" style="margin: 0.6rem" />
                </div>
            </agile>
        </client-only>
    </div>

    <b-row style="margin-top: -10px">
        <b-col class="title-product" style="text-align: left; margin: 0 0 0 -0.7em">
            สินค้าใหม่ล่าสุด
        </b-col>
        <b-col class="title-product">
            <div style="text-align: right; margin: 0 -1.4em 0 0">
                <button @click="$refs.carousel.goToPrev()" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important">
                    <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                </button>
                <button @click="$refs.carousel.goToNext()" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important">
                    <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
                </button>
            </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col class="title-product-sub" style="margin: -8px 0 0 -1em">
            ขายง่าย ขายดี กำไรงาม
        </b-col>
    </b-row>
    <b-row class="row-product">
        <b-col class="card-product" v-for="product in products.slice(0, 5)" :key="product.product_code">
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
                <div class="card-product-shop">
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
                </div>
            </nuxt-link>
        </b-col>
    </b-row>
    <b-row class="row-product">
        <b-col class="row-product-type" style="border-top: 4px solid #39b54a">
            <b-img src="~/assets/electronics.png" alt="Image" class="rounded" width="56" height="56" style="margin-top: 2"></b-img>
            <div style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 15pt;
            color: #fff;
          ">
                ELECTRONICS
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-top: 1px solid #61c46e;
            border-bottom: 1px solid #61c46e;
          ">
                Mobile Accessories
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #61c46e;
          ">
                Hitech
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #61c46e;
          ">
                Unboxed Mobiles
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #61c46e;
          ">
                Bluetooth Devices
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #61c46e;
          ">
                Screen Guards
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #61c46e;
          ">
                MP3 Players
            </div>
        </b-col>
        <b-col class="card-product-blog" cols="7" style="border-top: 4px solid #39b54a">
            <b-row class="no-gutters">
                <b-col class="card-product" v-for="i in 6" :key="i">
                    <div class="">
                        <nuxt-link to="#" style="text-decoration: none !important">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0">
                            </b-card-img>
                            <div class="product-name">
                                <div class="text-overflow">
                                    Cillcips Air Purifier A215 asdasdasdasdasdasa
                                </div>
                            </div>
                            <div class="product-price">124.00</div>
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
                    </div>
                </b-col>
            </b-row>
        </b-col>
        <b-col class="card-product-hot" style="width : 100%;height 100%; background-color :; border-top: 4px solid #39b54a;">
            <div style="background-color: #adadad; margin: 0.6em">
                <h4 style="padding-top: 1em; text-align: center; color: #fff">
                    NEW GADJETS
                </h4>
                <p style="text-align: center; font-size: 11px">
                    SUMMER SPECIAL COLLECTION <br />40% OFFER
                </p>
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0" style="height: 405px"></b-card-img>
            </div>
        </b-col>
    </b-row>

    <b-row class="row-product">
        <b-col class="" style="
          background-color: #ff678d !important;
          text-align: center;
          padding-top: 2em;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 20px;
          border-top: 4px solid #ff678d;
        ">
            <b-img src="~/assets/heath.png" alt="Image" class="rounded" width="56" height="56" style="margin-top: 2"></b-img>
            <div style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 15pt;
            color: #fff;
          ">
                Health & Beauty
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-top: 1px solid #ff81a1;
            border-bottom: 1px solid #ff81a1;
          ">
                Mobile Accessories
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #ff81a1;
          ">
                Hitech
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #ff81a1;
          ">
                Unboxed Mobiles
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #ff81a1;
          ">
                Bluetooth Devices
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #ff81a1;
          ">
                Screen Guards
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #ff81a1;
          ">
                MP3 Players
            </div>
        </b-col>
        <b-col class="card-product-blog" cols="7" style="border-top: 4px solid #ff678d">
            <b-row class="no-gutters">
                <b-col class="card-product" v-for="i in 6" :key="i">
                    <div class="">
                        <nuxt-link to="#" style="text-decoration: none !important">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0">
                            </b-card-img>
                            <div class="product-name">
                                <div class="text-overflow">
                                    Cillcips Air Purifier A215 asdasdasdasdasdasa
                                </div>
                            </div>
                            <div class="product-price">124.00</div>
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
                    </div>
                </b-col>
            </b-row>
        </b-col>
        <b-col class="card-product-hot" style="width : 100%;height 100%; background-color :; border-top: 4px solid #ff6289;">
            <div style="background-color: #adadad; margin: 0.6em">
                <h4 style="padding-top: 1em; text-align: center; color: #fff">
                    NEW GADJETS
                </h4>
                <p style="text-align: center; font-size: 11px">
                    SUMMER SPECIAL COLLECTION <br />40% OFFER
                </p>
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0" style="height: 405px"></b-card-img>
            </div>
        </b-col>
    </b-row>

    <b-row class="row-product">
        <b-col class="" style="
          background-color: #ecb856 !important;
          text-align: center;
          padding-top: 2em;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 20px;
          border-top: 4px solid #ecb856;
        ">
            <b-img src="~/assets/home.png" alt="Image" class="rounded" width="56" height="56" style="margin-top: 2">
            </b-img>
            <div style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 15pt;
            color: #fff;
          ">
                Home & Living
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-top: 1px solid #efc574;
            border-bottom: 1px solid #efc574;
          ">
                Mobile Accessories
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #efc574;
          ">
                Hitech
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #efc574;
          ">
                Unboxed Mobiles
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #efc574;
          ">
                Bluetooth Devices
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #efc574;
          ">
                Screen Guards
            </div>
            <div style="
            padding: 10px 0px 10px 30px;
            font-size: 13pt;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #efc574;
          ">
                MP3 Players
            </div>
        </b-col>
        <b-col class="card-product-blog" cols="7" style="border-top: 4px solid #ecb856">
            <b-row class="no-gutters">
                <b-col class="card-product" v-for="i in 6" :key="i">
                    <div class="">
                        <nuxt-link to="#" style="text-decoration: none !important">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0">
                            </b-card-img>
                            <div class="product-name">
                                <div class="text-overflow">
                                    Cillcips Air Purifier A215 asdasdasdasdasdasa
                                </div>
                            </div>
                            <div class="product-price">124.00</div>
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
                    </div>
                </b-col>
            </b-row>
        </b-col>
        <b-col class="card-product-hot" style="width : 100%;height 100%; background-color :; border-top: 4px solid #ecb856;">
            <div style="background-color: #adadad; margin: 0.6em">
                <h4 style="padding-top: 1em; text-align: center; color: #fff">
                    NEW GADJETS
                </h4>
                <p style="text-align: center; font-size: 11px">
                    SUMMER SPECIAL COLLECTION <br />40% OFFER
                </p>
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0" style="height: 405px"></b-card-img>
            </div>
        </b-col>
    </b-row>

    <b-row class="no-gutters" style="padding-top: 2em; margin: 0 -1.1em 0 0">
        <b-col class="no-gutters" style="margin-right: 0.5em; margin-left: -1em">
            <div style="position: absolute; top: 50px; left: 100px">
                <div style="font-size: 1.5em; font-weight: 500; color: #fff">
                    SUMMER COLLECTION
                </div>
            </div>
            <div style="position: absolute; top: 80px; left: 10em">
                <div style="font-size: 1.2em; font-weight: 500; color: #fff">
                    New Women's Collections
                </div>
            </div>
            <div style="position: absolute; top: 120px; left: 16em">
                <div style="font-size: 1.2em; font-weight: 500">
                    <b-button variant="outline-light">SHOP NOW</b-button>
                </div>
            </div>
            <img :src="`https://placeimg.com/480/200/any?2`" style="width: 100%" />
        </b-col>
        <b-col class="no-gutters" style="margin-right: -1em; margin-left: 0.5em">
            <div style="position: absolute; top: 50px; left: 15em">
                <div style="font-size: 1.5em; font-weight: 500; color: #fff">
                    SUMMER COLLECTION
                </div>
            </div>
            <div style="position: absolute; top: 80px; left: 16em">
                <div style="font-size: 1.2em; font-weight: 500; color: #fff">
                    New Women's Collections
                </div>
            </div>
            <div style="position: absolute; top: 120px; left: 16em">
                <div style="font-size: 1.2em; font-weight: 500">
                    <b-button variant="outline-light">SHOP NOW</b-button>
                </div>
            </div>
            <img :src="`https://placeimg.com/480/200/any?2`" style="width: 100%" />
        </b-col>
    </b-row>
</div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",

    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                arrows: false,
            },
        };
    },
    data() {
        return {
            options: {
                infinite: true,
                slidesToShow: 3,
                navButtons: false,
                dots: false,
                min: 'undefined',
                max: 'undefined',
                brand: 'undefined',
            },
            rating: 4.5,
        };
    },
    async asyncData({
        $productService
    }) {
        const products = await $productService.product.getProductPage({
            product_page: 1,
            // page_brand: brand,
            // page_min: min,
            // page_max: max
        });
        const categorys = await $productService.product.getProductCategoryBy();
        return {
            products: products.data ? products.data : [],
            categorys: categorys.data ? categorys.data : [],
        };
    },
};
</script>

<style scoped>
.left {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 60%;
    right: 50%;
    /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
    text-align: center;
}

.right {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 60%;
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
}

.text {
    background-color: white;
    color: white;
    font-size: 16px;
    padding: 5px 42px;
}

div {
    font-family: "Kanit", sans-serif;
}

.title-product {
    font-family: "Kanit", sans-serif;
    font-size: 20pt;
    font-weight: 500;
    color: #222222;
}

.title-product-sub {
    font-family: "Kanit", sans-serif;
    font-size: 12pt;
    font-weight: 500;
    color: #999999;
}

.row-product {
    padding-top: 30px;
    margin: 0 -2.1em 0 -1em;
}

.product-name {
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

.row-product-type {
    background-color: #39b44f !important;
    text-align: center;
    padding-top: 2em;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 20px;
}

.card-product {
    border: 1px solid rgb(0 0 0 / 14%);
    padding-left: 0;
    padding-right: 0;
}

.card-product-blog {
    border: 1px solid rgb(0 0 0 / 14%);
    padding-left: 0;
    padding-right: 0;
}

.card-product-shop {
    padding: 1em 0 2em 0;
}

.card-product-hot {
    border-right: 1px solid rgb(0 0 0 / 14%);
    border-bottom: 1px solid rgb(0 0 0 / 14%);
    padding-left: 0;
    padding-right: 0;
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
    text-align: left;
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

.carousel-wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
}

.img-wrapper img {
    margin: auto;
    background-image: linear-gradient(gray 100%, transparent 0);
}

a.nuxt-link-active {
    font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
    color: #00c58e;
}

.vue-star-rating {
    justify-content: center;
}

img.navber-show {
    width: 1000px;
}

/* .home-hover-show:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, .5);
    border: 1px solid #ccc;
} */

.text-overflow {
    padding: 0 1em 0 1em;
    white-space: nowrap;
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
