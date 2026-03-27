import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Study Notes',
  description: 'Personal study notes for various subjects',

  markdown: {
    math: true,
  },

  srcDir: 'docs',
  outDir: '.vitepress/dist',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
})
