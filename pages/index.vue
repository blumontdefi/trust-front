<template>
  <div>
    <!--Hero-->
    <div class="hero hero--presentation">
      <div class="gradient"/>
      <div class="hero__container">
        <h1 class="mb-2">
          Lorem Ipsum
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button v-if="!user" class="btn btn--primary btn--call" @click="$router.push({name: 'signup'})">
          Crea tu cuenta
          ahora
        </button>
        <button v-if="user" class="btn btn--primary btn--call" @click="$router.push({name: 'request'})">
          Solicita un crédito
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
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/live.png" alt="Transmisiones en vivo">
          <h3>Transmisiones en vivo</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/clean.png" alt="Transparencia">
          <h3>Transparencia</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="benefits__item">
          <img src="/images/security.png" alt="Seguridad">
          <h3>Seguridad</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
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
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout.
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
                {{ $moment(e.startDate ).format('MMMM Do YYYY, h:mm a') }}
              </p>
              <div class="info">
                <p>Caballos subastados: {{ e.quantityHorses }}</p>
                <p>Haras: {{ e.quantityHaras }}</p>
                <p>Agente: {{ e.agent }}</p>
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
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout.
          </p>
        </div>
        <div class="grid col-3">
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a class="link">Ver más</a>
            </div>
          </div>
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a href="" class="link">Ver más</a>
            </div>
          </div>
          <div class="card" style="cursor: pointer">
            <figure>
              <img src="/images/event.jpg" alt="" class="img-max">
            </figure>
            <div class="block">
              <h3>What is Lorem Ipsum</h3>
              <p class="primary-text-color">
                12/04/20
              </p>
              <div class="description">
                <h4>Descripción:</h4>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <a href="" class="link">Ver más</a>
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
          <h2>Nuestro aliados</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout.
          </p>
        </div>
        <div class="partners__list partners__list--desktop">
          <client-only>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
        <div class="partners__list partners__list--mobile">
          <client-only>
            <swiper ref="mySwiper" :options="swiperOptionsMobile">
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
              <swiper-slide class="partners__item">
                <img src="/images/partner.png" alt="">
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
    <!--End-->
    <!--Sign Up-->
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
    <!---->
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'Home',
  async asyncData ({ $fireStore }) {
    // Load events
    const querySnapshot = await $fireStore.collection('events').where('finish', '==', false).orderBy('startDate', 'asc').limit(3).get()
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
    return { events }
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
        slidesPerView: 3,
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
