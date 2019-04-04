const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Glammy Modelos y Edecanes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'eventos,modelos,edecanes,matagalpa,nicaragua,influencers,hostess,promoter,pistola co2,confeti,merchandising' },
      { hid: 'description', name: 'description', content: 'Somos una joven agencia de modelos y edecanes capacitados para dar una cálida bienvenida a tus clientes e invitados. Cuidamos de cada detalle de tu evento ofreciendo servicios a la medida de tus necesidades.' },
      { property:'og:title', content: 'Glammy Modelos y Edecanes' },
      { property:'og:type', content: 'Website' },
      { property:'og:url', content: '' },
      { property:'og:image', content: '' },
      { property:'og:description', content: 'Somos una joven agencia de modelos y edecanes capacitados para dar una cálida bienvenida a tus clientes e invitados. Cuidamos de cada detalle de tu evento ofreciendo servicios a la medida de tus necesidades.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.0/css/all.css', integrity:'sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h', crossorigin:'anonymous' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F24C19' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign']
        }
      ]
    }]
      
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
