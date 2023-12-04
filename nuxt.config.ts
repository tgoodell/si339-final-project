// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxt/content'
  ],
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/master.css',
  ],
})
