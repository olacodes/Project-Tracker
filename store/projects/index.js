const BASE_URL = `https://project-managers.herokuapp.com/api/V1`
// const BASE_URL = `http://localhost:8000/api/V1`

export const state = () => ({
  // all project of the user
  projects: {}
})

export const getters = {
  // get only the project
  getUserProjects: (state) => {
    const userProjects = state.projects.data
    try {
      if (userProjects.length == 0) {
        return state.projects.data
      } else {
        return state.projects.data[0].project
      }
    } catch (error) {
      console.log(error)
    }
  }

  // search == filter
}

export const mutations = {
  // Set projects
  SETPROJECT(state, payload) {
    return (state.projects = payload)
  },

  // Add project
  ADDPROJECT(state, payload) {
    return (state.projects = payload)
  }
}

export const actions = {
  // fetch all project of the user
  async fetchUserProject({ commit }, userId) {
    let userProjects
    try {
      userProjects = await this.$axios.$get(`${BASE_URL}/project/user-project/${userId}`)
      commit('SETPROJECT', userProjects)
    } catch (error) {
      let { response } = error
      return response.data
    }
  },

  // create project
  async createProject({ commit }, data) {
    let project
    try {
      project = await this.$axios.$post(`${BASE_URL}/project`, data)
      console.log(project)

      commit('ADDPROJECT', project)
      return project
    } catch (error) {
      let { response } = error
      return response.data
    }
  }
}
