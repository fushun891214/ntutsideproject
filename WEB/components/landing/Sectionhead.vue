<script setup>
  // 定義接收的屬性並設置默認值
  defineProps({
    align: {
      default: "center", // 默認對齊方式為 "center"
    },
  });
</script>

<template>
  <!-- 定義區段標題區塊 -->
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <!-- 標題 -->
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <slot name="title">Title</slot> <!-- 標題插槽，默認為 "Title" -->
    </h1>
    <!-- 描述文字 -->
    <p class="text-lg mt-4 text-slate-600">
      <slot name="desc">Some description goes here</slot> <!-- 描述文字插槽，默認為 "Some description goes here" -->
    </p>
  </div>
</template>
