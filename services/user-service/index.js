import user from './user.service'

const service = {
  name: 'userService',
  url: process.env.BASE_ENDPOINT || process.env.BASE_ENDPOINT,
  api: {
    user,
  }
}

export default service;
