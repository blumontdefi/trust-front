<template>
  <div class="__layout">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  components: {},
  head () {
    return {
      title: this.$store.state.content.data.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: `${this.$store.state.content.data.description}` }
      ]
    }
  }
}
</script>
