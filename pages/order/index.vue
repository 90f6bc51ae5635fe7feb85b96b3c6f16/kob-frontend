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
        <b-row style=" margin: 0 -2em 0 -1em;">
            <b-col class="title-product" style="font-size: 16pt;">MY ORDER</b-col>
        </b-row>
        <b-row style="padding-top: 30px; margin: 0 -2em 0 -1em;" v-for="(order, index) in orders"
            :key="'order' + index">
            <b-col cols="12" style="border: 0.2px solid #e5e5e5">
                <b-row>
                    <b-col class="title-product">{{ order.order_code }} {{ new Date(order.order_date) }}</b-col>
                    <b-col class="title-product">
                        <div style="text-align: right">
                            <a v-b-modal.modal-2 @click="setOrderCode(order.order_code, order)"><span
                                    style="color: #39b44f">{{ status[order.order_status] }} </span></a>
                            <!-- <font-awesome-icon :icon="['fas', 'question']" style="color: #000" /> -->
                            |
                            <span style="color: #39b44f" v-if="order.order_shipping || order.order_track_number">
                                <a v-if="order.order_shipping == 'thailand-post'"
                                    :href="`https://track.thailandpost.co.th/?trackNumber=${order.order_track_number}`"
                                    target="_blank">
                                    {{
                                            order.order_shipping
                                    }}
                                    {{ order.order_track_number }}
                                </a>
                                <a v-if="order.order_shipping == 'flash'"
                                    :href="`https://www.flashexpress.co.th/fle/tracking?se=${order.order_track_number}`"
                                    target="_blank">
                                    {{
                                            order.order_shipping
                                    }}
                                    {{ order.order_track_number }}
                                </a>
                                <a v-if="order.order_shipping == 'kerry'"
                                    :href="`https://th.kerryexpress.com/en/track/?track=${order.order_track_number}`"
                                    target="_blank">
                                    {{
                                            order.order_shipping
                                    }}
                                    {{ order.order_track_number }}
                                </a>

                                <a v-else>
                                    {{
                                            order.order_shipping
                                    }}
                                    {{ order.order_track_number }}
                                </a>
                            </span>
                            <span style="color: #39b44f" v-else></span>
                        </div>
                    </b-col>
                </b-row>
                <div style="padding: 10px; border-bottom: 1px solid #ccc !important; margin: 0 -1em 0 -1em;"
                    v-for="(product, index) in order.order_list" :key="'product' + index">
                    <b-row>
                        <b-col cols="1">
                            <div v-if="product.product_image" style="">
                                <img style="width: 100px; height: 90px"
                                    :src="`http://141.98.19.44:6201/${product.product_image}`" alt="" />
                            </div>
                            <div v-else style="">
                                <svg class="" width="100px" height="90px" role="img"
                                    aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice"
                                    focusable="false">
                                    <title></title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                    <text x="3%" y="50%" style="font-size: 12pt;" fill="#eceeef" dy=".3em">Kob
                                        Giftshop</text>
                                </svg>
                            </div>
                        </b-col>
                        <b-col cols="10" style="margin: 0 0 0 1em;" class="d-flex align-items-center justify-content">
                            {{ product.product_name }}<br />
                            ฿{{ product.product_price }} x {{ product.order_list_qty }}
                        </b-col>
                        <b-col cols="1" style="margin: 2em 0 0 -1.5em;"> ฿{{ product.product_price *
                                product.order_list_qty
                        }}
                        </b-col>
                    </b-row>
                </div>
                <b-row style="padding-top: 30px">
                    <b-col class="title-product"></b-col>
                    <b-col class="title-product">
                        <div style="text-align: right">
                            <span style="color: #000">ยอดคำสั่งซื้อทั้งหมด : </span>
                            <span style="color: #000; font-size: 1.8em">฿{{ order.order_product_price }}</span>
                        </div>
                        <div style="text-align: right" v-if="order.order_predict_price">
                            <span style="color: #000">ค่าขนส่ง : </span>
                            <span style="color: #000; font-size: 1.8em">฿{{ order.order_predict_price -
                                    order.order_product_price
                            }}</span>
                        </div>
                        <div style="text-align: right" v-if="order.order_predict_price">
                            <span style="color: #000">ยอดคำสั่งซื้อรวมค่าขนส่ง : </span>
                            <span style="color: #000; font-size: 1.8em">฿{{ order.order_predict_price }}</span>
                        </div>

                        <div style="text-align: right" v-if="order.order_box_qty">
                            <span style="color: #000">จำนวนลัง : {{ order.order_box_qty }}</span>
                        </div>
                        <div style="text-align: right" v-if="order.order_vat">
                            <span style="color: green;">ขอใบกำกับภาษี</span>
                            <span style="color: green;">{{ order_invoice_address }}</span>

                        </div>
                    </b-col>

                </b-row>
                <b-row>
                    <b-col class="title-product">
                        <div v-if="order.order_status == 'request_check_confirm' || order.order_status == 'request_check_slip'">
                            <b-img src="~/assets/qr_pp.png" alt="Image" class="rounded" width="80" height="80"
                                style="margin-top: 2;float: left;"></b-img>
                            &nbsp; ธนาคารกสิกรไทย <br>
                            &nbsp; 417-417-9525 <br>
                            &nbsp; วรายุทธ โชโตวงษ์
                        </div>
                    </b-col>
                    <b-col class="title-product">

                        <div style="text-align: right">
                            <!-- <button class="btn-success btn" style="border-radius: 0px"
                                v-if="order.status == request_check_confirm">
                                ยืนยันคำสั่งซื้อ
                            </button> -->


                            <button class="btn-success btn" style="border-radius: 0px"
                                v-if="order.order_status == 'request_check_confirm' || order.order_status == 'request_check_slip'"
                                v-b-modal.modal-1 @click="setOrderCode(order.order_code, order)">
                                แนบเอกสารการโอน
                            </button>
                            <button class="btn-danger btn" style="border-radius: 0px"
                                v-if="order.order_status != 'success' && order.order_status != 'customer_request_cancel' && order.order_status != 'cancel'"
                                @click="setOrderCode(order.order_code, order), showCancelOrder()">
                                ยกเลิกออร์เดอร์
                            </button>
                            <!-- <button class="btn-success btn" style="border-radius: 0px">
                                ซื้ออีกครั้ง
                            </button> -->
                            <button class="btn-primary btn" style="border-radius: 0px" @click="gotoContact">
                                ติดต่อผู้ขาย
                            </button>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-modal id="modal-1" title="แจ้งหลักฐานการโอน" @ok="handleSubmit('request_check_slip')" centered>
            <div id="preview" v-if="url != 'http://141.98.19.44:6901/slip/'">
                <img v-if="url" :src="url" />
            </div>
            <b-form-file v-model="file" ref="file-input" class="mb-2" @change="onFileChange" required
                style="margin-top :10px;"></b-form-file>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="order_slip_date" placeholder="วันที่" required></b-form-input>
            </div>
            <div style="padding-bottom: 10px">
                <b-form-input v-model="order_slip_time" placeholder="เวลา" required></b-form-input>
            </div>
        </b-modal>

        <b-modal id="modal-2" title="ประวัติทำรายการ" centered scrollable style="z-index:9999999 !important;">
            <div style="
            text-align: left;
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 1px solid #e4e4e4;
            background-color: #f5fffa;
          ">
                <div class="dotted" style="color: #212529; font-size: 12pt;" v-if="order_selected.order_code">
                    {{ new Date(order_selected.adddate) }} <br><span style="color:green;">สร้างคำสั่งซื้อ {{
                            order_selected.order_code
                    }} <br>ที่อยู่ : {{ order_selected.order_name }} {{ order_selected.order_address }}

                    </span>
                </div>
                <div class="dotted" style="color: #212529; font-size: 12pt;"
                    v-if="order_selected.order_status == 'cancel'">
                    {{ new Date(order_selected.lastupdate) }} <br><span style="color:green;">ยกเลิกคำสั่งซื้อ</span>
                </div>
                <div class="dotted" style="color: #212529; font-size: 12pt;" v-if="order_selected.order_predict_price">
                    {{ new Date(order_selected.order_predict_price_date) }} <br><span
                        style="color:green;">ประเมินราคาเสร็จสิ้น {{
                                order_selected.order_predict_price
                        }} บาท</span>
                </div>
                <div class="dotted" style="color: #212529; font-size: 12pt;" v-if="order_selected.order_slip">
                    {{ new Date(order_selected.order_slip_lastupdate) }} <br><span
                        style="color:green;">แนบหลักฐานชำระเงิน</span>
                    <div id="preview">
                        <img v-if="url" :src="url" />
                    </div>
                </div>
                <div class="dotted" style="color: #212529; font-size: 12pt;" v-if="order_selected.order_track_number">
                    {{ new Date(order_selected.order_track_date) }} <br><span style="color:green;">จัดส่งสินค้าแล้ว {{
                            order_selected.order_shipping
                    }}
                        {{ order_selected.order_track_number }}</span>
                </div>
                <div class="dotted" style="color: #212529; font-size: 12pt;"
                    v-if="order_selected.order_payment_return_slip">
                    {{ new Date(order_selected.lastupdate) }} <br><span style="color:green;">โอนคืนลูกค้า
                    </span>
                    <div id="preview">
                        <img v-if="url_payment" :src="url_payment" />
                    </div>
                </div>
            </div>

        </b-modal>
        <b-modal id="modal-cancel" title="แจ้งยกเลิกรายการ" centered no-close-on-esc no-close-on-backdrop
            hide-header-close hide-footer>

            <div style="padding-bottom: 10px">
                <b-form-input v-model="order_customer_cancel_user_remark" placeholder="หมายเหตุ" required>
                </b-form-input>
            </div>
            <b-button class="mt-3 btn-danger" block @click="confirmCancelOrder()">ยกเลิกรายการ</b-button>
            <b-button class="mt-3 " block @click="this.$bvModal.hide('modal-cancel')">ปิด</b-button>
        </b-modal>
    </div>

</template>

<script>
import { call } from "file-loader";
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",
    middleware: 'auth',
    props: ['modelValue'],
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
            },
            status: {
                request_check_price: 'รอประเมินราคา',
                request_check_confirm: 'รอยืนยันคำสั่งซื้อ',
                request_check_slip: 'รอตรวจสอบหลักฐาน',
                request_check_track: 'รอระบุเลขขนส่ง',
                cancel: 'ยกเลิกออเดอร์',
                success: 'จัดส่งสำเร็จ',
                customer_request_cancel: 'ลูกค้าขอยกเลิกออเดอร์',
                payment_failed: 'ชำระเงินไม่สำเร็จ',
            },
            dataValue: [],
            Sum: 0,
            count_shop: 0,
            show: true,
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
            selected: null,
            order_slip_date: '',
            order_slip_time: '',
            order_customer_cancel_user_remark: '',
            url: '',
            order_code: '',
            file: null,
            order_selected: '',
        };
    },
    mounted() {
        this.dataValue = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
        this.dataValue.forEach(element => {
            this.Sum += element.product_price * element.amount;
            this.count_shop += element.amount;
        });
        // console.log("modelValue", this.modelValue);
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
                console.log("2", this.dataValue);
            },
        },
    },
    methods: {
        confirmCancelOrder() {
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
                    this.$bvModal.hide('modal-cancel')
                    this.handleSubmit('customer_request_cancel')
                }
            })
        },
        showCancelOrder() {
            this.$bvModal.show('modal-cancel')
        },
        setOrderCode(value, order) {
            this.order_code = value;
            this.url = 'http://141.98.19.44:6901/slip/' + order.order_slip
            this.url_payment = "http://141.98.19.44:6201/" + order.order_payment_return_slip
            this.order_slip_date = order.order_slip_date
            this.order_slip_time = order.order_slip_time
            this.order_selected = order
        },
        async handleSubmit(status) {
            this.order_status = status;
            try {
                if (status == 'customer_request_cancel') {
                    await this.$axios.post('http://141.98.19.44:6901/api/order-status-update', {
                        order_status: this.order_status,
                        order_code: this.order_code,
                        order_customer_cancel_user_remark: this.order_customer_cancel_user_remark,

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
                                setTimeout(() => { this.$router.push("/order"); }, 2000);

                            } else {
                                this.$swal.fire({
                                    type: 'success',
                                    title: 'สำเร็จ',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                setTimeout(() => { this.$router.go(); }, 2000);
                            }
                        })
                        .catch((error) => {
                            console.log("err", error);
                        });
                    setTimeout(() => { this.$router.go(); }, 2000);
                } else {
                    if (this.file != null && this.file != '' && this.order_slip_date != '' && this.order_slip_time != '' && this.order_code != '') {

                        var formData = new FormData()
                        formData.append('photo', this.file)
                        formData.append('order_status', this.order_status)
                        formData.append('order_slip_date', this.order_slip_date)
                        formData.append('order_slip_time', this.order_slip_time)
                        formData.append('order_code', this.order_code)

                        await this.$axios.post('http://141.98.19.44:6901/api/upload-slip', formData, {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        })
                            .then(async (response) => {
                                console.log("true", response);
                                if (response.data == "error") {
                                    // console.log("Email");
                                    this.$swal.fire({
                                        type: 'error',
                                        title: 'ไม่สามารถเพิ่มข้อมูล',
                                        text: 'ไม่สามารถเพิ่มข้อมูล',
                                    })
                                    // setTimeout(() => { this.$router.push("/order"); }, 2000);

                                } else {

                                    this.order_slip = response.data.filename
                                    if (this.order_slip != '') {

                                        await this.$axios.post('http://141.98.19.44:6901/api/order-slip-update', {
                                            order_status: this.order_status,
                                            order_slip_date: this.order_slip_date,
                                            order_slip_time: this.order_slip_time,
                                            order_slip: this.order_slip,
                                            order_code: this.order_code,

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
                                                    setTimeout(() => { this.$router.push("/order"); }, 2000);

                                                } else {
                                                    this.$swal.fire({
                                                        type: 'success',
                                                        title: 'สำเร็จ',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                    setTimeout(() => { this.$router.go(); }, 2000);
                                                }
                                            })
                                            .catch((error) => {
                                                console.log("err", error);
                                            });
                                        setTimeout(() => { this.$router.go(); }, 2000);
                                    }

                                }
                            })
                            .catch((error) => {
                                console.log("err", error);
                            });
                    } else {
                        this.$swal.fire({
                            type: 'error',
                            title: 'ไม่สามารถเพิ่มข้อมูล',
                            text: 'ไม่สามารถเพิ่มข้อมูล',
                        })
                    }
                }

            } catch (error) {
                // console.log("err");
                this.error = error;

            }

        },
        gotoContact() {
            this.$router.push("/contact")
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
            shoppingCart[productIndex].amount -= 1;

            if (shoppingCart[productIndex].amount < 1) {
                shoppingCart.splice(productIndex, 1);
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
        onFileChange(e) {
            const file = e.target.files[0];
            console.log('file', file);
            if (file != null) {
                this.url = URL.createObjectURL(file);
                console.log(' this.url', this.url);

            } else {
                this.url = null
            }
        }
    },
    async asyncData({
        $productService,
        $orderService,
        $cookies
    }) {
        var user = $cookies.get('user')
        console.log('user==========',user);
        var order_data = []
        const categorys = await $productService.product.getProductCategoryBy();
        const orders = await $orderService.order.getOrderByCode({ customer_code: user.member_code });
        console.log('user.member_code', user.member_code);
        for (var i = 0; i < orders.data.length; i++) {
            const orders_list = await $orderService.order.getOrderListByOrderCode({ order_code: orders.data[i].order_code });
            // orders.data[i].push(orders_list.data)
            await order_data.push({
                ...orders.data[i],
                order_list: orders_list.data
            }
            )
            // console.log('orders_list' + i, orders_list.data);
        }

        console.log(order_data);
        return {
            categorys: categorys.data ? categorys.data : [],
            orders: order_data ? order_data : [],
        };
    },
};
</script>

<style scoped>
a {
    color: #39b44f;
}

div {
    font-family: 'Kanit', sans-serif;
}

#preview {
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 100%;
    max-height: 200px;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}

.tdClass {
    width: 50%;
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

.dotted:before {
    content: "• ";
    color: green;
}

#modal-2___BV_modal_outer_ {
    z-index: 999999999 !important;
}
</style>
