<template>
  <div>
    <b-container
      fluid="lg"
      style="
        padding-left: 0;
        padding-right: 0;
        padding-top: 20px;
        padding-bottom: 20px;
      "
    >
      <b-row>
        <b-input-group>
          <b-img
            src="~/assets/Logo.png"
            alt="Image"
            class="rounded"
            style="margin-top: 2; margin-right: 30px"
          ></b-img>
          <b-form-input></b-form-input>

          <template #append>
            <b-dropdown text="หมวดหมู่สินค้า" variant="outline-secondary">
              <b-dropdown-item>Action C</b-dropdown-item>
              <b-dropdown-item>Action D</b-dropdown-item>
            </b-dropdown>
            <b-input-group-text
              style="background-color: #ffd200; margin-right: 30px"
            >
              <font-awesome-icon :icon="['fas', 'search']" />
            </b-input-group-text>
            <b-link href="#foo" style="color: #8d8d8d">ล็อคอิน</b-link> /
            <b-link href="#foo" style="color: #8d8d8d; margin-right: 10px"
              >สมัครสมาชิค</b-link
            >
            <b-input-group-text style="background-color: #fff">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-row>
    </b-container>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container fluid="lg">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <a
                v-b-toggle
                href="#example-collapse"
                @click.prevent
                style="color: #000"
              >
                <b-form inline>
                  รายการสินค้า
                  <b-input-group-text
                    style="
                      background-color: transparent;
                      border-color: transparent;
                      padding-left: 10em;
                      color: #000;
                    "
                    v-b-toggle.sidebar-1
                  >
                    <font-awesome-icon
                      :icon="['fas', 'bars']"
                      style="color: #000"
                    />
                  </b-input-group-text>
                </b-form>
              </a>
            </b-nav-item>
            <b-nav-item style="color: #fff" href="/home">หน้าหลัก</b-nav-item>
            <b-nav-item style="color: #fff" href="/product"
              >รายการสินค้า</b-nav-item
            >
            <b-nav-item style="color: #fff" href="/home"
              >เกี่ยวกับเรา</b-nav-item
            >
            <b-nav-item style="color: #fff" href="/home"
              >วิธีการสั่งซื้อ</b-nav-item
            >
            <b-nav-item style="color: #fff" href="/home"
              >ติดต่อเรา</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"> โทรศัพท์ : 098-777-7899 </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
</style>