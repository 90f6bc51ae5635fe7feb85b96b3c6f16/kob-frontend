<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em;">
        <b-collapse id="example-collapse" style="
              width: 100%;
              margin: 0 0 0 0;
              max-height: 250px;
              overflow: auto;

            ">
            <div v-for="category in categorys" :key="category.product_category_code">
                <ul>
                    <li>
                        <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }">
                            {{category.product_category_name}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </b-collapse>
    </div>
    <div class="title-product">
        <div style="float:left; margin: 0 0 0 0;">
            <button @click="" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important;">
                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt;" />
            </button>
            <button @click="" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important;">
                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt;" />
            </button>
        </div>
        <div div style="text-align: right; margin: 5px 0 0 0;">
            <div style="text-align: right; color: #444444; font-size: 12pt;">HOME / SHOP /
                <span style="color: #888888; font-size: 12pt;">
                    SIMPLE PRODUCT
                </span>
            </div>
        </div>
    </div>

    <div class="photos" style="margin: 2em 0 0 -1em;" v-for="productCode in productCodes" :key="productCode.product_code">
        <!-- <carousel :starting-image="3" :images="images"> </carousel> -->
        <div v-if="productCode.product_image" style="border: 1px solid #e4e4e4;">
            <carousel style="border: 1px solid #e4e4e4;" :starting-image="0" :images="images">
            </carousel>
        </div>
        <div v-else style="border: 1px solid #e4e4e4;">
            <svg class="" width="100%" height="550" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title></title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="30%" y="50%" fill="#eceeef" dy=".3em" style="font-size: 30pt;">Kob Giftshop</text>
            </svg>
        </div>

        <div>
            <div style="text-align: left">
                <div style="color: #232323; font-size: 28pt;">{{productCode.product_name}}</div>
            </div>
            <div class="product-star-ating">
                <div style="float:left; margin: -2px 5px 0 0;">
                    <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                    </star-rating>
                </div>
                <div style="text-align:right; margin: 0 0 0 0;">
                    <p style="text-align:center; float:left; margin: 0 0 0 0; color: #777777; font-size: 12pt;">
                        (5 Customers reviews)
                    </p>
                </div>
            </div><br />
            <div style="text-align: left; display: flex">
                <div style="
              text-decoration: line-through;
              padding-right: 10px;
              color: #999999;
              font-size: 18pt;
            ">
                    $200.00
                </div>
                <div style="color: #222222; font-size: 18pt;">
                    ${{productCode.product_price}}
                </div>
            </div>
            <div style="text-align: left; display: flex; padding-bottom: 10px">
                <div style="color: #777777; font-size: 12pt;">
                    {{productCode.product_detail}}
                </div>
            </div>
            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 1px solid #e4e4e4;
            background-color: #f5fffa;
          ">
                <div class="dotted" style="color: #777777; font-size: 12pt;">
                    Free Shipping On order <span style="color: #222222;">over $99</span>
                </div>
                <div class="dotted" style="color: #8aa47b; font-size: 12pt;">
                    {{productCode.product_delivery_time}} วัน
                </div>
                <div class="dotted" style="color: #777777; font-size: 12pt;">
                    Gift-wrap available
                </div>
            </div>
            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            width: 20%;
          ">
                <div class="quantity">
                    <b-input-group>
                        <b-input-group-prepend>
                            <b-btn variant="info" @click="decrement()">-</b-btn>
                        </b-input-group-prepend>

                        <b-form-input min="0.00" :value="quantity"></b-form-input>

                        <b-input-group-append>
                            <b-btn variant="info" @click="increment()">+</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e4e4e4;
            margin: 0 -2em 0 0;
          ">
                <div style="width: 35%">
                    <b-button variant="dark" class="mb-2" disabled>
                        ADD TO CART
                        <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" />
                    </b-button>
                </div>
            </div>

            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e4e4e4;
            margin: 0 -2em 0 0;
          ">
                <div style="color: #222222; font-size: 12pt;" class="">
                    SKU :
                    <span style="color: #777777; font-size: 12pt;">
                        {{productCode.product_code}}
                    </span>
                </div>
                <div v-for="category in categorys" :key="category.product_category_code">
                    <div style="color: #222222; font-size: 12pt;" class="" v-if="productCode.product_category_code == category.product_category_code">
                        Category :
                        <span style="color: #777777; font-size: 12pt;">
                            {{category.product_category_name}}
                        </span>
                    </div>
                </div>
                <div style="color: #222222; font-size: 12pt;" class="">
                    Tags :
                    <span style="color: #777777; font-size: 12pt;">
                        {{productCode.product_tag}}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div style="padding-bottom: 30px; margin: 0 -2em 0 -1em;">
        <b-card no-body>
            <b-tabs pills card vertical nav-wrapper-class="w-25">
                <b-tab title="DESCRIPTION" active>
                    <div v-for="productCode in productCodes" :key="productCode.product_code">
                        <b-card-text>{{productCode.product_description}}</b-card-text>
                    </div>
                </b-tab>
                <b-tab title="ADDITIONAL INFORMATION">
                    <b-card-text>
                        <div style="
                  text-align: left;
                  display: flex;
                  flex-direction: column;
                  padding-top: 20px;
                  padding-bottom: 10px;
                ">
                            <div v-for="productCode in productCodes" :key="productCode.product_code">
                                <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                    <div style="float: left; width: 20%; color: #444444; font-size: 12pt;" class=""> Weight : </div>
                                    <div style="align: right; width: 80%; color: #777777; font-size: 12pt;">1.5 kg</div>
                                </div>
                                <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                    <div style="float: left; width: 20%; color: #444444; font-size: 12pt;" class=""> Dimensions : </div>
                                    <div style="align: right; width: 80%; color: #777777; font-size: 12pt;">90 x 60 x 90 cm</div>
                                </div>
                                <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                    <div style="float: left; width: 20%; color: #444444; font-size: 12pt;" class=""> Composition : </div>
                                    <div style="align: right; width: 80%; color: #777777; font-size: 12pt;">100% Cotton</div>
                                </div>
                                <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                    <div style="float: left; width: 20%; color: #444444; font-size: 12pt;" class=""> Colour : </div>
                                    <div style="align: right; width: 80%; color: #777777; font-size: 12pt;">Blue, Gray, Red</div>
                                </div>
                                <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                    <div style="float: left; width: 20%; color: #444444; font-size: 12pt;" class=""> Size : </div>
                                    <div style="align: right; width: 80%; color: #777777; font-size: 12pt;">Extra Smail, Large, Medium, Small</div>
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>

    <b-row>
        <b-col class="related-product">
            <div style="font-size: 18pt; color: #222222;">
                RELATED PRODUCTS
            </div>
        </b-col>
        <b-col class="related-product">
            <div style="text-align: right" class="awesome-product">
                <button @click="$refs.carousel.goToPrev()" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important;">
                    <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt;" />
                </button>
                <button @click="$refs.carousel.goToNext()" class="btn" style="border: 1px solid #e4e4e4; padding: 0.1rem 0.7rem !important;">
                    <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt;" />
                </button>
            </div>
        </b-col>
    </b-row>
    <!-- เฉพาะสิ้นค้าประเภทเดียวกัน -->
    <div class="carousel-wrapper" style="margin: 0 -2em 0 -1em;">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="product in products" :key="product.product_code">
                    <b-col class="card-product">
                        <nuxt-link :to="{ path: `/product/${product.product_code}` }" style="text-decoration: none !important;">
                            <div v-if="product.product_image">
                                <b-card-img :src="`http://54.254.134.236:6201/${product.product_image}`" alt="Image" width="100%" height="230px" class="rounded-0"></b-card-img>
                            </div>
                            <div v-else>
                                <svg class="" width="100%" height="230px" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title></title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                                </svg>
                            </div>
                            <div class="product-name">
                                <div class="text-overflow">
                                    {{product.product_name}}
                                </div>
                            </div>
                            <div class="product-price">
                                ${{product.product_price}}
                            </div>
                            <div class="product-star-ating" style="padding: 0 0 1em 0;">
                                <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                                </star-rating>
                            </div>
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
                        </nuxt-link>
                    </b-col>
                </div>
            </agile>
        </client-only>
    </div>
    <!-- สิ้นค้าประเภทเดียวกัน และ สุ่มเพิ่ม -->
    <!-- <div class="carousel-wrapper" style="margin: 0 -2em 0 -1em;">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="datadb in datadbs" :key="datadb.product_code">
                    <div v-for="code in codes" :key="code.product_code">
                        <div v-if="code.product_category_code == datadb.product_category_code">
                            <div class="img-wrapper">
                                <b-col class="card-product">
                                    <nuxt-link :to="{ path: `/product/${datadb.product_code}` }" style="text-decoration: none !important;">
                                        <div v-if="datadb.product_image">
                                            <b-card-img :src="`http://54.254.134.236:6201/${datadb.product_image}`" alt="Image" class="rounded-0"></b-card-img>
                                        </div>
                                        <div v-else>
                                            <svg class="" width="100%" height="230" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title></title>
                                                <rect width="100%" height="100%" fill="#55595c"></rect><text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                                            </svg>
                                        </div>
                                        <div class="product-name">
                                            {{datadb.product_name}}
                                        </div>
                                        <div class="product-price">
                                            {{datadb.product_price}}
                                        </div>
                                        <div class="product-star-ating" style="padding: 0 0 1em 0;">
                                            <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                                            </star-rating>
                                        </div>
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
                                    </nuxt-link>
                                </b-col>
                            </div>
                        </div>
                        <div v-else>
                            <div class="img-wrapper">
                                <b-col class="card-product">
                                    <nuxt-link :to="{ path: `/product/${datadb.product_code}` }" style="text-decoration: none !important;">
                                        <div v-if="datadb.product_image">
                                            <b-card-img :src="`http://54.254.134.236:6201/${datadb.product_image}`" alt="Image" class="rounded-0"></b-card-img>
                                        </div>
                                        <div v-else>
                                            <svg class="" width="100%" height="230" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title></title>
                                                <rect width="100%" height="100%" fill="#55595c"></rect><text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                                            </svg>
                                        </div>
                                        <div class="product-name">
                                            {{datadb.product_name}}
                                        </div>
                                        <div class="product-price">
                                            {{datadb.product_price}}
                                        </div>
                                        <div class="product-star-ating" style="padding: 0 0 1em 0;">
                                            <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                                            </star-rating>
                                        </div>
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
                                    </nuxt-link>
                                </b-col>
                            </div>
                        </div>
                    </div>
                </div>
            </agile>
        </client-only>
    </div> -->
</div>
</template>

<script>
import Carousel from "../../plugins/vue-carousel/Carousel.vue";
export default {
    // async asyncData({ $axios, params }) {
    //   const photo = await $axios.$get(
    //     `https://picsum.photos/id/${params.id}/info`
    //   );
    //   return { photo };
    // }
    components: {
        Carousel,
    },
    async asyncData({
        $productService,
        params,
    }) {
        const products = await $productService.product.getProductPage({
            page: 1,
            // page_brand: brand,
            // page_min: min,
            // page_max: max
        });
        const categorys = await $productService.product.getProductCategoryBy();
        const productCodes = await $productService.product.getProductByCode({
            product_code: params.id
        });
        const productImages = await $productService.product.getProductImageByCode({
            product_code: params.id
        });

        let images = [];
        let obj = {};
        productCodes.data.forEach((e, i) => {
            let objToAdd1 = {
                'big': `http://54.254.134.236:6201/${e.product_image}`,
                'thumb': `http://54.254.134.236:6201/${e.product_image}`
            }
            obj = {
                ...obj,
                ...objToAdd1
            };
            images.push(obj);

        });
        productImages.data.forEach((e, i) => {
            let objToAdd1 = {
                'big': `http://54.254.134.236:6201/${e.product_image_name}`,
                'thumb': `http://54.254.134.236:6201/${e.product_image_name}`
            }
            obj = {
                ...obj,
                ...objToAdd1
            };
            images.push(obj);

        });
        // console.log("imgs", images);
        return {
            products: products.data ? products.data : [],
            categorys: categorys.data ? categorys.data : [],
            productCodes: productCodes.data ? productCodes.data : [],
            productImages: productImages.data ? productImages.data : [],
            images,
        };
    },

    data() {
        return {
            quantity: 1,
            options: {
                infinite: true,
                slidesToShow: 5,
                navButtons: false,
                dots: false,
            },
            rating: 4.4,
            // images: [{
            //         // id: "1",
            //         big: `http://54.254.134.236:6201/product/923721f7-4079-4256-ac82-07e41c6710dc.jpg`,
            //         thumb: `http://54.254.134.236:6201/product/923721f7-4079-4256-ac82-07e41c6710dc.jpg`,
            //     },
            //     {
            //         // id: "2",
            //         big: `http://54.254.134.236:6201/product/f46dfb79-16a9-4db2-966c-39110272f62c.jpg`,
            //         thumb: `http://54.254.134.236:6201/product/f46dfb79-16a9-4db2-966c-39110272f62c.jpg`,
            //     },
            //     {
            //         // id: "3",
            //         big: `http://54.254.134.236:6201/product/56b88d07-6c4a-4bca-b4de-509dbf30dc7e.jpeg`,
            //         thumb: `http://54.254.134.236:6201/product/56b88d07-6c4a-4bca-b4de-509dbf30dc7e.jpeg`,
            //     },
            //     {
            //         // id: "4",
            //         big: "https://picsum.photos/400/400/?image=4",
            //         thumb: "https://picsum.photos/400/400/?image=4",
            //     },
                // {
                //   // id: "5",
                //   big: "https://picsum.photos/400/400/?image=5",
                //   thumb: "https://picsum.photos/400/400/?image=5",
                // },
                // {
                //   id: "6",
                //   big: "https://picsum.photos/400/400/?image=6",
                //   thumb: "https://picsum.photos/400/400/?image=6",
                // },
                // {
                //   id: "7",
                //   big: "https://picsum.photos/400/400/?image=7",
                //   thumb: "https://picsum.photos/400/400/?image=7",
                // },
                // {
                //   id: "8",
                //   big: "https://picsum.photos/400/400/?image=8",
                //   thumb: "https://picsum.photos/400/400/?image=8",
                // },
            // ],
        };
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity === 0) {
                alert("Negative quantity not allowed");
            } else {
                this.quantity--;
            }
        },
    },
};
</script>

<style scoped>
.photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2em;
    text-align: center;
    padding-bottom: 20px;
}

.dotted:before {
    content: "• ";
    color: blue;
}

.card-header {
    background-color: transparent !important;
    padding: 0px !important;
}

.active-nav-item-class {
    background: red;
}

.carousel-wrapper {
    padding-top: 20px;
    padding-bottom: ;
}

.img-wrapper img {
    margin: auto;
    background-image: linear-gradient(gray 100%, transparent 0);
}

.title-product {
    font-family: "Kanit";
    font-size: 1.5em;
    font-weight: 500;
}

.left {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 60.5%;
    right: 50%;
    /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
    text-align: center;
}

.right {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 60.5%;
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

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 1em;
    margin: auto -2em auto -1em;
}

.related-product {
    padding-top: 1em;
    font-weight: 600;
    padding-bottom: .5em;
    margin: auto -2em auto -1em;
}

.awesome-product {}

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

.text-overflow {
    padding: 0 1em 0 1em;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
