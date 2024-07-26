<script setup lang="ts">
  // 定義連結屬性介面
  interface Props {
    href: string; // 連結目標地址
    size?: "md" | "lg"; // 連結尺寸，可選值為 "md" 或 "lg"
    block?: boolean; // 是否為塊級元素
    styleName?: "outline" | "primary" | "inverted" | "muted"; // 連結樣式名稱
    className?: string; // 額外的 CSS 類名
    [x: string]: any; // 其他屬性
  }

  // 定義連結屬性的默認值
  withDefaults(defineProps<Props>(), {
    size: "lg", // 默認尺寸為 "lg"
    styleName: "primary", // 默認樣式名稱為 "primary"
  });

  // 定義不同尺寸連結的樣式
  const sizes = {
    lg: "px-5 py-2.5", // 大尺寸樣式
    md: "px-4 py-2", // 中等尺寸樣式
  };

  // 定義不同樣式連結的樣式
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black", // 外框樣式
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent", // 主要樣式
    inverted: "bg-white text-black border-2 border-transparent", // 反轉樣式
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent", // 靜音樣式
  };
</script>

<template>
  <!-- 定義 NuxtLink 模板 -->
  <NuxtLink
    :href="href"
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200', // 基本連結樣式
      block && 'w-full', // 如果 block 屬性為真，連結寬度為 100%
      sizes[size], // 根據 size 屬性應用相應的尺寸樣式
      styles[styleName], // 根據 styleName 屬性應用相應的樣式
    ]"
    ><slot /> <!-- 插槽，用於插入連結內容 -->
  </NuxtLink>
</template>
