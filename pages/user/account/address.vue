<template>
  <div>
    <b-row no-gutters style="min-height: calc(100vh - 260px)">
      <b-col md="3" class="mt-4 d-none d-lg-block">
        <user-menu :active="'account-address'" />
      </b-col>
      <b-col class="mt-4">
        <div class="pl-md-3">
          <h4>ที่อยู่ของฉัน</h4>
          <hr />

          <b-row>
            <b-col>ที่อยู่</b-col>
            <b-col class="text-right">
              <b-button variant="success" squared v-b-modal.modal-1>
                <font-awesome-icon :icon="['fas', 'plus']" />
                เพิ่มที่อยู่
              </b-button>
            </b-col>
          </b-row>

          <div v-for="(address_, idx) in address" :key="idx">
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

            <b-row>
              <b-button
                variant="secondary"
                squared
                v-b-modal.modal-2
                @click="setAddress(address_)"
              >
                แก้ไข
              </b-button>
              <b-button variant="success" squared>
                ตั้งเป็นค่าตั้งต้น
              </b-button>
            </b-row>
          </div>
        </div>
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
  // middleware: ["auth"],
  layout: "user-account",
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
  async asyncData({ $userService, $cookies }) {
    // console.log('this.user ', this.user)

    const address = await $userService.user.getMemberAddress(
      $cookies.get("user")
    );

    return {
      address: address.data ? address.data : [],
    };
  },
  beforeMount() {
    this.$store.commit("setActiveUserMenu", "account-address");
  },
  mounted() {
    this.user = this.$cookies.get("user");
    // console.log('  this.user ', this.user)
    console.log("user", this.$cookies.get("user"));
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
            "https://rvscs-develop.com/km-korat-web/api//member-update-default-address/",
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
            "https://rvscs-develop.com/km-korat-web/api//member-update-address/",
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
            "https://rvscs-develop.com/km-korat-web/api//member-insert-address/",
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
                this.$router.push("/address");
              }, 2000);
            } else {
              this.$swal.fire({
                type: "success",
                title: "เพิ่มที่อยู่สำเร็จ",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.$router.push("/address");
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
};
</script>