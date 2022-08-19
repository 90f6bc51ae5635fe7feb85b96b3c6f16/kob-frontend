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

        <b-col cols="12">
            <form action="" @submit="onSubmit">
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                ชื่อ <span style="color: red;">*</span>
                                <b-form-input v-model="firstname" type="text" class="" placeholder="ชื่อ" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกชื่อ');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                นามสกุล <span style="color: red">*</span>
                                <b-form-input v-model="lastname" type="text" class="" placeholder="นามสกุล" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกนามสกุล');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Email <span style="color: red">*</span>
                                <b-form-input v-model="email" class="" type="email" placeholder="อีเมล" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกอีเมล');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Password <span style="color: red">*</span>
                                <b-form-input v-model="password" type="password" placeholder="รหัสผ่าน" required pattern=".{6}" oninvalid="setCustomValidity('กรุณากรอกรหัสผ่าน อย่างน้อย 6 ตัว');" oninput="setCustomValidity('');">
                                </b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Confirm Password <span style="color: red">*</span>
                                <b-form-input v-model="confirmpassword" type="password" placeholder="ยืนยันรหัสผ่าน" required pattern=".{6}" oninvalid="setCustomValidity('ยืนยันรหัสผ่าน อย่างน้อย 6 ตัว');" oninput="setCustomValidity('');">
                                </b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                หมายเลขโทรศัพท์ <span style="color: red">*</span>
                                <b-form-input v-model="phone" type="phone" class="" placeholder="หมายเลขโทรศัพท์" required pattern="[0-9]{10}" oninvalid="setCustomValidity('กรุณากรอกเบอร์โทรทัพท์ 0-9');" oninput="setCustomValidity('');">
                                </b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                ที่อยู่ <span style="color: red">*</span>
                                <b-form-input v-model="address" type="text" class="" placeholder="ที่อยู่" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณากรอกที่อยู่');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                วันเกิด <span style="color: red">*</span>
                                <b-form-input id="" v-model="dates" type="date" class="" placeholder="วันเกิด" required pattern=".{1,}" oninvalid="setCustomValidity('กรุณาเลือกวันเดือนปีเกิด');" oninput="setCustomValidity('');"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4">
                    </b-col>
                    <b-col cols="2">
                        <b-button type="submit" variant="success" size="md" style="width: 100%;">Save</b-button>
                    </b-col>
                    <b-col cols="2">
                        <b-button type="reset" variant="warning" size="md" style="width: 100%;">Reset</b-button>
                    </b-col>
                    <b-col cols="4">
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
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            phone: "",
            address: "",
            dates: "",
            error: null,
            submitted: false,
        };
    },
    async asyncData({
        $productService,
        $userService,
    }) {
        const membrinserts = await $userService.user.getMemberInsertBy();
        const checkemails = await $userService.user.getCheckEmailBy();
        const checkphones = await $userService.user.getCheckPhoneBy();
        const checkmembers = await $userService.user.getCheckMemberBy();
        const categorys = await $productService.product.getProductCategoryBy();
        const users = await $userService.user.getUserBy();
        return {
            membrinserts: membrinserts.data ? membrinserts.data : [],
            checkemails: checkemails.data ? checkemails.data : [],
            checkphones: checkphones.data ? checkphones.data : [],
            checkmembers: checkmembers.data ? checkmembers.data : [],
            categorys: categorys.data ? categorys.data : [],
        };
    },
    methods: {
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
            this.submitted = true;
            const payload = {
                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    phone: this.phone,
                    address: this.address,
                    dates: this.dates,
                },
            };
            // try {
            //     await this.$auth.loginWith("local", payload);
            //     this.$router.push("/home");
            // } catch (error) {
            //     this.error = error;
            // }

            // this.$axios.post('http://localhost:3001/api/member-insert/', {
            //         // console.log("checkphones", checkphones);
            //         // this.$axios.post(checkphones , {
            //         // member_code: "12312",
            //         member_name: this.firstname,
            //         member_firstname: this.firstname,
            //         member_lastname: this.lastname,
            //         member_email: this.email,
            //         member_password: this.password,
            //         member_phone: this.phone,
            //         member_address: this.address,
            //         member_birthdate: this.dates,
            //         name: 'test',
            //         // payload,
            //     })
            //     .then(function (response) {
            //         console.log(response);
            //         this.$router.push('/home')

            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

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
</style>
