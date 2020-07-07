<template>
  <div class="news">
    <div class="news__content container">
      <h2>Últimas Noticias</h2>
      <div class="news__list grid col-3">
        <div
          v-for="(p, index) in posts"
          :key="index"
          class="card"
          style="cursor: pointer"
          @click="$router.push({name: 'posts-slug', params : {slug: p.slug}})">
          <figure>
            <img :src="p.image" :alt="p.title" class="img-max">
          </figure>
          <div class="block">
            <h3>{{p.title}}</h3>
            <p class="primary-color">
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
</template>

<script>
export default {
  layout: 'blue',
  name: 'News',
  async asyncData ({ $fireStore }) {
    // Load posts
    const posts = []
    const querySnapshot = await $fireStore.collection('posts')
      .where('state', '==', true).get()
    querySnapshot.forEach((p) => {
      const obj = {
        id: p.id,
        ...p.data()
      }
      delete obj.createdAt
      obj.createdAt = p.data().createdAt.toDate()
      posts.push(obj)
    })
    return { posts }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/news";
</style>
