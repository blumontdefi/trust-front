<template>
  <div class="live">
    <div class="live__content container container--fw">
      <div class="live__go" :class="{'live__go--disabled' : !event.start}">
        <div style="position:relative;" class="live__video">
          <iframe
            :src="`https://player.vimeo.com/video/${event.vimeoId}`"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
          />
        </div>
        <div class="live__horse">
          <div id="bidModal" class="live__horse--bid">
            Pasamos al siguiente caballo
          </div>
          <h3>{{horse.name}}</h3>
          <p>{{horse.haras.name}}</p>
          <div class="live__desktop">
            <hr>
            <div class="live__features">
              <div>
                <h4>PADRE</h4>
                <span class="text-right">{{horse.sire}}</span>
              </div>
              <div>
                <h4>MADRE</h4>
                <span class="text-right">{{horse.dame}}</span>
              </div>
              <div>
                <h4>SEXO</h4>
                <span class="text-right">{{horse.gender}}</span>
              </div>
              <div>
                <h4>NACIMIENTO</h4>
                <span class="text-right"> {{ $moment(horse.birthDate ).format('Do / MMMM / YYYY') }}</span>
              </div>
            </div>
            <nuxt-link
              :to="{name: 'events-event-horses-slug' , params: {slug: getSlug(horse.name) , event: event.slug} }"
              class="btn btn--secondary btn--link"
              target="_blank">
              Más información
            </nuxt-link>
            <hr>
          </div>
          <div class="live__mobile">
            <nuxt-link
              :to="{name: 'events-event-horses-slug' , params: {slug: getSlug(horse.name) , event: event.slug} }"
              class="btn btn--secondary btn--link">
              Más información
            </nuxt-link>
          </div>
          <div class="offer">
            <!--Modals-->
            <div class="offer--modal" id="creditOff">
              <div>
                <ion-icon name="sad-outline"/>
                <p>No cuenta con el crédito suficiente</p>
                <p>{{messageModal}}</p>
              </div>
            </div>
            <!--End-->
            <div class="offer__item offer__item--secondary">
              <h3>Precio base</h3>
              <p class="text-right">
                $ {{new Intl.NumberFormat().format(horse.basePrice)}}
              </p>
            </div>
            <div class="offer__item">
              <h3>Oferta actual</h3>
              <p class="text-right">
                $ {{new Intl.NumberFormat().format(horse.currentBid)}}
              </p>
            </div>
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
            <div class="offer__go">
              <button
                class="btn btn--primary btn--live"
                :disabled="loadBid || horse.currentBid<=0 || !event.start"
                @click="bidNow">
                <span v-if="!loadBid">Ofertar</span>
                <div v-else class="lds-ellipsis">
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                </div>
              </button>
            </div>
          </div>
          <div class="history">
            <h3 class="text-center">Ultimas ofertas</h3>
            <template v-for="(bid, index) in bids">
              <div :key="index" v-if="index<3 && !loadBid" class="history__item">
                <div>{{bid.user.code}}</div>
                <div>$ {{new Intl.NumberFormat().format(bid.bid)}}</div>
                <div>{{$moment(bid.createdAt).format('D [/] MMM [/] YYYY h:mm:ss a')}}</div>
              </div>
            </template>
            <div v-if="loadBid" class="text-center">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar" class="sidebar">
      <div class="sidebar__list">
        <div
          v-for="(h, index) in horses"
          :key="index"
          class="sidebar__content"
          :class="{'sidebar__content--disabled' : !h.stateAuction}">
          <div class="sidebar__item">
            <div class="sidebar__position">
              <h3 v-if="index<10">0{{index+1}}</h3>
              <h3 v-else>{{index+1}}</h3>
            </div>
            <div class="sidebar__info">
              <h3>{{ h.name }}</h3>
              <div>
                <h4>{{ h.haras.name }}</h4>
                <p>
                  {{ h.haras.description }}
                </p>
              </div>
            </div>
          </div>
          <nuxt-link
            :to="{name: 'events-event-horses-slug' , params: {slug: getSlug(h.name) , event: event.slug} }"
            :disabled="!h.stateAuction"
            class="btn btn--secondary btn--link"
            target="_blank">
            Más información
          </nuxt-link>
          <hr>
        </div>
      </div>
      <div class="sidebar__trigger">
        <a @click="showSidebar">
          <ion-icon name="play" id="trigger"></ion-icon>
        </a>
      </div>
    </div>
    <div class="sidebar__shadow" id="sideBarShadow">
    </div>
    <div v-if="!event.start" class="live__message">
      <div>
        <h2 class="text-center">Inicia en</h2>
        <div class="live__countdown">
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
        <nuxt-link to="/" class="btn btn--primary btn--link">
          Regresar
        </nuxt-link>
      </div>
    </div>
    <div v-if="event.finish" class="live__message">
      <div>
        <h2>El evento ha finalizado</h2>
        <nuxt-link to="/" class="btn btn--primary btn--link">Regresar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'live',
  middleware: 'authenticated',
  name: 'EventLive',
  async asyncData ({ $fireStore, $sentry, $store, params, error }) {
    try {
      // Get event
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
      // End
      if (event) {
        // Get horse
        const queryHorse = await $fireStore.collection('horses')
          .where('event.id', '==', event.id)
          .where('state', '==', true)
          .orderBy('position', 'asc').get()
        queryHorse.forEach((h) => {
          const obj = {
            id: h.id,
            ...h.data()
          }
          delete obj.birthDate
          obj.birthDate = h.data().birthDate.toDate()
          horses.push(obj)
        })
        const horsesFilter = horses.filter(h => h.stateAuction)
        const horse = horsesFilter[0]
        return { event, horses, horse }
      } else {
        error({ statusCode: 404, message: 'Evento no existe' })
      }
    } catch (e) {
      $sentry.captureException(e)
      error({ statusCode: 500, message: 'Error al cargar evento' })
    }
  },
  data () {
    return {
      increment: 0,
      bid: 0,
      event: {},
      horse: {},
      credits: [],
      bids: [],
      client: {},
      loadBid: false,
      unsubscribeHorse: null,
      unsubscribeBid: null,
      messageModal: '',
      errors: [],
      // Countdown
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user.data
    }
  },
  watch: {
    horse: {
      handler (val) {
        if (this.horse.stateAuction) {
          this.bid = this.horse.currentBid + this.increment
        }
        // Validating if horse finished auction
        if (this.horse.stateAuction === false) {
          this.showModal()
          this.unsubscribeHorse()
          this.unsubscribeBid()
          const horsesFilter = this.horses.filter(h => h.stateAuction)
          this.horse = horsesFilter[0]
          this.increment = this.horse.increase
          // Get Updates horse
          this.unsubscribeHorse = this.$fireStore.collection('horses').doc(this.horse.id)
            .onSnapshot((doc) => {
              this.horse.stateAuction = doc.data().stateAuction
            })
          // Get updates bids
          // Bids
          this.unsubscribeBid = this.$fireStore.collection('bids')
            .where('horse.id', '==', this.horse.id)
            .orderBy('bid', 'desc')
            .onSnapshot((querySnapshot) => {
              this.bids = []
              querySnapshot.forEach((doc) => {
                const obj = {
                  ...doc.data()
                }
                delete obj.createdAt
                obj.createdAt = doc.data().createdAt.toDate()
                this.bids.push(obj)
              })
              if (this.bids.length !== 0) {
                this.horse.currentBid = this.bids[0].bid
                this.bid = this.horse.currentBid + this.increment
              } else {
                this.horse.currentBid = this.horse.basePrice
              }
            })
        }
      },
      deep: true
    },
    increment () {
      if (this.horse.currentBid === 0) {
        this.bid = this.horse.basePrice
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
    try {
      const user = this.$store.state.user.data
      this.increment = this.horse.increase
      // Calculate current bid
      if (this.horse.currentBid === 0) {
        this.bid = this.horse.basePrice
      } else {
        this.bid = this.horse.currentBid + this.increment
      }
      // End
      // Event
      this.$fireStore.collection('events').doc(this.event.id)
        .onSnapshot((doc) => {
          this.event.start = doc.data().start
          this.event.finish = doc.data().finish
        })
      // Horses
      this.unsubscribeHorse = this.$fireStore.collection('horses').doc(this.horse.id)
        .onSnapshot((doc) => {
          this.horse.stateAuction = doc.data().stateAuction
        })
      // Bids
      this.unsubscribeBid = this.$fireStore.collection('bids')
        .where('horse.id', '==', this.horse.id)
        .orderBy('bid', 'desc')
        .onSnapshot((querySnapshot) => {
          this.bids = []
          querySnapshot.forEach((doc) => {
            const obj = {
              ...doc.data()
            }
            delete obj.createdAt
            obj.createdAt = doc.data().createdAt.toDate()
            this.bids.push(obj)
          })
          if (this.bids.length !== 0) {
            this.horse.currentBid = this.bids[0].bid
            this.bid = this.horse.currentBid + this.increment
          } else {
            this.horse.currentBid = this.horse.basePrice
          }
        })
      // Credits
      const queryCredits = await this.$fireStore
        .collection('credits')
        .where('client.uid', '==', user.uid)
        .where('state', '==', true).get()
      queryCredits.forEach((c) => {
        const obj = {
          id: c.id,
          ...c.data()
        }
        this.$fireStore.collection('credits').doc(obj.id)
          .onSnapshot((doc) => {
            obj.used = doc.data().used
          })
        this.credits.push(obj)
      })
      // Get client
      const querySnap = await this.$fireStore.collection('clients')
        .where('uid', '==', user.uid).get()
      querySnap.forEach((c) => {
        this.client = {
          id: c.id,
          ...c.data()
        }
      })
    } catch (e) {
      const error = 'Hubo un error al iniciar evento.'
      this.errors.push(error)
      this.$sentry.captureException(e)
    }
  },
  methods: {
    showSidebar () {
      const sideBar = document.getElementById('sidebar')
      const sideBarShadow = document.getElementById('sideBarShadow')
      const trigger = document.getElementById('trigger')
      sideBar.classList.toggle('show')
      sideBarShadow.classList.toggle('show')
      trigger.classList.toggle('sidebar__rotate')
    },
    async bidNow () {
      try {
        const validate = await this.validateCredit()
        if (validate) {
          this.loadBid = true
          await this.$fireStore.collection('bids').add({
            bid: this.bid,
            user: {
              uid: this.user.uid,
              displayName: this.client.name + ' ' + this.client.lastName,
              code: this.client.code,
              clientId: this.client.id
            },
            horse: {
              id: this.horse.id,
              name: this.horse.name,
              imageLeft: this.horse.imageLeft
            },
            createdAt: this.$fireStoreObj.FieldValue.serverTimestamp(),
            preOffer: false
          })
          this.loadBid = false
        }
      } catch (e) {
        const error = 'Hubo un error al realizar oferta.'
        this.errors.push(error)
        this.$sentry.captureException(e)
      }
    },
    validateCredit () {
      return new Promise((resolve, reject) => {
        const horseHaras = this.horse.haras
        this.credits.forEach((c) => {
          if (c.haras.id === horseHaras.id) {
            if (this.bid <= (c.credit - c.used)) {
              resolve(true)
            } else {
              resolve(false)
              this.messageModal = 'Su crédito actual es de: $' + new Intl.NumberFormat().format(c.credit - c.used)
              this.showModalCreditOff()
            }
          } else {
            resolve(false)
          }
        })
      })
    },
    showModal () {
      const bidModal = document.getElementById('bidModal')
      bidModal.classList.toggle('show')
      setTimeout(() => {
        bidModal.classList.toggle('show')
      }, 20000)
    },
    showModalCreditOff () {
      const creditOff = document.getElementById('creditOff')
      creditOff.classList.toggle('show')
      setTimeout(() => {
        creditOff.classList.toggle('show')
      }, 5000)
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/live.scss";
</style>
