// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-swiper", "@vesp/nuxt-fontawesome"],
  css: [
    "@fontsource/poppins/400.css",
    "@fontsource/poppins/500.css",
    "@fontsource/poppins/600.css",
    "~/assets/css/main.css",
  ],
  content: {
    watch: {
      enabled: false,
      ws: {
        // @ts-ignore
        port: 4000,
        showURL: true,
      },
    },
    content: {
      preview: {
        api: "https://api.nuxt.studio",
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      "@tailwindcss/postcss": {},
      "postcss-simple-vars": {},
      "postcss-import": {},
      "postcss-preset-env": {},
    },
  },
  // @ts-ignore
  fontawesome: {
    icons: {
      solid: ["chevron-left", "chevron-right"],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
