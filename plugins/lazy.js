import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  // attempt: 1,
  loading: 'https://firebasestorage.googleapis.com/v0/b/trust-2ed52.appspot.com/o/content%2Fpreloader-horses.png?alt=media&token=1e9a1610-105e-4758-8ca2-b9c6afa72ff0'
})
