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
                            {{category.product_category_name}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </b-collapse>
    </div>
    <b-row style=" margin: 0 -2em 0 -1em;">
        <b-col class="title-product" style="font-size: 16pt;">MY ORDER</b-col>
    </b-row>
    <b-row style="padding-top: 30px; margin: 0 -2em 0 -1em;">
        <b-col cols="12" style="border: 0.2px solid #e5e5e5">
            <b-row>
                <b-col class="title-product">ORDER 2022-05-05 15:03</b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <span style="color: green">พัสดุจัดส่งเรียบร้อย </span>
                        <font-awesome-icon :icon="['fas', 'question']" style="color: #000" />
                        |
                        <span style="color: green">สำเร็จแล้ว</span>
                    </div>
                </b-col>
            </b-row>
            <div style="padding: 10px; border-bottom: 1px solid #ccc !important; margin: 0 -1em 0 -1em;" v-for="(product,index) in dataValue" :key="'product'+index">
                <b-row>
                    <b-col cols="1">
                        <div v-if="product.product_image" style="">
                            <img style="width: 100px; height: 90px" :src="`http://54.254.134.236:6201/${product.product_image}`" alt="" />
                        </div>
                        <div v-else style="">
                            <svg class="" width="100px" height="90px" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title></title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                                <text x="3%" y="50%" style="font-size: 12pt;" fill="#eceeef" dy=".3em">Kob Giftshop</text>
                            </svg>
                        </div>
                    </b-col>
                    <b-col cols="10" style="margin: 0 0 0 1em;" class="d-flex align-items-center justify-content">
                        {{ product.product_name }}<br />
                        ฿{{ product.product_price }} x {{ product.amount }}
                    </b-col>
                    <b-col cols="1" style="margin: 2em 0 0 -1.5em;"> ฿{{ product.product_price * product.amount }}</b-col>
                </b-row>
            </div>
            <b-row style="padding-top: 30px">
                <b-col class="title-product"></b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <span style="color: #000">ยอดคำสั่งซื้อทั้งหมด : </span>
                        <span style="color: #000; font-size: 1.8em">฿{{Sum}}</span>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="title-product"></b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <button class="btn-success btn" style="border-radius: 0px">
                            ซื้ออีกครั้ง
                        </button>
                        <button class="btn-primary btn" style="border-radius: 0px">
                            ติดต่อผู้ขาย
                        </button>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <!-- <b-row style="padding-top: 30px; margin: 0 -2em 0 -1em;">
        <b-col cols="12" style="border: 0.2px solid #e5e5e5">
            <b-row>
                <b-col class="title-product">ORDER 2022-05-05 15:03</b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <span style="color: green">พัสดุจัดส่งเรียบร้อย</span>
                        <font-awesome-icon :icon="['fas', 'question']" style="color: #000" />
                        |
                        <span style="color: green">สำเร็จแล้ว</span>
                    </div>
                </b-col>
            </b-row>
            <div style="padding: 10px; border-bottom: 1px solid #ccc !important; margin: 0 -1em 0 -1em;" v-for="items in items" :key="items.name">
                <b-row>
                    <b-col cols="1">
                        <b-card-img :src="`https://placeimg.com/480/480/any?1`" style="max-width: 60px; margin: 10px" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col cols="10" class="d-flex align-items-center justify-content">
                        {{ items.name }}<br />
                        x{{ items.qty }}
                    </b-col>
                    <b-col cols="1"> ฿{{ items.price }}</b-col>
                </b-row>
            </div>
            <b-row style="padding-top: 30px">
                <b-col class="title-product"></b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <span style="color: #000">ยอดคำสั่งซื้อทั้งหมด:</span>
                        <span style="color: #000; font-size: 1.8em">฿500</span>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="title-product"></b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <button class="btn-success btn" style="border-radius: 0px">
                            ซื้ออีกครั้ง
                        </button>
                        <button class="btn-primary btn" style="border-radius: 0px">
                            ติดต่อผู้ขาย
                        </button>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row> -->
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
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
            },
            dataValue: [],
            Sum: 0,
            count_shop: 0,
            foods: [{
                    text: "Select One",
                    value: null
                },
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn",
            ],
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
            items: [{
                    name: "สาย TV HDMI TO HDMI CABLE ยาว 1.5 เมตร / 3 เมตร รองรับความละเอียดสูงสุดที่ 4K 2.0 สาย HDMI",
                    price: 33,
                    qty: 1,
                    manage: "",
                },
                {
                    name: "อุปกรณ์เพิ่มช่อง Ultra HD 4K x 2K 3in1 HDMI Switch Hub Splitter 3ช่อง เข้า3ออก1จอ Switcher สาย HDMI Full HD 1080P 3D",
                    price: 77,
                    qty: 10,
                    manage: "",
                },
            ],
            selected: null,
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
        };
    },
    mounted() {
        this.dataValue = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
        this.dataValue.forEach(element => {
            this.Sum += element.product_price * element.amount;
            this.count_shop += element.amount;
        });
        console.log("modelValue", this.modelValue);
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
        }
    },
    async asyncData({
        $productService
    }) {
        const categorys = await $productService.product.getProductCategoryBy();
        return {
            categorys: categorys.data ? categorys.data : [],
        };
    },
};
</script>

<style scoped>
div {
    font-family: 'Kanit', sans-serif;
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
</style>
