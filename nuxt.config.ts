// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-04-20",
    devtools: { enabled: true },

    modules: [
        "@nuxt/content",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/ui",
        "@nuxtjs/i18n",
    ],
    css: ["~/assets/css/main.css"],
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