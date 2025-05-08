// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-04-20",
    devtools: { enabled: true },

    app: {
      head: {
          title: "Henrik | Portfolio",
      },
    },
    modules: [
        "@nuxt/content",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/ui",
        "@nuxtjs/i18n",
    ],
    runtimeConfig: {
      public: {
        supabase_url: process.env.SUPABASE_URL,
        supabase_key: process.env.SUPABASE_KEY,
      }
    },
    css: ["~/assets/css/main.css"],
    icon: {
      customCollections: [{
        prefix: 'custom',
        dir: './assets/icons'
      }]
    },
    i18n: {
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
          {
            code: "en-US",
            iso: "en-US",
            name: "English(US)",
            file: "en-US.js"
          },
          {
            code: "sv-SE",
            iso: "sv-SE",
            name: "Svenska",
            file: "sv-SE.js"
          }
        ],
        defaultLocale: "en-US",
        vueI18n: "en-US"
    },
});