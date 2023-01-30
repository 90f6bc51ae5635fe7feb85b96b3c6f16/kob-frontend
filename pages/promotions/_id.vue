<template>
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
        <b-col class="title-promotion" style="font-size: 16pt;" >
            รายละเอียดโปรโมชั่น - 
        </b-col>
    </b-row>
    <b-row>
        <b-col class="title-image" style="font-size: 16px; ">
            รูปโปรโมชั่น
        </b-col>
    </b-row>
    <b-row>
        <b-col class="image" style="margin-top: 20px; display: flex; ; justify-content: center;" >
            <img :src="`${promotion.promotion_image != '' && promotion.promotion_image != undefined ? `http://141.98.19.44:6201/${promotion.promotion_image}` : `https://picsum.photos/1024/480/?image=12`}`" style="width:80%">
        </b-col>
    </b-row>
    <b-row>
        <b-col class="table-promotion-detail" >
            <table >
                <tbody >
                    <tr>
                        <td style="width:120px; ">รหัสโปรโมชั่น</td>
                        <td>{{promotion.promotion_code}}</td>
                    </tr>
                    <tr>
                        <td>ชื่อโปรโมชั่น</td>
                        <td> {{promotion.promotion_name}}</td>
                    </tr>
                    <tr>
                        <td >ระยะเวลา</td>
                        <td>{{new Date(promotion.promotion_begin_date).toLocaleString()}}   -  {{new Date(promotion.promotion_end_date).toLocaleString()}}</td>
                    </tr>
                    <tr>
                        <td >ประเภทลูกค้า</td>
                        <td>{{promotion.promotion_customer_type}}</td>
                    </tr>
                    <tr>
                        <td style="width:120px;">รายละเอียด</td>
                        <td>{{promotion.promotion_detail}}</td>
                    </tr>
                </tbody>
            </table>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    async asyncData({
        $productService,
        $promotionService,
        params,
    }) {
        const categorys = await $productService.product.getProductCategoryBy();
        const promotion = await $promotionService.promotion.getPromotionByCode({
            promotion_code: params.id
        });
        console.log(promotion);
        return {
            categorys: categorys.data ? categorys.data : [],
            promotion: promotion.data? promotion.data[0]:[],
        };
    },
}
</script>

<style scoped>
/* table design */
.table{
    width: 100%;
    border-collapse: collapse;
    font-family: "Kanit";
}
.table thead{
    background-color: #ececec;
}
.table thead tr th {
    font-size: 16px;
    font-weight: medium;
    letter-spacing: 0.35px;
    opacity: 1;
    padding: 5px;
    vertical-align: top;
    border: 1px solid #e4e4e4;
    text-align: center;
    font-family: "Kanit";
}
.table tbody tr td{
    font-size: 14px;
    letter-spacing: 0.35px;
    font-weight: normal;
    padding: 8px;
    text-align: center;
    border: 1px solid #e4e4e4;
    font-family: "Kanit";
}
/* ----------------------------- */
div {
    font-family: "Kanit", sans-serif;
}

.table-promotion{
    border: 1px solid #e4e4e4;
}
.table-promotion-detail{
    padding-top: 1em;
    font-family: "Kanit";
    /* border-bottom: 1px solid #e4e4e4; */
    padding-bottom: 20px;
}
.image{
    padding-top: 1em;
    font-family: "Kanit";
    /* border-bottom: 1px solid #e4e4e4; */
    padding-bottom: 20px;
}
.title-promotion {
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