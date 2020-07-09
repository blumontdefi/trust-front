<template>
  <div>
    <!--Hero-->
    <div class="hero hero--presentation">
      <div class="gradient"/>
      <div class="hero__container">
        <!--Title-->
        <h1 class="mb-2">
          <span v-if="!user">
            Trustoa
          </span>
          <span v-if="user">
            ¡Bienvenido a Trustoa!
          </span>
        </h1>
        <!--End-->
        <!--Description-->
        <p>
          <span v-if="!user">
             La primera marca peruana que realiza operaciones online de compra – venta de caballos de carrera, con el fin de satisfacer las necesidades de este exigente mercado, a través de una plataforma digital con elevados estándares de calidad, eficiencia y transparencia.
          </span>
          <span v-if="user">
            Ahora podrás observar los eventos en vivo y si ya cuentas con una linea de crédito aprobada podrás incluso ofertar.
          </span>
        </p>
        <!--End-->
        <button v-if="!user" class="btn btn--primary btn--call" @click="$router.push({name: 'signup'})">
          Crea tu cuenta ahora
        </button>
        <button v-if="user" class="btn btn--primary btn--call" @click="$router.push({name: 'events'})">
          Ver próximos eventos
        </button>
      </div>
      <div class="block">
        <a href="" class="link">Ver más</a>
      </div>
    </div>
    <!--End-->
    <!--Highlights-->
    <div class="benefits container">
      <div class="grid col-4">
        <div class="benefits__item">
          <img src="/images/auctions.png" alt="Subastas online">
          <h3>Subastas Online</h3>
          <p>
            Expandemos el ámbito tradicional de las subastas equinas, a través de un soporte digital de avanzada,
            ampliando el medio de las opciones de compra – venta para criadores y propietarios.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/live.png" alt="Transmisiones en vivo">
          <h3>Transmisiones en vivo</h3>
          <p>
            Nuestras subastas digitales serán transmitidos via streaming, similares a los empleados en los principales
            mercados internacionales.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/clean.png" alt="Transparencia">
          <h3>Transparencia</h3>
          <p>
            Nuestros eventos cuentan con un soporte tecnológico y legal que ofrece a los usuarios completa claridad en
            los diferentes procesos.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/security.png" alt="Seguridad">
          <h3>Seguridad</h3>
          <p>
            La información de nuestra plataforma se encuentra avalada por un soporte digital alojado en servidores que
            garantizan su confidencialidad, integridad e intangibilidad.
          </p>
        </div>
      </div>
    </div>
    <!---->
    <!--Events-->
    <div class="events lighter-grey-bg-color">
      <div class="events__content container">
        <div class="events__title">
          <h2>Próximos Eventos</h2>
          <p>
            Relación con la información de las subastas activas.
          </p>
        </div>
        <div class="events__items grid col-3">
          <div
            v-for="(e, index) in events"
            :key="index"
            @click="$router.push({name: 'events-slug', params : {slug: e.slug}})"
            class="card"
            style="cursor: pointer">
            <figure>
              <img :src="e.image" alt="" class="img-max">
              <div class="label-secondary">
                Próximo
              </div>
            </figure>
            <div class="block">
              <h3>{{ e.name }}</h3>
              <p class="primary-text-color">
                {{ $moment(e.startDate ).format('D [/] MMMM [/] YYYY, h:mm a') }} (Hora Lima, Perú)
              </p>
              <div class="info">
                <p>Caballos a subastar: {{ e.quantityHorses }}</p>
                <p>Haras: {{ e.quantityHaras }}</p>
              </div>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  {{ e.description }}
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
        </div>
        <div class="events__buttons">
          <button type="button" @click="$router.push({name: 'events'})" class="btn btn--inverse btn--nw">
            Ver calendario de eventos
          </button>
        </div>
      </div>
    </div>
    <!--End-->
    <!--News-->
    <div class="news">
      <div class="news__content container">
        <div class="news__title">
          <h2>Noticias</h2>
          <p>
            Información actualizada del acontecer hípico peruano e internacional.
          </p>
        </div>
        <div class="grid col-3">
          <div
            v-for="(p, index) in posts"
            :key="index"
            class="card"
            style="cursor: pointer"
            @click="$router.push({name: 'posts-slug', params : {slug: p.slug}})">
            <figure>
              <img :src="p.image" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>{{p.title}}</h3>
              <p class="primary-text-color">
                {{ $moment(p.createdAt ).format('D [/] MMMM [/] YYYY') }}
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  {{p.microDescription}}
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End-->
    <!--Partners-->
    <div class="partners lighter-grey-bg-color">
      <div class="partners__content container">
        <div class="partners__title">
          <h2>Aliados y Sponsors</h2>
        </div>
        <div class="partners__list partners__list--desktop">
          <client-only>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner1.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner2.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner3.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner4.png" alt="Asociado">
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
        <div class="partners__list partners__list--mobile">
          <client-only>
            <swiper ref="mySwiper" :options="swiperOptionsMobile">
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner1.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner2.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner3.png" alt="Asociado">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partners/partner4.png" alt="Asociado">
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
    <!--End-->
    <!--
     <div class="signup">
       <div class="signup__content">
         <div class="grid col-2">
           <div class="block">
             <h2>Regístrate</h2>
             <p>
               It is a long established fact that a reader will be distracted by the readable content of a page when
               looking at its layout.
             </p>
             <button type="button" class="btn btn--primary btn--call" @click="$router.push({name: 'signup'})">
               Crea tu cuenta ahora
             </button>
           </div>
           <div class="block">
             <h2>Ver catálogo de caballos</h2>
             <p>
               It is a long established fact that a reader will be distracted by the readable content of a page when
               looking at its layout.
             </p>
             <button class="btn btn--primary btn--call">
               Ver catálogo
             </button>
           </div>
         </div>
       </div>
     </div>
     -->
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'Home',
  async asyncData ({ $fireStore, store }) {
    // Load events
    const querySnapshot = await $fireStore.collection('events')
      .where('finish', '==', false)
      .where('state', '==', true)
      .orderBy('startDate', 'asc')
      .limit(3).get()
    const events = []
    querySnapshot.forEach((e) => {
      const obj = {
        id: e.id,
        ...e.data()
      }
      delete obj.startDate
      obj.startDate = e.data().startDate.toDate()
      events.push(obj)
    })
    // End

    // Load posts
    const querySnapshotPosts = await $fireStore.collection('posts')
      .where('state', '==', true)
      .orderBy('createdAt', 'asc')
      .limit(3).get()

    const posts = []
    querySnapshotPosts.forEach((p) => {
      const obj = {
        id: p.id,
        ...p.data()
      }
      delete obj.createdAt
      obj.createdAt = p.data().createdAt.toDate()
      posts.push(obj)
    })
    // End
    return { events, posts }
  },
  data () {
    return {
      swiperOptions: {
        direction: 'horizontal',
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 6,
        spaceBetween: 30
      },
      swiperOptionsMobile: {
        direction: 'horizontal',
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    user () {
      return this.$store.state.user.data
    }
  },
  mounted () {
    if (this.$route.query.email) {
      this.$store.dispatch('content/toggleLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/index";
</style>
