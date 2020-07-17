<template>
  <div class="events">
    <div class="events__content container container--event">
      <h2>Eventos</h2>
      <div class="events__list">
        <div v-for="(e, index) in events" :key="index" class="events__item">
          <div>{{e.name}}</div>
          <div>{{ $moment(e.startDate ).format('D [/] MMMM [/] YYYY') }}</div>
          <div>{{ $moment(e.startDate ).format('h:mm a') }}</div>
          <nuxt-link :to="{name: 'events-slug', params : {slug: e.slug}}">
            Ver más
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blue',
  name: 'Events',
  async asyncData ({ $fireStore }) {
    // Load events
    const querySnapshot = await $fireStore
      .collection('events')
      .where('state', '==', true)
      .orderBy('startDate', 'desc').get()
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
    return { events }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/scss/pages/events";
</style>
