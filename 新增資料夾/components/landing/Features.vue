<script setup>
  // 定義功能列表
  const features = [
    {
      title: "Bring Your Own Framework", // 功能標題
      description: "Build your site using Vue, web components, or just plain ol' HTML + JavaScript.", // 功能描述
      icon: "bx:bxs-briefcase", // 功能圖標
    },
    {
      title: "100% Static HTML, No JS", // 功能標題
      description: "Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.", // 功能描述
      icon: "bx:bxs-window-alt", // 功能圖標
    },
    {
      title: "On-Demand Components", // 功能標題
      description: "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.", // 功能描述
      icon: "bx:bxs-data", // 功能圖標
    },
    {
      title: "Broad Integration", // 功能標題
      description: "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.", // 功能描述
      icon: "bx:bxs-bot", // 功能圖標
    },
    {
      title: "SEO Enabled", // 功能標題
      description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!", // 功能描述
      icon: "bx:bxs-file-find", // 功能圖標
    },
    {
      title: "Community", // 功能標題
      description: "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.", // 功能描述
      icon: "bx:bxs-user", // 功能圖標
    },
    {
      title: "Bring Your Own Framework", // 功能標題
      description: "Build your site using Vue, web components, or just plain ol' HTML + JavaScript.", // 功能描述
      icon: "bx:bxs-briefcase", // 功能圖標
    },
    {
      title: "100% Static HTML, No JS", // 功能標題
      description: "Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.", // 功能描述
      icon: "bx:bxs-window-alt", // 功能圖標
    },
    {
      title: "On-Demand Components", // 功能標題
      description: "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.", // 功能描述
      icon: "bx:bxs-data", // 功能圖標
    },
    {
      title: "Broad Integration", // 功能標題
      description: "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.", // 功能描述
      icon: "bx:bxs-bot", // 功能圖標
    },
    {
      title: "SEO Enabled", // 功能標題
      description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!", // 功能描述
      icon: "bx:bxs-file-find", // 功能圖標
    },
    {
      title: "Community", // 功能標題
      description: "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.", // 功能描述
      icon: "bx:bxs-user", // 功能圖標
    },
  ];
</script>

<template>
  <!-- 功能區塊標題和描述 -->
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      分析篩選條件
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      請透過下方Selection Box得以獲取進一步的分析資料內容
    </p>
    <!-- 添加選擇框 -->
    <div class="mt-4 flex space-x-4"> <!-- 使用 Flexbox 佈局，並添加間距 -->
      <select class="p-2 border rounded">
        <option value="">發生年度</option>
        <option value="112">112</option>
        <option value="111">111</option>
        <option value="110">110</option>
      </select>
      <select class="p-2 border rounded">
        <option value="">發生月</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select class="p-2 border rounded">
        <option value="">選擇地區</option>
        <option value="01">大同區</option>
        <option value="02">萬華區</option>
        <option value="03">中山區</option>
        <option value="04">大安區</option>
        <option value="05">中正區</option>
        <option value="06">松山區</option>
        <option value="07">信義區</option>
        <option value="08">士林區</option>
        <option value="09">北投區</option>
        <option value="10">文山區</option>
        <option value="11">南港區</option>
        <option value="12">內湖區</option>
      </select>
      <!-- 添加車種選擇框 -->
      <select class="p-2 border rounded">
        <option value="">選擇車種</option>
        <optgroup label="大客車">
          <option value="A01">公營公車</option>
          <option value="A02">民營公車</option>
          <option value="A03">公營客運</option>
          <option value="A04">民營客運</option>
          <option value="A05">遊覽車</option>
          <option value="A06">自用大客車</option>
        </optgroup>
        <optgroup label="大貨車">
          <option value="A11">營業用</option>
          <option value="A12">自用</option>
        </optgroup>
        <optgroup label="全聯結車">
          <option value="A21">營業用</option>
          <option value="A22">自用</option>
        </optgroup>
        <optgroup label="半聯結車">
          <option value="A31">營業用</option>
          <option value="A32">自用</option>
        </optgroup>
        <optgroup label="曳引車">
          <option value="A41">營業用</option>
          <option value="A42">自用</option>
        </optgroup>
        <optgroup label="小客車">
          <option value="B01">計程車</option>
          <option value="B02">租賃車</option>
          <option value="B03">自用</option>
        </optgroup>
        <optgroup label="小貨車">
          <option value="B11">營業用</option>
          <option value="B12">自用</option>
          <option value="B13">租賃小貨車</option>
        </optgroup>
        <optgroup label="機車">
          <option value="C01">大型重型1 (550C.C.以上)</option>
          <option value="C02">大型重型2 (250-550C.C.)</option>
          <option value="C03">普通重型</option>
          <option value="C04">普通輕型</option>
          <option value="C05">小型輕型</option>
        </optgroup>
        <optgroup label="軍車">
          <option value="D01">大客車</option>
          <option value="D02">載重車</option>
          <option value="D03">小型車</option>
        </optgroup>
        <optgroup label="特種車">
          <option value="E01">救護車</option>
          <option value="E02">消防車</option>
          <option value="E03">警備車</option>
          <option value="E04">工程車</option>
          <option value="E05">其他特種車</option>
        </optgroup>
        <optgroup label="慢車">
          <option value="F01">腳踏自行車</option>
          <option value="F02">電動輔助自行車</option>
          <option value="F03">微型電動二輪車</option>
          <option value="F04">人力車</option>
          <option value="F05">獸力車</option>
          <option value="F06">其他慢車</option>
          <option value="F07">個人行動運具</option>
        </optgroup>
        <optgroup label="其他車">
          <option value="G01">拼裝車</option>
          <option value="G02">農耕用車(或機械)</option>
          <option value="G03">動力機械</option>
          <option value="G04">拖車(架)</option>
          <option value="G05">火車</option>
          <option value="G06">其他車</option>
          <option value="G07">大眾捷運系統車輛</option>
        </optgroup>
        <optgroup label="人">
          <option value="H01">行人</option>
          <option value="H02">乘客</option>
          <option value="H03">其他人</option>
          <option value="H04">輔助代步器材</option>
        </optgroup>
      </select>
    </div>
  </div>

  <!-- 功能列表 -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <!-- 遍歷 features 數組並顯示每個功能項 -->
    <div v-for="item of features" class="flex gap-4 items-start">
      <!-- 功能圖標 -->
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <!-- 功能標題和描述 -->
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
