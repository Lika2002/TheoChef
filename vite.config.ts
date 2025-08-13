import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/numele-repo-ului-tau/', // <- schimbă cu numele exact al repo-ului de pe GitHub
})
