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
            <button @click="" class="btn" style="border:1px solid #C0C0C0;">
                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #000;" class="fa-2xs" />
            </button>
            <button @click="" class="btn" style="border:1px solid #C0C0C0;">
                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #000;" class="fa-2xs" />
            </button>
        </div>
        <div div style="text-align: right; margin: 5px 0 0 0;">
            <p style="text-align: right;">HOME / SHOP /
                <span style="color: #669999;">
                    SIMPLE PRODUCT
                </span></p>
        </div>
    </div>
    <div class="photos" style="margin: 2em 0 0 -1em;">
        <carousel :starting-image="3" :images="images"></carousel>
        <div>
            <div style="text-align: left">
                <h3>TTTTT</h3>
            </div>
            <div class="product-star-ating">
                <div style="float:left; margin: -2px 5px 0 0;">
                    <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="15" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                    </star-rating>
                </div>
                <div style="text-align:right; margin: 0 0 0 0;">
                    <p style="text-align:center; float:left; margin: 0 0 0 0; color: #669999;">
                        (5 Customers reviews)
                    </p>
                </div>
            </div><br />
            <div style="text-align: left; display: flex">
                <h5 style="
              text-decoration: line-through;
              padding-right: 10px;
              color: #adadad;
            ">
                    $200.00
                </h5>
                <h5 style="">$185.00</h5>
            </div>
            <div style="text-align: left; display: flex; padding-bottom: 10px">
                <h7 style="color: #adadad">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    blandit ut nisi vel pellentesque. Nunc ex lacus, bibendum in
                    lobortis sed, porta viverra turpis. Donec malesuada viverra nulla,
                    et gravida nulla vulputate vel. Integer ac tellus mollis, lobortis
                    leo sed, tempus nunc. Aliquam pulvinar sed mi at viverra. Nulla
                    commodo maximus vestibulum. Morbi fringilla lectus tortor, tristique
                    interdum eros pellentesque in
                </h7>
            </div>
            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 1px solid #e4e4e4;
            background-color: #f5fffa;
          ">
                <h7 class="dotted">
                    vestibulum. Morbi fringilla lectus tortor, tristique interdum eros
                </h7>
                <h7 class="dotted">
                    vestibulum. Morbi fringilla lectus tortor, tristique interdum eros
                </h7>
                <h7 class="dotted">
                    vestibulum. Morbi fringilla lectus tortor, tristique interdum eros
                </h7>
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
                <h7 class=""> SKU : 017 </h7>
                <h7 class=""> Category : OuterWears,hoodies </h7>
                <h7 class=""> Tags : Mens,Clothing </h7>
            </div>
        </div>
    </div>
    <div style="padding-bottom: 30px; margin: 0 -2em 0 -1em;">
        <b-card no-body>
            <b-tabs pills card vertical nav-wrapper-class="w-25">
                <b-tab title="DESCRIPTION" active>
                    <b-card-text>DESCRIPTION</b-card-text>
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
                            <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                <h7 class=""> SKU : 017 </h7>
                            </div>
                            <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                <h7 class=""> Category : OuterWears,hoodies </h7>
                            </div>
                            <div style="border-bottom: 1px solid #e4e4e4; padding: 5px">
                                <h7 class=""> Tags : Mens,Clothing </h7>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>

    <b-row>
        <b-col class="title-product">
            <h4>RELATED PRODUCTS</h4>
        </b-col>
        <b-col class="title-product">
            <div style="text-align: right">
                <button @click="$refs.carousel.goToPrev()" class="btn" style="border: 1px solid #e4e4e4">
                    <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #000" />
                </button>

                <button @click="$refs.carousel.goToNext()" class="btn" style="border: 1px solid #e4e4e4">
                    <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #000" />
                </button>
            </div>
        </b-col>
    </b-row>
    <div class="carousel-wrapper" style="margin: 0 -2em 0 -1em;">
        <client-only>
            <agile :options="options" ref="carousel">
                <div v-for="i in 5" :key="i" class="img-wrapper">
                    <b-col class="card-product">
                        <nuxt-link :to="{ path: `/product/detail` }">
                            <b-card-img :src="`https://placeimg.com/480/500/any?${i}`" alt="Image" class="rounded-0"></b-card-img>
                            <div class="product-name">Cillcips Air Purifier A215</div>
                            <div class="product-price">$124.00</div>
                            <div class="product-star-ating" style="padding: 0 0 1em 0;">
                                <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="20" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
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
        const categorys = await $axios.$get('http://127.0.0.1:3001/api/product-category');
        console.log("code", codes);
        return {
            codes,
            categorys
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
    top: 69.5%;
    right: 50%;
    width: 50%;
    /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
    text-align: center;
}

.right {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 69.5%;
    left: 50%;
    width: 50%;

    /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
    text-align: center;
}

.left:hover .text {
    background-color: #39b54a;
}

.right:hover .text {
    background-color: #39b54a;
}

.card-product:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, .5);
    border: 1px solid #ccc;
    border-style: outset;
}

.card-product:hover .image {
    opacity: 0.3;
}

.card-product:hover .left {
    opacity: 1;
    background-color: green;
}

.card-product:hover .right {
    opacity: 1;
    background-color: green;
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
    text-align: center;
}

.product-price {
    font-weight: 500;
    text-align: center;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 5px;
    margin: auto -2em auto -1em;
}

.vue-star-rating {
    justify-content: center;
}

#example-collapse {
    padding-right: 0;
}

#example-collapse a {
    text-align: center;
}

#example-collapse a:hover {
    color: #fff;
    background-color: #39b54a !important;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    border: 1px solid #adadad;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li {
    text-align: center;
    border-bottom: 1px solid #adadad;
}

li:last-child {
    border-bottom: none;
}

li a.active {
    background-color: #04aa6d;
    color: white;
}

li a:hover:not(.active) {
    background-color: #adadad;
    color: white;
}
</style>
