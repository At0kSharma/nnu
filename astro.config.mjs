import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Static output: `astro build` writes plain HTML/CSS to dist/, which is all
// Cloudflare Pages or a Workers assets binding needs. No adapter, no server.
export default defineConfig({
  site: 'https://newnepaludyog.com.np',
  vite: { plugins: [tailwindcss()] },
})
