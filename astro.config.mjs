// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://lenardokorn.com',
  integrations: [mdx(), sitemap(), solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: node({ mode: 'standalone' }),
});
