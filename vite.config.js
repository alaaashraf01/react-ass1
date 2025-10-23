import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss()],
  base:"/react-ass1/",
  server: {
    middlewareMode: false,
    setupMiddlewares(middlewares) {
      // 👇 أي مسار غير معروف يرجع index.html بدل 404
      middlewares.use(
        history({
          disableDotRule: true,
          verbose: false,
        })
      );
      return middlewares;
    },
  },
})
