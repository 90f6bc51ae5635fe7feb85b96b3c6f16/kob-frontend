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
      <div>
         <b-row style=" margin: 0 -2em 0
            -1em;">
            <b-col class="title-promotion" style="font-size: 16pt;">โปรโมชั่น</b-col>
         </b-row>
         <b-row class="row-promotions" style=" padding-top: 30px; display: flex; flex-wrap:wrap">
            <b-col class="card-promotions" v-for="(promotion, idx) in promotions" :key="idx"> 
               <b-card 
                  :img-src="`${promotion.promotion_image != '' && promotion.promotion_image != undefined ? `http://141.98.19.44:6201/${promotion.promotion_image}` : `https://picsum.photos/1024/480/?image=12`}`"
                  img-alt="Image"
                  img-top
                  style="max-width:30rem; display:flex; width:500px; margin-bottom:20px"
               >
                  <b-row class="card-name" style="border-bottom: 1px solid #e4e4e4; margin-bottom:10px">
                     <div style="font-size:18px; margin-bottom:10px">
                        <b-card-text>
                           {{promotion.promotion_name}}
                        </b-card-text>
                     </div>
                  </b-row>
                  <b-row class="card-text" style="margin-bottom:10px; padding-left:30px">
                     <table >
                        <tbody>
                           <tr>
                              <td style="width:120px;">ระยะเวลาเริ่มต้น</td>
                              <td>{{new Date(promotion.promotion_begin_date).toLocaleString()}}</td>
                           </tr>
                           <tr>
                              <td style="width:120px">ระยะเวลาสิ้นสุด</td>
                              <td>{{new Date(promotion.promotion_end_date).toLocaleString()}}</td>
                           </tr>
                        </tbody>
                     </table>
                  </b-row>
                  <b-row class="card-button" style="padding-left:30px">
                     <nuxt-link :to="{path:`/promotions/${promotion.promotion_code}`}">
                        <b-button class="button" variant="outline-info" style="">
                           รายละเอียดเพิ่มเติม
                        </b-button>
                     </nuxt-link>
                  </b-row>
               </b-card>
            </b-col>
         </b-row>
      </div>
  </div>
</template>

<script>
export default {
   async asyncData({
      $productService,
      $promotionService
   }) {
      const categorys = await $productService.product.getProductCategoryBy();
      const promotions = await $promotionService.promotion.getPromotion();
      
      return{
         categorys: categorys.data ? categorys.data : [],
         promotions: promotions.data? promotions.data: [],   
      }
   }
}
</script>

<style scoped>

div{
    font-family: "Kanit", sans-serif;
    
}
.cardpromotion{
   display: flex;
   flex-direction: column;
}
/* --------------------------------------- */
.title-promotion{
   padding-top: 1em;
   font-family: "Kanit";
   font-size: 1em;
   font-weight: 500;
   border-bottom: 1px solid #e4e4e4;
   padding-bottom: 20px;
}
/* --------------------------------------- */
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