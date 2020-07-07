<template>
  <div class="faqs">
    <div class="faqs__content container container--faqs">
      <h2>Preguntas frecuentes</h2>
      <div class="questions">
        <div class="questions__item">
          <h3>¿Qué es una subasta online?</h3>
          <p>Es el uso de una plataforma virtual que nos permite realizar transacciones que agilizan la comercialización
            de caballos. Nuestra plataforma, TRUSTOA®, permite ofertar: padrillos, yeguas madres, destetes, productos
            (yearlings) y caballos en training.
          </p>
        </div>
        <div class="questions__item">
          <h3>¿Cómo se realiza la subasta?</h3>
          <p>Se inicia con 5 días de anticipación, teniendo los clientes la opción de lanzar montos de pre-oferta
            durante esos días.
            La pre-oferta de mayor valor constituye el precio base para el producto al inicio de la subasta on-line.
            Los postores usaran las cuentas registradas para realizar sus ofertas. En caso no hubiera otra oferta que
            supere el valor del precio base, el producto será adjudicado al postor que realizó la pre-oferta con mayor
            importe.
          </p>
        </div>
        <div class="questions__item">
          <h3>¿Qué es la pre-oferta?</h3>
          <p>Es la etapa donde los postores ofrecen un importe preliminar por el producto antes de que se realice el
            evento. Esta se cerrará a la media noche del día anterior al evento.
          </p>
        </div>
        <div class="questions__item">
          <h3>¿Cómo se adjudica el caballo?</h3>
          <p>El caballo será adjudicado al postor que haya realizado la postura más alta al término del tiempo asignado
            para la venta del mismo.
          </p>
        </div>
        <div class="questions__item">
          <h3>¿Cómo puedo participar en la subasta?</h3>
          <p>1. Primero debes registrate ingresando al siguiente link:
            <nuxt-link to="/signup">www.trusoa.com/signup</nuxt-link>
          </p>
          <p>2. Si deseas participar como postor en la subasta, debes solicitar un crédito ingresando al siguiente link:
            <nuxt-link to="/request"> www.trusoa.com/request</nuxt-link>
          </p>
        </div>
      </div>
      <nuxt-link to="/terms" class="btn btn--link btn--inverse mt-4">Ver términos y condiciones</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blue',
  name: 'Faqs'
}
</script>

<style scoped lang="scss">
  @import "assets/scss/pages/faqs";

</style>
