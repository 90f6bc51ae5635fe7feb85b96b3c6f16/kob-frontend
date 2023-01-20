export default (axios) => ({

  getPromotion: (data) => axios.get(`/api/get-promotion/`,data),


  })
