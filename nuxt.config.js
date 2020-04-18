export default {
  mode: 'spa',

  generate: {
    routes: [
      '/login',
      '/register'
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
css: ['~assets/scss/main.scss', 'bootstrap/dist/css/bootstrap.css'],
styleResources: {
  scss: ['~assets/scss/main.scss']
},
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src:'~/plugins/flash-message', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // Simple usage
    '@nuxtjs/proxy',

  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {},
  proxy: {
    '/api': {
      target: 'https://project-managers.herokuapp.com/api',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  axios: {
    baseURL: '/api',
    credentials: true,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env:{
    JWT_SECRET: process.env.JWT_SECRET || 'thisshouldbealongkey-because-they_said_it_isase)key'
  }
}
