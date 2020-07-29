import redirectSSL from 'redirect-ssl'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  env: {
    BASE_URL: process.env.BASE_URL
  },
  vue: {
    config: {
      ignoredElements: [/^ion-/]
    }
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'Trust - Subastas online de Caballos',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Somos la primera plataforma de subastas online de Caballos del Perú.'
      },
      {
        property: 'og:description',
        content: 'Somos la primera plataforma de subastas online de Caballos del Perú.'
      },
      {
        property: 'og:site_name',
        content: 'Trust Online Auctions - Casa de Subastas'
      },
      {
        property: 'og:title',
        content: 'Trust Online Auctions - Casa de Subastas'
      },
      {
        name: 'msapplication-TileColor',
        content: '#11224C'
      },
      {
        name: 'theme-color',
        content: '#11224C'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&display=swap'
      }
    ],
    script: [
      {
        src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js',
        body: true
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vuelidate',
    '~/plugins/lazy',
    {
      src: '~/plugins/swiper',
      ssr: false
    }
  ],
  /*
  * Router Settings
  * */
  router: {
    middleware: []
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['es']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/firebase',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sentry'
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyCMgAVd9x4nqiCaktTrFb3k4Y_4EY7h2UE',
      authDomain: 'trust-2ed52.firebaseapp.com',
      databaseURL: 'https://trust-2ed52.firebaseio.com',
      projectId: 'trust-2ed52',
      storageBucket: 'trust-2ed52.appspot.com',
      messagingSenderId: '1003025988134',
      appId: '1:1003025988134:web:2c5b303925616682af84e7'
    },
    services: {
      auth: {
        ssr: true
      },
      firestore: true,
      analytics: false,
      realtimeDb: false,
      messaging: false
    }
  },
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: true
    }
  },
  recaptcha: {
    hideBadge: true,
    siteKey: '6Lf6QLQZAAAAAFL0N-xp2mEF7kZF8hMRnkdHZcAA',
    version: 2, // Version
    size: 'normal',
    language: 'es'
  },
  sentry: {
    dsn: 'https://6008a18f69c4407a8ae3c1d3b4b09040@o304108.ingest.sentry.io/5358630',
    config: {} // Additional config
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  /*
  ** Variables & Mixins
  */
  styleResources: {
    scss: [
      '@/assets/scss/base/_config.scss',
      '@/assets/scss/lib/_mixins.scss'
    ]
  },
  build: {},
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    })
  ]
}
