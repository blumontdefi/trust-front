<template>
  <div class="horse">
    <div class="horse__content container container--horse">
      <div class="horse__highlight">
        <div class="horse__info">
          <h2>Subasta en vivo el</h2>
          <span>{{ $moment(event.startDate ).format('D / MMMM / YYYY, h:mm a')}}</span>
          <nuxt-link :to="{name: 'events-slug', params : {slug: event.slug}}">Ver más información del evento</nuxt-link>
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
              <h4>Pedigree y Certificados</h4>
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
      <div class="offer">
        <div class="horse__video">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              :src="`https://player.vimeo.com/video/${horse.vimeoId}`"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div class="card horse__preoffer">
          <div class="offer--modal" id="confirmPreOffer">
            <div>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Pre oferta enviada</p>
            </div>
          </div>
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
              <h4>Aumentar</h4>
              <div class="increment__content">
                <div>
                  <input id="1" v-model="increment" type="radio" name="increment" :value="horse.increase">
                  <label for="1">$ {{horse.increase}}</label>
                </div>
                <div>
                  <input id="2" v-model="increment" type="radio" name="increment" :value="horse.increase1">
                  <label for="2">$ {{horse.increase1}}</label>
                </div>
                <div>
                  <input id="3" v-model="increment" type="radio" name="increment" :value="horse.increase2">
                  <label for="3">$ {{horse.increase2}}</label>
                </div>
                <div>
                  <input id="4" v-model="increment" type="radio" name="increment" :value="horse.increase3">
                  <label for="4">$ {{horse.increase3}}</label>
                </div>
              </div>
            </div>
            <div class="offer__bid">
              <button
                class="btn btn--primary btn--live"
                :disabled="loadBid || !enablePreOffer"
                @click="bidNow">
                <span v-if="!loadBid">Pre ofertar ahora</span>
                <div v-else class="lds-ellipsis">
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="offer__time card">
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
        </div>
      </div>
      <div class="horse__media">
      </div>
    </div>
    <!--Catalogo-->
    <div class="horse__others">
      <h2>Otros caballos del evento</h2>
      <div class="catalog container container--horse">
        <div class="grid col-3">
          <div
            v-for="(h, index) in horses"
            :key="index"
            class="card card--horse"
            style="cursor: pointer"
            @click="$router.push({name: 'events-event-horses-slug' , params: {slug: getSlug(h.name) , event: event.slug} })">
            <figure>
              <img :src="h.principalImage" alt="" class="img-max">
              <div class="label-primary">{{h.label}}</div>
            </figure>
            <div class="catalog__description">
              <h3>{{h.name}}</h3>
              <div class="features">
                <div class="features__item">
                  <h5>PADRE</h5>
                  <p>{{h.sire}}</p>
                </div>
                <div class="features__item">
                  <h5>MADRE</h5>
                  <p>{{h.dame}}</p>
                </div>
                <div class="features__item">
                  <h5>SEXO</h5>
                  <p>{{h.gender}}</p>
                </div>
                <div class="features__item">
                  <h5>NACIMIENTO</h5>
                  <p>{{$moment(h.birthDate).format('D [/] MMMM [/] YYYY')}}</p>
                </div>
              </div>
              <hr>
              <div class="catalog__offer">
                <h4>Precio base</h4>
                <span class="text-right">$ {{new Intl.NumberFormat().format(h.basePrice)}}</span>
              </div>
              <div class="catalog__offer">
                <h4>Oferta actual</h4>
                <span class="text-right">$ {{h.currentBid>0 ? new Intl.NumberFormat().format(h.currentBid) : new Intl.NumberFormat().format(0)}}</span>
              </div>
            </div>
            <button class="btn btn--secondary btn--notborder">Más información</button>
          </div>
        </div>
      </div>
    </div>
    <!--End-->
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
      unsubscribeBid: null,
      interval: '',
      loadBid: false,
      client: {},
      enablePreOffer: false
    }
  },
  computed: {
    user () {
      return this.$store.state.user.data
    }
  },
  watch: {
    increment () {
      if (this.horse.currentBid === 0) {
        this.bid = this.horse.basePrice + this.increment
      } else {
        this.bid = this.horse.currentBid + this.increment
      }
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.countdown()
    }, 1000)
  },
  async mounted () {
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
          this.bid = this.horse.basePrice + this.increment
          this.horse.currentBid = 0
        }
      })
    if (this.user) {
      // Get client
      const querySnap = await this.$fireStore.collection('clients').where('uid', '==', this.user.uid).get()
      querySnap.forEach((c) => {
        this.client = {
          id: c.id,
          ...c.data()
        }
      })
    }
    this.enablePreOffer = (new Date().getTime() > this.horse.startPreOffer.getTime() && new Date().getTime() < this.horse.endPreOffer.getTime())
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
      // Validate if event go
      if (this.seconds < 0) {
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        clearInterval(this.interval)
      }
    },
    async bidNow () {
      try {
        if (this.client) {
          this.loadBid = true
          await this.$fireStore.collection('bids').add({
            bid: this.bid,
            user: {
              id: this.user.uid,
              displayName: this.client.name + ' ' + this.client.lastName,
              code: this.client.code
            },
            horse: {
              id: this.horse.id,
              name: this.horse.name,
              imageLeft: this.horse.imageLeft
            },
            preOffer: true,
            createdAt: this.$fireStoreObj.FieldValue.serverTimestamp()
          })
          this.showModalConfirm()
        }
        this.loadBid = false
      } catch (e) {
        console.log(e)
      }
    },
    showModalConfirm () {
      const creditOff = document.getElementById('confirmPreOffer')
      creditOff.classList.toggle('show')
      setTimeout(() => {
        creditOff.classList.toggle('show')
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/pages/horse";
</style>
