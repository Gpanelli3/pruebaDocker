import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto es vital para Docker
    port: 5173,
    watch: {
      usePolling: true, // Esto asegura que detecte cambios en Windows
    }
  }
})
