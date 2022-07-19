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
    <b-row style="margin: 0 -2em 0 -1em;">
        <b-col class="title-product" style="font-size: 16pt;">ข้อมูลผู้ใช้</b-col>
    </b-row>
    <b-row style="padding-top: 30px; margin: 0 -3em 0 -1.9em;">
        <b-col cols="3">
            <ul class="w3-ul" style="">
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
        <b-col cols="9" style="">
            <b-form>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group-1" label="First Name:" label-for="input-1" description="">
                            <b-form-input id="input-1" v-model="form.email" placeholder="ชื่อ" required></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                            <b-form-input id="input-2" v-model="form.name" placeholder="นาสกุล" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="BIRTH DATE:" label-for="input-2">
                            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2" placeholder="วันเกิด"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="input-group-1" label="Email:" label-for="input-1" description="We'll never share your email with anyone else.">
                            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="อีเมล" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="PHONE NUMBER:" label-for="input-2">
                            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="เบอร์โทรศัพท์" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-button variant="primary" size="md" style="padding-left: 40px; padding-right: 40px">Save</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
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
            show: true,
        };
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

ul {
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

#example-collapse {
    padding-right: 0;
}

#example-collapse a {
    text-align: center;
}

#example-collapse a:hover {
    color: #fff;
    background-color: #39b54a !important;
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
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}
</style>
