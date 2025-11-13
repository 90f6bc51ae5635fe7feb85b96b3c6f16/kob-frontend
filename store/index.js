export const state = () => ({
  BASE_ENDPOINT_IMAGE: process.env.BASE_ENDPOINT_IMAGE,
  app_config: []
})

export const mutations = {
  setAppConfig(state, app_config) {
    state.app_config = app_config
  },
}

export const getters = {
  getAppConfig(state) {
    return state.app_config
  },
}

export const actions = {
  async nuxtServerInit({ commit, }, { app }) {
    try {
      const app_config = await app.$companyService.company.getCompany();

      if (app_config.data.length) commit('setAppConfig', app_config.data[0])

    } catch (error) {
      console.error('nuxtServerInit', error)
    }
  }
}