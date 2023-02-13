<template>
  <div>
    <b-row class="mt-3 mt-md-5">
      <b-col md="6">
        <h4>รายการสินค้า</h4>
      </b-col>
      <b-col md="6" class="text-left text-md-right">
        HOME / SHOP / <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="4" lg="3" class="mt-4">
        <b-button
          variant="outline-secondary"
          class="d-flex align-items-center justify-content-between mb-0"
          style="border-color: #e5e5e5; box-shadow: unset"
          block
          squared
          v-b-toggle.collapse
        >
          {{ selectedCategory }}
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse" class="filter-list-group-panel">
          <b-list-group class="rounded-0">
            <b-list-group-item
              v-for="(category, idx) in categorys"
              :key="idx"
              class="px-3 py-2"
              :href="`/product?category=${category.product_category_code}`"
            >
              {{ category.product_category_name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
        <p class="mt-3">FLITER BY</p>
        <b-button
          variant="outline-secondary"
          class="d-flex align-items-center justify-content-between mb-0"
          style="border-color: #e5e5e5; box-shadow: unset"
          block
          squared
          v-b-toggle.collapse1
        >
          BRANDS
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse1" class="filter-panel px-3 pb-3">
          <b-form-checkbox
            v-for="(brand, idx) in brands"
            :key="idx"
            class="mt-3"
            v-model="brand.selected"
            @change="filterBrand()"
          >
            {{ brand.product_brand_name }}
          </b-form-checkbox>
        </b-collapse>
        <b-button
          variant="outline-secondary"
          class="d-flex align-items-center justify-content-between mb-0"
          style="border-color: #e5e5e5; box-shadow: unset"
          block
          squared
          v-b-toggle.collapse2
        >
          PRICE
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse2" class="filter-panel px-3 pb-3 text-center">
          <b-form-input
            type="number"
            class="mt-3"
            v-model="min"
            placeholder="ใส่ราคาต่ำสุด"
          />
          <div class="mt-3">ถึง</div>
          <b-form-input
            type="number"
            class="mt-3"
            v-model="max"
            placeholder="ใส่ราคาสูงสุด"
          />
          <p id="demo"></p>
          <b-button
            type="submit"
            class="mt-3"
            variant="success"
            @click="filterPrice()"
          >
            ยืนยัน
          </b-button>
        </b-collapse>
        <b-button
          type="submit"
          variant="danger"
          class="mt-2"
          block
          squared
          @click="resetFilter()"
        >
          ลบตัวกรอง
        </b-button>
      </b-col>
      <b-col md="8" lg="9" class="mt-4">
        <b-row
          no-gutters
          class="justify-content-around justify-content-lg-start"
        >
          <b-col
            cols="6"
            sm="4"
            md="3"
            style="min-width: 210px"
            v-for="(product, idx) in products"
            :key="idx"
          >
            <card-product :item="product" :rating="true" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <product-pagination
      :counts="counts"
      :keyword="keyword"
      :min="min"
      :max="max"
      :brand="brand"
    />
  </div>
</template>

<script>
import ProductPagination from "@/components/ProductPagination.vue";

export default {
  components: {
    ProductPagination,
  },
  computed: {
    productPageUrl() {
      let params = [];
      let { category } = this.$route.query;
      let selected_brands = this.brands.filter((val) => val.selected);

      if (category) params.push(`category=${category}`);
      if (selected_brands.length)
        params.push(
          `brand=${selected_brands
            .map((item) => item.product_brand_code)
            .join(",")}`
        );
      if (this.min) params.push(`min=${this.min}`);
      if (this.max) params.push(`max=${this.max}`);

      return `/product${params.length ? `?${params.join("&")}` : ""}`;
    },
    selectedCategory() {
      let category = this.categorys.find(
        (val) => val.product_category_code === this.$route.query.category
      );

      return category ? category.product_category_name : "CATEGORIES";
    },
  },
  data() {
    return {
      keyword: "",
      min: "",
      max: "",
      page_no: 1,
      total_page: 1,
    };
  },
  async asyncData({ $productService, query }) {
    try {
      const { brand, category, keyword, min, max } = query;

      //should merge to 1 request ==>
      const products = await $productService.product.getProductPage({
        category,
        keyword,
        product_page: 1,
        page_min: min,
        page_max: max,
        page_brand: brand,
      });

      const counts = await $productService.product.getProductCount({
        category,
        count_keyword: keyword,
        count_min: min,
        count_max: max,
        count_brand: brand,
      });
      //<== should merge to 1 request

      const brands = await $productService.product.getProductBandBy();
      const categorys = await $productService.product.getProductCategoryBy();

      if (brand) {
        let selected_brands = brand.split(",");

        brands.data.forEach((item) => {
          item.selected = selected_brands.includes(item.product_brand_code);
        });
      }

      return {
        brands: brands.data ? brands.data : [],
        categorys: categorys.data ? categorys.data : [],
        counts: counts.data ? counts.data : [],
        products: products.data ? products.data : [],
        min,
        max,
        keyword,
      };
    } catch (error) {
      //handle error state redirect to error page
      console.log(error);

      return {
        brands: [],
        categorys: [],
        counts: [],
        products: [],
      };
    }
  },
  methods: {
    filterBrand() {
      window.location.href = this.productPageUrl;
    },
    filterPrice() {
      document.getElementById("demo").innerHTML = "";

      if (this.min && this.max && parseInt(this.min) > parseInt(this.max)) {
        document.getElementById("demo").innerHTML =
          "ใส่จำนวนเงิน น้อยสุด และ มากสุด !";
      } else {
        window.location.href = this.productPageUrl;
      }
    },
    resetFilter() {
      window.location.href = `/product`;
    },
  },
};
</script>