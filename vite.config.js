import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel([
      'resources/js/app.jsx',
    ]),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/resources/js'
    }
  }
});
