import promotion from './promotion.service'

const service = {
  name: 'promotionService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    promotion,
  }
}

export default service;
