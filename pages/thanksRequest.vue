<template>
  <div class="thanks container container--fw">
    <div class="thanks__content">
      <h1>Tu solicitud fue enviada</h1>
      <h4>El proceso de evaluación puede tardar hasta 48 horas hábiles, te notificaremos por email apenas tengamos una
        respuesta.</h4>
      <button @click="goToHome" class="btn btn--primary btn--call">Volver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThanksRequest',
  layout: 'blue',
  methods: {
    goToHome () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/thanks";
</style>
