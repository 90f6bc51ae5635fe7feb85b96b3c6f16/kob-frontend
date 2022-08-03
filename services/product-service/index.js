import product from './product.service'

const service = {
  name: 'productService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    product,
  }
}

export default service;
