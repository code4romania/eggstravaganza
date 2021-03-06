import messages from './i18n';
export default {
    mode: 'universal',
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },
    /*
     ** Headers of the page
     */
    head: {
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: false,
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/ssr-components.js', ssr: true },
        { src: '~plugins/vuex-persist', ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        //
        'nuxt-i18n',
        '@nuxtjs/google-analytics',
    ],
    i18n: {
        locales: [
            {
                code: 'ro',
                iso: 'ro-RO',
                name: 'Română',
                file: 'ro.js',
            },
        ],
        defaultLocale: 'ro',
        seo: false,
        detectBrowserLanguage: false,
        parsePages: false,
        vueI18n: {
            silentTranslationWarn: true,
            fallbackLocale: 'ro',
            messages,
        },
    },
    googleAnalytics: {
        id: process.env.ANALYTICS_ID || '',
    },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,

        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
            },
        },

        postcss: {
            plugins: {
                'postcss-nested': {},
            },
        },

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
            }
        },
    },
};
