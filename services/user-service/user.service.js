export default (axios) => ({
    getUserBy: (data) => axios.get('/api/user'),
    getMemberInsertBy: (data) => axios.post(`/api/member-insert/`,data),
    getCheckEmailBy: (data) => axios.post(`/api/check-email/`,data),
    getCheckPhoneBy: (data) => axios.post(`/api/check-phone/`,data),
    getCheckMemberBy: (data) => axios.post(`/api/check-member/`,data),

  })
