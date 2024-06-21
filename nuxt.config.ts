// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
  ],
  srcDir: "src/",
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      tailwindcss: {},
      "postcss-import": {},
      "postcss-preset-env": {},
    },
  },
});
