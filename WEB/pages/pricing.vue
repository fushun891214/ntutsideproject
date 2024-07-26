<script setup>
  // 定義頁面元數據
  definePageMeta({
    layout: "landing", // 使用 "landing" 佈局
  });

  // 定義定價計劃數據
  const pricing = [
    {
      name: "Personal", // 計劃名稱
      price: "Free", // 計劃價格
      popular: false, // 是否為熱門計劃
      features: [
        "Lifetime free",
        "Up to 3 users",
        "Unlimited Pages",
        "Nuxt Sub domain",
        "Basic Integrations",
        "Community Support",
      ],
      button: {
        text: "Get Started", // 按鈕文本
        link: "/", // 按鈕連結
      },
    },
    {
      name: "Startup", // 計劃名稱
      price: {
        monthly: "$19", // 每月價格
        annual: "$16", // 每年價格
        discount: "10%", // 折扣
        original: "$24", // 原價
      },
      popular: true, // 是否為熱門計劃
      features: [
        "All Free Features",
        "Up to 20 users",
        "20 Custom domains",
        "Unlimited Collaborators",
        "Advanced Integrations",
        "Priority Support",
      ],
      button: {
        text: "Get Started", // 按鈕文本
        link: "#", // 按鈕連結
      },
    },
    {
      name: "Enterprise", // 計劃名稱
      price: "Custom", // 計劃價格
      popular: false, // 是否為熱門計劃
      features: [
        "All Pro Features",
        "Unlimited Custom domains",
        "99.99% Uptime SLA",
        "SAML & SSO Integration",
        "Dedicated Account Manager",
        "24/7 Phone Support",
      ],
      button: {
        text: "Contact us", // 按鈕文本
        link: "/contact", // 按鈕連結
      },
    },
  ];
</script>

<template>
  <!-- 使用 LandingContainer 組件 -->
  <LandingContainer>
    <!-- 使用 LandingSectionhead 組件顯示區段標題和描述 -->
    <LandingSectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc>
        Simple & Predictable pricing. No Surprises.
      </template>
    </LandingSectionhead>

    <!-- 定價計劃展示區域 -->
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <!-- 遍歷 pricing 數組並顯示每個定價計劃 -->
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
