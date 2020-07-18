<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__options">
        <div class="footer__info">
          <img src="/images/logo-vert-white.png" alt="Logo">
          <p>
            {{content.description}}
          </p>
          <ul>
            <li>Síguenos en:</li>
            <li v-if="content.facebook && content.facebook.length>0">
              <a :href="`https://www.facebook.com/${content.facebook}`" target="_blank">
                <client-only>
                  <ion-icon name="logo-facebook"/>
                </client-only>
              </a>
            </li>
            <li v-if="content.instagram && content.instagram.length>0">
              <a :href="`https://www.instagram.com/${content.instagram}`" target="_blank">
                <client-only>
                  <ion-icon name="logo-instagram"/>
                </client-only>
              </a>
            </li>
            <li v-if="content.youtube  && content.youtube.length>0">
              <a :href="`https://www.youtube.com/channel/${content.youtube}`" target="_blank">
                <client-only>
                  <ion-icon name="logo-youtube"/>
                </client-only>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <h4>Menú</h4>
          <ul class="grid col-2">
            <li>
              <nuxt-link to="/">
                Inicio
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/events">
                Eventos
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                Nosotros
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/faqs">
                FAQ'S
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/posts">
                Noticias
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/claims">
                Libro de reclamaciones
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__events">
          <h4>Próximos eventos</h4>
          <ul>
            <li v-for="(e, index) in events" :key="index">
              <nuxt-link :to="{name: 'events-slug', params : {slug: e.slug}}">
                {{e.name}} / {{ $moment(e.startDate ).format('Do MMMM YYYY, h:mm a') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer__contact">
        <ul>
          <li>
            <client-only>
              <ion-icon name="call-outline"></ion-icon>
              Teléfono: {{content.phone}}
            </client-only>
          </li>
          <li>
            <client-only>
              <ion-icon name="mail-outline"></ion-icon>
              E-Mail: {{content.email}}
            </client-only>
          </li>
          <li>
            <client-only>
              <ion-icon name="pin-outline"></ion-icon>
              {{content.address}}
            </client-only>
          </li>
        </ul>
      </div>
      <div class="footer__copy text-center">
        <p>© 2020 - 2020 Copyright Trust. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    events () {
      return this.$store.state.events.list
    },
    content () {
      return this.$store.state.content.data
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/footer";
</style>
