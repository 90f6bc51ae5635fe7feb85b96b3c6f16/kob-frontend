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
        <b-row>
            <b-col class="title-product">
                <h4><b>YOUR CART</b></h4>
            </b-col>
            <b-col class="title-product">
                <div style="text-align: right; color: #e4e4e4;">
                    <p style="font-size: 13pt;">
                        <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #e4e4e4;" />
                        RETURN TO SHOP
                    </p>
                </div>
            </b-col>
        </b-row>
        <table class="table" style="border: 1px solid #ccc !important">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th width="50%">PRODUCT</th>
                    <th style="text-align: center">PRICE</th>
                    <th style="text-align: center">QUANTITY</th>
                    <th style="text-align: center">TOTAL</th>
                    <th style="text-align: center"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in dataValue" :key="'product' + index">
                    <td>
                        <div v-if="product.product_image" style="">
                            <img style="width: 100px; height: 90px"
                                :src="`http://141.98.19.44:6201/${product.product_image}`" alt="" />
                            <span style="margin: 0 0 0 1em;">{{ product.product_name }}</span>
                        </div>
                        <div v-else style="">
                            <svg class="" width="100px" height="90px" role="img" aria-label="Placeholder: Kob Giftshop"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title></title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                                <text x="3%" y="50%" style="font-size: 12pt;" fill="#eceeef" dy=".3em">Kob
                                    Giftshop</text>
                            </svg>
                            <span style="margin: 0 0 0 1em;">{{ product.product_name }}</span>
                        </div>

                    </td>
                    <td style="text-align: center; vertical-align: middle">
                        {{ product.product_price }}
                    </td>
                    <td style="text-align: center; vertical-align: middle">
                        <b-button type="" variant="success" @click="removeFromCart(product)">-</b-button>
                        <input type="number" :value="product.amount" style="text-align: center; width: 40%;" disabled />
                        <b-button type="" variant="success" @click="addFromCart(product)">+</b-button>
                    </td>
                    <td style=" text-align: center; vertical-align: middle">
                        {{ product.product_price * product.amount }}
                    </td>

                    <td style="text-align: center; vertical-align: middle">
                        <button class="btn" style="" @click="delFromCart(product)">
                            <font-awesome-icon :icon="['fas', 'circle-xmark']" style="color: #red" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <b-row>
            <b-col class="title-product">
                <input type="text" value="" placeholder="Coupon Code" style="height: 100%;
                                                                          padding: 0 0 0 10px;
                                                                          border: 1px solid #f2f2f2;
                                                                          border-radius: 2px;" />
                <b-button variant="" class="mb-2 apply-coupon-button" style="border: 1px solid #f2f2f2;
                                                      height: 100%;
                                                      margin-top: 3px;
                                                      background-color: #f2f2f2;
                                                      color: #a6a6a6;
            ">
                    APPLY COUPON
                    <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
                </b-button>
            </b-col>
            <b-col class="title-product">
                <div style="text-align: right;
                                    color: #e4e4e4;
                                    height: 100%;
                                    margin: 3px -0.65em 0 0;">
                    <b-button variant="dark" class="mb-2" style="border-radius: 2px;
                                                              height: 100%;">
                        UPDATE CART
                        <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
                    </b-button>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="title-product"> </b-col>
            <b-col class="title-product">
                <div style="text-align: left; color: #000;">
                    <h5>CART TOTALS</h5>
                    <table class="table table-bordered" style="border: 1px solid #ccc !important;">
                        <tr>
                            <td></td>
                            <td>
                                <b-form-checkbox id="checkbox-1" v-model="order_vat" name="checkbox-1" value="1"
                                    unchecked-value="0">
                                    ขอใบกำกับภาษี(กรุณาติดต่อทางร้าน)
                                </b-form-checkbox>
                                <b-form-textarea  v-model="order_invoice_address" placeholder="ข้อมูลใบกำกับภาษี" rows="5"
                                max-rows="5"></b-form-textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>ที่อยู่จัดส่ง</td>
                            <td>
                                <b-form-group v-slot="{ ariaDescribedby }" label="เลือกที่อยู่จัดสั่ง">
                                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby"
                                        style="padding-top : 10px;" name="some-radios"
                                        :value="address_.customer_address_id" v-for="(address_, idx) in address"
                                        @change="selectAddress(address_)" :key="'B' + idx">
                                        {{ address_.customer_name }}
                                        <br>
                                        {{ address_.customer_address }} {{ address_.customer_zipcode }} <br>
                                        {{ address_.customer_tel }}
                                    </b-form-radio>
                                </b-form-group>

                            </td>
                        </tr>
                        <tr style="">
                            <td width="50%">SUB TOTAL</td>
                            <td>฿{{ Sum }}</td>
                        </tr>

                        <tr>
                            <td>TOTAL</td>
                            <td>฿{{ Sum }}</td>
                        </tr>
                    </table>
                    <b-button variant="success" size="lg" class="mb-2"
                        style="border-radius: 3px; width: 100%;margin: 1em 0 0 0.55em;" @click="_submitData">
                        สั่งซื้อสินค้า
                    </b-button>
                </div>
            </b-col>
        </b-row>

        <b-modal id="modal-1" title="สั่งซื้อเรียบร้อย" centered hide-footer @hidden="gotoOrderPage()" no-close-on-esc
            no-close-on-backdrop hide-header-close>
            <div id="preview">
                <img src="~/assets/qr1.png" />
            </div>
            <div id="preview">
                <img src="~/assets/qr2.png" />
            </div>
            <div style="padding-bottom: 10px;text-align: center;">
                <div><b>แจ้งหรือสอบถามข้อมูลการสั่งซื้อได้ที่</b></div>
                <div><b>ไอดีไลน์ : </b><span>@kob0994619241</span> หรือ
                    @modnganbeauty</div>
                <div><b>เบอร์โทรศัพท์ : </b><span>099-461-9241</span></div>
            </div>
            <b-button class="mt-3 btn-success" block @click="gotoOrderPage()">ไปที่คำสั่งซื้อ</b-button>
        </b-modal>
    </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",
    middleware: 'auth',
    props: ['modelValue'],
    data() {
        return {
            dataValue: [],
            keyword: '',
            Sum: 0,
            count_shop: 0,
            sss: [],
            fields: [{
                key: "name",
                label: "PRODUCT",
            },
            {
                key: "price",
                label: "PRICE",
            },
            {
                key: "qty",
                label: "QUANTITY",
                thClass: "red",
            },
            {
                key: "manage",
                label: "",
                thClass: "red",
            },
            ],
            order_vat: 0,
            selected: null,
            user: "",
            customer_code: '',
            selected_address: {},

        };
    },
    mounted() {
        this.user = this.$cookies.get('user');
        this.dataValue = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
        this.dataValue.forEach(element => {
            this.Sum += element.product_price * element.amount;
            this.count_shop += element.amount;
        });
        this.address.map((address) => {
            if (address.customer_default_address == 1) {
                this.selected = address.customer_address_id
                this.selected_address = address
            }
        })
        // this.$bvModal.show('modal-1')

    },
    computed: {

    },
    watch: {
        modelValue: {
            deep: true,
            handler(newValue) {
                this.count_shop = 0;
                this.Sum = 0;
                localStorage.setItem('shoppingCart', JSON.stringify(newValue));
                console.log("newValue", newValue);
                this.dataValue = newValue;
                this.dataValue.forEach(element => {
                    this.Sum += element.product_price * element.amount;
                    this.count_shop += element.amount;
                });
            },
        },
    },
    computed: {

    },
    methods: {
        gotoOrderPage() {
            this.$bvModal.hide('modal-1')
            this.$router.push("/order");

        },
        setDefaultAddress(value) {
            if (value.customer_default_address == 1) {
                this.selected_address = value;
                this.selected = value.customer_address_id;
            }
        },
        selectAddress(value) {

            this.selected_address = value;
        },

        async _submitData() {
            try {
                var today = new Date()
                var now_date = (today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
                var now_time = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()).toString()
                console.log('now_date', now_date);

                await this.$axios.post('https://km-korat.com/api/order-insert/', {
                    customer_code: this.user.member_code,
                    sale_station_code: '',
                    user_code: '',
                    order_date: now_date + ' ' + now_time,
                    order_name: this.selected_address.customer_name,
                    order_address: this.selected_address.customer_address + ' ' + this.selected_address.customer_zipcode + ' ' + this.selected_address.customer_tel,
                    order_predict_price: '',
                    order_product_price: this.Sum,
                    order_discount_price: '',
                    order_status: 'request_check_price',
                    order_shipping: '',
                    order_slip: '',
                    order_track_number: '',
                    addby: '',
                    adddate: '',
                    updateby: '',
                    lastupdate: '',
                    order_list: this.dataValue,
                    order_vat: this.order_vat
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
                            setTimeout(() => { this.$router.push("/cart"); }, 2000);

                        } else {
                            localStorage.removeItem("shoppingCart");
                            this.$swal.fire({
                                type: 'success',
                                title: 'สร้างออเดอร์แล้ว',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            console.log('response.data', response.data)
                            this.$bvModal.show('modal-1')
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

        async logout() {
            await this.$auth.logout();
            this.$router.push("/login");
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        removeFromCart(product) {
            const shoppingCart = this.dataValue;
            const productIndex = shoppingCart.findIndex(item => item.product_code === product.product_code);
            if (shoppingCart[productIndex].amount > 1) {
                shoppingCart[productIndex].amount -= 1;
            }
            this.dataValue = shoppingCart;
            this.count_shop -= 1;
            this.Sum = 0;
            this.dataValue.forEach(element => {
                this.Sum += element.product_price * element.amount;
            });
            // console.log("this.dataValue", this.dataValue);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            this.$emit('update:modelValue', shoppingCart)
        },
        addFromCart(product) {
            const shoppingCart = this.dataValue;
            const productIndex = shoppingCart.findIndex(item => item.product_code === product.product_code);
            shoppingCart[productIndex].amount += 1;

            this.dataValue = shoppingCart;
            this.count_shop += 1;
            this.Sum = 0;
            this.dataValue.forEach(element => {
                this.Sum += element.product_price * element.amount;
            });

            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            this.$emit('update:modelValue', shoppingCart)
        },

        delFromCart(product) {
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
    async asyncData({
        $userService,
        $productService,
        $cookies,
    }) {
        const categorys = await $productService.product.getProductCategoryBy();
        const address = await $userService.user.getMemberAddress($cookies.get('user'));
        return {
            address: address.data ? address.data : [],
            categorys: categorys.data ? categorys.data : [],

        };
    },
};
</script>

<style scoped>
#preview {
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 100%;
    max-height: 200px;
}

div {
    font-family: 'Kanit', sans-serif;
}

.title-product {
    padding-top: 2em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    /* border-bottom: 1px solid #e4e4e4; */
    padding-bottom: 10px;
    margin: 0 -2em 0 -1em;
}

.tdClass {
    width: 50%;
}

table.table {
    margin: 0 0 0 0.7em;
}

.apply-coupon-button:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, .5);
    border: 2px solid #ccc;
    border-style: outset;
}

.update-totals-button:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, .5);
    border: 2px solid #ccc;
    border-style: outset;
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
</style>
