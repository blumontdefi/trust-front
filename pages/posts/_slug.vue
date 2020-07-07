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
  data () {
    return {
      post: {},
      posts: []
    }
  },
  async created () {
    try {
      // Get post
      const slug = this.$route.params.slug
      const queryPost = await this.$fireStore
        .collection('posts')
        .where('slug', '==', slug)
        .where('state', '==', true)
        .limit(1).get()
      queryPost.forEach((p) => {
        this.post = {
          ...p.data()
        }
      })
      // End
      // Get posts
      // Load posts
      const querySnapshotPosts = await this.$fireStore.collection('posts')
        .where('state', '==', true)
        .orderBy('createdAt', 'asc')
        .limit(3).get()

      querySnapshotPosts.forEach((p) => {
        const obj = {
          id: p.id,
          ...p.data()
        }
        delete obj.createdAt
        obj.createdAt = p.data().createdAt.toDate()
        this.posts.push(obj)
      })
      // End
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/news";
</style>
