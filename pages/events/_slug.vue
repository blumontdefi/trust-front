<template>
  <div class="event-detail">
    <div class="event-detail__content container container--event">
      <!--Head-->
      <div class="event-detail__head">
        <div>
          <h2>{{ event.name }}</h2>
          <h4 class="primary-color">
            {{ $moment(event.startDate ).format('D [/] MMMM [/] YYYY, h:mm a') }} (Hora Lima,Perú)
          </h4>
        </div>
        <div>
          <div class="event-detail__countdown">
            <div class="text-center mr-1">
              <h2>{{ days }}</h2>
              <p>Días</p>
            </div>
            <div class="text-center mr-1">
              <h2>:</h2>
            </div>
            <div class="text-center mr-1">
              <h2>{{ hours }}</h2>
              <p>Horas</p>
            </div>
            <div class="text-center mr-1">
              <h2>:</h2>
            </div>
            <div class="text-center mr-1">
              <h2>{{ minutes }}</h2>
              <p>Min</p>
            </div>
            <div class="text-center mr-1">
              <h2>:</h2>
            </div>
            <div class="text-center mr-1">
              <h2>{{ seconds }}</h2>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
      <button :disabled="event.finish" class="event-detail__live btn btn--secondary" @click="goToLive">
        Ir a transmisión
        en vivo
      </button>
      <!--End-->
      <!--Image-->
      <figure>
        <img :src="event.image">
      </figure>
      <!--End-->
      <!--Information-->
      <h3 class="mt-4">
        Información:
      </h3>
      <div class="event-detail__information grid col-4">
        <div class="event-detail__item">
          <img src="/images/ico-date.jpg" alt="Fecha">
          <div>
            <h4>Fecha del evento</h4>
            <p> {{ $moment(event.startDate ).format('D [/] MMMM [/] YYYY') }}</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-time.jpg" alt="Hora">
          <div>
            <h4>Hora Lima</h4>
            <p>{{ $moment(event.startDate ).format('h:mm a') }}</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-duration.jpg" alt="Duración">
          <div>
            <h4>Duración</h4>
            <p>{{ event.duration }} horas</p>
          </div>
        </div>
        <div class="event-detail__item">
          <img src="/images/ico-auction.jpg" alt="Caballos en subasta">
          <div>
            <h4>Caballos en subasta</h4>
            <p>{{ event.quantityHorses }} caballos</p>
          </div>
        </div>
      </div>
      <div class="event-detail__documents">
        Descargar Catálogo
        <a :href="event.doc" download target="_blank">
          <client-only>
            <ion-icon name="cloud-download-outline"/>
          </client-only>
        </a>
      </div>
      <!---End-->
      <!--Resume-->
      <div class="summarize">
        <h2 class="text-center">
          Listado de ejemplares
        </h2>
        <div class="summarize__head">
          <div>Lote</div>
          <div>Nombre</div>
          <div>Genero</div>
          <div>Padre</div>
          <div>Madre</div>
          <div>Precio base</div>
          <div>Precio de pre oferta</div>
          <div>Acciones</div>
        </div>
        <div class="summarize__horses">
          <div v-for="(h, index) in horses" :key="index" class="summarize__item">
            <div>{{ index+1 }}</div>
            <div>{{ h.name }}</div>
            <div>{{ h.gender }}</div>
            <div>{{ h.sire }}</div>
            <div>{{ h.dame }}</div>
            <div>$ {{ new Intl.NumberFormat().format(h.basePrice) }}</div>
            <div>$ {{ new Intl.NumberFormat().format(h.currentBid) }}</div>
            <div>
              <button
                type="button"
                class="btn btn--primary"
                @click.stop="$router.push({name: 'events-event-horses-slug' , params: {slug: getSlug(h.name) , event: event.slug} })">
                Pre ofertar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--End-->
      <!--Catalog-->
      <div class="catalog">
        <h2 class="text-center">
          Catálogo de ejemplares
        </h2>
        <div class="grid col-3">
          <div
            v-for="(h, index) in horses"
            :key="index"
            class="card card--horse"
            style="cursor: pointer"
            @click="$router.push({name: 'events-event-horses-slug' , params: {slug: getSlug(h.name) , event: event.slug} })">
            <figure>
              <img :src="h.principalImage" alt="" class="img-max">
              <div class="label-primary">
                {{ h.label }}
              </div>
            </figure>
            <div class="catalog__description">
              <h3>{{ h.name }}</h3>
              <div class="features">
                <div class="features__item">
                  <h5>PADRE</h5>
                  <p>{{ h.sire }}</p>
                </div>
                <div class="features__item">
                  <h5>MADRE</h5>
                  <p>{{ h.dame }}</p>
                </div>
                <div class="features__item">
                  <h5>SEXO</h5>
                  <p>{{ h.gender }}</p>
                </div>
                <div class="features__item">
                  <h5>NACIMIENTO</h5>
                  <p>{{ $moment(h.birthDate).format('D [/] MMMM [/] YYYY') }}</p>
                </div>
              </div>
              <hr>
              <div class="catalog__offer">
                <h4>Precio base</h4>
                <span class="text-right">$ {{ new Intl.NumberFormat().format(h.basePrice) }}</span>
              </div>
              <div class="catalog__offer">
                <h4>Oferta actual</h4>
                <span class="text-right">$ {{ h.currentBid>0 ? new Intl.NumberFormat().format(h.currentBid) : new Intl.NumberFormat().format(0) }}</span>
              </div>
            </div>
            <button class="btn btn--secondary btn--notborder">
              Más información
            </button>
          </div>
        </div>
      </div>
      <!--End-->
    </div>
  </div>
</template>

<script>

export default {
  layout: 'blue',
  name: 'EventDetail',
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
        return { event, horses }
      } else {
        error({ statusCode: 404, message: 'Evento no existe' })
      }
    } catch (e) {
      error({ statusCode: 500, message: 'Hubo un error al cargar evento.' })
    }
  },
  data () {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: ''
    }
  },
  created () {
    this.interval = setInterval(() => {
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
      // Validate if event go
      if (this.seconds < 0) {
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        clearInterval(this.interval)
      }
    },
    goToLive () {
      this.$router.push({ name: 'live-slug', params: { slug: this.event.slug } })
    },
    getSlug (name) {
      const text = (name).trim().split(' ').join('-').toLowerCase().normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
        .normalize()
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/event-detail";
</style>
