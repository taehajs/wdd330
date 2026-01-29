import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/products': {
        target: 'https://wdd330-backend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products/, '/products'),
      },
      '/product': {
        target: 'https://wdd330-backend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, '/product'),
      }
    }
  }
});