export default function ({ store, route, redirect }) {
  const user = store.state.user.data
  if (user) {
    return redirect('/')
  }
}
