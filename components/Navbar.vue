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
                    <b-dropdown  text="หมวดหมู่สินค้า" variant="outline-secondary">
                        <b-dropdown-item>Action C</b-dropdown-item>
                        <b-dropdown-item>Action D</b-dropdown-item>
                    </b-dropdown>
                    <b-input-group-text style="background-color: #ffd000; margin-right: 30px;">
                        <font-awesome-icon :icon="['fas', 'search']" style="font-size: 12px" />
                    </b-input-group-text>
                    <div class="login-user">
                        <b-link href="#foo" style="color: #8d8d8d;">ล็อคอิน</b-link>
                        /
                        <b-link href="#foo" style="color: #8d8d8d;">สมัครสมาชิค</b-link>
                    </div>
                    <b-input-group-text style="background-color: #fff">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                    </b-input-group-text>
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
                    <b-nav-item class="navbar-manu" style="" href="/home">ติดต่อเรา</b-nav-item>
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
    margin-top: 5px;
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
.font-navbar{
  font-family: 'Kanit', sans-serif;
}
</style>
