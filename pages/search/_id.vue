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
    <!-- <div style="float: right; z-index: 9999999 !important;">
        <div class="manu-sidebar">
            <a href="https://www.facebook.com/kobgiftshop" target="_blank" class="" style="text-decoration: none !important;" id="tooltip-target-1">
                <div class="manu-sidebar-a">
                    <img src="~/assets/Fbb.png" style="width: 50px; height: 50px;" alt="facebook">
                </div>
                <b-tooltip target="tooltip-target-1" triggers="hover" placement="left" variant="primary">
                    <h5>เฟสบุ๊ค</h5>
                </b-tooltip>
            </a>
            <a href="tel:0994619241" class="" style="text-decoration: none !important;" id="tooltip-target-2">
                <div class="manu-sidebar-a">
                    <img src="~/assets/tel.png" style="width: 45px; height: 45px; margin: 0 0 0 ;" alt="tel">
                </div>
                <b-tooltip target="tooltip-target-2" triggers="hover" placement="left" variant="success">
                    <h5>เบอร์โทรศัพท์</h5>
                </b-tooltip>
            </a>
            <a href="https://www.google.com/maps/dir//%E0%B8%81%E0%B8%9A%E0%B8%81%E0%B8%B4%E0%B9%8A%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2+121+Jant+Rd+Tambon+Nai+Mueang,+Mueang+Nakhon+Ratchasima+District+Nakhon+Ratchasima+30000/@14.9782908,102.087612,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31194ca4b81e8aad:0x3b5d3e95ddf93832" target="_blank" class="" style="text-decoration: none !important;" id="tooltip-target-3">
                <div class="manu-sidebar-a">
                    <img src="~/assets/map.png" style="width: 50px; height: 50px;" alt="map">
                </div>
                <b-tooltip target="tooltip-target-3" triggers="hover" placement="left" variant="danger">
                    <h5>แผนที่ร้าน</h5>
                </b-tooltip>
            </a>
            <a href="/contact" target="_blank" class="" style="text-decoration: none !important;" id="tooltip-target-4">
                <div class="manu-sidebar-a">
                    <img src="~/assets/contact.png" style="width: 50px; height: 50px;" alt="contact">
                </div>
                <b-tooltip target="tooltip-target-4" triggers="hover" placement="left" variant="warning">
                    <h5>ติดต่อเรา</h5>
                </b-tooltip>
            </a>
        </div>
    </div> -->
    <b-row class="title-product" style="margin: -1em -2em auto -1em">
        <b-col class="" style="font-size: 16pt; margin: auto 0 auto -0.7em">
            ค้นหา : {{keyword}}
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
              " v-for="category in categorys" :key="category.product_category_code">
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
                    <b-button v-b-toggle.collapse1 variant="outline" size="sm" style="float: right; margin-top: -0.2em">
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
              ">
                        <input type="radio" id="id1" checked="checked" name="undefined" value="undefined" style="margin: 0 5px 0 10px" v-model="checkedNames" @click="reset_brand($event)" />
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
                        <input type="radio" id="id1" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" v-model="checkedNames" style="margin: 0 5px 0 10px" @click="check($event)" />
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
                  text-align: center;
                ">
                    <input placeholder="ใส่ราคาต่ำสุด" v-model="min" type="number" style="margin-top: 0.5em; width: 40%; font-size: 14px;">
                    <span style=" margin: 0 0.3em 0 0.3em;">ถึง</span>
                    <input placeholder="ใส่ราคาสูงสุด" v-model="max" type="number" style="margin-top: 0.5em; width: 40%; font-size: 14px;">
                    <p style="margin-top: 0.4em; text-align: center;" id="demo"></p>
                    <button type="submit" class="btn btn-success" style=" width: 30%" @click="submit_product()">ยืนยัน</button>
                    <!-- <div v-if="(parseInt(min) <= parseInt(max) && min != 'undefined' && max != 'undefined')">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/search/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div>
                    <div v-else-if="min != 'undefined' && max == 'undefined'">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/search/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div>
                    <div v-else-if="min == 'undefined' && max != 'undefined'">
                        <nuxt-link class="btn btn-success" style="margin-top: 0.4em; width: 30%" :to="{ path: `/search/page/1`, query: { keyword : keyword, brand: brand, min: min, max: max}}">
                            ยืนยัน
                        </nuxt-link>
                    </div> -->
                </li>
                </b-collapse>
                </li>
            </ul>
        </b-col>
        <b-col cols="" style="display: flex; flex-wrap: wrap; margin: 0 -2em 0 0">
            <b-col class="card-product" cols="3" v-for="search_product in search_products" :key="search_product.product_code">
                <nuxt-link :to="{ path: `/product/${search_product.product_code}` }" style="text-decoration: none !important">
                    <div v-if="search_product.product_image">
                        <b-card-img :src="`http://54.254.134.236:6201/${search_product.product_image}`" width="100%" height="220px" alt="Image" class="rounded-0"></b-card-img>
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
                            {{ search_product.product_name }}
                        </div>
                    </div>
                    <div class="product-price">฿{{ search_product.product_price }}</div>
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
            <div style="margin-top: 1em;
                      justify-content: center;
                      list-style-type: none;
                      width: 100%;
                      display: flex;
                      padding: 1em 1em;
                      border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                      border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                      border-right: 0px solid rgba(0, 0, 0, 0.14) !important;

            " v-for="count in counts" :key="count">
                <div v-if="count.product_count == 0" style="
                                  margin-top: 1em;
                                  margin-bottom: 10em;
                                  text-align: center;
                                  ">
                    <p>ไม่พบสินค้า</p>
                    <button type="submit" class="btn btn-success" @click="reset_data()">กลับไปหน้ารายการสินค้า</button>
                </div>
                <div v-if="count.product_count < 1 && count.product_count > 0 && count.product_count != 0 && Math.round(count.product_count) != 1 ">
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: right;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: right;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 2}}</nuxt-link>
                        </li>

                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div v-if="Math.round(count.product_count) == 5 ">
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 4}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 4}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages-1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -4}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-4}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages-2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div v-if="Math.round(count.product_count) > 5 ">
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
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 4}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 4}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages-1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -4}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-4}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -3}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-3}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages-2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages - 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages - 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <button class="btn btn-light" style="float: left; color: #333;" disbled>
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
                            </button>
                        </li>
                    </ul>
                    <ul v-if="pages > 3 && pages != Math.round(count.product_count)-2 && pages != Math.round(count.product_count)-1 && pages != Math.round(count.product_count)" style="margin-top: 1em;
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
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
                            </nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages-1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <button class="btn btn-primary" style="background-color: #39b54a; color: #fff; margin-left: 4.335%; margin-right: 4.335%;" disbled>{{pages}}</button>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 1}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0.5em 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/search/page/${pages + 2}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">{{pages + 2}}</nuxt-link>
                        </li>
                        <li style="margin: 0 0 0 0.5em;">
                            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/search/page/${pages + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
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
        const keyword = params.id;
        const search_products = await $productService.product.getProductSearchByCode({
            search_page: 1,
            search_keyword: encodeURIComponent(params.id),
            search_page_brand: brand,
            search_page_min: min,
            search_page_max: max
        });
        const categorys = await $productService.product.getProductCategoryBy();
        const brands = await $productService.product.getProductBandBy();
        const tenPosts = await $content()
            .only(['author', 'createdAt', 'description', 'path', 'title'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .fetch();
        const counts = await $productService.product.getProductCount({
            count_keyword: encodeURIComponent(keyword),
            count_brand: brand,
            count_min: min,
            count_max: max
        });
        // const ceend = encodeURIComponent(params.id);
        // console.log("counts", counts.data);
        // console.log("params.id", decodeURIComponent(ceend));
        const nextPage = tenPosts.length === 10;
        const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
        return {
            search_products: search_products.data ? search_products.data : [],
            categorys: categorys.data ? categorys.data : [],
            brands: brands.data ? brands.data : [],
            counts: counts.data ? counts.data : [],
            nextPage,
            posts,
            pages: 1,
            keyword,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        check() {
            // console.log("this.checkedNames",this.checkedNames);
            if (this.min == '') {
                this.min = 'undefined';
            }
            if (this.max == '') {
                this.max = 'undefined';
            }
            if (this.checkedNames == '') {
                this.checkedNames = 'undefined';
            }
            if (this.keyword == '') {
                this.keyword = 'undefined';
            }
            return this.$router.push({
                    path: `/search/page/1`,
                    query: {
                        keyword: this.keyword,
                        brand: this.checkedNames,
                        min: this.min,
                        max: this.max
                    },
                },
                () => {
                    this.$router.app.refresh()
                }
            );
        },
        reset_brand() {
            if (this.min == '') {
                this.min = 'undefined';
            }
            if (this.max == '') {
                this.max = 'undefined';
            }
            if (this.checkedNames == '') {
                this.checkedNames = 'undefined';
            }
            if (this.keyword == '') {
                this.keyword = 'undefined';
            }
            return this.$router.push({
                    path: `/search/page/1`,
                    query: {
                        keyword: this.keyword,
                        brand: this.checkedNames,
                        min: this.min,
                        max: this.max
                    },
                },
                () => {
                    // this.$router.app.refresh()
                    window.location.reload(true)
                }
            );
        },
        submit_product() {
            if (this.min <= this.max || (this.min == '' && this.max != '') || (this.min != '' && this.max == '')) {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.brand == '') {
                    this.brand = 'undefined';
                }
                if (this.keyword == '') {
                    this.keyword = 'undefined';
                }
                return this.$router.push({
                        path: `/search/page/1`,
                        query: {
                            keyword: this.keyword,
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
                document.getElementById("demo").innerHTML = "ใส่จำนวนเงิน น้อยสุด และ มากสุด !";

            }
        },
        reset_data() {
            return this.$router.push({
                    path: `/product/page/1`,
                },
                () => {
                    window.location.reload(true)
                    // this.$router.app.refresh()
                }
            );
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
            checkedNames: [],
            keyword: 'undefined',
            min: 'undefined',
            max: 'undefined',
            brand: 'undefined',
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
