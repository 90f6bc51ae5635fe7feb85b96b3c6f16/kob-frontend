export const state = () => ({
  active_user_menu: '',
})

export const mutations = {
  setActiveUserMenu(state, menu) {
    state.active_user_menu = menu
  },
}

export const getters = {
  getActiveUserMenu(state) {
    return state.active_user_menu
  },
}