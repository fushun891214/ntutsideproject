<script setup>
  // 定義頁面元數據
  definePageMeta({
    layout: "landing", // 使用 "landing" 佈局
  });
</script>

<template>
  <!-- 使用 LandingContainer 組件 -->
  <LandingContainer>
    <!-- 使用 LandingHero 組件顯示主英雄區 -->
    <LandingHero></LandingHero>
    <!-- 使用 LandingFeatures 組件顯示功能區 -->
    <LandingFeatures_update></LandingFeatures_update>
    <!-- 使用 LandingLogos 組件顯示合作夥伴標誌區 -->
    <LandingLogos></LandingLogos>
    <!-- 使用 LandingCta 組件顯示 CTA (Call to Action) 區 -->
    <LandingCta></LandingCta>
  </LandingContainer>
</template>