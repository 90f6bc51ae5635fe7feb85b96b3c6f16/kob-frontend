export default (axios) => ({
    getProductBy: (data) => axios.get('/api/product'),
    getProductByCode: (data) => axios.get(`/api/product/${data.product_code}`),
    getProductPage: (data) => axios.get(`/api/product/page/${data.page},${data.page_brand},${data.page_min},${data.page_max}`),
    getProductCount: (data) => axios.get(`/api/product-count/${data.count_keyword},${data.count_brand},${data.count_min},${data.count_max}`),
    // getProductPaginationByCode: (data) => axios.get(`/api/product-pagination/${data.page
      // ,data.pag1
    // }`),
    // updateProductByCode: (data) => axios.post(`/api/product/${data.product_code}`,JSON.stringify(data)),
    getProductCategoryBy: (data) => axios.get('/api/category'),
    getProductCategoryByCode: (data) => axios.get(`/api/category/${data.product_category_code}`),
    getProductBandBy: (data) => axios.get(`/api/product-brand`),
    getProductSearchByCode: (data) => axios.get(`/api/product-search/${data.search_page},${data.search_keyword},${data.search_page_brand},${data.search_page_min},${data.search_page_max}`),
    getProductImageByCode: (data) => axios.get(`/api/product-sub-img/${data.product_code}`),

  })
