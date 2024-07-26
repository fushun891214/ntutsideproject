// https://nuxt.com/docs/api/configuration/nuxt-config
// 引入 defineNuxtConfig 函數，用於定義 Nuxt 配置
import { defineNuxtConfig } from 'nuxt/config';

// 定義並導出 Nuxt 配置
export default defineNuxtConfig({
  // 構建配置
  build: {
    // 指定需要轉譯的依賴
    transpile: ['@chenfengyuan/vue-carousel', '@iconify/vue'],
  },
  // 開發工具配置
  devtools: { enabled: true },
  // 全局 CSS 配置
  css: ["~/assets/css/main.css"],
  // PostCSS 配置
  postcss: {
    // PostCSS 插件配置
    plugins: {
      // 使用 Tailwind CSS 插件
      tailwindcss: {},
      // 使用 Autoprefixer 插件
      autoprefixer: {},
    },
  },
  // 加載 Nuxt 模塊
  modules: ["nuxt-icon"],
  // 應用程序配置
  app: {
    // 頁面 head 配置
    head: {
      // 設置網站標題
      title: '交通事故分析系統', // 更改網站名稱
      // 設置 meta 標籤
      meta: [
        // 設置字符編碼
        { charset: 'utf-8' },
        // 設置視窗屬性
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // 設置網站描述
        { hid: 'description', name: 'description', content: '你的網站描述' }
      ],
      // 設置 link 標籤
      link: [
        // 設置 favicon 圖標
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/favicon.png' 
        } // 更改 favicon 圖標
      ]
    }
  }
});
