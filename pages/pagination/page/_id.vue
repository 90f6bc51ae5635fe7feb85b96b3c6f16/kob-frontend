<template lang="">
<div>
    <!-- <section id="prev-next"> -->
    <div v-for="(productpage,index) in productpages" :key="productpage.product_code">
        {{index+1}} : {{productpage.product_name}} : ราคา : {{productpage.product_price}}
    </div>
    <p>{{pageNo}}</p>
    <div v-if="pageNo == 1">
        <span style="float: left;margin-left: 5em; text-decoration: none; color: #333;" disbled>Prev page</span>
        <span style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;">{{pageNo}}</span>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo+1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo+1}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 3}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 3}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 4}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 4}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == 2">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo-1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}" @click="scrollToTop()">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 3}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 3}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == 3">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo - 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo -1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}" @click="scrollToTop()">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 2}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <!-- <div v-if="pageNo == 4">
        <nuxt-link style="float: left;margin-left: 10em;" :to="prevLink">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 3}`}">{{pageNo - 3}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -2}`}">{{pageNo -2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo-1}`}">{{pageNo-1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}`}">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 10em;" :to="{ path: `/pagination/page/${pageNo + 1}`}">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == 5">
        <nuxt-link style="float: left;margin-left: 10em;" :to="prevLink">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 4}`}">{{pageNo - 4}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -3}`}">{{pageNo -3}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo- 2}`}">{{pageNo- 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 1}`}">{{pageNo - 1}}</nuxt-link>
        <span style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;">{{pageNo}}</span>
        <span style="float: right;margin-right: 10em;">Next page</span>
    </div> -->
    <div v-if="pageNo > 3 && pageNo != counts-2 && pageNo != counts-1 && pageNo != counts">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo - 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo -1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}" @click="scrollToTop()">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 2}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == counts-2 && pageNo != 3">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo-2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo-2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo-1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo-1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}" @click="scrollToTop()">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 2}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == counts-1">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 3}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo - 3}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo -2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo-1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo-1}}</nuxt-link>
        <nuxt-link style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo}`}" @click="scrollToTop()">{{pageNo}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo + 1}}</nuxt-link>
        <nuxt-link style="float: right;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo + 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Next page</nuxt-link>
    </div>
    <div v-if="pageNo == counts">
        <nuxt-link style="float: left;margin-right: 5em;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">Prev page</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 4}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo - 4}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo -3}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo -3}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo- 2}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo- 2}}</nuxt-link>
        <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" :to="{ path: `/pagination/page/${pageNo - 1}` , query: { brand: brand,min: min, max: max  } }" @click="scrollToTop()">{{pageNo - 1}}</nuxt-link>
        <span style="background-color: pink; margin-left: 4.335%; margin-right: 4.335%;" @click="scrollToTop()">{{pageNo}}</span>
        <span style="float: right;margin-right: 5em;">Next page</span>
    </div>

    <!-- <nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" v-if="pageNo == ''" :to="{ path: `/pagination/page/${pageNo + 1}`}">{{pageNo + 1}}</nuxt-link>
<nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" v-if="nextPage == ''" :to="{ path: `/pagination/page/${pageNo + 2}`}">{{pageNo + 2}}</nuxt-link>
<nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" v-if="nextPage == ''" :to="{ path: `/pagination/page/${pageNo + 3}`}">{{pageNo + 3}}</nuxt-link>
<nuxt-link style=" margin-left: 4.335%; margin-right: 4.335%;" v-if="nextPage == ''" :to="{ path: `/pagination/page/${pageNo + 4}`}">{{pageNo + 4}}</nuxt-link>
<nuxt-link style="float: right;margin-right: 15em;" v-if="nextPage == ''" :to="{ path: `/pagination/page/${pageNo + 1}`}">Next page</nuxt-link> -->
    <!-- </section> -->
</div>
</template>

<script>
import vPagination from "vue-plain-pagination";
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
        const productpages = await $productService.product.getProductPage({
            page: parseInt(params.id),
            page_brand:brand,
            page_min:min,
            page_max:max
        });
        console.log("b",brand);
        // const paginations = await $productService.product.getProductPaginationByCode({
            // page: parseInt(params.id)
            // ,pag1: parseInt(query.search)
            // , page1: "เล็บ"
        // });
        const counts = await $productService.product.getProductCount();
        console.log("counts",counts.data);
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
            // products: products.data ? products.data : [],
            productpages: productpages.data ? productpages.data : [],
            counts: counts.data ? counts.data : [],
            nextPage,
            posts,
            pageNo,
            perPage: 10,
            min,
            max,
            brand,

        };
    },
    computed: {
        prevLink() {
            return this.pageNo === 2 ? '/pagination' : `/pagination/page/${this.pageNo - 1}`
        },
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
