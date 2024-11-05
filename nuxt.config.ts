// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      ]
    }
  },
  css: [
    '@/assets/css/tailwind_custom.css'
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module' , '@nuxt/icon'],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }

})