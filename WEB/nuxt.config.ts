// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  build: {
    transpile: ['@chenfengyuan/vue-carousel', '@iconify/vue'],
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  // 模塊配置
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
          href: '/Taipei-Tech-Logo.png' 
        } // 更改favicon圖標
      ]
    }
  }
});


