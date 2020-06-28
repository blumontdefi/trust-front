<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__options">
        <div class="footer__info">
          <img src="/images/logo-vert-white.png" alt="Logo">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s
            standard dummy text ever since the 1500s.
          </p>
          <ul>
            <li>Síguenos en:</li>
            <li>
              <a href="" target="_blank">
                <client-only>
                  <ion-icon name="logo-facebook"/>
                </client-only>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <client-only>
                  <ion-icon name="logo-instagram"/>
                </client-only>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
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
              <nuxt-link to="/">
                Eventos
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Catálogo
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nosotros
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                FAQ'S
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Noticias
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Ingresa
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Crea tu cuenta
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__events">
          <h4>Próximos eventos</h4>
          <ul>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                Nombre del evento 1
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
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "../assets/scss/components/footer";
</style>
