export default (axios) => ({

  getCompany: (data) => axios.get(`/api/get-company/`,data),
  getRecruitment: (data) => axios.get(`/api/get-recruitment/`,data),
  getGallery: (data) => axios.get(`/api/get-gallery/`,data),
  getGalleryList: (data) => axios.get(`/api/get-gallery-list/${data.gallery_code}`,data),


  })
