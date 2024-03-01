export default (axios) => ({
    getProductScaleByProductGroupDiscountCode: (data) => axios.get(`/api/product-scale-by-product-group-discount-code/${data.product_group_discount_code}`),
})