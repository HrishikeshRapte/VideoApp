// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a1f3-2405-201-1008-70c3-2945-1dd8-14c3-6067.ngrok-free.app', // Add your ngrok domain here
      // Optionally, use a wildcard to allow all ngrok URLs
      // '*.ngrok-free.app',
    ],
  },
})
