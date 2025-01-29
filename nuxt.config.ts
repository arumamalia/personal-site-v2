
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-swiper',
    '@vesp/nuxt-fontawesome'
  ],
  devtools: {
    enabled: true
  },
  css: [
    "@fontsource/poppins/400.css",
    "@fontsource/poppins/500.css",
    "@fontsource/poppins/600.css",
    "~/assets/css/main.css"
  ],
  srcDir: "src/",
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      "@tailwindcss/postcss" : {},
      "postcss-simple-vars": {},
      "postcss-import": {},
      "postcss-preset-env": {},
    },
  },
  // @ts-ignore
  fontawesome: {
    icons: { 
      solid: [
        'chevron-left',
        'chevron-right',
      ],
    }
  }
});
