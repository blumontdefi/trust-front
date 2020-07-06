<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__options">
        <div class="footer__info">
          <img src="/images/logo-vert-white.png" alt="Logo">
          <p>
            La primera marca peruana que realiza operaciones online de compra – venta de caballos de carrera, con el fin
            de satisfacer las necesidades de este exigente mercado, a través de una plataforma digital con elevados
            estándares de calidad, eficiencia y transparencia.
          </p>
          <ul>
            <li>Síguenos en:</li>
            <li>
              <a href="https://www.facebook.com/trustoa.latam/" target="_blank">
                <client-only>
                  <ion-icon name="logo-facebook"/>
                </client-only>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/trustoa" target="_blank">
                <client-only>
                  <ion-icon name="logo-instagram"/>
                </client-only>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/trustoa" target="_blank">
                <client-only>
                  <ion-icon name="logo-youtube"/>
                </client-only>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <h4>Menú</h4>
          <ul>
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
              <nuxt-link to="/news">
                Noticias
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
              Teléfono: (51) 610-3000
            </client-only>
          </li>
          <li>
            <client-only>
              <ion-icon name="mail-outline"></ion-icon>
              E-Mail: contacto@jcp.org.pe
            </client-only>
          </li>
          <li>
            <client-only>
              <ion-icon name="pin-outline"></ion-icon>
              Av. El Derby s/n puerta Nº3, Santiago de Surco, Lima, Perú.
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
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/footer";
</style>
