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
    <div class="container">
        <form class="form" @submit="onSubmit" style="width: 30%;">
            <div style="margin: 0 0 1em 0;">
                <b-img src="~/assets/Logo.png" alt="Image" class="rounded" style="width:100%; height: auto; margin: 0 0 0 0;"></b-img>
            </div>

            <h3 class="title">Log In</h3>
            <div class="field">
                <b-form-group id="" label="" label-for="input-1" description="" style="text-align: left;">
                    <template v-slot="label">
                        Email
                        <b-form-input v-model="email" class="input" type="email" placeholder="อีเมล"></b-form-input>
                    </template>
                </b-form-group>
            </div>
            <div class="field">
                <b-form-group id="" label="" label-for="input-1" description="" style="text-align: left;">
                    <template v-slot="label">
                        Password
                        <b-form-input v-model="password" class="input" type="password" placeholder="รหัสผ่าน"></b-form-input>
                    </template>
                </b-form-group>
            </div>
            <div class="field">
                <b-button type="submit" variant="success" size="md" style="width: 100%;">Login</b-button>
            </div>
            <div class="field" style="margin-top: 0.5em; text-align: left;">
                <input type="checkbox" checked="checked" name="remember"> Remember Me
            </div>
            <div class="field">
                <div style="float:left;">
                    <a href="/register" variant="primary" size="md" style="">Register</a>
                </div>
                <div style="float: right;">
                    <span class="" style="text-align: right;">Forgot <a href="/resetpassword">password ?</a></span>
                </div>
            </div>
            <div class="field">
                <p style="margin-top: 2em; background-color: red; color: #fff; border-radius: 5px;" v-if="error" class="notification is-danger">{{ error.message }}</p>
            </div>
        </form>
    </div>

</div>
</template>

<script>
export default {
    middleware: 'isLoggedIn',
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

.container {

    margin: 10em 0 13em 0;
    /* min-height: 100vh; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
}

.form {
    width: 240px;
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
