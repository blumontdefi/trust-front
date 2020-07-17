<template>
  <div class="header">
    <div class="header__content container">
      <!--Logos-->
      <div class="header__logo header__logo--desktop">
        <nuxt-link to="/">
          <img src="/images/logo-white.png" alt="Logo">
        </nuxt-link>
      </div>
      <div class="header__logo header__logo--mobile">
        <nuxt-link to="/">
          <img src="/images/logo-vert-white.png" alt="Logo">
        </nuxt-link>
      </div>
      <!--End-->
      <!--Menu-->
      <nav class="menu">
        <ul>
          <li><a @click="goTo('index')">Inicio</a></li>
          <li><a @click="goTo('events')">Eventos</a></li>
          <li><a @click="goTo('about')">Nosotros</a></li>
          <li><a @click="goTo('faqs')">Preguntas y Tutoriales</a></li>
          <li><a @click="goTo('posts')">Noticias</a></li>
          <!--Login or signOut-->
          <li v-if="!user">
            <a @click="$store.dispatch('content/toggleLogin')">Ingresa</a>
          </li>
          <li v-if="user">
            <a @click="singOut">Salir</a>
          </li>
          <!--End-->
          <!--Buttons-->
          <li>
            <button v-if="!user" type="button" class="btn btn--primary" @click="goTo('signup')">
              Crea tu cuenta
            </button>
            <button v-if="user" type="button" class="btn btn--primary" @click="$store.dispatch('content/togglePanel')">
              Ver crédito disponible
            </button>
          </li>
          <!--End-->
        </ul>
      </nav>
      <!-- Menu Responsive -->
      <div id="menuResponsive" class="menu-responsive">
        <div class="menu-responsive__close">
          <client-only>
            <ion-icon name="close-outline" @click="toggleMenuResponsive"/>
          </client-only>
        </div>
        <ul>
          <li>
            <a @click="goTo('index')">Inicio</a>
          </li>
          <li>
            <a @click="goTo('events')">Eventos</a>
          </li>
          <li>
            <a @click="goTo('about')">Nosotros</a>
          </li>
          <li>
            <a @click="goTo('faqs')">Preguntas y Tutoriales</a>
          </li>
          <li>
            <a @click="goTo('posts')">Noticias</a>
          </li>
        </ul>
        <!--Buttons-->
        <div v-if="!user" class="menu__buttons">
          <button type="button" class="btn btn--primary" @click="goToMobile('signup')">
            Crea tu cuenta
          </button>
          <button class="btn" @click="goToLoginMobile">
            Ingresa
          </button>
        </div>
        <!--With Login-->
        <div v-if="user" class="menu__buttons">
          <button type="button" class="btn btn--primary" @click="viewCreditsMobile">
            Ver crédito
          </button>
          <button class="btn" @click="singOutMobile">
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
    goTo (url) {
      this.$router.push({ name: url })
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
    },
    viewCreditsMobile () {
      this.toggleMenuResponsive()
      this.$store.dispatch('content/togglePanel')
    }
    // End
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/headers";
</style>
