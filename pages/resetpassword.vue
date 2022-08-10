<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em">
        <b-collapse id="example-collapse" style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto">
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
        <form class="form" @submit="onSubmit" style="width: 70%">
            <div style="text-align: left; margin-left: -3em; margin-top: -5em">
                <div class="back-login" style="width: 30px;">
                    <a href="/login" style="margin: 0 0 0 0; color: black;">
                        <font-awesome-icon :icon="['fas', 'reply']" style="font-size: 20pt; " />
                    </a>
                </div>
            </div>
            <div style="text-align: center; padding-top: 2em">
                <h3 class="title">ตั้งค่ารหัสผ่านใหม่</h3>
            </div>
            <div class="field">
                <b-form-group id="" label="Email :" label-for="input-1" description="" style="text-align: left">
                    <b-form-input v-model="email" class="input" type="email" placeholder="อีเมล"></b-form-input>
                </b-form-group>
            </div>
            <div class="field">
                <b-button type="submit" variant="success" size="md" style="width: 100%">ต่อไป</b-button>
            </div>
        </form>
    </div>
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
    font-family: "Kanit", sans-serif;
}

.container {
    margin: 0 auto;
    min-height: 40vh;
    max-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5em;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    border-radius: 0.25rem;
    overflow: hidden;
    width: 31.25rem;
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
