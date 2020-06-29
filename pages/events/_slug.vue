<template>
  <div class="event-detail">
    <div class="event-detail__content container container--event">
      <!--Head-->
      <div class="event-detail__head">
        <div>
          <h2>{{event.name}}</h2>
          <h4 class="primary-color"> {{ $moment(event.startDate ).format('MMMM Do YYYY, h:mm a') }}</h4>
        </div>
        <div>
          <div class="event-detail__countdown">
            <div class="text-center mr-1"><h2>{{days}}</h2>
              <p>Días</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{hours}}</h2>
              <p>Horas</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{minutes}}</h2>
              <p>Min</p>
            </div>
            <div class="text-center mr-1"><h2>:</h2>
            </div>
            <div class="text-center mr-1"><h2>{{seconds}}</h2>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
      <button class="event-detail__live btn btn--secondary">Ir a transmisión en vivo</button>
      <!--End-->
      <!--Image-->
      <figure>
        <img :src="event.image">
      </figure>
      <!--End-->
      <!--Information-->
      <h3>Información:</h3>
      <div class="event-detail__information grid col-4">
        <div class="event-detail__item">
          <img src="/images/ico-date.jpg" alt="Fecha">
          <div>
            <h4>Fecha del evento</h4>
            <p>12/ 04 / 2020</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-time.jpg" alt="Hora">
          <div>
            <h4>Hora Lima</h4>
            <p>12/ 04 / 2020</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-duration.jpg" alt="Duración">
          <div>
            <h4>Duración</h4>
            <p>{{event.duration}} horas</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-auction.jpg" alt="Caballos en subasta">
          <div>
            <h4>Caballos en subasta</h4>
            <p>{{event.quantityHorses}} caballos</p>
          </div>
        </div>
      </div>
      <div class="event-detail__documents">
        Descargar Catálogo
        <a :href="event.doc" download target="_blank">
          <client-only>
            <ion-icon name="cloud-download-outline"></ion-icon>
          </client-only>
        </a>
      </div>
      <!---End-->
      <div class="catalog">
        <h2 class="text-center">Catálogo de caballos</h2>
        <div class="grid col-3">
          <nuxt-link to="/" v-for="(h, index) in horses" :key="index" class="card card--horse">
            <figure>
              <img :src="h.principalImage" alt="" class="img-max">
              <div class="label-primary">{{h.label}}</div>
            </figure>
            <div class="catalog__description">
              <h3>{{h.name}}</h3>
              <div class="features">
                <div class="features__item">
                  <h5>SIRE</h5>
                  <p>{{h.sire}}</p>
                </div>
                <div class="features__item">
                  <h5>DAME</h5>
                  <p>{{h.dame}}</p>
                </div>
                <div class="features__item">
                  <h5>SEXO</h5>
                  <p>{{h.gender}}</p>
                </div>
                <div class="features__item">
                  <h5>NACIMIENTO</h5>
                  <p>{{$moment(h.birthDate).format('MMM Do YY')}}</p>
                </div>
              </div>
              <hr>
              <div class="catalog__offer">
                <h4>Precio base</h4>
                <span class="text-right">$ {{new Intl.NumberFormat().format(h.basePrice)}}</span>
              </div>
              <div class="catalog__offer">
                <h4>Oferta actual</h4>
                <span class="text-right">$ {{new Intl.NumberFormat().format(h.currentBid)}}</span>
              </div>
            </div>
            <button class="btn btn--secondary btn--notborder">Más información</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'blue',
  name: 'Event',
  async asyncData ({ $fireStore, params, error }) {
    try {
      const querySnapshot = await $fireStore.collection('events').where('slug', '==', params.slug).get()
      let event = null
      const horses = []
      querySnapshot.forEach((e) => {
        const obj = {
          id: e.id,
          ...e.data()
        }
        delete obj.startDate
        obj.startDate = e.data().startDate.toDate()
        event = {
          ...obj
        }
      })
      if (event) {
        const queryHorse = await $fireStore.collection('horses').where('event.id', '==', event.id).get()
        queryHorse.forEach((h) => {
          const obj = {
            id: h.id,
            ...h.data()
          }
          delete obj.birthDate
          obj.birthDate = h.data().birthDate.toDate()
          horses.push(obj)
        })
        return { event, horses }
      } else {
        error({ statusCode: 404, message: 'Evento no existe' })
      }
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  created () {
    setInterval(() => {
      this.countdown()
    }, 1000)
  },
  methods: {
    countdown () {
      const now = new this.$moment(new Date())
      const then = new this.$moment(this.event.startDate)
      const diff = this.$moment.duration(then.diff(now))
      // Count
      this.days = parseInt(diff.asDays())
      this.hours = parseInt(diff.asHours())
      this.hours = this.hours - this.days * 24
      this.minutes = parseInt(diff.asMinutes())
      this.minutes = this.minutes - (this.days * 24 * 60 + this.hours * 60)
      this.seconds = parseInt(diff.asSeconds())
      this.seconds = this.seconds - (this.days * 24 * 60 * 60 + this.hours * 60 * 60 + this.minutes * 60)
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/pages/event-detail";
</style>
