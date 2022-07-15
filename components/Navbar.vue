<template>
<div class="font-navbar">
    <b-container fluid="lg" style="
        padding-left: 0;
        padding-right: 0;
        padding-top: 20px;
        padding-bottom: 20px;
      ">
        <b-row style="margin: 0 0 0 0;">
            <b-input-group>
                <b-img src="~/assets/Logo.png" alt="Image" class="rounded" style="margin-top: 2; margin-right: 30px"></b-img>
                <b-form-input style="height: 100%;"></b-form-input>

                <template #append>
                    <b-dropdown text="หมวดหมู่สินค้า" variant="outline-secondary">
                        <b-dropdown-item>Action C</b-dropdown-item>
                        <b-dropdown-item>Action D</b-dropdown-item>
                    </b-dropdown>
                    <b-input-group-text style="background-color: #ffd000; margin-right: 30px;">
                        <font-awesome-icon :icon="['fas', 'search']" style="font-size: 12px" />
                    </b-input-group-text>
                    <div class="login-user">
                        <b-link href="/login" style="color: #8d8d8d;">ล็อคอิน</b-link>
                        /
                        <b-link href="/register" style="color: #8d8d8d;">สมัครสมาชิค</b-link>
                    </div>
                    <div style="margin: -10px 0 -10px 0;">
                        <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" style="margin: 9.59px 0 0 0; height: 40px; width: ; border:1px solid #ccc; border-radius: 3px; " no-caret>
                            <template #button-content style="height: 20px; width: 20px;">
                                <font-awesome-icon :icon="['fas', 'lock']" style="height: 15px; width: 15px; margin: -1px 0 9px 0;" />
                            </template>
                            <b-dropdown-text style="width: 400px;">
                                <div style="">
                                    <button class="close" aria-label="Close"></button>
                                </div>
                                <div class="manu-shop" style="height: 100px;">
                                    <div style="float: left;">
                                        <img style="width:100px; height:100px;" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="">
                                    </div>
                                    <div style="text-align: left; padding-top: 1em;">
                                        <p>Halogen Room Handwear</p>
                                        <p style="margin-top: -1em;">$125.00<span> X2</span></p>
                                    </div>
                                </div>
                            </b-dropdown-text>
                            <b-dropdown-text style="width: 400px;">
                                <div style="">
                                    <button class="close" aria-label="Close"></button>
                                </div>
                                <div class="manu-shop" style="height: 100px;">
                                    <div style="float: left;">
                                        <img style="width:100px; height:100px;" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="">
                                    </div>
                                    <div style="text-align: left; padding-top: 1em;">
                                        <p>Shaving Cream, 100 gm</p>
                                        <p style="margin-top: -1em;">$75.00<span> X1</span></p>
                                    </div>
                                </div>
                            </b-dropdown-text>
                            <b-dropdown-text style="width: 400px;">
                                <div class="">
                                    <div style="float: left;">
                                        ORDER TOTAL
                                    </div>
                                    <div style="text-align: right;">
                                        $350
                                    </div>
                                </div>
                            </b-dropdown-text>
                            <b-dropdown-text style="width: 400px;">
                                <div class="">
                                    <div style="float: left; width: 45%;">
                                        <b-button variant="primary" style="width: 100%;">VIEW CART</b-button>
                                    </div>
                                    <div style="float: right; width: 45%;">
                                        <b-button variant="light" style="border: 1px solid #e4e4e4; width: 100%;">CHECKOUT</b-button>
                                    </div>
                                </div>
                            </b-dropdown-text>
                        </b-dropdown>
                    </div>
                </template>
            </b-input-group>
        </b-row>
    </b-container>

    <b-navbar toggleable="lg" type="dark" variant="info" style="padding: 0px;">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-container fluid="lg">
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item style="background-color: #ffd000; margin: auto 0 auto -15px;">
                        <a v-b-toggle href="#example-collapse" @click.prevent style="color: #000; ">
                            <b-form inline style="margin: auto -0.5em auto 0.5em;">
                                รายการสินค้า
                                <b-input-group-text style="
                      background-color: transparent;
                      border-color: transparent;
                      padding-left: 8em;
                      color: #333;
                    " v-b-toggle.sidebar-1>
                                    <font-awesome-icon :icon="['fas', 'bars']" style="color: #000" />
                                </b-input-group-text>
                            </b-form>
                        </a>
                    </b-nav-item>
                    <b-nav-item class="navbar-manu" style="" href="/home">หน้าหลัก</b-nav-item>
                    <b-nav-item class="navbar-manu" style="" href="/product">รายการสินค้า</b-nav-item>
                    <b-nav-item class="navbar-manu" style="" href="/home">เกี่ยวกับเรา</b-nav-item>
                    <b-nav-item class="navbar-manu" style="" href="/home">วิธีการสั่งซื้อ</b-nav-item>
                    <b-nav-item class="navbar-manu" style="" href="/about">ติดต่อเรา</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" style="margin: 0 -15px 0 0;"> โทรศัพท์ : <span style="background-color: #ffd000;width:110px; color: black; margin: auto -1em auto 0.4em; text-align:center;">098-777-7899</span>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    data() {
        return {
            showNav: false,
        };
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push("/login");
        },
    },
    computed: {
        ...mapState("auth", ["loggedIn"]),
    },
};
</script>

import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

<style scoped>
.navbar-dark {
    color: #fff;
}

a {
    font-family: "Kanit";
}

.bg-info {
    background-color: #39b54a !important;
}

.login-user {
    margin-top: 7px;
    margin-bottom: px;
    margin-right: 10px;
    margin-left: 20px;
}

.navbar-manu {
    color: #fff;
    margin: 4px 0 0 30px;
    /* padding-left: 2em;
    padding-top: 0.3em; */
}

.font-navbar {
    font-family: 'Kanit', sans-serif;
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
</style>
