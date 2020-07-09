<template>
  <div class="__layout">
    <Header/>
    <Nuxt/>
    <Footer/>
    <Login/>
    <Panel :class="{'show' : togglePanel}"/>
    <div class="panel__shadow" :class="{'show' : togglePanel}">
    </div>
  </div>
</template>

<script>
import Header from '../components/HeaderBlue'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Panel from '../components/Panel'

export default {
  components: {
    Header,
    Footer,
    Login,
    Panel
  },
  computed: {
    togglePanel () {
      return this.$store.state.content.panel
    }
  },
  head () {
    return {
      title: this.$store.state.content.data.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: `${this.$store.state.content.data.description}` }
      ]
    }
  }
}
</script>
