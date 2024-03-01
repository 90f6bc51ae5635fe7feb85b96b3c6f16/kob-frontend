import productService from '~/services/product-service'
import userService from '~/services/user-service'
import orderService from '~/services/order-service'
import companyService from '~/services/company-service'
import promotionService from '~/services/promotion-service'
import ProductGroupDiscountListService from '~/services/product-group-discount-list-service'
import ProductScaleService from '~/services/product-scale-service'

const services = [
  productService,
  userService,
  orderService,
  companyService,
  promotionService,
  ProductGroupDiscountListService,
  ProductScaleService,
]
//this retrive from publicRuntimeConfig
const getBaseURL = (ctx, service) => {
  let url
  switch (service.name) {
    case 'productService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'userService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'orderService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'companyService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'promotionService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'ProductGroupDiscountListService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    case 'ProductScaleService':
      url = ctx.BASE_ENDPOINT || service.url
      break
    default:
      url = service.url
  }
  return url
}

export default function ({ $config, $axios, store, error: nuxtError }, inject) {
  for (let service of services) {
    service.axios = $axios.create({
      baseURL: getBaseURL($config, service),
      headers: {
        common: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    })

    service.axios.onRequest((config) => {

    })

    service.axios.onError((error) => {
      if (error.response) {
        return Promise.resolve(error.response)
      } else {
        return Promise.resolve({ message: error.message })
      }
    })

    let api = {}
    if (service.api) {
      for (let key of Object.keys(service.api)) {
        api[key] = service.api[key](service.axios)
      }

      inject(service.name, api)
    }
  }
}
