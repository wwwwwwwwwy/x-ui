import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-05-21',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/docs',
        '/docs/components/button',
        '/docs/components/input',
        '/docs/components/card',
        '/docs/components/pro-table',
      ],
    },
  },
})
