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
            <tr v-for="(product,index) in dataValue" :key="'product'+index">
                <td>
                    <div v-if="product.product_image" style="">
                        <img style="width: 100px; height: 90px" :src="`http://54.254.134.236:6201/${product.product_image}`" alt="" />
                        <span style="margin: 0 0 0 1em;">{{ product.product_name }}</span>
                    </div>
                    <div v-else style="">
                        <svg class="" width="100px" height="90px" role="img" aria-label="Placeholder: Kob Giftshop" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title></title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="3%" y="50%" style="font-size: 12pt;" fill="#eceeef" dy=".3em">Kob Giftshop</text>
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
                    <tr style="">
                        <td width="50%">SUB TOTAL</td>
                        <td>฿{{Sum}}</td>
                    </tr>
                    <tr>
                        <td>SHIPPING</td>
                        <td>
                            <b-form-group v-slot="{ ariaDescribedby }">
                                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Thailand</b-form-radio>
                                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Fiat Rate : $10.00</b-form-radio>
                            </b-form-group>
                            <a> Calculate Shipping</a>
                            <div style="padding-bottom: 10px; padding-top: 10px">
                                <b-form-select v-model="selected" :options="options"></b-form-select>
                            </div>
                            <div style="padding-bottom: 10px">
                                <b-form-select v-model="selected" :options="options"></b-form-select>
                            </div>
                            <div style="padding-bottom: 10px">
                                <b-form-input placeholder="Post Code / ZIP"></b-form-input>
                            </div>
                            <div style="padding-bottom: 10px">
                                <b-button variant="" class="mb-2 update-totals-button" style="border-radius: 2px;
                                                                          border: 1px solid #f2f2f2;
                                                                          background-color: #f2f2f2;
                                                                          color: #a6a6a6;">
                                    UPDATE TOTALS
                                    <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
                                </b-button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>฿{{Sum}}</td>
                    </tr>
                </table>
                <b-button variant="success" size="lg" class="mb-2" style="border-radius: 3px; width: 100%;margin: 1em 0 0 0.55em;">
                    PROCEED TO CHECKOUT
                    <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
                </b-button>
            </div>
        </b-col>
    </b-row>
    <!-- <b-table striped hover :items="items" :fields="fields" :bordered="true">
      <template v-slot:cell(name)="row" style="width: 30%">
        <span> {{ row.item.name }}</span>
      </template>
      <template v-slot:cell(price)="row">
        {{ row.item.price }}
      </template>
      <template v-slot:cell(qty)="row">
        <b-form-input
          v-model="row.item.qty"
          style="width: 10%"
          :type="numbers"
        />
      </template>
      <template v-slot:cell(manage)="row">
        {{ row.item.manage }}
      </template>
    </b-table> -->
</div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
    name: "Homepage",
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
            items: [{
                    name: "Joe",
                    price: 33,
                    qty: 1,
                    manage: "",
                },
                {
                    name: "Sue",
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
        // delFromCart(product) {
        //     var result = confirm("ต้องการลบหรือไม่ ?");
        //     if (result == true) {
        //         const shoppingCart = this.dataValue;
        //         const productIndex = shoppingCart.findIndex(item => item.product_code === product.product_code);
        //         shoppingCart.splice(productIndex, 1);
        //         this.dataValue = shoppingCart;
        //         this.Sum = 0;
        //         this.dataValue.forEach(element => {
        //             this.Sum += element.product_price * element.amount;
        //         });
        //         // console.log("this.dataValue", this.dataValue);
        //         localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        //         this.$emit('update:modelValue', shoppingCart)
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
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
