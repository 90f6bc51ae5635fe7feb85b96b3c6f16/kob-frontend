export const state = () => ({
  app_config: {
    is_order_able: false,
  },
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
      const app_config = await app.$productService.product.getProductCategoryBy();

      if (app_config.data.length) commit('setAppConfig', app_config.data[0])
    } catch (error) {
      console.error('nuxtServerInit', error)
    }
  }
}