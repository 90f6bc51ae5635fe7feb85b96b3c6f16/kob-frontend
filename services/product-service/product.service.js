export default (axios) => ({
    getProductBy: (data) => axios.get('/api/product'),
    getProductByCode: (data) => axios.get(`/api/product/${data.product_code}`), 
    getProductCategoryBy: (data) => axios.get('/api/category'),
    getProductBandBy: (data) => axios.get(`/api/product-brand`), 
  })
  