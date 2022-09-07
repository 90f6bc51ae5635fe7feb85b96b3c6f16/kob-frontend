<template>
<div>
    <!-- 1 -->
    <!-- <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group id="checkbox-group-1" v-model="selected" :options="`${this.brands.product_brand_code}`" :aria-describedby="ariaDescribedby" :name="`${this.brands.product_brand_code}`"></b-form-checkbox-group>
         <!-- <input type="radio" id="id1" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" v-model="checkedNames" style="margin: 0 5px 0 10px" @change="check_brand($event)" /> -->
    <!-- </b-form-group> -->

    <!-- 2 -->
    <!-- <!-- <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }"> -->
    <!-- <b-form-checkbox-group id="checkbox-group-2" v-model="selected" :aria-describedby="ariaDescribedby" name="flavour-2"> -->
    <!-- <input type="checkbox" v-model="selected" value="orange" @change="checkbox($event)">Orange</input>
            <input type="checkbox" v-model="selected" value="apple" @change="checkbox($event)">apple</input>
            <input type="checkbox" v-model="selected" value="pineapple" @change="checkbox($event)">pineapple</input>
            <input type="checkbox" v-model="selected" value="grape" @change="checkbox($event)">grape</input> -->
    <!-- <li style="
                padding: 5px;
                font-size: 12pt;
                color: #777777;
                padding-left: 10px;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
              " v-for="brand in brands" :key="brand.product_brand_code">
        <input type="radio" id="id1" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" v-model="checkedNames" style="margin: 0 5px 0 10px" @change="check_brand($event)" />
        {{ brand.product_brand_name }}
    </li> -->
    <div v-for="product in products" :key="product.product_code">
        {{product.product_name}}
    </div>
    <div v-for="brand in brands" :key="brand.product_brand_code">
        <input type="checkbox" v-model="selected" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" @change="submitBrand($event)">{{brand.product_brand_name}}</input>
    </div>
    <!-- <b-form-checkbox v-model="selected" value="Orange">Orange</b-form-checkbox> -->
    <!-- <b-form-checkbox value="apple">Apple</b-form-checkbox> -->
    <!-- <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox> -->
    <!-- <b-form-checkbox value="grape">Grape</b-form-checkbox> -->
    <!-- </b-form-checkbox-group> -->
    <input type="submit" name="submitBrand" @click="submitBrand()">
    <!-- </b-form-group> -->
    selected : {{selected}}
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
        const brands = await $productService.product.getProductBandBy();
        const products = await $productService.product.getProductPage({
            product_page: 1,
            page_min: 'undefined',
            page_max: 'undefined',
            page_brand: query.selected,
        });
        console.log("query.selected", query.selected);
        return {
            products: products.data ? products.data : [],
            brands: brands.data ? brands.data : [],
            datas,
        }
    },
    methods: {
        submitBrand() {
            // console.log("this.selected", this.selected);
            // this.datas.push(this.selected);
            // this.datas.selected.push({this.datas.selected}),
            if (this.selected != '') {
                return this.$router.push({
                        path: `/test`,
                        query: {
                            selected: this.selected,
                        },
                    },
                    () => {
                        this.$router.app.refresh()
                        // window.location.reload(true)
                    }
                );
            } else if (this.selected == '') {
                return this.$router.push({
                        path: `/test`,
                    },
                    () => {
                        this.$router.app.refresh()
                        // window.location.reload(true)
                    }
                );
            }
        }
    },

}
</script>
