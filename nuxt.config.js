
import i18n from './configs/i18n'

const isProd = process.env.NODE_ENV === 'production'

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: "ssr",
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'กบกิ๊ฟช็อปและมดงานบิวตี้ @ตรอกจันทร์(ตึกเขียวส้ม)',
    htmlAttrs: {
      lang: 'th',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'กบกิ๊ฟช็อปและมดงานบิวตี้ @ตรอกจันทร์(ตึกเขียวส้ม)',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/logo/ais_logo.webp',
      },
      { hid: 'og:url', name: 'og:url', content: process.env.APP_URL },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'กบกิ๊ฟช็อปและมดงานบิวตี้ @ตรอกจันทร์(ตึกเขียวส้ม)',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    // <meta http-equiv="Content-Security-Policy" content="default-src https://cdn.example.net; child-src 'none'; object-src 'none'">
    link: [{ rel: 'icon', type: 'image/x-icon', href: '~/assets/Logo.jpg' }],
    script: [
      {
      },
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "slick-carousel/slick/slick.css",
    "slick-carousel/slick/slick-theme.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    // '~/plugins/router',
    { src: "~/plugins/slick", mode: "client" },
    { src: "./plugins/vue-agile.js", mode: "client" },
    { src: "~/plugins/rating.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontawesome",
    "@nuxtjs/pwa",
    // '@nuxtjs/vuetify',
    [
      '@nuxtjs/i18n',
      {
        // vueI18nLoader: true,
        defaultLocale: 'th',
        locales: [
          {
            code: 'en',
            name: 'En',
          },
          {
            code: 'th',
            name: 'ไทย',
          },
        ],
        vueI18n: i18n,
        vuex: {
          // Module namespace
          moduleName: 'i18n',

          // If enabled, current app's locale is synced with nuxt-i18n store module
          syncLocale: true,

          // If enabled, current translation messages are synced with nuxt-i18n store module
          syncMessages: true,

          // Mutation to commit to set route parameters translations
          syncRouteParams: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    '@nuxt/content',
    'nuxt-sweetalert2',
    // "@nuxt/content"

  ],

  env: {
    baseServiceURL: process.env.BASE_ENDPOINT
  },

  router: {
    base: process.env.ROUTER_PATH || '/',
  },

  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },

  privateRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },

  axios: {
    headers: {
      common: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
    credentials: false,
  },

  i18n: {
    // ... your other options
    skipSettingLocaleOnNavigate: true,
  },

  googleFonts: {
    families: {
      Roboto: true,
      Kanit: true,
    },
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  moment: {
    defaultTimezone: 'Asia/Bangkok',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extend(config, ctx) { },
    babel: {
      compact: true,
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            corejs: 3,
          },
        ],
      ],
      plugins: ["@babel/transform-runtime"],
    },
  },

  helmet: {
    // helmet options
    frameguard: { action: 'deny' }, // Sets "X-Frame-Options: DENY"
  },

  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false,
  },



};
