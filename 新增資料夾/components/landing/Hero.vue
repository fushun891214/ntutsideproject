<template>
  <!-- 定義主內容區域 -->
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <!-- 圖片區域 -->
    <div class="p-24 md:order-1 hidden md:block">
      <!-- 圖片設置及屬性 -->
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="@/assets/img/traffic_accident_logo.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <!-- 文本和按鈕區域 -->
    <div>
      <!-- 標題 -->
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        臺北市交通事故分析系統
      </h1>
      <!-- 描述文字 -->
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        透過這個平台，您可以方便地獲取全面的交通事故分析資料，以提升交通管理和安全措施的效率。
        <!-- <wbr /> Built with Nuxt & TailwindCSS. You can quickly
        create any website with this starter. -->
      </p>
      <!-- 按鈕連結 -->
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <!-- 開始使用按鈕 -->
        <!-- <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        > -->
        <!-- 查看倉庫按鈕 -->
        <!-- <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        > -->
      </div>
    </div>
  </main>
</template>
