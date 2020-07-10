<template>
  <div class="faqs">
    <div class="faqs__content container container--faqs">
      <h2>Preguntas y Tutoriales</h2>
      <div class="questions">
        <span class="questions__item" v-html="$store.state.content.data.faqs"></span>
      </div>
      <h3 class="text-center mt-6">Tutoriales</h3>
      <div class="faqs__videos grid col-2">
        <div>
          <h4 class="mb-2 text-center">¿Cómo me registro?</h4>
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              :src="`https://player.vimeo.com/video/${content.videoSignup}`"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div>
          <h4 class="mb-2 text-center">¿Cómo solicito un crédito?</h4>
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              :src="`https://player.vimeo.com/video/${content.videoRequest}`"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      <nuxt-link v-if="user" to="/terms" class="btn btn--link btn--inverse mt-4">Ver términos y condiciones</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blue',
  name: 'Faqs',
  computed: {
    user () {
      return this.$store.state.user.data
    },
    content () {
      return this.$store.state.content.data
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/pages/faqs";

</style>
