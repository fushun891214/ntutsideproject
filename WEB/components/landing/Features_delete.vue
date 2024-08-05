<script setup>
import { ref } from 'vue';
import axios from 'axios';

// 表單輸入變量
const idToDelete = ref('');

// API返回的結果變量
const apiResponse = ref(null);
const runtimeConfig = useRuntimeConfig()

// API_SERVER位址
const apiServer = runtimeConfig.public.apiServerIp;

// 發送API請求並處理響應的函數
async function deleteData() {
  try {
    const response = await axios.delete(`${apiServer}/A1_and_A2_years/delete/id/${idToDelete.value}`);
    console.log('API Response:', response.data); // 檢查 API 回應
    apiResponse.value = response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    alert('刪除資料失敗');
  }
}
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">刪除資料</h2>
    <p class="text-lg mt-4 text-slate-600">請透過下方文字方塊得以從系統刪除特定ID資料</p>
    <div class="mt-4 flex space-x-4">
      <input v-model="idToDelete" class="p-2 border rounded" type="text" placeholder="特定資料ID" />
      <button class="p-2 bg-blue-500 text-white rounded" @click="deleteData">確定</button>
    </div>

    <!-- 顯示API刪除資料的結果 -->
    <div v-if="apiResponse" class="mt-8">
      <h2 class="text-2xl font-bold mb-4">刪除資料結果</h2>
      <div class="p-4 border rounded shadow">
        <p><strong>message:</strong> {{ apiResponse.message }}</p>
        <div v-for="(value, key) in apiResponse.data" :key="key">
          <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
