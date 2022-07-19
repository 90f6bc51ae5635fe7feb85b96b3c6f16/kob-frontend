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
        <b-col class="title-product" style="font-size: 16pt;">ติดต่อเรา</b-col>
    </b-row>
    <b-row style=" margin: 0 -2em 0
  -1em;">
        <b-col cols="12" style="margin-top: 1em;">
            <b-row>
                <b-col cols="2"> </b-col>
                <b-col cols="4">
                    <h5>ที่อยู่ : <span>sadasdadas</span></h5>
                    <h5>เบอร์โทรศัพท์ : <span>099-9999999</span></h5>
                    <h5>เบอร์แฟกซ์ : <span>044-444444</span></h5>
                    <h5>ไอดีไลน์ : <span>sadasdadas</span></h5>
                    <h5>อีเมล : <span>asd@asd.com</span></h5>
                </b-col>
                <b-col cols="4">
                    <h5>ไลน์ : </h5>
                    <div style="margin: -3em 0 0 4em;">
                        <img style="width:150px;height:150px;" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                    </div>
                </b-col>
                <b-col cols="2">
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" style="margin-top: 3em;">
                    <div class="mapouter" style="margin: 0 0 0 0;">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=REVELSOFT&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">
                                FNF
                            </a>
                        </div>

                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
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
};
</script>

<style scoped>
div {
    font-family: "Kanit", sans-serif;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
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

/* map */
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 400px;
}

.gmap_iframe {
    width: 100% !important;
    height: 400px !important;
}
</style>
