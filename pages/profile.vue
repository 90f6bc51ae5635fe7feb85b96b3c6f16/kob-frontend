<template>
  <div>
    <!-- <div class="" style="margin: 0 -2em 0 -1em">
      <b-collapse
        id="example-collapse"
        style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto"
      >
        <div
          v-for="category in categorys"
          :key="category.product_category_code"
        >
          <ul>
            <li>
              <nuxt-link
                :to="{
                  path: `/product/category/${category.product_category_code}`,
                }"
              >
                {{ category.product_category_name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </b-collapse>
    </div> -->
    <b-row class="mt-3">
      <b-col class="title-product" style="font-size: 16pt">ข้อมูลผู้ใช้</b-col>
    </b-row>

    <hr class="mt-2" />

    <b-row class="content pb-3 pt-3">
      <b-col class="col-content">
        <b-row class="row-button">
          <ul class="my" style="">
            <li style="color: #777777; text-align: left">
              <nuxt-link :to="{ path: `/profile` }">
                <font-awesome-icon
                  :icon="['fas', 'circle-user']"
                  style="color: #000"
                />
                ข้อมูลผู้ใช้
              </nuxt-link>
            </li>
            <li style="color: #777777; text-align: left">
              <nuxt-link :to="{ path: `/address` }">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  style="color: #000"
                />
                ข้อมูลที่จัดส่ง
              </nuxt-link>
            </li>
            <li style="color: #777777; text-align: left">
              <nuxt-link :to="{ path: `/order` }">
                <font-awesome-icon
                  :icon="['fas', 'bag-shopping']"
                  style="color: #000"
                />
                การซื้อของฉัน
              </nuxt-link>
            </li>
          </ul>
        </b-row>
        <b-row class="row-content">
          <b-form class="form">
            <b-row class="row-form">
              <b-col class="col-form">
                <b-form-group
                  id="input-group-1"
                  label="ชื่อ:"
                  label-for="input-1"
                  description=""
                >
                  <b-form-input
                    id="input-1"
                    v-model="data.customer_name"
                    placeholder="ชื่อ"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-form">
                <b-form-group
                  id="input-group-1"
                  label="อีเมล์:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="data.customer_email"
                    type="email"
                    placeholder="อีเมล"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="row-form">
              <!-- <b-col class="col-form">
                                                                                <b-form-group id="input-group-2" label="BIRTH DATE:" label-for="input-2">
                                                                                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"
                                                                                        placeholder="วันเกิด"></b-form-datepicker>
                                                                                </b-form-group>
                                                                            </b-col> -->
            </b-row>
            <b-row class="row-form">
              <b-col class="col-form">
                <b-form-group
                  class="input-phone"
                  id="input-group-2"
                  label="เบอร์โทรศัพท์"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-1"
                    v-model="data.customer_phone"
                    type="email"
                    placeholder="เบอร์โทรศัพท์"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="row-form">
              <b-col class="col-form">
                <b-button
                  variant="success"
                  size="md"
                  style="padding-left: 40px; padding-right: 40px"
                  @click="updateCustomer()"
                  >Save</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      data: {
        customer_name: "",
        customer_full_name: "",
        customer_email: "",
        customer_phone: "",
        customer_code: "",
      },
      user: {},
      show: true,
    };
  },
  mounted() {
    this.user = this.$store.state.auth.user;

    this.data.customer_name = this.user.customer_name;
    this.data.customer_full_name = this.user.customer_full_name;
    this.data.customer_email = this.user.customer_email;
    this.data.customer_phone = this.user.customer_phone;
    this.data.customer_code = this.user.customer_code;
  },
  async asyncData({ $productService }) {
    const categorys = await $productService.product.getProductCategoryBy();
    return {
      categorys: categorys.data ? categorys.data : [],
    };
  },
  methods: {
    async updateCustomer() {
      try {
        await this.$axios
          .post(""+this.$config.BASE_ENDPOINT+"/api/member-update/", {
            customer_name: this.data.customer_name,
            customer_email: this.data.customer_email,
            customer_phone: this.data.customer_phone,
            customer_code: this.data.customer_code,
          })
          .then((response) => {
            console.log("true", response);
            if (response.data == "error") {
              // console.log("Email");
              this.$swal.fire({
                type: "error",
                title: "ไม่สามารถแก้ไขข้อมูล",
                text: "ไม่สามารถแก้ไขข้อมูล",
              });
              setTimeout(() => {
                this.$router.go();
              }, 2000);
            } else {
              // this.user.customer_name = this.data.customer_name
              // this.user.customer_email = this.data.customer_email
              // this.user.customer_phone = this.data.customer_phone
              // this.user.customer_code = this.data.customer_code
              const userToUpdate = { ...this.$auth.user };
              userToUpdate.customer_name = this.data.customer_name;
              userToUpdate.customer_email = this.data.customer_email;
              userToUpdate.customer_phone = this.data.customer_phone;
              this.$auth.setUser(userToUpdate);
              // this.$auth.fetchUser()
              this.$swal.fire({
                type: "success",
                title: "แก้ไขสำเร็จ",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.$router.go();
              }, 2000);
            }
          })
          .catch((error) => {
            console.log("err", error);
          });
      } catch (error) {
        // console.log("err");
        this.error = error;
      }
    },
  },
  // async asyncData({ $axios }) {
  //   $axios.setHeader('Authorization', null)
  //   const [user, repos] = await Promise.all([
  //     $axios.$get('https://api.github.com/users/warayutpetch'),
  //     $axios.$get(
  //       'https://api.github.com/users/warayutpetch/repos?sort=pushed&per_page=100'
  //     )
  //   ])
  //   return { user, repos }
  // }
};
</script>

<style scoped>
div {
  font-family: "Kanit", sans-serif;
}

.my {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  border: 1px solid #adadad;
  height: 124px;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li {
  text-align: center;
  border-bottom: 1px solid #adadad;
}

li:last-child {
  border-bottom: none;
}

li a.active {
  background-color: #04aa6d;
  color: white;
}

li a:hover:not(.active) {
  background-color: #adadad;
  color: white;
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

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li {
  text-align: center;
}

li:last-child {
  border-bottom: none;
}

li a.active {
  background-color: #04aa6d;
  color: white;
}

li a:hover:not(.active) {
  background-color: #04aa6d;
  color: white;
}
li a.nuxt-link-active {
  background: #39b44f;
  color: #fff;
}

/* .title-product {
  padding-top: 1em;
  font-family: "Kanit";
  font-weight: 500;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 20px;
} */

.col-content {
  display: flex;
  flex-direction: row;
  margin: 0 15px;
}

.row-button {
  margin-right: 40px;
  width: 28%;
}

.row-content {
  width: 100%;
}

.input-phone {
  width: 47%;
}

/* responsive */
@media only screen and (max-width: 480px) {
  /* Mobile Dives */
  .col-content {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .row-button {
    margin: 0;
    width: 95%;
    margin-left: 7px;
  }

  .row-content {
    margin: 10px 0px 0px 7px;
    width: 95%;
  }

  .input-phone {
    width: 100%;
  }

  .form {
    width: 100%;
  }

  .row-form {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 481px) and (max-width: 629px) {
  .col-content {
    margin: 0;
  }
  .row-button {
    margin-left: 7px;
    width: 60%;
  }
}

@media only screen and (min-width: 630px) and (max-width: 1024px) {
  .col-content {
    margin: 0;
  }
  .row-button {
    margin-left: 7px;
    width: 40%;
  }
  .row-content form {
    width: 95%;
  }
}
</style>
