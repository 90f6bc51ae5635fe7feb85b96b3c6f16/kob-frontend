<template>
<div>
    <b-container fluid="lg" style="
        margin-top: 80px;
        padding-left: 0;
        padding-right: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        border-top: 1px solid #e5e7eb;
      ">
        <b-row>
            <b-col style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          ">
                <b-img src="~/assets/free_shipping.png" alt="Image" style="margin: 5px; width: 50px"></b-img>
                <div style="display: flex; justify-content: center; font-weight: 500">
                    FREE SHIPPING
                </div>
                <div style="text-align: center">
                    Free Shipping on World wide Order Over $99.
                </div>
            </b-col>
            <b-col style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-left:1px solid #c0c0c0;
            border-right:1px solid #c0c0c0;
          ">
                <b-img src="~/assets/trust_pay.png" alt="Image" style="margin: 5px; width: 40px; height: 48px"></b-img>
                <div style="display: flex; justify-content: center; font-weight: 500">
                    FREE SHIPPING
                </div>
                <div style="text-align: center">
                    Free Shipping on World wide Order Over $99.
                </div>
            </b-col>
            <b-col style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-right:1px solid #c0c0c0;
          ">
                <b-img src="~/assets/secured_payment.png" alt="Image" style="margin: 5px"></b-img>
                <div style="display: flex; justify-content: center; font-weight: 500">
                    FREE SHIPPING
                </div>
                <div style="text-align: center">
                    Free Shipping on World wide Order Over $99.
                </div>
            </b-col>
            <b-col style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          ">
                <b-img src="~/assets/shop_on_app.png" alt="Image" style="margin: 5px"></b-img>
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
        <b-container fluid="lg" style="margin: auto; justify-content: center; font-weight: 500">
            <b-row>
                <p style="font-size: 14px; margin: auto 1em auto auto;">KEEP IN TOUCH</p>
                <b-img src="~/assets/Twiter.png" alt="Image" style="margin: 5px"></b-img>
                <b-img src="~/assets/Fb.png" alt="Image" style="margin: 5px"></b-img>
                <b-img src="~/assets/Instagram.png" alt="Image" style="margin: 5px"></b-img>
                <b-img src="~/assets/Pinterest.png" alt="Image" style="margin: 5px"></b-img>
                <b-img src="~/assets/Vimeo.png" alt="Image" style="margin: 5px"></b-img>
            </b-row>
        </b-container>
    </b-navbar>

    <b-container fluid="lg" style="
        margin-top: 20px;
        padding-left: 0;
        padding-right: 0;
        padding-top: 30px;
        padding-bottom: 20px;
      ">
        <b-row>
            <b-col cols="4" style="
            display: flex;
            justify-content: left;
            flex-direction: column;
            align-items: flex-start;
          ">
                <b-img src="~/assets/Logo.png" alt="Image" style="margin: 5px"></b-img>
                <div style="display: flex; justify-content: left; padding-top: 20px">
                    Many say exploration is part of our dest but it’s actually our duty
                    to future and their.
                </div>
                <div style="display: flex; justify-content: left; padding-top: 10px">
                    Address: 868 Fake Street, New York
                </div>
                <div style="display: flex; justify-content: left; padding-top: 10px">
                    Phone: (08) 08 4752 1499
                </div>
                <div style="display: flex; justify-content: left; padding-top: 10px">
                    Email: info@supermart.com
                </div>
            </b-col>
            <b-col cols="2" style="
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
          ">
                <div style="
              display: flex;
              justify-content: left;
              font-weight: 500;
              min-height: 70px;
              align-items: center;
            ">
                    COMPANY
                </div>
                <div style="">Discount Vouches</div>
                <div style="">Spring Collection</div>
                <div style="">Trending</div>
                <div style="">Best Sellers</div>
                <div style="">Special Deals</div>
            </b-col>
            <b-col cols="2" style="
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
          ">
                <div style="
              display: flex;
              justify-content: left;
              font-weight: 500;

              min-height: 70px;
              align-items: center;
            ">
                    POLICY INFO
                </div>
                <div style="">Orders & Returns</div>
                <div style="">Help & FAQs</div>
                <div style="">Store Locations</div>
            </b-col>
            <b-col cols="2" style="
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
          ">
                <div style="
              display: flex;
              justify-content: flex-start;
              font-weight: 500;

              min-height: 70px;
              align-items: center;
            ">
                    MY ACCOUNT
                </div>
                <div style="">About Us</div>
                <div style="">Delivery Information</div>
                <div style="">Privacy Policy</div>
                <div style="">Terms & Conditions</div>
            </b-col>
        </b-row>
    </b-container>
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
