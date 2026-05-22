import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-05-21',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@\/registry\/default\/ui\/(.*)$/,
          replacement: `${fileURLToPath(new URL('./registry/default', import.meta.url))}/$1`,
        },
      ],
    },
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
