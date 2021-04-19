let development = process.env.NODE_ENV !== 'production'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RED MILES',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss', '@/assets/scss/transitions.scss'],

  // loading: {
  //   color: '#F16912',
  //   height: '5px',
  // },
  loading: '~/components/Loading.vue',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-vue-select',
  ],

  axios: {
    credentials: false,
    proxy: true,
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL,
    headers: {
      accept: 'application/json',
    },
  },

  proxy: {
    '/data': {
      target: process.env.API_URL,
      // target: 'https://red2.redcomm.co.id/api/api/v1',
      // target: 'http://127.0.0.1:8000/api/v1',
      pathRewrite: { '^/data': '' },
    },
  },

  publicRuntimeConfig: {
    apiUrl: 'http://localhost:3004/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: 'static',
  env: {
    PRODUCTION_BASE_PATH: process.env.PRODUCTION_BASE_PATH,
  },
  router: {
    base: process.env.PRODUCTION_BASE_PATH,
  },
}
