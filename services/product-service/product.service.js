export default (axios) => ({
    getProductBy: (data) => axios.get('/api/product'),
    getProductByCode: (data) => axios.get(`/api/product/${data.product_code}`),
    // updateProductByCode: (data) => axios.post(`/api/product/${data.product_code}`,JSON.stringify(data)),
    getProductCategoryBy: (data) => axios.get('/api/category'),
    getProductCategoryByCode: (data) => axios.get(`/api/category/${data.product_category_code}`),
    getProductBandBy: (data) => axios.get(`/api/product-brand`),
    getProductSearchByCode: (data) => axios.post(`/api/product-search/`,data),
    getProductImageByCode: (data) => axios.get(`/api/product-sub-img/${data.product_code}`),
  })
