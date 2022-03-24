
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kob-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      , {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Kanit:400,300&subset=thai,latin",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/slick', mode: 'client'
  },
  { src: './plugins/vue-agile.js', mode: 'client' } 
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

  ],
  googleFonts: {
    families: {
      Roboto: true,
      Kanit: true,
    }
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extend(config, ctx) { },
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3
          }
        ]
      ],
      plugins: ['@babel/transform-runtime']
    }
  }
}
