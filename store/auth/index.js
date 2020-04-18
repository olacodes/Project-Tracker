const BASE_URL = `https://project-managers.herokuapp.com/api/V1`
// const BASE_URL = `http://localhost:8000/api/V1`

export const state = () => ({
  token: window.localStorage.getItem('token')
})

export const getters = {
  getToken: (state) => state.token,
  isLoggedIn: (state) => !!state.token
}

/**
 * Auth mutations with SETTOKEN and SETISAUTHENTICATED methods
 */
export const mutations = {
  SETTOKEN(state, token) {
    return (state.token = token)
  },

}

/**
 * Auth action with login, logout and register method
 */
export const actions = {
  async login({ commit }, data) {
    let payload
    try {
      payload = await this.$axios.$post(`${BASE_URL}/auth/login`, data)
      if (payload.status === 'success') {
        commit('SETTOKEN', payload.data.token)
        window.localStorage.setItem('token', payload.data.token)

        return payload
      }
    } catch (error) {
      let { response } = error
      return response.data
    }
  },

  async register({ commit }, data) {
    let payload
    try {
      payload = await this.$axios.$post(`${BASE_URL}/auth/register`, data)
      if (payload.status === 'success') {
        commit('SETTOKEN', payload.data.token)
        window.localStorage.setItem('token', payload.data.token)
        return payload
      }
    } catch (error) {
      let { response } = error
      return response.data
    }
  },

  logout({ commit }) {
    commit('SETTOKEN', null)
    window.localStorage.removeItem('token')
    return 'success'
  }
}
