<template>
  <div class="__layout">
    <Header/>
    <Nuxt/>
    <Footer/>
    <Login/>
  </div>
</template>

<script>
import Header from '../components/Header'
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
