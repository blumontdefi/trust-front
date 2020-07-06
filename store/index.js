export const actions = {
  async nuxtServerInit ({ dispatch }, { res }) {
    await dispatch('events/fetchEvents')
    if (res && res.locals && res.locals.user) {
      const obj = {
        displayName: res.locals.user.displayName,
        email: res.locals.user.email,
        emailVerified: res.locals.user.emailVerified,
        uid: res.locals.user.uid
      }
      await dispatch('user/setUser', { user: obj })
    }
  }
}
