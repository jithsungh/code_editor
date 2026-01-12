import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: false,  // We'll use explicit configuration
  server: {
    fs: {
      allow: ['..']  // Allow serving files from parent directory
    }
  }
})
