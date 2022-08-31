<template lang="">
<div>
    <!-- <section v-if="nextPage"> -->
    <div v-for="(productpage,index) in productpages" :key="productpage.product_code">
        {{index+1}} : {{productpage.product_name}} : ราคา : {{productpage.product_price}}
    </div>
    <p>{{pages}}</p>
    <span style="float: left;margin-left: 5em; text-decoration: none; color: #333;" disbled>Prev page</span>
    <span style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;">{{pages}}</span>
    <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pages + 1}` , query: {min: '50', max: '60'  }  }" @click="scrollToTop()">{{pages + 1}}</nuxt-link>
    <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pages + 2}` , query: { min: '50', max: '60'  }  }" @click="scrollToTop()">{{pages + 2}}</nuxt-link>
    <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pages + 3}` , query: { min: '50', max: '60'  }  }" @click="scrollToTop()">{{pages + 3}}</nuxt-link>
    <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pages + 5}` , query: { min: '50', max: '60'  }  }" @click="scrollToTop()">{{pages + 4}}</nuxt-link>
    <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pages + 1}` , query: { min: '50', max: '60'  } }" @click="scrollToTop()">Next page</nuxt-link>
    <!-- </section> -->
</div>
</template>

<script>
export default {
    async asyncData({
        $productService,
        $content
    }) {
        // const products = await $productService.product.getProductBy();
        const productpages = await $productService.product.getProductPage({
            page: 1,
            page_min:50,
            page_max:55
        });
        const counts = await $productService.product.getProductCount();
        // console.log("count", counts.data);
        // console.log("productpages",productpages);

        const tenPosts = await $content()
            .only(['author', 'createdAt', 'description', 'path', 'title'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .fetch();
        const nextPage = tenPosts.length === 10;
        const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;

        return {
            // products: products.data ? products.data : [],
            productpages: productpages.data ? productpages.data : [],
            counts: counts.data ? counts.data : [],
            nextPage,
            posts,
            pages: 1,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },

}
</script>

<style lang="">

</style>
