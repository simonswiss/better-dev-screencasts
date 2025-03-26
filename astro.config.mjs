import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'
import keystatic from '@keystatic/astro'

import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel'

import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'https://betterdevscreencasts.com',
  integrations: [
    react(),
    mdx(),
    keystatic(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
})
