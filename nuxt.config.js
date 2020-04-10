// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/chunjuichen/'
  }
} : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#da532c'},
      { name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: '/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png'},
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/2751eccbc1.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-core.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#2b2b2b',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/open-iconic/font/css/open-iconic-bootstrap.min.css',
    '@/assets/animate.css/animate.css',
    '@/assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/anime.js',
    {
      src: "~/plugins/aos",
      ssr: false
    }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Redirect SSL
  */
  serverMiddleware: ["redirect-ssl"],
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
