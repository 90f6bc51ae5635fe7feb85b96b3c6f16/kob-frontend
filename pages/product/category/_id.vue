<template>
    <div>
        <div class="" style="margin: 0 -2em 0 -1em">
            <b-collapse id="example-collapse" style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto">
                <div v-for="(category, idx) in categorys" :key="'A' + idx">
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

        <b-row class="title-product" style="margin: -1em -2em auto -1em">
            <b-col md="6" sm="12" style="font-size: 16pt; margin: auto 0 auto -0.7em"
                v-for="(category_name, idx) in category_names.slice(0, 1)" :key="'B' + idx">
                ค้นหา : {{ category_name.product_category_name }}
            </b-col>
            <b-col md="6" sm="12" style="text-align: right; font-size: 12pt; margin: auto -1em auto 0">
                HOME / SHOP /
                <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
            </b-col>
        </b-row>

        <b-row style="padding-top: 30px">
            <b-col sm="12" md="3" class="col-fliter">
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
                        <b-button v-b-toggle.collapse variant="outline" size="sm"
                            style="float: right; margin-top: -0.2em">
                            <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                        </b-button>
                    </li>
                    <b-collapse id="collapse" style="
              margin: 0 0 0 0;
              background-color: #fff;
              max-height: 250px;
              overflow: auto;
            ">
                        <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              " v-for="(category, idx) in categorys" :key="'C' + idx">
                            <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }" style="
                  text-decoration: none !important;
                  margin: 0 5px 0 10px;
                  color: #000;
                ">
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
                        <b-button v-b-toggle.collapse1 variant="outline" size="sm"
                            style="float: right; margin-top: -0.2em">
                            <font-awesome-icon :icon="['fas', 'angle-down']" style="color: #000" />
                        </b-button>
                    </li>
                    <b-collapse id="collapse1" style="
              margin: 0 0 0 0;
              background-color: #fff;
              max-height: 250px;
              overflow: auto;
            ">
                        <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              " v-for="(brand, idx) in brands" :key="'D' + idx">
                            <input type="checkbox" :name="`${brand.product_brand_code}`"
                                :value="`${brand.product_brand_code}`" v-model="checkedNames"
                                style="margin: 0 5px 0 10px" @change="check_brand($event)" />
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
                        <b-button v-b-toggle.collapse2 variant="outline" size="sm"
                            style="float: right; margin-top: -0.2em">
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
                  text-align: center;
                ">
                        <input placeholder="ใส่ราคาต่ำสุด" v-model="min" type="number"
                            style="margin-top: 0.5em; width: 80%; font-size: 12pt; border: 2px solid rgb(229, 229, 229); border-radius: 3px;">
                        <p style=" margin: 0.5em 0.3em 0 0.3em;">ถึง</p>
                        <input placeholder="ใส่ราคาสูงสุด" v-model="max" type="number"
                            style="margin-top: 0.5em; width: 80%; font-size: 12pt; border: 2px solid rgb(229, 229, 229); border-radius: 3px;">
                        <p style="margin-top: 0.4em; text-align: center;" id="demo"></p>
                        <button type="submit" class="btn btn-success" style=" width: 30%"
                            @click="check_price()">ยืนยัน</button>
                        <!-- <div v-if="(parseInt(min) <= parseInt(max) && min != 'undefined' && max != 'undefined')">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/product/category/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div>
                    <div v-else-if="min != 'undefined' && max == 'undefined'">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/product/category/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div>
                    <div v-else-if="min == 'undefined' && max != 'undefined'">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/product/category/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div> -->
                    </li>
                    </b-collapse>
                    </li>
                </ul>
                <b-row>
                    <b-col style="font-weight: 500; padding: 15px; font-size: 13pt; text-align: center;"><button
                            type="submit" class="btn btn-danger" style=" width: 80%;"
                            @click="reset_filter()">ลบตัวกรองสินค้าทั้งหมด</button></b-col>
                </b-row>
            </b-col>
            <b-col class="col-product">
                <b-col class="card-product" sm="12" md="3" v-for="(product, idx) in category_products" :key="'E' + idx">
                    <nuxt-link :to="{ path: `/product/${product.product_code}` }">
                        <div v-if="product.product_image">
                            <b-card-img :src="`http://141.98.19.44:6201/${product.product_image}`" width="100%"
                                height="220px" alt="Image" class="rounded-0"></b-card-img>
                        </div>
                        <div v-else>
                            <svg class="" width="100%" height="220px" role="img" aria-label="Placeholder: Kob Giftshop"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
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
                    </nuxt-link>
                    <div class="product-price">฿{{ product.product_price }}</div>
                    <div class="left">
                        <nuxt-link :to="{ path: `/product/${product.product_code}` }"
                            style="text-decoration: none !important">
                            <button @click="" class="text btn btn-outline-success border-0 border-radius-0">
                                <font-awesome-icon :icon="['fa', 'eye']" style="color: #000" />
                            </button>
                        </nuxt-link>
                    </div>
                    <div class="right">
                        <button @click="addToCart(product)" class="text btn btn-outline-success border-0 radius-0">
                            <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #000" />
                        </button>
                    </div>
                    <div class="product-star-ating">
                        <p style="text-align: center">
                            <star-rating v-bind:increment="0.1" v-bind:max-rating="5" v-bind:star-size="12"
                                v-bind:read-only="true" v-bind:show-rating="false" v-model:rating="rating">
                            </star-rating>
                        </p>
                    </div>
                </b-col>
                <div style="margin-top: 1em;
                      justify-content: center;
                      list-style-type: none;
                      width: 100%;
                      display: flex;
                      padding: 1em 1em;
                      border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                      border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                      border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

            " v-for="(count, idx) in counts" :key="'F' + idx">
                    <div v-if="count.product_count == 0" style="
                                  margin-top: 1em;
                                  margin-bottom: 10em;
                                  text-align: center;
                                  ">
                        <p>ไม่พบสินค้า</p>
                        <button type="submit" class="btn btn-success"
                            @click="reset_data()">กลับไปหน้ารายการสินค้า</button>
                    </div>
                    <div
                        v-if="count.product_count < 1 && count.product_count > 0 && count.product_count != 0 && Math.round(count.product_count) != 1">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: right;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) == 1">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: right;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) == 2">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                                    justify-content: center;
                                    list-style-type: none;
                                    width: 100%;
                                    display: flex;
                                    padding: 1em 1em;
                                    border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                    border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                    border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                          ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 2" style="margin-top: 1em;
                                    justify-content: center;
                                    list-style-type: none;
                                    width: 100%;
                                    display: flex;
                                    padding: 1em 1em;
                                    border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                    border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                    border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                          ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) == 3">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 2" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 3" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) == 4">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 2" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 3" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 2}}</nuxt-link>
                            </li>

                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 4" style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                        ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) == 5">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 4}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 4}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 2" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 3" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 4" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 5" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 4}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 4}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-if="Math.round(count.product_count) > 5">
                        <ul v-if="pages == 1" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 4}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 4}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 2" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == 3" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == (Math.round(count.product_count) - 2) && pages != 3" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == (Math.round(count.product_count) - 1)" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul v-if="pages == Math.round(count.product_count)" style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 4}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 4}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 3}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 3}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    - 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </button>
                            </li>
                        </ul>
                        <ul v-if="pages > 3 && pages != Math.round(count.product_count) - 2 && pages != Math.round(count.product_count) - 1 && pages != Math.round(count.product_count)"
                            style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

                    ">
                            <li style="margin: 0 0.5em 0 0;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages - 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
                                    pages- 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <button class="btn btn-primary"
                                    style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;"
                                    disbled>{{ pages }}</button>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 1}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0.5em 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary"
                                    style=" margin-left: 4.335%; margin-right: 4.335%;"
                                    :to="{ path: `/product/category/page/${pages + 2}`, query: { category: category, brand: brand, min: min, max: max } }">{{
    pages
                                    + 2}}</nuxt-link>
                            </li>
                            <li style="margin: 0 0 0 0.5em;">
                                <nuxt-link class="btn btn-outline-primary" style="float: right;"
                                    :to="{ path: `/product/category/page/${pages + 1}`, query: { category: category, brand: brand, min: min, max: max } }">
                                    <font-awesome-icon :icon="['fas', 'angle-right']"
                                        style="color: #555555; font-size: 10pt" />
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import vPagination from "vue-plain-pagination";
export default {
    name: "Homepage",
    async asyncData({
        $productService,
        $content,
        params,
        route,
        query,
        error
    }) {
        const brand = query.brand;
        const min = query.min;
        const max = query.max;
        const category = params.id;
        let checkedNames = [];
        if (brand != null) {
            checkedNames = brand;
        }
        const category_products = await $productService.product.getProductCategoryByCode({
            category_page: 1,
            category_code: category,
            category_brand: brand,
            category_min: min,
            category_max: max,
        });
        const category_names = await $productService.product.getProductCategoryByCategoryName({
            category_name: category,
        });
        const categorys = await $productService.product.getProductCategoryBy();
        const brands = await $productService.product.getProductBandBy();
        const tenPosts = await $content()
            .only(['author', 'createdAt', 'description', 'path', 'title'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .fetch();
        const counts = await $productService.product.getProductCount({
            count_category: category,
            count_keyword: 'undefined',
            count_brand: brand,
            count_min: min,
            count_max: max,

        });
        // console.log("category_products", category_products.data);
        const nextPage = tenPosts.length === 10;
        const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
        return {
            category_products: category_products.data ? category_products.data : [],
            categorys: categorys.data ? categorys.data : [],
            category_names: category_names.data ? category_names.data : [],
            brands: brands.data ? brands.data : [],
            counts: counts.data ? counts.data : [],
            nextPage,
            posts,
            pages: 1,
            category,
            query,
            brand,
            min,
            max,
            checkedNames,
        };
    },
    mounted() {
        this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
    },
    watch: {
        shoppingCart: {
            handler(newValue) {
                localStorage.setItem('shoppingCart', JSON.stringify(newValue));
            },
            deep: true
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        check_brand() {
            if (this.checkedNames != '') {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.category == '') {
                    this.category = 'undefined';
                }
                return this.$router.push({
                    path: `/product/category/${this.category}`,
                    query: {
                        category: this.category,
                        brand: this.checkedNames,
                        min: this.min,
                        max: this.max
                    },
                },
                    () => {
                        this.$router.app.refresh()
                    }
                );
            } else if (this.checkedNames == '') {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.category == '') {
                    this.category = 'undefined';
                }
                return this.$router.push({
                    path: `/product/category/${this.category}`,
                    query: {
                        min: this.min,
                        max: this.max
                    },
                },
                    () => {
                        this.$router.app.refresh()
                        // window.location.reload(true)
                    }
                );
            }
        },
        check_price() {
            if (parseInt(this.min) > parseInt(this.max)) {
                document.getElementById("demo").innerHTML = "ใส่จำนวนเงิน น้อยสุด และ มากสุด !";
            } else if (parseInt(this.min) <= parseInt(this.max) || (this.min == '' && this.max != '') || (this.min != '' && this.max == '')) {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.brand == '') {
                    this.brand = 'undefined';
                }
                if (this.category == '') {
                    this.category = 'undefined';
                }
                document.getElementById("demo").innerHTML = "";
                return this.$router.push({
                    path: `/product/category/${this.category}`,
                    query: {
                        category: this.category,
                        brand: this.brand,
                        min: this.min,
                        max: this.max
                    },
                },
                    () => {
                        this.$router.app.refresh()
                    }
                );

            } else {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.brand == '') {
                    this.brand = 'undefined';
                }
                if (this.category == '') {
                    this.category = 'undefined';
                }
                return this.$router.push({
                    path: `/product/category/${this.category}`,
                    query: {
                        brand: this.brand,
                        min: this.min,
                        max: this.max,
                    },
                },
                    () => {
                        this.$router.app.refresh()
                    }
                );
            }
        },
        reset_data() {
            return this.$router.push({
                path: `/product`,
            },
                () => {
                    window.location.reload(true)
                    // this.$router.app.refresh()
                }
            );
        },
        reset_filter() {
            return this.$router.push({
                path: `/product/category/${this.category}`,
            },
                () => {
                    // this.$router.app.refresh()
                    window.location.reload(true)
                }
            );
        },
        addToCart(product) {
            let exists = false;
            // console.log("product", product);
            for (const cartItem of this.shoppingCart) {
                // console.log("cartItem.product_code", cartItem.product_code);
                // console.log("this.shoppingCart", this.shoppingCart);
                if (cartItem.product_code === product.product_code) {
                    cartItem.amount = cartItem.amount + 1;
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.shoppingCart.push({
                    ...product,
                    amount: 1,
                })
            }
            window.location.reload(true)
        },
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
            // checkedNames: [],
            keyword: 'undefined',
            min: 'undefined',
            max: 'undefined',
            brand: 'undefined',
            contact: false,
            tel: false,
            facebook: false,
            map: false,
            shoppingCart: [],
        };
    },

};
</script>

<style scoped>
.col-fliter {
    margin: -1em -2em auto -1em
}

.col-product {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2em 0 0
}

@media only screen and (max-width: 600px) {
    .col-product {
        display: block;
        flex-wrap: wrap;
        margin: 0 -2em 0 0
    }

    .col-fliter {
        margin: auto
    }
    .title-product{
        padding: 0px 5px 0px 5px;
    }
}
@media only screen  and (min-width: 601px) and (max-width: 1024px){
    .title-product{
        padding: 0px 5px 0px 5px;
    }
    .row-content{
        padding: 0px 10px 0px 5px;
    }
}

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
    padding: 5px 44px;
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>
