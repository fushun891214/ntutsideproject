<template>
  <!-- 定義頁腳模板 -->
  <footer class="my-20">
    <!-- 版權聲明 -->
    <p class="text-center text-sm text-slate-500">
      Copyright © {{ new Date().getFullYear() }} Nuxtship. All rights reserved.
    </p>
    <!-- 請求保留反向連結的註釋 -->
    <!--
      Can we ask you a favor 🙏
      Please keep this backlink on your website if possible.
    -->
    <!-- 反向連結和製作者信息 -->
    <p class="text-center text-xs text-slate-500 mt-1">
      Made by
      <a
        href="https://github.com/Gr33nW33n"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        Gr33nW33n
      </a>
      with attribution to
      <a
        href="https://web3templates.com"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        Web3Templates
      </a>
    </p>
  </footer>
</template>
