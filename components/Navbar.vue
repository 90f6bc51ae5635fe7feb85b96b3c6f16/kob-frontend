<template>
<div class="font-navbar">
    <fixed-header>
        <div class="fix-navbar">
            <b-container fluid="lg" style="padding-left: 0; padding-right: 0; padding-top: 20px; padding-bottom: 20px">
                <b-row style="margin: 0 0 0 0">
                    <b-input-group>

                        <b-img src="~/assets/Logo.png" alt="Image" class="rounded" style="margin-top: 2px; margin-right: 5em"></b-img>
                        <template #append>
                            <form :action="`/search/${keyword}`" style="margin-left: -1em;" method="post">
                                <div style="float: left;">
                                    <b-form-input style=" width: 470px; margin: 0 0 0 -2em; border-radius: 0;" type="text" placeholder="ค้นหา" v-model="keyword" pattern=".{1,}" required oninvalid="setCustomValidity(' ');" oninput="setCustomValidity('');"></b-form-input>
                                    <!-- <b-form-input style=" width: 470px; margin: 0 0 0 -2em;" type="text" placeholder="ค้นหา" v-model="keyword" ></b-form-input> -->
                                </div>
                                <div style="float: left;">
                                    <b-dropdown text="ชื่อสินค้า" right variant="outline-secondary" disabled>
                                        <input type="radio" id="radio" value="ราคา" v-model="checkedNames" style="margin: 0 0 0 1em;">
                                        <label for="jack">ราคา</label>

                                        <input type="radio" id="radio" value="ชื่อ" v-model="checkedNames" style="margin: 0 0 0 1em;">
                                        <label for="john">ชื่อ</label>
                                    </b-dropdown>
                                </div>
                                <b-button type="submit" style="background-color: #ffd000;border-color: #ffd000; border-radius: 0;">
                                    <!-- <b-button type="submit" :disabled="keyword == ''" style="background-color: #ffd000;border-color: #ffd000;"> -->
                                    <font-awesome-icon :icon="['fas', 'search']" style="font-size: 12px" />
                                </b-button>
                            </form>

                            <div class="login-user">
                                <b-link href="/login" style="color: #8d8d8d" disabled>ล็อคอิน</b-link>
                                /
                                <b-link href="/register" style="color: #8d8d8d" disabled>สมัครสมาชิค</b-link>
                            </div>
                            <div style="margin: -10px 0 -10px 0">
                                <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" style="
                  margin: 9.59px 0 0 0;
                  height: 40px;
                  width: ;
                  border: 1px solid #ccc;
                  border-radius: 3px;
                " no-caret disabled>
                                    <template #button-content style="height: 20px; width: 20px">
                                        <font-awesome-icon :icon="['fas', 'lock']" style="height: 15px; width: 15px; margin: -1px 0 9px 0" />
                                    </template>
                                    <b-dropdown-text style="width: 400px">
                                        <div style="">
                                            <button class="close" aria-label="Close"></button>
                                        </div>
                                        <div class="manu-shop" style="height: 100px">
                                            <div style="float: left">
                                                <img style="width: 100px; height: 100px" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                                            </div>
                                            <div style="text-align: left; padding-top: 1em">
                                                <div class="text-overflow">Halogen Room Handwear</div>
                                                <div class="text-overflow">$125.00<span> X2</span></div>
                                            </div>
                                        </div>
                                    </b-dropdown-text>
                                    <b-dropdown-text style="width: 400px">
                                        <div style="">
                                            <button class="close" aria-label="Close"></button>
                                        </div>
                                        <div class="manu-shop" style="height: 100px">
                                            <div style="float: left">
                                                <img style="width: 100px; height: 100px" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                                            </div>
                                            <div style="text-align: left; padding-top: 1em">
                                                <div class="text-overflow">Shaving Cream, 100 gm</div>
                                                <div class="text-overflow">$75.00<span> X1</span></div>
                                            </div>
                                        </div>
                                    </b-dropdown-text>
                                    <b-dropdown-text style="width: 400px">
                                        <div class="">
                                            <div style="float: left">ORDER TOTAL</div>
                                            <div style="text-align: right">$350</div>
                                        </div>
                                    </b-dropdown-text>
                                    <b-dropdown-text style="width: 400px">
                                        <div class="">
                                            <div style="float: left; width: 45%">
                                                <b-button variant="primary" style="width: 100%">VIEW CART</b-button>
                                            </div>
                                            <div style="float: right; width: 45%">
                                                <b-button variant="light" style="border: 1px solid #e4e4e4; width: 100%">CHECKOUT</b-button>
                                            </div>
                                        </div>
                                    </b-dropdown-text>
                                </b-dropdown>
                            </div>
                            <div style="float: right; z-index: 9999999 !important;">
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
                            </div>
                        </template>
                    </b-input-group>
                </b-row>
            </b-container>

            <b-navbar toggleable="lg" type="dark" variant="info" style="padding: 0px">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-container fluid="lg">
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item style="background-color: #ffd000; margin: auto 0 auto -15px">
                                <a v-b-toggle href="#example-collapse" @click.prevent @click="scrollToTop()" style="color: #000; text-decoration: none">
                                    <!-- <a v-b-toggle href="#example-collapse" @click="scrollToTop()" style="color: #000; text-decoration: none"> -->
                                    <b-form inline style="margin: auto -0.9em auto 0.5em">
                                        <div style="font-size: 13pt; color: #222222">รายการสินค้า</div>
                                        <b-input-group-text style="
                      background-color: transparent;
                      border-color: transparent;
                      padding-left: 8em;
                      color: #333;
                      margin-right: 0.8em;
                      margin-left: -1em;
                    " v-b-toggle.sidebar-1>
                                            <font-awesome-icon :icon="['fas', 'bars']" style="color: #000" />
                                        </b-input-group-text>
                                    </b-form>
                                </a>
                            </b-nav-item>
                            <a class="navbar-manu" style="" href="/">หน้าหลัก</a>
                            <a class="navbar-manu" style="" href="/product">รายการสินค้า</a>
                            <a class="navbar-manu" style="" href="/">เกี่ยวกับเรา</a>
                            <a class="navbar-manu" style="" href="/howtoorder">วิธีการสั่งซื้อ</a>
                            <a class="navbar-manu" style="" href="/contact">ติดต่อเรา</a>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto" style="margin: 0 -2em 0 0; color: #fff; font-size: 12pt">
                            โทรศัพท์ :
                            <span style="
                background-color: #ffd000;
                width: 110px;
                color: #333333;
                margin: 0 0 0 0.5em;
                text-align: center;
              ">
                                <div style="margin: 0 2.5px 0 2.5px; font-size: 12pt">099-461-9241</div>
                            </span>
                        </b-navbar-nav>
                    </b-collapse>
                </b-container>
            </b-navbar>
        </div>
    </fixed-header>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
import FixedHeader from 'vue-fixed-header';
export default {
    data() {
        return {
            showNav: false,
            value: '',
            checkedNames: [],
            keyword: '',
        };
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push("/login");
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    computed: {
        ...mapState("auth", ["loggedIn"]),
    },
    components: {
        FixedHeader
    },
};
</script>

import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

<style scoped>
a {
    font-family: "Kanit";
}

.bg-info {
    background-color: #39b54a !important;
}

.login-user {
    margin-top: 7px;
    margin-bottom: 0;
    margin-right: 10px;
    margin-left: 40px;
}

.navbar-manu {
    font-size: 12pt;
    color: #fff;
    margin: 0.6em 0 0 40px;
    text-decoration: none;
    /* padding-left: 2em;
    padding-top: 0.3em; */
}

.font-navbar {
    font-family: "Kanit", sans-serif;
}

.manu-shop {
    /* padding-top: 1em; */
    /* font-family: "Kanit"; */
    /* font-size: 1em; */
    /* font-weight: 60%; */
    border-bottom: 1px solid #e4e4e4;
    /* padding-bottom: 20px; */
}

.manu-ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    /* border: 1px solid #adadad; */
}

.close {
    float: left !important;
    vertical-align: middle;
    color: inherit;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    width: 20px;
    height: 20px;
    opacity: 1;
    border: 1px solid rgba(128, 128, 128, 0.5);
    margin: 0 -3em 0 0 !important;
}

.close:focus,
.close:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.5);
    color: #fff;
}

.close:active {
    background: rgba(128, 128, 128, 0.9);
}

/* tines of the X */
.close::before,
.close::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 10px;
    width: 1px;
    background-color: currentColor;
}

.close::before {
    transform: translate(-50%, -50%) rotate(45deg);
}

.close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.text-overflow {
    white-space: nowrap;
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fix-navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999999 !important;
    background-color: #fff;
}

.manu-sidebar {

    position: fixed !important;
    font-size: 24px !important;
    width: 50px;
    margin-top: 20%;
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
