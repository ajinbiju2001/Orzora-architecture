import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        works: './works.html',
        products: './products.html',
        contact: './contact.html',
      },
    },
  },
});
