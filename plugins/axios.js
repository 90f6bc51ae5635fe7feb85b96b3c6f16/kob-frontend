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

  if (process.server) {
    url = ctx.BASE_ENDPOINT_LOCAL
  } else {
    url = ctx.BASE_ENDPOINT
  }

  // switch (service.name) {
  //   case 'productService':

  //     break
  //   case 'userService':

  //     break
  //   case 'orderService':

  //     break
  //   case 'companyService':

  //     break
  //   case 'promotionService':

  //     break
  //   case 'ProductGroupDiscountListService':

  //     break
  //   case 'ProductScaleService':

  //     break
  //   default:
  //     url = service.url
  // }



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
      // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      // return config


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