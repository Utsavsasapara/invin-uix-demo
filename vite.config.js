import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    // Don't pre-bundle the linked library so source-level icon imports resolve
    // against the real package graph at build time.
    exclude: ['invin-uix'],
  },
  server: {
    fs: {
      allow: ['.', '../../Invin-ui/invin-ui-poc'],
    },
  },
})
