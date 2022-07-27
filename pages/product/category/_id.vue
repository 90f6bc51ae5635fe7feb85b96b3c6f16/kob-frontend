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
    <b-row class="title-product" style="margin: -1em -2em auto -1em">
        <b-col class="" style="font-size: 16pt; margin: auto 0 auto -0.7em" v-for="cate in cates" :key="cate.product_category_code">
            {{cate.product_category_name}}
        </b-col>
        <b-col class="" style="text-align: right; font-size: 12pt; margin: auto -1em auto 0">
            HOME / SHOP /
            <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
        </b-col>
    </b-row>

    <b-row style="padding-top: 30px">
        <b-col cols="3" style="margin: 0 0 0 -1em">
            <ul class="w3-ul" style="border: 0.2px solid #e5e5e5l;">
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
                </li>
                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 20px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    Jill
                </li>
                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 20px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    Eve
                </li>
                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 20px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    Adam
                </li>
            </ul>
            <b-row>
                <b-col style="font-weight: 500; padding: 15px;font-size: 13pt;">FLITER BY</b-col>
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
                    <b-button variant="outline" size="sm" style="float: right" disabled>
                        <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                    </b-button>
                </li>

                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 10px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Jill
                </li>
                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 10px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Eve
                </li>
                <li style="
              padding: 5px;
              font-size: 12pt;
              color: #777777;
              padding-left: 10px;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Adam
                </li>
                <li style="
              font-weight: 500;
              padding-left: 20px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
              font-size: 12pt;
              color: #222222;
            ">
                    PRICE

                    <b-button variant="outline" size="sm" style="float: right" disabled>
                        <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                    </b-button>
                </li>
                <li style="
              padding-left: 10px;
              font-size: 12pt;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Jill
                </li>
                <li style="
              padding-left: 10px;
              font-size: 12pt;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Eve
                </li>
                <li style="
              padding-left: 10px;
              font-size: 12pt;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            ">
                    <input type="checkbox" id="#" name="#" style="margin: 0 5px 0 10px" disabled/>
                    Adam
                </li>
            </ul>
        </b-col>
        <b-col v-for="cate in cates" :key="cate.product_category_code" style="display: flex; flex-wrap: wrap; margin: 0 -3em 0 -1em">
            <b-col cols="" style="display: flex; flex-wrap: wrap;">
                <b-col v-for="datadb in datadbs" :key="datadb.product_code" v-if="datadb.product_category_code==cate.product_category_code" class="card-product" cols="3">
                    <nuxt-link :to="{ path: `/product/${datadb.product_code}` }" style="text-decoration: none !important;">
                        <div v-if="datadb.product_image">
                            <b-card-img :src="`http://54.254.134.236:6201/${datadb.product_image}`" alt="Image" width="100%" height="230px" class="rounded-0"></b-card-img>
                        </div>
                        <div v-else>
                            <svg class="" width="100%" height="220px" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title></title>
                                <rect width="100%" height="100%" fill="#55595c"></rect><text x="30%" y="50%" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                            </svg>
                        </div>
                        <div class="product-name">
                            <div class="text-overflow">
                                {{datadb.product_name}}
                            </div>
                        </div>
                        <div class="product-price">
                            ${{datadb.product_price}}
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
                        <div class="product-star-ating">
                            <p style="text-align: center">
                                <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12" v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                                </star-rating>
                            </p>
                        </div>
                    </nuxt-link>
                </b-col>
                <div v-else class="divCheckbox"></div>
            </b-col>
        </b-col>
    </b-row>
</div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",
    async asyncData({
        $axios,
        params,
        $content
    }) {
        const cates = await $axios.$get(`http://127.0.0.1:3001/api/category/${params.id}`);
        const datadbs = await $axios.$get('http://127.0.0.1:3001/api/product');
        const categorys = await $axios.$get('http://127.0.0.1:3001/api/category');
        // const test = cates[product_category_code];
        // console.log("test",test);
        // console.log("cates", cates);
        // console.log("categorys", categorys);
        return {
            cates,
            categorys,
            datadbs,
            rating: 4.4,
        };
    },
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
            },
            rating: 4.3,
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
</style>
