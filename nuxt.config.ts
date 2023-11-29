// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/master.css',
  ],
})
