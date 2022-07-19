<template lang="">
<div>
    <div v-for="category in categorys" :key="category.product_category_code">
        <ul>
            <li>
                <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }">
                    {{category.product_category_name}}
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
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

<style lang="">

</style>
