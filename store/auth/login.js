export const state = () => ({
  user: {},
  isAuthenticated: null
})

export const mutations = {
  SET_LOGIN_USER(state, data) {
    state.user = data
    state.isAuthenticated = true
  },

  SET_ERROR_USER(state, data) {
    state.user = data
    state.isAuthenticated = false
  }
}

export const actions = {
  async loginUser({ commit }, data) {
    let payload

    try {
      payload = await this.$axios.$post(`https://project-managers.herokuapp.com/api/v1/auth/login/`, data)

      if (payload.status === 'success') {
        commit('SET_LOGIN_USER', payload)
        return payload
      }
    } catch (error) {
      let { response } = error
      commit('SET_ERROR_USER', response.data)
      return response.data
    }
  }
}

export const getters = {
  getUserToken: (state) => {
    return state.user.data.token
  },
  isAuthenticated: (state) => {
    return state.isAuthenticated
  }
}
