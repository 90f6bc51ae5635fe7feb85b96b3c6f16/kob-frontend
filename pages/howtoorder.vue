<template lang="">
<div>
    <div class="" style="margin: 0 -2em 0 -1em;">
        <b-collapse id="example-collapse" style=" width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto; ">
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
    <b-row style=" margin: 0 -2em 0 -1em;">
        <b-col class="title-product" style="font-size: 16pt;">วิธีการสั่งซื้อ</b-col>
    </b-row>
    <b-row style=" margin: 0 -2em 0 -1em;">
        <b-col cols="12" style="margin-top: 1em;">
            <b-row>
                <v-card-text v-html="company.company_info_how_to_order" class="image-style-align-center"></v-card-text>
            </b-row>
        </b-col>
    </b-row>
    <no-ssr />
</div>
</template>

<script>
export default {
    async asyncData({
        $productService,
        $companyService,
    }) {
        const categorys = await $productService.product.getProductCategoryBy();
        const company = await $companyService.company.getCompany();

        return {
            company: company.data ? company.data[0] : [],
            categorys: categorys.data ? categorys.data : [],
        };
    },
};
</script>

<style >
div {
    font-family: "Kanit", sans-serif;
}

.image-style-align-center>figure {
    text-align: center;
    /* margin-left: auto;
    margin-right: auto; */
    /* color: red; */
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}

#example-collapse>div>ul {
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
