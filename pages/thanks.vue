<template>
  <div class="thanks container container--fw">
    <div class="thanks__content">
      <h1>¡Gracias por Registrarte!</h1>
      <h4>Antes de empezar el proceso de aprobación debes verificar tu dirección de correo electrónico, porfavor revisa
        tu
        bandeja de entrada.</h4>
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
