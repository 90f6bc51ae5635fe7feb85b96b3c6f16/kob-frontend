export default (axios) => ({
  // getUserBy: (data) => axios.get('/api/user'),
  // getLogin: (data) => axios.post(`/api/login/${data.email_data},${data.password_data}`),
  // getMemberInsertBy: (data) => axios.post(`/api/member-insert/`,data),
  // getCheckEmailBy: (data) => axios.post(`/api/check-email/`,data),
  // getCheckPhoneBy: (data) => axios.post(`/api/check-phone/`,data),
  // getCheckMemberBy: (data) => axios.post(`/api/check-member/`,data),
  getOrderBy: (data) => axios.post(`/api/order-get`, data),
  getOrderListBy: (data) => axios.post(`/api/order-list-get`, data),
  updateOrderStatus: (data) => axios.post(`/api/order-status-update`, data),
})