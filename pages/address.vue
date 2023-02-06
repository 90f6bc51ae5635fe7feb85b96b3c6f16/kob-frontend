<template>
    <div>
        <div class="" style="margin: 0 -2em 0 -1em;">
            <b-collapse id="example-collapse" style="
              width: 100%;
              margin: 0 0 0 0;
              max-height: 250px;
              overflow: auto;

            ">
                <div v-for="category in categorys" :key="category.product_category_code">
                    <ul>
                        <li>
                            <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }">
                                {{ category.product_category_name }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </b-collapse>
        </div>
        <b-row style="margin: 0 -2em 0 -1em;">
            <b-col class="title-product" style="font-size: 16pt;">ข้อมูลที่จัดส่ง</b-col>
        </b-row>
        <b-row style="padding-top: 30px; margin: 0 -2em 0 -1.9em;">
            <b-col cols="3">
                <ul class="my" style="">
                    <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                        <nuxt-link :to="{ path: `/profile` }">
                            <font-awesome-icon :icon="['fas', 'circle-user']" style="color: #000" />
                            My Details
                        </nuxt-link>
                    </li>
                    <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                        <nuxt-link :to="{ path: `/address` }">
                            <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #000" />
                            My address book
                        </nuxt-link>
                    </li>
                    <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                        <nuxt-link :to="{ path: `/order` }">
                            <font-awesome-icon :icon="['fas', 'bag-shopping']" style="color: #000" />
                            My Order
                        </nuxt-link>
                    </li>
                </ul>
            </b-col>
            <b-col cols="9" style="border: 0.2px solid #e5e5e5">
                <b-row>
                    <b-col class="title-product">ที่อยู่ของฉัน</b-col>
                    <b-col class="title-product">
                        <div style="text-align: right">
                            <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
                            <button v-b-modal.modal-1 class="btn-success btn" style="border-radius: 0px">
                                <font-awesome-icon :icon="['fas', 'plus']" style="color: #fff" />
                                เพิ่มที่อยู่
                            </button>
                        </div>
                    </b-col>
                </b-row>
                <div style="padding: 10px" v-for="(address_, idx) in address" :key="'B' + idx">
                    <b-row>
                        <b-col cols="3">ชื่อ-นามสกุล</b-col>
                        <b-col cols="5"> {{ address_.customer_name }}</b-col>
                        <b-col cols="1"></b-col>
                        <b-col cols="3"></b-col>
                    </b-row>
                    <b-row style="">
                        <b-col cols="3">โทรศัพท์</b-col>
                        <b-col cols="5">{{ address_.customer_tel }}</b-col>
                        <b-col cols="1"></b-col>
                        <b-col cols="3"></b-col>
                    </b-row>
                    <b-row style="">
                        <b-col cols="3">ที่อยู่</b-col>
                        <b-col cols="5">{{ address_.customer_address }} {{ address_.customer_zipcode }}</b-col>
                        <b-col cols="1">
                            <button class="btn-secondary btn" style="border-radius: 0px; margin-bottom: 10px"
                                v-b-modal.modal-2 @click="setAddress(address_)">
                                แก้ไข
                            </button>
                        </b-col>
                        <b-col cols="3">
                            <button class="btn-success btn" style="border-radius: 0px"
                                @click="updateDefaultAddress(address_.customer_address_id)" v-if="address_.customer_default_address == 1">
                                ตั้งเป็นค่าตั้งต้น
                            </button>
                            <button class="btn-secondary btn" style="border-radius: 0px"
                                @click="updateDefaultAddress(address_.customer_address_id)" v-if="address_.customer_default_address != 1">
                                ตั้งเป็นค่าตั้งต้น
                            </button>
                        </b-col>
                    </b-row>
                </div>

            </b-col>
        </b-row>
        <b-modal id="modal-1" title="เพิ่มที่อยู่" @ok="handleSubmit" centered>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_name" placeholder="ชื่อ-นามสกุล"></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_tel" placeholder="โทรศัพท์"></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_address" placeholder="ที่อยู่"></b-form-input>
            </div>
            <!-- <div style="padding-bottom: 10px; padding-top: 10px">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div> -->
            <!-- <div style="padding-bottom: 10px">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div> -->
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_zipcode" placeholder="รหัสไปรษณีย์"></b-form-input>
            </div>
        </b-modal>

        <b-modal id="modal-2" title="แก้ไขที่อยู่" @ok="updateAddress" centered>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_name" placeholder="ชื่อ-นามสกุล"></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_tel" placeholder="โทรศัพท์"></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_address" placeholder="ที่อยู่"></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="customer_zipcode" placeholder="รหัสไปรษณีย์"></b-form-input>
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
            foods: [{
                text: "Select One",
                value: null
            },
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn",
            ],
            options: [{
                value: null,
                text: "Please select an option"
            },
            {
                value: "a",
                text: "This is First option"
            },
            {
                value: "b",
                text: "Selected Option"
            },
            {
                value: {
                    C: "3PO"
                },
                text: "This is an option with object value"
            },
            {
                value: "d",
                text: "This one is disabled",
                disabled: true
            },
            ],
            show: true,
        };
    },
    async asyncData({
        $userService,
        $productService,
        $cookies,
    }) {
        // console.log('this.user ', this.user)

        const categorys = await $productService.product.getProductCategoryBy();

        const address = await $userService.user.getMemberAddress($cookies.get('user'));


        return {
            address: address.data ? address.data : [],
            categorys: categorys.data ? categorys.data : [],

        };
    },
    mounted() {
        this.user = this.$cookies.get('user');
        // console.log('  this.user ', this.user)
        console.log('user', this.$cookies.get('user'))

    },
    methods: {
        setAddress(address) {

            this.customer_name = address.customer_name
            this.customer_tel = address.customer_tel
            this.customer_address = address.customer_address
            this.customer_zipcode = address.customer_zipcode
            this.customer_address_id = address.customer_address_id
        },

        async updateDefaultAddress(customer_address_id) {
            try {

                await this.$axios.post('https://rvscs-develop.com/km-korat-web/api//member-update-default-address/', {
                    customer_code: this.user.customer_code,
                    customer_address_id: customer_address_id,

                })
                    .then((response) => {
                        console.log("true", response);
                        if (response.data == "error") {
                            // console.log("Email");
                            this.$swal.fire({
                                type: 'error',
                                title: 'ไม่สามารถแก้ไขข้อมูล',
                                text: 'ไม่สามารถแก้ไขข้อมูล',
                            })
                            setTimeout(() => { this.$router.go(); }, 2000);

                        } else {
                            this.$swal.fire({
                                type: 'success',
                                title: 'แก้ไขสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setTimeout(() => { this.$router.go(); }, 2000);
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

                await this.$axios.post('https://rvscs-develop.com/km-korat-web/api//member-update-address/', {
                    customer_code: this.user.customer_code,
                    customer_name: this.customer_name,
                    customer_tel: this.customer_tel,
                    customer_address: this.customer_address,
                    customer_zipcode: this.customer_zipcode,
                    customer_address_id: this.customer_address_id,

                })
                    .then((response) => {
                        console.log("true", response);
                        if (response.data == "error") {
                            // console.log("Email");
                            this.$swal.fire({
                                type: 'error',
                                title: 'ไม่สามารถแก้ไขข้อมูล',
                                text: 'ไม่สามารถแก้ไขข้อมูล',
                            })
                            setTimeout(() => { this.$router.go(); }, 2000);

                        } else {
                            this.$swal.fire({
                                type: 'success',
                                title: 'แก้ไขสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setTimeout(() => { this.$router.go(); }, 2000);
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

                await this.$axios.post('https://rvscs-develop.com/km-korat-web/api//member-insert-address/', {
                    customer_code: this.user.customer_code,
                    customer_name: this.customer_name,
                    customer_tel: this.customer_tel,
                    customer_address: this.customer_address,
                    customer_zipcode: this.customer_zipcode,

                })
                    .then((response) => {
                        console.log("true", response);
                        if (response.data == "error") {
                            // console.log("Email");
                            this.$swal.fire({
                                type: 'error',
                                title: 'ไม่สามารถเพิ่มข้อมูล',
                                text: 'ไม่สามารถเพิ่มข้อมูล',
                            })
                            setTimeout(() => { this.$router.push("/address"); }, 2000);

                        } else {
                            this.$swal.fire({
                                type: 'success',
                                title: 'เพิ่มที่อยู่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setTimeout(() => { this.$router.push("/address"); }, 2000);
                        }
                    })
                    .catch((error) => {
                        console.log("err", error);
                    });
            } catch (error) {
                // console.log("err");
                this.error = error;

            }
        }

    }
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
div {
    font-family: 'Kanit', sans-serif;
}

.my {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    border: 1px solid #adadad;
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
    background-color: #39b54a;
    color: white;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}
</style>
