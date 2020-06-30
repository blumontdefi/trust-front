<template>
  <div class="live">
    <div class="live__content container container--live">
      <div class="live__previous">
        <client-only>
          <ion-icon name="arrow-back-outline"/>
        </client-only>
        <nuxt-link to="/">
          Regresar
        </nuxt-link>
      </div>
      <div class="live__info">
        <h2>Nombre del evento</h2>
        <div v-if="!event.finish" class="live__detail grid col-4">
          <div>
            <h4>Fecha del Evento</h4>
            <p>12/04/2020</p>
          </div>
          <div>
            <h4>Duración</h4>
            <p>3 Horas</p>
          </div>
          <div>
            <h4>Hora Lima</h4>
            <p>9:00 pm</p>
          </div>
          <div>
            <h4>Caballos en subasta</h4>
            <p>10</p>
          </div>
        </div>
      </div>
      <div class="live__go">
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/433831351"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;">
          </iframe>
        </div>
        <div class="live__horse">
          <h3>Nombre del caballo</h3>
          <p>Nombre del haras</p>
          <div class="live__desktop">
            <hr>
            <div class="live__features">
              <div>
                <h4>SIRE</h4>
                <span class="text-right">Sire</span>
              </div>
              <div>
                <h4>DAME</h4>
                <span class="text-right">Dame</span>
              </div>
              <div>
                <h4>SEXO</h4>
                <span class="text-right">Potro</span>
              </div>
              <div>
                <h4>NACIMIENTO</h4>
                <span class="text-right">08 / 01 / 1994</span>
              </div>
            </div>
            <button class="btn btn--secondary">
              Más información
            </button>
            <hr>
          </div>
          <div class="live__mobile">
            <button class="btn btn--secondary">Más información</button>
          </div>
          <div class="offer">
            <div class="offer__item">
              <h3>Oferta actual</h3>
              <p class="text-right">
                $ 16,000
              </p>
            </div>
            <div class="increment">
              <h4>Aumentar de</h4>
              <div class="increment__content">
                <div>
                  <input id="1" v-model="increment" type="radio" name="increment" value="100">
                  <label for="1">100</label>
                </div>
                <div>
                  <input id="2" v-model="increment" type="radio" name="increment" value="200">
                  <label for="2">200</label>
                </div>
                <div>
                  <input id="3" v-model="increment" type="radio" name="increment" value="300">
                  <label for="3">300</label>
                </div>
                <div>
                  <input id="4" v-model="increment" type="radio" name="increment" value="400">
                  <label for="4">400</label>
                </div>
              </div>
            </div>
            <div class="offer__go">
              <h1>$ 16, 100</h1>
              <button class="btn btn--primary">Ofertar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="live__horses">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'live',
  name: 'Live',
  data () {
    return {
      event: {
        finish: true
      },
      increment: 100
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/live.scss";
</style>
