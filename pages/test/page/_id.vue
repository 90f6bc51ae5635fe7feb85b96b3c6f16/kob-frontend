<template lang="">
<div>
    <div>
        <div v-for="brand in brands" :key="brand.product_brand_code">
            <input type="checkbox" :name="`${brand.product_brand_code}`" :value="`${brand.product_brand_code}`" v-model="checkedNames" @change="check_brand($event)" />
            {{brand.product_brand_code}} : {{checkedNames}}
        </div>
        {{query.brand}}
        <input type="submit" name="submitBrand" @click="submitBrand()">
        selected : {{selected}}
    </div>
    <ul style="margin-top: 1em;
                              justify-content: center;
                              list-style-type: none;
                              width: 100%;
                              display: flex;
                              padding: 1em 1em;
                              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
                    ">
        <li style="margin: 0 0.5em 0 0;">
            <nuxt-link class="btn btn-outline-primary" style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/test/page/${pageNo -1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #555555; font-size: 10pt" />
            </nuxt-link>
        </li>
        <li style="margin: 0 0 0 0.5em;">
            <nuxt-link class="btn btn-outline-primary" style="float: right;" :to="{ path: `/test/page/${pageNo + 1}`, query: { keyword: keyword, brand: brand, min: min, max: max  }}">
                <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #555555; font-size: 10pt" />
            </nuxt-link>
        </li>
    </ul>
    <div v-for="product in products" :key="product.product_code">
        {{product.product_name}}
    </div>
</div>
</template>

<script>
export default {

    async asyncData({
        $productService,
        $content,
        params,
        route,
        query,
        error
    }) {
        const brand = query.brand;
        const min = query.min;
        const max = query.max;
        const keyword = query.keyword;
        let checkedNames = [];
        if(brand != null){
          checkedNames = brand;
        }
        const products = await $productService.product.getProductPage({
            product_page: parseInt(params.id),
            page_min: min,
            page_max: max,
            page_brand: brand,
        });
        const categorys = await $productService.product.getProductCategoryBy();
        const brands = await $productService.product.getProductBandBy();
        const counts = await $productService.product.getProductCount({
            count_keyword: encodeURIComponent(keyword),
            count_brand: brand,
            count_min: min,
            count_max: max
        });
        // console.log("counts", counts.data);
        const pageNo = parseInt(params.id);
        const tenPosts = await $content()
            .only(['author', 'createdAt', 'description', 'path', 'title'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .skip(9 * (pageNo - 1))
            .fetch();
        const nextPage = tenPosts.length === 10;
        const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
        return {
            products: products.data ? products.data : [],
            categorys: categorys.data ? categorys.data : [],
            brands: brands.data ? brands.data : [],
            counts: counts.data ? counts.data : [],
            nextPage,
            posts,
            pageNo,
            perPage: 10,
            min,
            max,
            brand,
            query,
            keyword,
            checkedNames,
        };
    },
    data() {
        return {
            // checkedNames,
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
    methods: {
        check_price() {
            if (parseInt(this.min) > parseInt(this.max)) {
                document.getElementById("demo").innerHTML = "ใส่จำนวนเงิน น้อยสุด และ มากสุด !";
            } else if (parseInt(this.min) <= parseInt(this.max) || (this.min == '' && this.max != '') || (this.min != '' && this.max == '')) {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.brand == '') {
                    this.brand = 'undefined';
                }
                document.getElementById("demo").innerHTML = "";
                return this.$router.push({
                        path: `/test/page/1`,
                        query: {
                            brand: this.brand,
                            min: this.min,
                            max: this.max
                        },
                    },
                    () => {
                        this.$router.app.refresh()
                    }
                );
            } else {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                if (this.brand == '') {
                    this.brand = 'undefined';
                }
                return this.$router.push({
                        path: `/test/page/1`,
                        query: {
                            brand: this.brand,
                            min: this.min,
                            max: this.max,
                        },
                    },
                    () => {
                        this.$router.app.refresh()
                    }
                );
            }
        },
        check_brand() {
            // this.checkedNames.push(this.query.brand);
            if (this.checkedNames != '') {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                return this.$router.push({
                        path: `/test/page/1`,
                        query: {
                            brand: this.checkedNames,
                            min: this.min,
                            max: this.max,
                        },
                    },
                    () => {
                        this.$router.app.refresh()
                        // window.location.reload(true)
                    }
                );
            } else if (this.checkedNames == '') {
                if (this.min == '') {
                    this.min = 'undefined';
                }
                if (this.max == '') {
                    this.max = 'undefined';
                }
                return this.$router.push({
                        path: `/test/page/1`,
                        query: {
                            min: this.min,
                            max: this.max
                        },
                    },
                    () => {
                        this.$router.app.refresh()
                        // window.location.reload(true)
                    }
                );
            }
        },
        reset_data() {
            return this.$router.push({
                    path: `/product`,
                },
                () => {
                    window.location.reload(true)
                    // this.$router.app.refresh()
                }
            );
        },
        reset_filter() {
            return this.$router.push({
                    path: `/product/`,
                },
                () => {
                    // this.$router.app.refresh()
                    window.location.reload(true)
                }
            );
        },
    },
}
</script>

<style lang="">

</style>
