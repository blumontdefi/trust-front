export const state = () => ({
  list: []
})

export const mutations = {
  SET_EVENTS (state, data) {
    state.list = data
  }
}

export const actions = {
  async fetchEvents ({ commit }) {
    try {
      const events = []
      // Load events
      const querySnapshot = await this.$fireStore
        .collection('events')
        .where('finish', '==', false)
        .where('state', '==', true)
        .orderBy('startDate', 'asc')
        .limit(3).get()
      querySnapshot.forEach((e) => {
        const obj = {
          id: e.id,
          ...e.data()
        }
        delete obj.startDate
        obj.startDate = e.data().startDate.toDate()
        events.push(obj)
      })
      commit('SET_EVENTS', events)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
