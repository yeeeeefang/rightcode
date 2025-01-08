import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base:process.env.NODE_ENV==='production'?'/rightcode/':'/',
  // base:'/newcode/',
  base:'./',
  plugins: [react()],
  server: {
    open: true, // 啟動時自動打開瀏覽器
    historyApiFallback: true, // 確保非根路徑正確返回 index.html
  },
})
