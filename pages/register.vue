<template lang="">
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
    <b-row style="margin: 0 -2em 0 -1.9em;">
        <b-col class="title-product" style="font-size: 16pt;">Register</b-col>
    </b-row>
    <b-row class="" style="margin: 0 -2.9em 0 -1.9em;">

        <b-col  cols="12">
            <form  action="" @submit.prevent="onSubmit" >
                <b-row class="row-form">
                    <b-col class="col-form">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                ชื่อ <span style="color: red;">*</span>
                                <b-form-input v-model="customer_name" type="text" class="textbox" placeholder="ชื่อ" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกชื่อ');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col class="col-form">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                User <span style="color: red">*</span>
                                <b-form-input v-model="customer_username" class="textbox" type="text" placeholder="ชื่อผู้ใช้" required pattern=".{1,}" oninvalid="setCustomValidity('ชื่อผู้ใช้');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="row-form">
  
                    <b-col class="col-form">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Password <span style="color: red">*</span>
                                <b-form-input v-model="customer_password" class="textbox" type="password" placeholder="รหัสผ่าน" name="password" id="password" v-on:input="check()" required oninvalid="setCustomValidity('กรุณากรอกรหัสผ่าน อย่างน้อย 6 ตัว');" oninput="setCustomValidity('');">
                                </b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col class="col-form">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Confirm Password <span style="color: red">*</span>
                                <b-form-input v-model="confirmpassword" class="textbox" type="password" placeholder="ยืนยันรหัสผ่าน" name="confirmpassword" id="confirmpassword" v-on:input="check()" required oninvalid="setCustomValidity('ยืนยันรหัสผ่าน อย่างน้อย 6 ตัว');" oninput="setCustomValidity('');">
                                </b-form-input>
                                <span id="message"></span>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="row-form" >
                    <b-col class="col-form">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Email <span style="color: red">*</span>
                                <b-form-input v-model="customer_email" class="textbox" type="text" placeholder="อีเมล" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกอีเมล');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col class="col-form" md="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                หมายเลขโทรศัพท์ <span style="color: red">*</span>
                                <b-form-input v-model="customer_phone" type="number" class="textbox"  placeholder="หมายเลขโทรศัพท์" required pattern="[0-9]{10}" oninvalid="setCustomValidity('กรุณากรอกเบอร์โทรทัพท์ 0-9');" oninput="setCustomValidity('');">
                                </b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row >
                <b-row>
                    <b-col >
                    </b-col>
                    <b-col >
                        <b-button type="submit" variant="success" name="submit" id="submit" size="md" style="width: 100%;">Save</b-button>
                    </b-col>
                    <b-col >
                        <b-button type="reset" variant="warning" size="md" style="width: 100%;">Reset</b-button>
                    </b-col>
                    <b-col >
                    </b-col>
                </b-row>
            </form>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            customer_username: '',
            customer_name: '',
            customer_password: '',
            customer_email: '',
            customer_phone: '',
            confirmpassword: "",

            error: null,
            submitted: false,
        };
    },
    async asyncData({
        $productService,
        $userService,
    }) {
        // const membrinserts = await $userService.user.getMemberInsertBy();
        const checkemails = await $userService.user.getCheckEmailBy();
        const checkphones = await $userService.user.getCheckPhoneBy();
        const checkmembers = await $userService.user.getCheckMemberBy();
        const categorys = await $productService.product.getProductCategoryBy();
        const users = await $userService.user.getUserBy();
        return {
            // membrinserts: membrinserts.data ? membrinserts.data : [],
            checkemails: checkemails.data ? checkemails.data : [],
            checkphones: checkphones.data ? checkphones.data : [],
            checkmembers: checkmembers.data ? checkmembers.data : [],
            categorys: categorys.data ? categorys.data : [],
        };
    },
    methods: {
        check() {
            if (password.value == confirmpassword.value && password.value != '' && confirmpassword.value != '') {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'รหัสผ่านตรงกัน';
                document.getElementById("submit").removeAttribute("disabled");
                document.getElementById("submit").classList.remove("disabled");
                return true

            } else if (password.value == '' || confirmpassword.value == '') {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'กรุณากรอกรหัสผ่าน';
                document.getElementById("submit").disabled = true;
                return false

            } else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'รหัสผ่านไม่ตรงกัน';
                document.getElementById("submit").disabled = true;
                return false

            }
        },
        validateBeforeSubmit() {
            this.$validator
                .validateAll()
                .then(function (response) {
                    // Validation success if response === true
                })
                .catch(function (e) {
                    // Catch errors
                })
        },
        async onSubmit(e) {
            e.preventDefault();
            if (this.check()) {
                this.submitted = true;
                try {

                    await this.$axios.post(''+this.$config.BASE_ENDPOINT+'/api/member-insert/', {
                        // console.log("checkphones", checkphones);
                        // this.$axios.post(checkphones , {
                        customer_username: this.customer_username,
                        customer_name: this.customer_name,
                        customer_password: this.customer_password,
                        customer_email: this.customer_email,
                        customer_phone: this.customer_phone,
                        customer_zone_type_code: 'web',

                        // payload,
                    })
                        .then((response) => {
                            console.log("true", response);
                            if (response.data == "EmailErr") {
                                // console.log("Email");
                                this.$swal.fire({
                                    type: 'error',
                                    title: 'อีเมลถูกใช้งานแล้ว',
                                    text: 'กรุณาใช้อีเมลอื่น',
                                })
                            } else if (response.data == "PhoneErr") {
                                // console.log("Phone");
                                this.$swal.fire({
                                    type: 'error',
                                    title: 'เบอร์โทรศัพท์ถูกใช้งานแล้ว',
                                    text: 'กรุณาใช้เบอร์โทรศัพท์อื่น',
                                })
                            } else {
                                this.$swal.fire({
                                    type: 'success',
                                    title: 'สมัครสมาชิกสำเร็จ',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                setTimeout(() => { this.$router.push("/"); }, 2000);
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
        },
    },

};
</script>

<style scoped>
div {
    font-family: "Kanit", sans-serif;
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

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-weight: 500;
    padding-bottom: 20px;
}


/* responsive */
@media only screen and (max-width:1000px) {

    /* Mobile And Tablets */
    .title-product {
        margin-left: 10px;
    }

    .row-form {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    .textbox {
        width: 90%;
    }
}
</style>
