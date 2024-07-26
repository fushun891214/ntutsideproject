<script setup>
import { ref } from 'vue';
import axios from 'axios';

// 表單輸入變量
const year = ref('');
const month = ref('');
const deathCount = ref('');
const injuryCount = ref('');
const deathCount2to30 = ref('');
const region = ref('');
const vehicleType = ref('');

// API返回的結果變量
const apiResponse = ref(null);

// 發送API請求並處理響應的函數
async function addData() {
  try {
    const response = await axios.post('http://localhost:10000/A1_and_A2_years/add', {
      發生年度: year.value,
      發生月: month.value,
      區序: region.value,
      死亡人數: deathCount.value,
      "2-30日死亡人數": deathCount2to30.value,
      受傷人數: injuryCount.value,
      車種: vehicleType.value,
    });
    console.log('API Response:', response.data); // 檢查 API 回應
    apiResponse.value = response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    alert('新增資料失敗');
  }
}
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">新增資料</h2>
    <p class="text-lg mt-4 text-slate-600">請透過下方文字方塊及選擇按鈕得以新增一筆資料進入系統儲存</p>
    <div class="mt-4 flex space-x-4">
      <input v-model="year" class="p-2 border rounded" type="text" placeholder="發生年度" />
      <select v-model="month" class="p-2 border rounded">
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
      <input v-model="deathCount" class="p-2 border rounded" type="text" placeholder="死亡人數" />
      <input v-model="deathCount2to30" class="p-2 border rounded" type="text" placeholder="2-30日死亡人數" />
      <input v-model="injuryCount" class="p-2 border rounded" type="text" placeholder="受傷人數" />
      <select v-model="region" class="p-2 border rounded">
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
      <select v-model="vehicleType" class="p-2 border rounded">
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
      <!-- 確定按鈕，點擊後調用addData函數 -->
      <button class="p-2 bg-blue-500 text-white rounded" @click="addData">確定</button>
    </div>

    <!-- 顯示API新增資料的結果 -->
    <div v-if="apiResponse" class="mt-8">
      <h2 class="text-2xl font-bold mb-4">新增資料結果</h2>
      <div class="p-4 border rounded shadow">
        <div v-for="(value, key) in apiResponse" :key="key">
          <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
