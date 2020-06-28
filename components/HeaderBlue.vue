<template>
  <div class="header header--blue">
    <div class="header__content container">
      <!--Logos-->
      <div class="header__logo header__logo--desktop">
        <nuxt-link to="/"><img src="/images/logo-blue.png" alt="Logo"></nuxt-link>
      </div>
      <div class="header__logo header__logo--mobile">
        <nuxt-link to="/"><img src="/images/logo-vert-blue.png" alt="Logo"></nuxt-link>
      </div>
      <!--End-->
      <!--Menu-->
      <nav class="menu">
        <ul>
          <li><a class="secondary-color" href="">Inicio</a></li>
          <li><a class="secondary-color" href="">Eventos</a></li>
          <li><a class="secondary-color" href="">Catálogo de Caballos</a></li>
          <li><a class="secondary-color" href="">Nosotros</a></li>
          <li><a class="secondary-color" href="">FAQ'S</a></li>
          <li><a class="secondary-color" href="">Noticias</a></li>
          <!--Login or signOut-->
          <li v-if="!user"><a class="secondary-color" @click="$store.dispatch('content/toggleLogin')">Ingresa</a></li>
          <li class="secondary-color" v-if="user"><a class="secondary-color" @click="singOut">Salir</a></li>
          <!--End-->
          <!--Buttons-->
          <li>
            <button v-if="!user" @click="goTo('signup')" type="button" class="btn btn--primary">
              Crea tu cuenta
            </button>
            <button v-if="user" @click="goTo('request')" type="button" class="btn btn--primary">
              Solicita un crédito
            </button>
          </li>
          <!--End-->
        </ul>
      </nav>
      <!-- Menu Responsive -->
      <div class="menu-responsive" id="menuResponsive">
        <div class="menu-responsive__close">
          <client-only>
            <ion-icon @click="toggleMenuResponsive" name="close-outline"/>
          </client-only>
        </div>
        <ul>
          <li>
            <a @click="goTo('/')">Inicio</a>
          </li>
          <li>
            <a @click="goTo('/')">Eventos</a>
          </li>
          <li>
            <a @click="goTo('/')">Catálogo de Caballos</a>
          </li>
          <li>
            <a @click="goTo('/')">FAQ'S</a>
          </li>
          <li>
            <a @click="goTo('/')">Noticias</a>
          </li>
        </ul>
        <!--Buttons-->
        <div v-if="!user" class="menu__buttons">
          <button type="button" @click="goToMobile('signup')" class="btn btn--primary">
            Crea tu cuenta
          </button>
          <button class="btn" @click="goToLoginMobile">
            Ingresa
          </button>
        </div>
        <!--Wit login-->
        <div v-if="user" class="menu__buttons">
          <button type="button" @click="goToMobile('request')" class="btn btn--primary">
            Solicita un crédito
          </button>
          <button @click="singOutMobile" class="btn">
            Salir
          </button>
        </div>
        <!--End-->
      </div>
      <!--End-->
      <!--Toggle-->
      <div class="toggle" @click="toggleMenuResponsive">
        <client-only>
          <ion-icon name="menu-outline"/>
        </client-only>
      </div>
      <!---End-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    user () {
      return this.$store.state.user.data
    }
  },
  methods: {
    toggleMenuResponsive () {
      const menuResponsive = document.getElementById('menuResponsive')
      menuResponsive.classList.toggle('show')
    },
    // Desktop
    goTo (name) {
      this.$router.push({ name })
    },
    async singOut () {
      await this.$fireAuth.signOut()
      this.$store.dispatch('user/setUser', { user: null })
    },
    // End

    // Mobile
    goToMobile (name) {
      this.toggleMenuResponsive()
      this.$router.push({ name })
    },
    goToLoginMobile () {
      this.toggleMenuResponsive()
      this.$store.dispatch('content/toggleLogin')
    },
    async singOutMobile () {
      await this.$fireAuth.signOut()
      await this.$store.dispatch('user/setUser', { user: null })
      this.toggleMenuResponsive()
    }
    // End
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/headers";
</style>
