<template>
  <div>
    <b-container
      fluid="lg"
      style="
        margin-top: 80px;
        padding-left: 0;
        padding-right: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        border-top: 1px solid #e5e7eb;
      "
    >
      <b-row>
        <b-col
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
        >
          <b-img
            src="~/assets/free_shipping.png"
            alt="Image"
            style="margin: 5px; width: 50px"
          ></b-img>
          <div style="display: flex; justify-content: center; font-weight: 500">
            FREE SHIPPING
          </div>
          <div style="text-align: center">
            Free Shipping on World wide Order Over $99.
          </div>
        </b-col>
        <b-col
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
        >
          <b-img
            src="~/assets/trust_pay.png"
            alt="Image"
            style="margin: 5px; width: 40px; height: 48px"
          ></b-img>
          <div style="display: flex; justify-content: center; font-weight: 500">
            FREE SHIPPING
          </div>
          <div style="text-align: center">
            Free Shipping on World wide Order Over $99.
          </div>
        </b-col>
        <b-col
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
        >
          <b-img
            src="~/assets/secured_payment.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <div style="display: flex; justify-content: center; font-weight: 500">
            FREE SHIPPING
          </div>
          <div style="text-align: center">
            Free Shipping on World wide Order Over $99.
          </div>
        </b-col>
        <b-col
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
        >
          <b-img
            src="~/assets/shop_on_app.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <div style="display: flex; justify-content: center; font-weight: 500">
            FREE SHIPPING
          </div>
          <div style="text-align: center">
            Free Shipping on World wide Order Over $99.
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container
        fluid="lg"
        style="text-align: center; justify-content: center; font-weight: 500"
      >
        <b-row>
          KEEP IN TOUCH
          <b-img
            src="~/assets/Twiter.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <b-img src="~/assets/Fb.png" alt="Image" style="margin: 5px"></b-img>
          <b-img
            src="~/assets/Instagram.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <b-img
            src="~/assets/Pinterest.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
          <b-img
            src="~/assets/Vimeo.png"
            alt="Image"
            style="margin: 5px"
          ></b-img>
        </b-row>
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