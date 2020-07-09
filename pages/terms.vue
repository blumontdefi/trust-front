<template>
  <section>
    <div class="similar container">
      <h2 class="text-center mb-4">Términos y Condiciones</h2>
      <div>
        <div class="terms-section">
          <span v-html="$store.state.content.data.terms"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blue',
  name: 'Terms'
}
</script>

<style lang="scss">
  @import "../assets/scss/pages/similar";
</style>
