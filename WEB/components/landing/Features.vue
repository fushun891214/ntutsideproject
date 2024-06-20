<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 選擇的事件類型變量
const selectedEvent = ref('聚合_112年_特定區域_資料_聚合練習_1'); // 預設選擇聚合_112年_特定區域_資料_聚合練習_1
// 控制是否禁用選擇框的變量
const isDisabledYear = ref(true);
const isDisabledMonth = ref(false);
const isDisabledRegion = ref(true);
const isDisabledVehicle = ref(false);
// API返回的數據變量
const apiResponse = ref([]);
const mortalityRateResponse = ref(null); // 新增變數來存儲特定API的結果

// 發生年度、月和車種選擇的變量
const selectedYear = ref('');
const selectedMonth = ref('');
const selectedRegion = ref('');
const selectedVehicle = ref('');

// 更新選擇框禁用狀態的函數
function updateDisabledState() {
  isDisabledYear.value = selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_1' ||
                         selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_2' ||
                         selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_3';

  isDisabledMonth.value = selectedEvent.value === '查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數' || 
                          selectedEvent.value === '查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數' ||
                          selectedEvent.value === '查詢_排序_特定年度_特定車種_發生事故_地區_月份' ||
                          selectedEvent.value === '查詢_排序_特定年度_特定車種_發生事故_特定地區' ||
                          selectedEvent.value === '查詢_特定年度_特定車種__特定地區_發生事故_死亡率';

  isDisabledRegion.value = selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_1' ||
                           selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_2' ||
                           selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_3' ||
                           selectedEvent.value === '查詢_排序_特定年度_特定車種_發生事故_地區_月份';

  isDisabledVehicle.value = selectedEvent.value === '查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數'|| 
                          selectedEvent.value === '查詢_排序_特定年度_特定地區_特定月份_總受傷人數+總死亡人數' ||
                          selectedEvent.value === '查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數';

  console.log('Update Disabled State: ', isDisabledYear.value, isDisabledMonth.value, isDisabledRegion.value, isDisabledVehicle.value);
}

// 發送API請求並處理響應的函數
async function fetchApiData() {
  console.log('fetchApiData function called'); // 確認函數被調用
  let apiUrl = '';
  mortalityRateResponse.value = null; // 重置變數
  
  if (selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_1') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_1';
  } else if (selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_2') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_2';
  } else if (selectedEvent.value === '聚合_112年_特定區域_資料_聚合練習_3') {
    apiUrl = 'http://localhost:5000/A1_and_A2_years/aggregate_3';
  } else if (selectedEvent.value === '查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/sum/year/${selectedYear.value}/region/${decodeURIComponent(selectedRegion.value)}`;
  }
  else if (selectedEvent.value === '查詢_排序_特定年度_特定地區_特定月份_總受傷人數+總死亡人數') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/sum/year/${selectedYear.value}/region/${decodeURIComponent(selectedRegion.value)}/month/${selectedMonth.value}`;
  }
  else if (selectedEvent.value === '查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/avg/year/${selectedYear.value}/region/${decodeURIComponent(selectedRegion.value)}`;
  }
  else if (selectedEvent.value === '查詢_排序_特定年度_特定車種_發生事故_地區_月份') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/sum/year/${selectedYear.value}/vehicle/${selectedVehicle.value}`;
  }
  else if (selectedEvent.value === '查詢_排序_特定年度_特定車種_發生事故_特定地區') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/sum/year/${selectedYear.value}/vehicle/${selectedVehicle.value}/region/${decodeURIComponent(selectedRegion.value)}`;
  }
  else if (selectedEvent.value === '查詢_特定年度_特定車種_發生事故_特定地區_特定月份_死亡率') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/mortality_rate/year/${selectedYear.value}/month/${selectedMonth.value}/vehicle/${selectedVehicle.value}/region/${decodeURIComponent(selectedRegion.value)}`;
  }
  else if (selectedEvent.value === '查詢_特定年度_特定車種__特定地區_發生事故_死亡率') {
    apiUrl = `http://localhost:5000/A1_and_A2_years/mortality_rate/year/${selectedYear.value}/vehicle/${selectedVehicle.value}/region/${decodeURIComponent(selectedRegion.value)}`;
  }

  if (apiUrl) {
    try {
      console.log('Fetching data...'); // 確認進入到if分支
      const response = await axios.get(apiUrl);
      console.log('API Response:', response.data); // 檢查 API 回應
      if (selectedEvent.value === '查詢_特定年度_特定車種__特定地區_發生事故_死亡率') {
        mortalityRateResponse.value = response.data; // 更新特定API的結果
      } else {
        apiResponse.value = response.data;
      }
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
        <option value="聚合_112年_特定區域_資料_聚合練習_1">聚合_112年_特定區域_資料_聚合練習_1</option>
        <option value="聚合_112年_特定區域_資料_聚合練習_2">聚合_112年_特定區域_資料_聚合練習_2</option>
        <option value="聚合_112年_特定區域_資料_聚合練習_3">聚合_112年_特定區域_資料_聚合練習_3</option>
        <option value="查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數">查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數</option>
        <option value="查詢_排序_特定年度_特定地區_特定月份_總受傷人數+總死亡人數">查詢_排序_特定年度_特定地區_特定月份_總受傷人數+總死亡人數</option>
        <option value="查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數">查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數</option>
        <option value="查詢_排序_特定年度_特定車種_發生事故_地區_月份">查詢_排序_特定年度_特定車種_發生事故_地區_月份</option>
        <option value="查詢_排序_特定年度_特定車種_發生事故_特定地區">查詢_排序_特定年度_特定車種_發生事故_特定地區</option>
        <option value="查詢_特定年度_特定車種_發生事故_特定地區_特定月份_死亡率">查詢_特定年度_特定車種_發生事故_特定地區_特定月份_死亡率</option>
        <option value="查詢_特定年度_特定車種__特定地區_發生事故_死亡率">查詢_特定年度_特定車種__特定地區_發生事故_死亡率</option>
      </select>
      <select class="p-2 border rounded" v-model="selectedYear" :disabled="isDisabledYear">
        <option value="">發生年度</option>
        <option value="112">112</option>
        <option value="111">111</option>
        <option value="110">110</option>
      </select>
      <select class="p-2 border rounded" v-model="selectedMonth" :disabled="isDisabledMonth">
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
      <select class="p-2 border rounded" v-model="selectedRegion" :disabled="isDisabledRegion">
        <option value="">選擇地區</option>
        <option value="01大同區">大同區</option>
        <option value="02萬華區">萬華區</option>
        <option value="03中山區">中山區</option>
        <option value="04大安區">大安區</option>
        <option value="05中正區">中正區</option>
        <option value="06松山區">松山區</option>
        <option value="07信義區">信義區</option>
        <option value="08士林區">士林區</option>
        <option value="09北投區">北投區</option>
        <option value="10文山區">文山區</option>
        <option value="11南港區">南港區</option>
        <option value="12內湖區">內湖區</option>
      </select>
      <select class="p-2 border rounded" v-model="selectedVehicle" :disabled="isDisabledVehicle">
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
          <option value="F03">電動自行車</option>
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
      <!-- 確定按鈕，點擊後調用fetchApiData函數 -->
      <button class="p-2 bg-blue-500 text-white rounded" @click="fetchApiData">確定</button>
    </div>
  </div>

  <!-- 顯示API查詢結果 -->
  <div v-if="apiResponse.length > 0 && selectedEvent !== '查詢_特定年度_特定車種__特定地區_發生事故_死亡率'" class="mt-8">
    <h2 class="text-2xl font-bold mb-4">查詢結果</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="item in apiResponse" :key="item._id" class="p-4 border rounded shadow">
        <div v-for="(value, key) in item" :key="key">
          <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 顯示 "查詢_特定年度_特定車種__特定地區_發生事故_死亡率" API 的查詢結果 -->
  <div v-if="selectedEvent === '查詢_特定年度_特定車種__特定地區_發生事故_死亡率' && mortalityRateResponse" class="mt-8">
    <h2 class="text-2xl font-bold mb-4">查詢_特定年度_特定車種__特定地區_發生事故_死亡率</h2>
    <div class="p-4 border rounded shadow">
      <div v-for="(value, key) in mortalityRateResponse" :key="key">
        <p><strong>{{ key }}:</strong> {{ value }}</p>
      </div>
    </div>
  </div>
</template>
