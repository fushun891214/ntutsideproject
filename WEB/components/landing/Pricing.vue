<script setup>
  // 定義接收的屬性
  defineProps(["plan"]);
</script>

<template>
  <!-- 定義定價計劃區塊 -->
  <div>
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <!-- 定價計劃名稱和價格 -->
      <div class="text-center">
        <h4 class="text-lg font-medium text-gray-400">{{ plan.name }}</h4>
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
          {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
          }}
        </p>
        <!-- 
        如果有原價，顯示原價（目前註解掉了）
        { plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        ) }
        -->
      </div>
      <!-- 定價計劃特點列表 -->
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          class="flex items-start gap-3 text-gray-800"
        >
          <!-- 特點前的勾勾圖標 -->
          <LandingTick className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- 定價計劃操作按鈕 -->
      <div class="flex mt-8">
        <LandingLink
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
        >
          {{ plan.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
