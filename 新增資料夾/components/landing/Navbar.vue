<script setup>
  // 定義選單項目
  const menuitems = [
    {
      title: "Features",
      path: "#",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  // 定義是否打開選單的狀態
  const open = ref(false);
</script>

<template>
  <!-- 使用 LandingContainer 組件 -->
  <LandingContainer>
    <!-- 頁面標頭 -->
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <!-- 將標頭分為兩部分 -->
      <div class="flex w-full lg:w-auto items-center justify-between">
        <!-- 網站標誌和名稱 -->
        <a href="/" class="text-lg flex items-center">
          <!-- 插入logo圖片，並調整其大小 -->
          <img src="@/assets/img/ntutlogo.jpg" alt="logo" class="h-12 mr-4"/>
          <!-- 插入網站名稱，並調整字體大小 -->
          <span class="font-bold text-slate-800 text-3xl">北科</span>
          <span class="text-slate-500 text-3xl">電子甲</span>
        </a>
        <!-- 手機版選單按鈕 -->
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <!-- 選單圖標 -->
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 桌面版選單 -->
      <!--
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" :key="item.title">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
      -->
    </header>
  </LandingContainer>
</template>
