<template>
    <div class="font-navbar">
        <fixed-header>
            <div class="fix-navbar">
                <b-container fluid="lg"
                    style="padding-left: 0; padding-right: 0; padding-top: 20px; padding-bottom: 20px">
                    <b-row style="margin: 0 0 0 0">
                        <b-input-group>
                            <b-img src="~/assets/Logo.png" alt="Image" class="rounded"
                                style="margin-top: 2px; margin-right: 4em"></b-img>
                            <template #append>
                                <form :action="`/search/${keyword}`" style="margin-left: -1em;" method="post">
                                    <div style="float: left;">
                                        <b-form-input style=" width: 445px; margin: 0 0 0 -2em; border-radius: 0;"
                                            type="text" placeholder="ค้นหา" v-model="keyword" pattern=".{1,}" required
                                            oninvalid="setCustomValidity(' ');" oninput="setCustomValidity('');">
                                        </b-form-input>
                                        <!-- <b-form-input style=" width: 470px; margin: 0 0 0 -2em;" type="text" placeholder="ค้นหา" v-model="keyword" ></b-form-input> -->
                                    </div>
                                    <div style="float: left;">
                                        <b-dropdown text="ชื่อสินค้า" right variant="outline-secondary" disabled>
                                            <input type="radio" id="radio" value="ราคา" v-model="checkedNames"
                                                style="margin: 0 0 0 1em;">
                                            <label for="jack">ราคา</label>

                                            <input type="radio" id="radio" value="ชื่อ" v-model="checkedNames"
                                                style="margin: 0 0 0 1em;">
                                            <label for="john">ชื่อ</label>
                                        </b-dropdown>
                                    </div>
                                    <b-button type="submit"
                                        style="background-color: #ffd000;border-color: #ffd000; border-radius: 0;">
                                        <font-awesome-icon :icon="['fas', 'search']" style="font-size: 12px" />
                                    </b-button>
                                </form>

                                <div v-if="loggedIn" style="margin: 0 1em 0 6.9em;">
                                    <button type="button" class="btn btn-danger" @click="logout">
                                        <strong>Log Out</strong>
                                    </button>
                                </div>
                                <div class="login-user" v-else>
                                    <b-link href="/login" style="color: #8d8d8d">ล็อคอิน</b-link>
                                    /
                                    <b-link href="/register" style="color: #8d8d8d">สมัครสมาชิค</b-link>
                                </div>
                                <div style="margin: -10px 0 -10px 0;">
                                    <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none"
                                        style="
                                    margin: 9.59px 0 0 0;
                                    height: 38px;
                                    width: ;
                                    border: 1px solid #ccc;
                                    border-radius: 3px;
                                  " no-caret>
                                        <template #button-content style="height: 20px; width: 20px">
                                            <span v-if="dataValue" class="show_shop" aria-label="Close">{{
                                                count_shop
                                            }}</span>
                                            <font-awesome-icon :icon="['fas', 'lock']"
                                                style="height: 15px; width: 15px; margin: -1px 0 9px 0" />
                                        </template>
                                        <div v-if="dataValue != 0">
                                            <div style="max-height: 430px; overflow: auto">
                                                <b-dropdown-text style="width: 400px;"
                                                    v-for="(product, index) in dataValue" :key="'product' + index">
                                                    <div style="">
                                                        <button class="close" aria-label="Close"
                                                            @click="removeFromCart(product)"></button>
                                                    </div>
                                                    <div class="manu-shop" style="height: 100px">
                                                        <div style="float: left">
                                                            <div v-if="product.product_image"
                                                                style="border: .5px solid grey;">
                                                                <img style="width: 100px; height: 90px"
                                                                    :src="`http://141.98.19.44:6201/${product.product_image}`"
                                                                    alt="" />
                                                            </div>
                                                            <div v-else style="border: .5px solid grey;">
                                                                <svg class="" width="100px" height="90px" role="img"
                                                                    aria-label="Placeholder: Kob Giftshop"
                                                                    preserveAspectRatio="xMidYMid slice"
                                                                    focusable="false">
                                                                    <title></title>
                                                                    <rect width="100%" height="100%" fill="#55595c">
                                                                    </rect>
                                                                    <text x="3%" y="50%" style="font-size: 12pt;"
                                                                        fill="#eceeef" dy=".3em">Kob Giftshop</text>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div
                                                            style="text-align: left; padding-top: 1em; margin: 0 0 0 120px;">
                                                            <div class="text-overflow">{{ product.product_name }}</div>
                                                            <div class="text-overflow">฿{{
                                                                product.product_price
                                                            }}<span>
                                                                    X {{ product.amount }}</span></div>
                                                        </div>
                                                    </div>
                                                </b-dropdown-text>
                                            </div>
                                            <b-dropdown-text style="width: 400px">
                                                <div class="">
                                                    <div style="float: left">ORDER TOTAL</div>
                                                    <div style="text-align: right">฿{{ Sum }}</div>
                                                </div>
                                            </b-dropdown-text>
                                            <b-dropdown-text style="width: 400px">
                                                <div class="">
                                                    <div style="float: left; width: 45%">
                                                        <a type="button" class="btn btn-primary" href="/order"
                                                            style="width: 100%">การสั่งซื้อสินค้า</a>
                                                    </div>
                                                    <div style="float: right; width: 45%">
                                                        <a type="button" class="btn btn-primary" href="/cart"
                                                            style="width: 100%">ตะกร้าสินค้า</a>
                                                    </div>
                                                </div>
                                                <div class="" style="padding-top:20px;">

                                                    <div style="float: left; width: 100%;padding-top:20px;">
                                                        <a type="button" class="btn btn-primary" href="/profile"
                                                            style="width: 100%">ข้อมูลสมาชิก</a>
                                                    </div>
                                                </div>
                                            </b-dropdown-text>
                                        </div>
                                        <div v-if="dataValue == 0">
                                            <b-dropdown-text style="width: 400px">
                                                <div
                                                    style="text-align: center; padding-top: 30px; padding-bottom: 30px;">
                                                    กรุณาเลือกซื้อสินค้า
                                                </div>
                                                <div style="float: left; width: 45%">
                                                    <a type="button" class="btn btn-primary" href="/order"
                                                        style="width: 100%">การสั่งซื้อสินค้า</a>
                                                </div>
                                                <div style="float: right; width: 45%">
                                                    <a type="button" class="btn btn-primary" href="/cart"
                                                        style="width: 100%">ตะกร้าสินค้า</a>
                                                </div>
                                                <div class="" style="padding-top:20px;">

                                                    <div style="float: left; width: 100%;padding-top:20px;">
                                                        <a type="button" class="btn btn-primary" href="/profile"
                                                            style="width: 100%">MY ACCOUNT</a>
                                                    </div>
                                                </div>
                                            </b-dropdown-text>
                                        </div>
                                    </b-dropdown>
                                </div>
                                <div style="float: right; z-index: 9999999 !important;">
                                    <div class="manu-sidebar">
                                        <a href="https://www.facebook.com/kobgiftshop" target="_blank" class=""
                                            style="text-decoration: none !important;" id="tooltip-target-1">
                                            <div class="manu-sidebar-a">
                                                <img src="~/assets/Fbb.png" style="width: 50px; height: 50px;"
                                                    alt="facebook">
                                            </div>
                                            <b-tooltip target="tooltip-target-1" triggers="hover" placement="left"
                                                variant="primary">
                                                <h5>เฟสบุ๊ค</h5>
                                            </b-tooltip>
                                        </a>
                                        <a href="tel:0994619241" class="" style="text-decoration: none !important;"
                                            id="tooltip-target-2">
                                            <div class="manu-sidebar-a">
                                                <img src="~/assets/tel.png"
                                                    style="width: 45px; height: 45px; margin: 0 0 0 ;" alt="tel">
                                            </div>
                                            <b-tooltip target="tooltip-target-2" triggers="hover" placement="left"
                                                variant="success">
                                                <h5>เบอร์โทรศัพท์</h5>
                                            </b-tooltip>
                                        </a>
                                        <a href="https://www.google.com/maps/dir//%E0%B8%81%E0%B8%9A%E0%B8%81%E0%B8%B4%E0%B9%8A%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2+121+Jant+Rd+Tambon+Nai+Mueang,+Mueang+Nakhon+Ratchasima+District+Nakhon+Ratchasima+30000/@14.9782908,102.087612,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31194ca4b81e8aad:0x3b5d3e95ddf93832"
                                            target="_blank" class="" style="text-decoration: none !important;"
                                            id="tooltip-target-3">
                                            <div class="manu-sidebar-a">
                                                <img src="~/assets/map.png" style="width: 50px; height: 50px;"
                                                    alt="map">
                                            </div>
                                            <b-tooltip target="tooltip-target-3" triggers="hover" placement="left"
                                                variant="danger">
                                                <h5>แผนที่ร้าน</h5>
                                            </b-tooltip>
                                        </a>
                                        <a href="/contact" target="_blank" class=""
                                            style="text-decoration: none !important;" id="tooltip-target-4">
                                            <div class="manu-sidebar-a">
                                                <img src="~/assets/contact.png" style="width: 50px; height: 50px;"
                                                    alt="contact">
                                            </div>
                                            <b-tooltip target="tooltip-target-4" triggers="hover" placement="left"
                                                variant="warning">
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
                                    <a v-b-toggle href="#example-collapse" @click.prevent @click="scrollToTop()"
                                        style="color: #000; text-decoration: none">
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
    props: ['modelValue'],
    data() {
        return {
            showNav: false,
            value: '',
            checkedNames: [],
            dataValue: [],
            keyword: '',
            Sum: 0,
            count_shop: 0,
        };
    },
    watch: {
        modelValue: {
            deep: true,
            handler(newValue) {
                this.count_shop = 0;
                this.Sum = 0;
                localStorage.setItem('shoppingCart', JSON.stringify(newValue));
                this.dataValue = newValue;
                this.dataValue.forEach((element, index) => {
                    this.Sum += element.product_price * element.amount;
                    this.count_shop = index + 1;
                });
                this.refresh()
            },
        },
    },
    mounted() {
        this.dataValue = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
        console.log('this.dataValue', this.dataValue);
        this.dataValue.forEach((element, index) => {
            this.Sum += element.product_price * element.amount;
            this.count_shop = index + 1;
        });
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push("/login");
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        removeFromCart(product) {
            this.$swal.fire({
                title: 'คุณแน่ใจไหม ?',
                text: "คุณจะไม่สามารถย้อนกลับได้ !",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.value == true) {
                    this.$swal.fire({
                        title: 'success',
                        text: "ลบสำเร็จ",
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    }).then((e) => {
                        if (e.dismiss == 'timer') {
                            const shoppingCart = this.dataValue;
                            const productIndex = shoppingCart.findIndex(item => item.product_code === product.product_code);
                            shoppingCart.splice(productIndex, 1);
                            this.dataValue = shoppingCart;
                            this.Sum = 0;
                            this.dataValue.forEach(element => {
                                this.Sum += element.product_price * element.amount;
                            });
                            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
                            this.$emit('update:modelValue', shoppingCart)
                            window.location.reload(true);
                        }
                    })
                }
            })
        }
    },
    components: {
        FixedHeader
    },
    computed: {
        ...mapState("auth", ["loggedIn"]),
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
    margin-right: 28px;
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

.show_shop {
    float: right !important;
    color: inherit;
    border-radius: 50%;
    background-color: #fff;
    margin: -.4em 0 0 .1em !important;
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

/*
.text-overflow {
    white-space: nowrap;
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
} */

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

.tooltip .tooltip-inner {
    max-width: 500px !important;
    width: 400px !important;
}
</style>
