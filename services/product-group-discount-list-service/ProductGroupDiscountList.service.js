export default (axios) => ({
    getProductGroupDiscountListByProductCode: (data) => axios.get(`/api/product-group-discount-list-by-productcode/${data.product_code}`),
})
  