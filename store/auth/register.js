export const store = () => ({
  isAuthenticated: false,
  userInfo: null
})

export const mutations = {
  SET_USER_SUCCESS(state, data) {
    state.userInfo = data
    state.isAuthenticated = true
  },
  SET_USER_ERROR(state, data) {
    state.userInfo = data
    state.isAuthenticated = false
  }
}

export const actions = {
  async registerUser({ commit }, data) {
    let payload
    try {
      payload = await this.$axios.$post(`/v1/auth/register/`, data)

      if (payload.status === 'success') {
        commit('SET_USER_SUCCESS', data)
        return payload
      }
    } catch (error) {
      let { response } = error
      commit('SET_USER_ERROR', response.data)
      return response.data
    }
  }
}

export const getters = {
  GET_USER_TOKEN(state) {
    return state.userInfo.data.token
  }
}
