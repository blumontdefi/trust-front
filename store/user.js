export const state = () => ({
  data: null
})

export const mutations = {
  SET_USER (state, data) {
    if (data.user === null) {
      state.data = null
    } else {
      state.data = {
        ...data.user
      }
    }
  }
}

export const actions = {
  setUser ({ commit }, user) {
    commit('SET_USER', user)
  }
}
