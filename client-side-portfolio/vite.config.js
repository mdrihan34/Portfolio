import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import SpaceCanvas from './src/Pages/Home/SpaceWatch'
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    proxy: {
      "/api": {
        target: "https://server-site-portfolio-czyvsxb2r-rihan2045s-projects-8a229069.vercel.app",
        changeOrigin: true,
        secure: false
      }
    }
  }
})
