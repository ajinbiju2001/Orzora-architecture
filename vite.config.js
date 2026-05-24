import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'html-clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url) {
            const url = new URL(req.url, 'http://localhost');
            let pathname = url.pathname;
            if (pathname.endsWith('/') && pathname !== '/') {
              pathname = pathname.slice(0, -1);
            }
            if (pathname !== '/' && !pathname.includes('.') && !pathname.startsWith('/@')) {
              const cleanPaths = ['/works', '/products', '/contact', '/tropical-paradise', '/home', '/arcadia'];
              if (cleanPaths.includes(pathname)) {
                req.url = pathname + '.html' + url.search;
              }
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        home: './home.html',
        works: './works.html',
        products: './products.html',
        contact: './contact.html',
        'tropical-paradise': './tropical-paradise.html',
        arcadia: './arcadia.html',
      },
    },
  },
});



