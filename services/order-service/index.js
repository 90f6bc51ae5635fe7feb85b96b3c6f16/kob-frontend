import order from './order.service'

const service = {
  name: 'orderService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    order,
  }
}

export default service;
