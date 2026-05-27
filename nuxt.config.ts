import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['vue-sonner/style.css', '~/assets/css/main.css'],
  compatibilityDate: '2026-05-21',
  devtools: { enabled: true },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'dark-plus',
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@\/registry\/default\/ui\/(.*)$/,
          replacement: `${fileURLToPath(new URL('./registry/default', import.meta.url))}/$1`,
        },
        {
          find: /^@\/components\/ui\/(.*)$/,
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
