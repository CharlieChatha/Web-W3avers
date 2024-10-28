import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Web-W3avers/',
  build: {
    outDir: 'dist',
    rollupOptions:{
      input:{
        main: 'index.html',
      }
    }
  },
});