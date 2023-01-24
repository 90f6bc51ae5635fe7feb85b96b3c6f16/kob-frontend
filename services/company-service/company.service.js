export default (axios) => ({

  getCompany: (data) => axios.get(`/api/get-company/`,data),
  getRecruitment: (data) => axios.get(`/api/get-recruitment/`,data),


  })
