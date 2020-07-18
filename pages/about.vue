<template>
  <div class="about">
    <div class="about__content container">
      <!---Head-->
      <div class="about__head">
        <h2>Nosotros</h2>
        <p>{{about.description}}</p>
      </div>
      <!--End-->
    </div>
    <!--Team-->
    <div class="team">
      <div class="team__head container">
        <h2>Nuestro equipo</h2>
        <p>{{about.teamDescription}}</p>
      </div>
      <div class="team__content container grid col-3">
        <div v-for="(m, index) in members" :key="index" class="team__item card card--border">
          <img :src="m.image" :alt="m.name" class="img-max">
          <div>
            <h4 class="primary-color">{{m.name}}</h4>
            <p>{{m.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--End-->
    <div class="about__content container">
      <!--Mision and vision-->
      <div class="about__mv">
        <div>
          <h3>Misión</h3>
          <p>{{about.mision}}</p>
        </div>
        <div>
          <h3>Visión</h3>
          <p>{{about.vision}}</p>
        </div>
      </div>
      <!--End-->
      <!--Partners-->
      <div class="partners">
        <h2>Aliados y Sponsors</h2>
        <div class="partners__content container">
          <div class="partners__list partners__list--desktop">
            <client-only>
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(s, index) in sponsors" :key="index" class="partners__item">
                  <img :src="s.image" :alt="s.name">
                </swiper-slide>
              </swiper>
            </client-only>
          </div>
          <div class="partners__list partners__list--mobile">
            <client-only>
              <swiper ref="mySwiper" :options="swiperOptionsMobile">
                <swiper-slide v-for="(s, index) in sponsors" :key="index" class="partners__item">
                  <img :src="s.image" :alt="s.name">
                </swiper-slide>
              </swiper>
            </client-only>
          </div>
        </div>
      </div>
      <!--End-->
      <!--Banners-->
      <div class="banners">
        <div class="banners__content grid col-4">
          <div v-for="(b, index) in banners" class="banners__item card card--border" :key="index">
            <img :src="b.image" :alt="b.title">
            <div>
              <h4 class="primary-color">{{b.title}}</h4>
              <p>{{b.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--End-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'blue',
  async asyncData ({ $fireStore }) {
    // Get about
    let about = {}
    const querySnapshot = await $fireStore.collection('about').get()
    querySnapshot.forEach((a) => {
      about = {
        id: a.id,
        ...a.data()
      }
    })
    // End
    // Team
    const members = []
    const querySnapshotMembers = await $fireStore.collection('members')
      .where('state', '==', true)
      .orderBy('order', 'asc').get()
    querySnapshotMembers.forEach((m) => {
      const obj = {
        ...m.data()
      }
      members.push(obj)
    })
    // End
    // Load sponsors
    const querySnapshotSponsors = await $fireStore.collection('sponsors')
      .where('state', '==', true)
      .orderBy('order', 'asc').get()

    const sponsors = []
    querySnapshotSponsors.forEach((s) => {
      const obj = {
        id: s.id,
        ...s.data()
      }
      delete obj.createdAt
      sponsors.push(obj)
    })
    // End
    // Load banners
    const querySnapshotBanners = await $fireStore.collection('banners')
      .where('state', '==', true)
      .orderBy('order', 'asc').get()

    const banners = []
    querySnapshotBanners.forEach((b) => {
      const obj = {
        id: b.id,
        ...b.data()
      }
      delete obj.createdAt
      banners.push(obj)
    })
    // End
    return { about, members, sponsors, banners }
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
    }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/scss/pages/about";
</style>
