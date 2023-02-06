export default (axios) => ({

  getPromotion: (data) => axios.get(`/api/get-promotion/`, data),
  getPromotionByCode: (data) => axios.get(`/api/get-promotionbycode/${data.promotion_code}`, data),
  getPromotionActive: (data) => axios.get(`/api/get-promotionactive/`, data),
  checkPromotion: (data) => axios.post(`/api/check-promotion`, data),

})
