export const state = () => ({
  data: '',
  login: false,
  panel: false,
  loadUser: false
})

export const mutations = {
  SET_CONTENT (state, data) {
    state.data = data
  },
  TOGGLE_LOGIN (state) {
    state.login = !state.login
  },
  TOGGLE_PANEL (state) {
    state.panel = !state.panel
  },
  TOGGLE_LOAD_USER (state) {
    state.loadUser = !state.loadUser
  }
}

export const actions = {
  async fetchContent ({ commit }) {
    try {
      let data = {}
      // Load products
      const querySnapshot = await this.$fireStore.collection('content').get()

      querySnapshot.forEach((doc) => {
        data = {
          id: doc.id,
          ...doc.data()
        }
      })
      commit('SET_CONTENT', data)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  toggleLogin ({ commit }) {
    document.body.classList.toggle('body--disabledScroll')
    commit('TOGGLE_LOGIN')
  },
  togglePanel ({ commit }) {
    document.body.classList.toggle('body--disabledScroll')
    commit('TOGGLE_PANEL')
  },
  toggleLoadUser ({ commit }) {
    commit('TOGGLE_LOAD_USER')
  }
}
