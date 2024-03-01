import ProductGroupDiscountList from './ProductGroupDiscountList.service'

const service = {
  name: 'ProductGroupDiscountListService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    ProductGroupDiscountList,
  }
}

export default service;
