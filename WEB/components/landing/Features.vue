<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 選擇的事件類型變量
const selectedEvent = ref('112年特定區域的資料_聚合練習1'); // 預設選擇112年特定區域的資料_聚合練習1
// 控制是否禁用選擇框的變量
const isDisabled = ref(true);
// API返回的數據變量
const apiResponse = ref([]);

// 更新選擇框禁用狀態的函數
function updateDisabledState() {
  isDisabled.value = selectedEvent.value === '112年特定區域的資料_聚合練習1' ||
                     selectedEvent.value === '112年特定區域的資料_聚合練習2' ||
                     selectedEvent.value === '112年特定區域的資料_聚合練習3';
  console.log('Update Disabled State: ', isDisabled.value);
}

// 發送API請求並處理響應的函數
async function fetchApiData() {
  console.log('fetchApiData function called'); // 確認函數被調用
  let apiUrl = '';
  if (selectedEvent.value === '112年特定區域的資料_聚合練習1') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_1';
  } else if (selectedEvent.value === '112年特定區域的資料_聚合練習2') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_2';
  } else if (selectedEvent.value === '112年特定區域的資料_聚合練習3') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_3';
  }

  if (apiUrl) {
    try {
      console.log('Fetching data...'); // 確認進入到if分支
      const response = await axios.get(apiUrl);
      console.log('API Response:', response.data); // 檢查 API 回應
      apiResponse.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } else {
    console.log('Selected event does not match'); // 確認選擇事件是否匹配
  }
}

// 頁面加載時調用fetchApiData函數
onMounted(() => {
  fetchApiData();
});
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
    <div class="mt-4 flex space-x-4"> <!-- 使用 Flexbox 佈局，並添加間距 -->
      <select class="p-2 border rounded" v-model="selectedEvent" @change="updateDisabledState">
        <option value="">查詢事件</option>
        <option value="112年特定區域的資料_聚合練習1">112年特定區域的資料_聚合練習1</option>
        <option value="112年特定區域的資料_聚合練習2">112年特定區域的資料_聚合練習2</option>
        <option value="112年特定區域的資料_聚合練習3">112年特定區域的資料_聚合練習3</option>
      </select>
      <select class="p-2 border rounded" :disabled="isDisabled">
        <option value="">發生年度</option>
        <option value="112">112</option>
        <option value="111">111</option>
        <option value="110">110</option>
      </select>
      <select class="p-2 border rounded" :disabled="isDisabled">
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
      <select class="p-2 border rounded" :disabled="isDisabled">
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
      <select class="p-2 border rounded" :disabled="isDisabled">
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
          <option value="F03">電動自行車</option>
          <option value="F04">人力車</option>
          <option value="F05">獸力車</option>
          <option value="F06">其他慢車</option>
        </optgroup>
        <optgroup label="其他車">
          <option value="G01">拼裝車</option>
          <option value="G02">農耕用車(或機械)</option>
          <option value="G03">動力機械</option>
          <option value="G04">拖車(架)</option>
          <option value="G05">火車</option>
          <option value="G06">其他車</option>
        </optgroup>
        <optgroup label="人">
          <option value="H01">行人</option>
          <option value="H02">乘客</option>
          <option value="H03">其他人</option>
        </optgroup>
      </select>
      <!-- 確定按鈕，點擊後調用fetchApiData函數 -->
      <button class="p-2 bg-blue-500 text-white rounded" @click="fetchApiData">確定</button>
    </div>
  </div>

  <!-- 顯示API查詢結果 -->
  <div v-if="apiResponse.length > 0" class="mt-8">
    <h2 class="text-2xl font-bold mb-4">查詢結果</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="item in apiResponse" :key="item._id" class="p-4 border rounded shadow">
        <div v-for="(value, key) in item" :key="key">
          <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
