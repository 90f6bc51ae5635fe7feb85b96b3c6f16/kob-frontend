export default (axios) => ({
  getProductBy: (data) => axios.get('/api/product'),
  getProductRandom: (data) => axios.get('/api/product-random'),
  getProductByCode: (data) => axios.get(`/api/product/${data.product_code}`),
  getProductInclude: (data) => axios.get(`/api/product-include/${data.product_code}`),
  getProductIncludeByCode: (data) => axios.get(`/api/product-include-bycode/${data.product_code}`),
  getProductIncludeByName: (data) => axios.get(`/api/product-include-name/${data.product_code}`),
  // getProductPage: (data) => axios.get(`/api/product/page/${data.product_page},${data.page_brand},${data.page_min},${data.page_max}`),
  getProductPage: (data) => axios.get(`/api/product/page/${data.product_page},${data.page_min},${data.page_max},${data.page_brand}`),
  getProductCount: (data) => axios.get(`/api/product-count/${data.count_category},${data.count_keyword},${data.count_min},${data.count_max},${data.count_brand}`),
  // getProductPaginationByCode: (data) => axios.get(`/api/product-pagination/${data.page
  // ,data.pag1
  // }`),
  // updateProductByCode: (data) => axios.post(`/api/product/${data.product_code}`,JSON.stringify(data)),
  getProductCategoryBy: (data) => axios.get('/api/category'),
  getProductCategoryByCode: (data) => axios.get(`/api/category/${data.category_page},${data.category_code},${data.category_min},${data.category_max},${data.category_brand}`),
  getProductCategoryByCodeRandom: (data) => axios.get(`/api/category/${data.category_code}`),
  getProductCategoryByCategoryName: (data) => axios.get(`/api/category-name/${data.category_name}`),
  getProductBandBy: (data) => axios.get(`/api/product-brand`),
  getProductSearchByCode: (data) => axios.get(`/api/product-search/${data.search_page},${data.search_keyword},${data.search_page_min},${data.search_page_max},${data.search_page_brand}`),
  getProductImageByCode: (data) => axios.get(`/api/product-sub-img/${data.product_code}`),
})
