import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  server: {
    allowedHosts: [
      'election-rural-agree-component.trycloudflare.com'
    ]},
  

  plugins: [react()],
})
