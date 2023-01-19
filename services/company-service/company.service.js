export default (axios) => ({

  getCompany: (data) => axios.get(`/api/get-company/`,data),


  })
