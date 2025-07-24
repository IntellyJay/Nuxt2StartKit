export default {
    head: {
        title: 'Nuxt',
        htmlAttrs: {
            lang: 'en',
            class: 'no-js',
            translate: 'no'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'google', content: 'notranslate' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'text/css', href: '/styles/reset.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/styles/custom.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/styles/bootstrap.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/styles/bootstrap-icons.min.css' },
        ],
        script: [
            { type: 'text/javascript', src: 'scripts/bootstrap.bundle.min.js' },
        ],
    },

    server: {
        host: '0.0.0.0',
        port: 3000
    },

    css: [
        '~/plugins/global.css',
    ],

    plugins: [
        '~/plugins/domain.js',
        '~/plugins/i18n.js',
        '~/plugins/global.js',
    ],

    components: true,

    // loading: "~/components/Loading.vue",
    // loading: false,

    buildModules: [
    ],

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: '/',
    },

    build: {
    }
}
