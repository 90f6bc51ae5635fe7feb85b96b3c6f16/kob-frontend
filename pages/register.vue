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
                                <b-form-input v-model="text" type="text" class="" placeholder="ชื่อ"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                นามสกุล <span style="color: red;">*</span>
                                <b-form-input v-model="text" type="text" class="" placeholder="นามสกุล"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Email <span style="color: red;">*</span>
                                <b-form-input v-model="email" class="" type="email" placeholder="อีเมล"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Password <span style="color: red;">*</span>
                                <b-form-input v-model="password" class="" type="password" placeholder="รหัสผ่าน"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                Confirm Password <span style="color: red;">*</span>
                                <b-form-input v-model="password" class="" type="password" placeholder="ยืนยันรหัสผ่าน"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                หมายเลขโทรศัพท์ <span style="color: red;">*</span>
                                <b-form-input v-model="number" type="number" class="" placeholder="หมายเลขโทรศัพท์"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                ที่อยู่ <span style="color: red;">*</span>
                                <b-form-input v-model="text" type="text" class="" placeholder="ที่อยู่"></b-form-input>
                            </template>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="" label="" label-for="" description="" label-for="input-customer-name" style="text-align: left;">
                            <template v-slot="label">
                                วันเกิด <span style="color: red;">*</span>
                                <b-form-datepicker id="" v-model="date" type="date" class="" placeholder="วันเกิด"></b-form-datepicker>
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
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault()

            const payload = {
                data: {
                    email: this.email,
                    password: this.password,
                },
            }
            console.log('payload', payload)
            try {
                await this.$auth.loginWith('local', payload)
                this.$router.push('/home')
            } catch (error) {
                this.error = error
            }
        },
    },
    async asyncData({
        $axios,
        params
    }) {
        const categorys = await $axios.$get('http://127.0.0.1:3001/api/product-category');
        return {
            categorys
        };
    },

}
</script>

<style scoped>
div {
    font-family: 'Kanit', sans-serif;
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
