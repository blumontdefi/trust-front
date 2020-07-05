<template>
  <div class="horse">
    <div class="horse__content container">
      <div class="horse__highlight">
        <div class="horse__info">
          <h2>Subasta en vivo el</h2>
          <span>{{ $moment(event.startDate ).format('D / MMMM / YYYY, h:mm a')}}</span>
          <a>Ver más información del evento</a>
          <div class="horse__detail">
            <div>
              <h4>Nombre</h4>
              <span>{{horse.name}}</span>
            </div>
            <div>
              <h4>Fecha de nacimiento</h4>
              <span>{{ $moment(horse.birthDate ).format('D / MMMM / YYYY') }}</span>
            </div>
            <div>
              <h4>Género</h4>
              <span>{{ horse.gender }}</span>
            </div>
            <div>
              <h4>Pais de origen</h4>
              <span>{{ horse.originCountry }}</span>
            </div>
            <div>
              <h4>Ubicación</h4>
              <span>{{ horse.ubication }}</span>
            </div>
            <div>
              <h4>Haras</h4>
              <span>{{ horse.haras.name }}</span>
            </div>
            <div>
              <h4>Padre</h4>
              <span>{{ horse.sire }}</span>
            </div>
            <div>
              <h4>Madre</h4>
              <span>{{ horse.dame }}</span>
            </div>
            <div>
              <h4>Certificado y Pedigree</h4>
              <a :href="horse.doc" download="true" target="_blank">Descargar</a>
            </div>
          </div>
        </div>
        <figure>
          <img :src="horse.imageLeft" alt="">
        </figure>
      </div>
      <div class="preoffer">
        <div class="preoffer__item">
          <div><strong>Pre oferta inicia</strong></div>
          <div>{{$moment(horse.startPreOffer ).format('D / MMMM / YYYY')}}</div>
        </div>
        <div class="preoffer__item">
          <div><strong>Pre oferta termina</strong></div>
          <div>{{$moment(horse.endPreOffer ).format('D / MMMM / YYYY')}}</div>
        </div>
      </div>
      <div class="offer card">
        <div class="offer__go">
          <div class="offer__item">
            <h3>Precio base</h3>
            <p>$ {{new Intl.NumberFormat().format(horse.basePrice)}}</p>
          </div>
          <div class="offer__item">
            <h3>Oferta actual</h3>
            <p>$ {{new Intl.NumberFormat().format(horse.currentBid)}}</p>
          </div>
          <hr>
          <div class="increment">
            <h4>Aumentar de</h4>
            <div class="increment__content">
              <div>
                <input id="1" v-model="increment" type="radio" name="increment" :value="horse.increase">
                <label for="1">{{horse.increase}}</label>
              </div>
              <div>
                <input id="2" v-model="increment" type="radio" name="increment" :value="horse.increase1">
                <label for="2">{{horse.increase1}}</label>
              </div>
              <div>
                <input id="3" v-model="increment" type="radio" name="increment" :value="horse.increase2">
                <label for="3">{{horse.increase2}}</label>
              </div>
              <div>
                <input id="4" v-model="increment" type="radio" name="increment" :value="horse.increase3">
                <label for="4">{{horse.increase3}}</label>
              </div>
            </div>
          </div>
          <div class="offer__bid">
            <p>Monto a pre ofertar</p>
            <h1>$ {{new Intl.NumberFormat().format(this.bid)}}</h1>
            <button class="btn btn--primary">Pre ofertar ahora</button>
          </div>
        </div>
        <div class="offer__time">
          <div>
            <h2>Subasta en vivo en</h2>
            <div class="horse__countdown">
              <div class="text-center mr-1"><h1>{{days}}</h1>
                <p>Días</p>
              </div>
              <div class="text-center mr-1"><h1>:</h1>
              </div>
              <div class="text-center mr-1"><h1>{{hours}}</h1>
                <p>Horas</p>
              </div>
              <div class="text-center mr-1"><h1>:</h1>
              </div>
              <div class="text-center mr-1"><h1>{{minutes}}</h1>
                <p>Min</p>
              </div>
              <div class="text-center mr-1"><h1>:</h1>
              </div>
              <div class="text-center mr-1"><h1>{{seconds}}</h1>
                <p>Sec</p>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
      <div class="horse__media">
        <h2>Videos y fotos</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorseDetail',
  layout: 'blue',
  async asyncData ({ $fireStore, params, error }) {
    try {
      const querySnapshot = await $fireStore.collection('events').where('slug', '==', params.event).get()
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
            ...h.data(),
            slug: (h.data().name).trim().split(' ').join('-').toLowerCase().normalize('NFD')
              .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
          }
          delete obj.birthDate
          delete obj.startPreOffer
          delete obj.endPreOffer
          obj.birthDate = h.data().birthDate.toDate()
          obj.startPreOffer = h.data().startPreOffer.toDate()
          obj.endPreOffer = h.data().endPreOffer.toDate()
          horses.push(obj)
        })
        const horse = horses.find(h => h.slug === params.slug)
        return { event, horses, horse }
      } else {
        error({ statusCode: 404, message: 'Evento no existe' })
      }
    } catch (e) {
      error({ statusCode: 500, message: 'Hubo un error al cargar evento.' })
    }
  },
  data () {
    return {
      increment: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      bid: 0,
      bids: [],
      unsubscribeHorse: null,
      unsubscribeBid: null
    }
  },
  watch: {
    increment () {
      if (this.horse.currentBid === 0) {
        this.bid = this.horse.basePrice
      } else {
        this.bid = this.horse.currentBid + this.increment
      }
    }
  },
  created () {
    setInterval(() => {
      this.countdown()
    }, 1000)
  },
  mounted () {
    this.increment = this.horse.increase
    // Bids
    this.unsubscribeBid = this.$fireStore.collection('bids').where('horse.id', '==', this.horse.id).orderBy('bid', 'desc')
      .onSnapshot((querySnapshot) => {
        this.bids = []
        querySnapshot.forEach((doc) => {
          this.bids.push(doc.data().bid)
        })
        if (this.bids.length !== 0) {
          this.horse.currentBid = this.bids[0]
          this.bid = this.horse.currentBid + this.increment
        } else {
          this.horse.currentBid = this.horse.basePrice
        }
      })
  },
  methods: {
    getSlug (name) {
      const text = (name).trim().split(' ').join('-').toLowerCase().normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
        .normalize()
      return text
    },
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

<style lang="scss" scoped>
  @import "../../../../assets/scss/pages/horse";
</style>
