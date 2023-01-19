import company from './company.service'

const service = {
  name: 'companyService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    company,
  }
}

export default service;
