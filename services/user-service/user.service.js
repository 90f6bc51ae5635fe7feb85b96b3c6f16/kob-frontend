export default (axios) => ({
    getUserBy: (data) => axios.get('/api/user'),

  })
  