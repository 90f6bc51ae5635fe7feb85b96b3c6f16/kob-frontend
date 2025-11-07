import ProductScale from './ProductScale.service'

const service = {
  name: 'ProductScaleService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    ProductScale,
  }
}

export default service;
