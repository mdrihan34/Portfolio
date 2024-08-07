import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import SpaceCanvas from './src/Pages/Home/SpaceWatch'
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
