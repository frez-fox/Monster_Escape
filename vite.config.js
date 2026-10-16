import { defineConfig } from 'vite';

// base './' keeps every path relative so the build works on Render
// (or any static host) with no localhost or absolute-path dependencies.
export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500
  },
  server: { host: true, port: 5173 }
});
