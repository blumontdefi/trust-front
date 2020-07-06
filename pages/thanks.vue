<template>
  <div class="thanks container container--fw">
    <div class="thanks__content">
      <h1>¡Gracias por Registrarte!</h1>
      <h4>En un plazo máximo de 48 horas hábiles recibirás un email con la respuesta a tu solicitud.</h4>
      <button @click="goToHome" class="btn btn--primary btn--call">Volver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thanks',
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
