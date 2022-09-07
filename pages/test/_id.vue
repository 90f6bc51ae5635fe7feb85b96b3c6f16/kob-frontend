<template lang="">
<div>
    <div>
        <div v-for="product in products" :key="product.product_code">
            {{product.product_name}}
        </div>
        <div v-for="brand in brands" :key="brand.product_brand_code">
            <input type="checkbox" v-model="selected" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`">{{brand.product_brand_name}}</input>
        </div>
        <input type="submit" name="submitBrand" @click="submitBrand()">
        selected : {{selected}}
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            selected: [], // Must be an array reference!
            options: [{
                    text: 'Orange',
                    value: 'orange'
                },
                {
                    text: 'Apple',
                    value: 'apple'
                },
                {
                    text: 'Pineapple',
                    value: 'pineapple'
                },
                {
                    text: 'Grape',
                    value: 'grape'
                }
            ]
        }
    },
    async asyncData({
        $productService,
        $content,
        params,
        route,
        query,
        error
    }) {
        const datas = query.selected;
        const products = await $productService.product.getProductPage({
            product_page: params.id,
            // page_min: 'undefined',
            // page_max: 'undefined',
            page_brand: datas,
        });
        const brands = await $productService.product.getProductBandBy();
        console.log("query.selected", query.selected);
        return {
            products: products.data ? products.data : [],
            brands: brands.data ? brands.data : [],
            datas,
        }
    },
    methods: {
        submitBrand() {
            console.log("this.selected", this.selected);
            this.datas.push(this.selected);
            // this.datas.selected.push({this.datas.selected}),
            return this.$router.push({
                    path: `/test/1`,
                    query: {
                        selected: this.selected,
                    },
                },
                () => {
                    this.$router.app.refresh()
                    // window.location.reload(true)
                }
            );
        }
    },
}
</script>

<style lang="">

</style>
