import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 获取当前日期作为构建版本标识
const buildDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 生产环境使用 jsDelivr CDN 路径
  base: process.env.NODE_ENV === 'production'
    ? 'https://cdn.jsdelivr.net/gh/apauto-to-all/apauto-to-all.github.io@gh-pages/'
    : '/',
  build: {
    // 将静态资源放在带版本标记的目录，避免缓存问题
    assetsDir: `assets-${buildDate}`,
    rollupOptions: {
      output: {
        // 添加文件名哈希，确保文件更新后CDN能更新缓存
        chunkFileNames: `assets-${buildDate}/js/[name]-[hash].js`,
        entryFileNames: `assets-${buildDate}/js/[name]-[hash].js`,
        assetFileNames: `assets-${buildDate}/[ext]/[name]-[hash].[ext]`
      }
    }
  }
})
