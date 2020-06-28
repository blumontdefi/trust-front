<template>
  <div class="__layout">
    <Header/>
    <Nuxt/>
    <Footer/>
    <Login/>
  </div>
</template>

<script>
import Header from '../components/HeaderBlue'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default {
  components: {
    Header,
    Footer,
    Login
  }
}
</script>
