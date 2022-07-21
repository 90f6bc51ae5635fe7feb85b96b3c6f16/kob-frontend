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
    <div class="photos" style="margin: 2em 0 0 -1em;">
        <carousel :starting-image="3" :images="images"></carousel>
        <div v-for="code in codes" :key="code.product_code">
            <div style="text-align: left">
                <div style="color: #232323; font-size: 28pt;">{{code.product_name}}</div>
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
                    ${{code.product_price}}
                </div>
            </div>
            <div style="text-align: left; display: flex; padding-bottom: 10px">
                <div style="color: #777777; font-size: 12pt;">
                    {{code.product_detail}}
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
                    Instock
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
                    <b-button variant="dark" class="mb-2">
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
                        017
                    </span>
                </div>
                <div v-for="category in categorys" :key="category.product_category_code">
                    <div style="color: #222222; font-size: 12pt;" class="" v-if="code.product_category_code == category.product_category_code">
                        Category :
                        <span style="color: #777777; font-size: 12pt;">
                            {{category.product_category_name}}
                        </span>
                    </div>
                </div>
                <div style="color: #222222; font-size: 12pt;" class="">
                    Tags :
                    <span style="color: #777777; font-size: 12pt;">
                        {{code.product_tag}}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div style="padding-bottom: 30px; margin: 0 -2em 0 -1em;">
        <b-card no-body>
            <b-tabs pills card vertical nav-wrapper-class="w-25">
                <b-tab title="DESCRIPTION" active>
                    <div v-for="code in codes" :key="code.product_code">
                        <b-card-text>{{code.product_description}}</b-card-text>
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
                            <div v-for="code in codes" :key="code.product_code">
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
    <!-- <div class="carousel-wrapper" style="margin: 0 -2em 0 -1em;">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="datadb in datadbs" :key="datadb.product_code">
                    <div v-for="code in codes" :key="code.product_code">
                        <div v-if="code.product_category_code == datadb.product_category_code">
                            <div class="img-wrapper">
                                <b-col class="card-product">
                                    <nuxt-link :to="{ path: `/product/${datadb.product_code}` }" style="text-decoration: none !important;">
                                        <b-card-img :src="`https://placeimg.com/480/480/any?${datadb}`" alt="Image" class="rounded-0"></b-card-img>
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
                        <div v-else></div>
                    </div>
                </div>
            </agile>
        </client-only>
    </div> -->
    <!-- สิ้นค้าประเภทเดียวกัน และ สุ่มเพิ่ม -->
    <div class="carousel-wrapper" style="margin: 0 -2em 0 -1em;">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="datadb in datadbs" :key="datadb.product_code">
                    <div v-for="code in codes" :key="code.product_code">
                        <div v-if="code.product_category_code == datadb.product_category_code">
                            <div class="img-wrapper">
                                <b-col class="card-product">
                                    <nuxt-link :to="{ path: `/product/${datadb.product_code}` }" style="text-decoration: none !important;">
                                        <b-card-img :src="`https://placeimg.com/480/480/any?${datadb}`" alt="Image" class="rounded-0"></b-card-img>
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
                                        <b-card-img :src="`https://placeimg.com/480/480/any?${datadb}`" alt="Image" class="rounded-0"></b-card-img>
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
    </div>
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
        $axios,
        params
    }) {
        const codes = await $axios.$get(`http://127.0.0.1:3001/api/product/${params.id}`);
        const datadbs = await $axios.$get(`http://127.0.0.1:3001/api/product`);
        const categorys = await $axios.$get('http://127.0.0.1:3001/api/product-category');
        // console.log("codes", codes);
        // console.log("datadbs", datadbs);
        return {
            codes,
            categorys,
            datadbs,
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

            images: [{
                    id: "1",
                    big: "https://picsum.photos/400/400/?image=1",
                    thumb: "https://picsum.photos/400/400/?image=1",
                },
                {
                    id: "2",
                    big: "https://picsum.photos/400/400/?image=2",
                    thumb: "https://picsum.photos/400/400/?image=2",
                },
                {
                    id: "3",
                    big: "https://picsum.photos/400/400/?image=3",
                    thumb: "https://picsum.photos/400/400/?image=3",
                },
                {
                    id: "4",
                    big: "https://picsum.photos/400/400/?image=4",
                    thumb: "https://picsum.photos/400/400/?image=4",
                },
                // {
                //   id: "5",
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
            ],
            rating: 4.4,
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

</style>
