<template>
  <div>
    <b-row class="mt-3">
      <b-col style="font-size: 16pt">ข้อมูลที่จัดส่ง</b-col>
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
          <b-col class="content">
            <b-row class="title-content">
              <b-col class="title-product">ที่อยู่ของฉัน</b-col>
              <b-col class="title-product">
                <div style="text-align: right">
                  <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
                  <button
                    v-b-modal.modal-1
                    class="btn-success btn"
                    style="border-radius: 0px"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'plus']"
                      style="color: #fff"
                    />
                    เพิ่มที่อยู่
                  </button>
                </div>
              </b-col>
            </b-row>
            <div
              style="padding: 10px"
              v-for="(address_, idx) in address"
              :key="'B' + idx"
            >
              <b-row class="row-name">
                <b-col cols="3">ชื่อ-นามสกุล</b-col>
                <b-col cols="5"> {{ address_.customer_name }}</b-col>
                <b-col cols="1"></b-col>
                <b-col cols="3"></b-col>
              </b-row>
              <b-row class="row-tel" style="">
                <b-col cols="3">โทรศัพท์</b-col>
                <b-col cols="5">{{ address_.customer_tel }}</b-col>
                <b-col cols="1"></b-col>
                <b-col cols="3"></b-col>
              </b-row>
              <b-row class="row-address" style="">
                <b-col cols="3">ที่อยู่</b-col>
                <b-col cols="9"
                  >{{ address_.customer_address }}
                  {{ address_.customer_zipcode }}</b-col
                >
                <!-- <b-col cols="1"> -->
                <!-- <button class="btn-secondary btn" style="border-radius: 0px; margin-bottom: 10px"
                                                v-b-modal.modal-2 @click="setAddress(address_)">
                                                แก้ไข
                                            </button> -->
                <!-- </b-col> -->
                <!-- <b-col cols="3"> -->
                <!-- <button class="btn-success btn" style="border-radius: 0px">
                                                ตั้งเป็นค่าตั้งต้น
                                            </button> -->
                <!-- <button class="btn-success btn" style="border-radius: 0px"
                                                @click="updateDefaultAddress(address_.customer_address_id)" v-if="address_.customer_default_address == 1">
                                                ตั้งเป็นค่าตั้งต้น
                                            </button> -->
                <!-- <button class="btn-secondary btn" style="border-radius: 0px"
                                                @click="updateDefaultAddress(address_.customer_address_id)" v-if="address_.customer_default_address != 1">
                                                ตั้งเป็นค่าตั้งต้น
                                            </button> -->
                <!-- </b-col> -->
              </b-row>
              <b-row class="button">
                <button
                  class="btn-secondary btn"
                  style="border-radius: 0px"
                  v-b-modal.modal-2
                  @click="setAddress(address_)"
                >
                  แก้ไข
                </button>
                <button
                  class="btn-secondary btn"
                  style="border-radius: 0px; margin-left: 15px"
                  @click="updateDefaultAddress(address_.customer_address_id)"
                  v-if="address_.customer_default_address != 1"
                >
                  ตั้งเป็นค่าตั้งต้น
                </button>
                <button
                  class="btn-success btn"
                  style="border-radius: 0px; margin-left: 15px"
                  @click="updateDefaultAddress(address_.customer_address_id)"
                  v-if="address_.customer_default_address == 1"
                >
                  ตั้งเป็นค่าตั้งต้น
                </button>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-modal id="modal-1" title="เพิ่มที่อยู่" @ok="handleSubmit" centered>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_name"
          placeholder="ชื่อ-นามสกุล"
        ></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_tel"
          placeholder="โทรศัพท์"
        ></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_address"
          placeholder="ที่อยู่"
        ></b-form-input>
      </div>
      <!-- <div style="padding-bottom: 10px; padding-top: 10px">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </div> -->
      <!-- <div style="padding-bottom: 10px">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </div> -->
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_zipcode"
          placeholder="รหัสไปรษณีย์"
        ></b-form-input>
      </div>
    </b-modal>

    <b-modal id="modal-2" title="แก้ไขที่อยู่" @ok="updateAddress" centered>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_name"
          placeholder="ชื่อ-นามสกุล"
        ></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_tel"
          placeholder="โทรศัพท์"
        ></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_address"
          placeholder="ที่อยู่"
        ></b-form-input>
      </div>
      <div style="padding-bottom: 10px">
        <b-form-input
          v-model="customer_zipcode"
          placeholder="รหัสไปรษณีย์"
        ></b-form-input>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer_name: "",
      customer_tel: "",
      customer_address: "",
      customer_zipcode: "",
      customer_address_id: "",
      user: "",
      form: {
        // checked: [],
      },
      foods: [
        {
          text: "Select One",
          value: null,
        },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      options: [
        {
          value: null,
          text: "Please select an option",
        },
        {
          value: "a",
          text: "This is First option",
        },
        {
          value: "b",
          text: "Selected Option",
        },
        {
          value: {
            C: "3PO",
          },
          text: "This is an option with object value",
        },
        {
          value: "d",
          text: "This one is disabled",
          disabled: true,
        },
      ],
      show: true,
    };
  },
  async asyncData({ $userService, $cookies, store }) {
    const user = store.state.auth.user;
    console.log("this.user ", user);
    const address = await $userService.user.getMemberAddress({
      customer_code: user.customer_code,
    });

    return {
      address: address.data ? address.data : [],
    };
  },
  mounted() {
    this.user = this.$store.state.auth.user;
  },
  methods: {
    setAddress(address) {
      this.customer_name = address.customer_name;
      this.customer_tel = address.customer_tel;
      this.customer_address = address.customer_address;
      this.customer_zipcode = address.customer_zipcode;
      this.customer_address_id = address.customer_address_id;
    },
    async updateDefaultAddress(customer_address_id) {
      try {
        await this.$axios
          .post(
            "https://km-korat.com/km-korat-web/api/member-update-default-address/",
            {
              customer_code: this.user.customer_code,
              customer_address_id: customer_address_id,
            }
          )
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
    async updateAddress() {
      try {
        await this.$axios
          .post(
            "https://km-korat.com/km-korat-web/api/member-update-address/",
            {
              customer_code: this.user.customer_code,
              customer_name: this.customer_name,
              customer_tel: this.customer_tel,
              customer_address: this.customer_address,
              customer_zipcode: this.customer_zipcode,
              customer_address_id: this.customer_address_id,
            }
          )
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
    async handleSubmit() {
      try {
        await this.$axios
          .post(
            "https://km-korat.com/km-korat-web/api/member-insert-address/",
            {
              customer_code: this.user.customer_code,
              customer_name: this.customer_name,
              customer_tel: this.customer_tel,
              customer_address: this.customer_address,
              customer_zipcode: this.customer_zipcode,
            }
          )
          .then((response) => {
            console.log("true", response);
            if (response.data == "error") {
              // console.log("Email");
              this.$swal.fire({
                type: "error",
                title: "ไม่สามารถเพิ่มข้อมูล",
                text: "ไม่สามารถเพิ่มข้อมูล",
              });
              setTimeout(() => {
                this.$router.go();
              }, 2000);
            } else {
              this.$swal.fire({
                type: "success",
                title: "เพิ่มที่อยู่สำเร็จ",
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
  // middleware: 'auth',
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
  background: #39b54a;
  color: #fff;
}

.title-product {
  padding-top: 1em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 20px;
}

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
  border: 2px solid #e5e5e5;
  margin-bottom: 10px;
}

.button {
  display: flex;
  justify-content: flex-end;
}

/* responsive */
@media only screen and (max-width: 496px) {
  /* Mobile Devices */
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
    margin: 10px 0px 15px 7px;
    width: 95%;
  }

  .table-hearder {
    text-align: left;
  }
}

@media only screen and (min-width: 497px) and (max-width: 671px) {
  .col-content {
    margin: 0;
  }
  .row-button {
    margin-left: 7px;
    width: 70%;
  }

  .row-content {
    margin-right: 10px;
  }
}

@media only screen and (min-width: 672px) and (max-width: 1024px) {
  .col-content {
    margin: 0;
  }
  .col .row-button {
    margin-left: 7px;
    width: 40%;
  }

  .row-content {
    margin-right: 10px;
  }
}
</style>
