// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@nuxtjs/mdc',
    '@nuxt/image'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['model-viewer'].includes(tag),
    },
  },

  app: {
    head: {
      title: 'NordicBase | Henrik',
      link: [
        {
          rel: 'icon',
          href: '/favicon-light.ico',
          type: 'icon',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          href: '/favicon-dark.ico',
          type: 'icon',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
  },


  supabase: {
    redirect: false,
    key: process.env.SUPABASE_PUBLISHABLE_KEY,
    url: process.env.SUPABASE_URL
  },


  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})