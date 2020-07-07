<template>
  <div class="news-detail">
    <div class="news-detail__content container container--news">
      <div class="news-detail__head">
        <h2>{{post.title}}</h2>
        <div class="news-detail__img" :style="`background-image: url(${post.image});`">
        </div>
      </div>
      <div class="news-detail__body">
        <span v-html="post.description"></span>
      </div>
      <hr>
      <div class="news-detail__others">
        <h3>Otras noticias</h3>
        <div class="grid col-3 news-detail__posts">
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
  </div>
</template>

<script>
export default {
  layout: 'blue',
  name: 'NewsDetail',
  async asyncData ({ $fireStore, params, error }) {
    try {
      // Get post
      const slug = params.slug
      let post = {}
      const queryPost = await $fireStore
        .collection('posts')
        .where('slug', '==', slug)
        .where('state', '==', true)
        .limit(1).get()
      queryPost.forEach((p) => {
        post = {
          ...p.data()
        }
      })
      // End
      // Get posts
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
      return { posts, post }
    } catch (e) {
      error({ statusCode: 500, message: 'Hubo un error al cargar noticia.' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/news";
</style>
