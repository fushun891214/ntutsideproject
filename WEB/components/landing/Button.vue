<script setup lang="ts">
  // 定義按鈕屬性介面
  interface Props {
    size?: "md" | "lg"; // 按鈕尺寸，可選值為 "md" 或 "lg"
    block?: boolean; // 是否為塊級元素
    styleName?: "outline" | "primary" | "inverted"; // 按鈕樣式名稱
    className?: string; // 額外的 CSS 類名
    [x: string]: any; // 其他屬性
  }

  // 定義按鈕屬性的默認值
  withDefaults(defineProps<Props>(), {
    size: "md", // 默認尺寸為 "md"
    styleName: "primary", // 默認樣式名稱為 "primary"
  });

  // 定義不同尺寸按鈕的樣式
  const sizes = {
    md: "px-5 py-2.5", // 中等尺寸樣式
    lg: "px-6 py-3", // 大尺寸樣式
  };

  // 定義不同樣式按鈕的樣式
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white", // 外框樣式
    primary: "bg-black text-white hover:bg-slate-900 border-2 border-transparent", // 主要樣式
  };
</script>

<template>
  <!-- 定義按鈕模板 -->
  <button
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200', // 基本按鈕樣式
      block && 'w-full', // 如果 block 屬性為真，按鈕寬度為 100%
      sizes[size], // 根據 size 屬性應用相應的尺寸樣式
      styles[styleName], // 根據 styleName 屬性應用相應的樣式
      className, // 額外的 CSS 類名
    ]"
  >
    <!-- 插槽，用於插入按鈕內容 -->
    <slot />
  </button>
</template>
