
import i18n from './configs/i18n'

const isProd = process.env.NODE_ENV === 'production'

export default {
  // serverMiddleware: ['~/api/controllers/member.js'],
  serverMiddleware: ['~/api/controllers/auth.js'],
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'server',
  debug: true,


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
      {
        hid: 'Cache-Control',
        name: 'Cache-Control',
        content: 'public',
      },
      { hid: 'og:url', name: 'og:url', content: process.env.APP_URL },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'กบกิ๊ฟช็อปและมดงานบิวตี้ @ตรอกจันทร์(ตึกเขียวส้ม)',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'กิ๊ฟช็อป ของขวัญ ของใช้ เครื่องสำอางค์ อยากได้อะไรขอให้ถามนะจ๊ะ ขายปลีก-ส่ง กิฟช็อป หวี กระจก ยางมัดผม โบว์ ผ้าเช็ดหน้า ของขวัญ ของชำร่วย งานบวช งานแต่ง งานศพ ยาหม่อง ยาดม ถุงเท้า ถุงมือ แฟชั่น นักเรียน เครื่องเขียนทุกชนิด ' },
      { hid: 'keywords', name: 'keywords', content: 'กบกิ๊ฟช็อปและมดงานบิวตี้,กบกิ๊ฟช็อป,มดงานบิวตี้,ของขวัญ,ของใช้,เครื่องสำอางค์,ขายปลีก-ส่ง,กิฟช็อป,หวี,กระจ,ยางมัดผม,โบว์,ผ้าเช็ดหน้า,ของขวัญ,ของชำร่วย,งานบวช,งานแต่ง,งานศพ,ยาหม่อง,ยาดม,ถุงเท้า,ถุงมือ,แฟชั่น,นักเรียน,เครื่องเขียนทุกชนิด' }
    ],

    // <meta http-equiv="Content-Security-Policy" content="default-src https://cdn.example.net; child-src 'none'; object-src 'none'">
    link: [{ rel: 'icon', type: 'image/x-icon', src: '~/assets/Logo.jpg' }],
    script: [
      {
      },
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "slick-carousel/slick/slick.css",
    "slick-carousel/slick/slick-theme.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    '~/assets/css/_custom.scss',
    '~/assets/css/standard.scss',
    '~/assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    // '~/plugins/router',
    { src: "~/plugins/slick", mode: "client" },
    { src: "./plugins/vue-agile.js", mode: "client" },
    { src: "~/plugins/rating.js", mode: "client" },
    { src: "~/plugins/cookies.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontawesome",
    "@nuxtjs/pwa",
    // '@nuxtjs/vuetify',
    // [
    //   '@nuxtjs/i18n',
    //   {
    //     // vueI18nLoader: true,
    //     defaultLocale: 'th',
    //     locales: [
    //       {
    //         code: 'en',
    //         name: 'En',
    //       },
    //       {
    //         code: 'th',
    //         name: 'ไทย',
    //       },
    //     ],
    //     vueI18n: i18n,
    //     vuex: {
    //       // Module namespace
    //       moduleName: 'i18n',

    //       // If enabled, current app's locale is synced with nuxt-i18n store module
    //       syncLocale: true,

    //       // If enabled, current translation messages are synced with nuxt-i18n store module
    //       syncMessages: true,

    //       // Mutation to commit to set route parameters translations
    //       syncRouteParams: true,
    //     },
    //   },
    // ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    '@nuxt/content',
    'nuxt-sweetalert2',
    '@nuxtjs/auth',

    // "@nuxt/content"
  ],

  axios: {
    baseURL: 'https://km-korat.com/api',
    headers: {
      common: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
    credentials: false,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: 'login',
            // propertyName: 'data.token',
          },
          user: {
            method: 'get',
            url: 'me',
            propertyName: 'data.user',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/login',
    },
  },

  env: {
    baseServiceURL: process.env.BASE_ENDPOINT
  },

  router: {
    base: process.env.ROUTER_PATH || '/',
  },

  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    BASE_ENDPOINT_IMAGE: process.env.BASE_ENDPOINT_IMAGE,
  },

  privateRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    BASE_ENDPOINT_IMAGE: process.env.BASE_ENDPOINT_IMAGE,
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
    component: "font-awesome-icon",
    addCss: false,
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
    host: '127.0.0.1', // default: 127.0.0.1,
    timing: false,
  },



};
