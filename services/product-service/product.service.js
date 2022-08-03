export default (axios) => ({
    getProductBy: (data) => axios.get('/api/product'),
    getProductByCode: (data) => axios.get(`/api/product/${data.product_code}`), 
    // updateProductByCode: (data) => axios.post(`/api/product/${data.product_code}`,JSON.stringify(data)), 
    getProductCategoryBy: (data) => axios.get('/api/category'),
    getProductBandBy: (data) => axios.get(`/api/product-brand`), 
  })
  