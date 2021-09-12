import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        odin_recipes: resolve(__dirname, 'odin_recipes/index.html')
      }
    }
  },
  base: "/the_odin_project/"
})

