const mongoose = require('mongoose');

// 定義 A1_and_A2_years_add 的 Schema
const A1_and_A2_years_add_Schema = new mongoose.Schema({
    發生年度: { type: Number, required: true }, // 定義字段"發生年度"，類型為數字，且為必填項
    發生月: { type: Number, required: true },   // 定義字段"發生月"，類型為數字，且為必填項
    死亡人數: { type: Number, required: true },  // 定義字段"死亡人數"，類型為數字，且為必填項
    '2-30日死亡人數': { type: Number, required: true },  // 定義字段"2-30日死亡人數"，類型為數字，且為必填項
    受傷人數: { type: Number, required: true },  // 定義字段"受傷人數"，類型為數字，且為必填項
    車種: { type: String, required: true },      // 定義字段"車種"，類型為字符串，且為必填項
    區序: { type: String, required: true }        // 定義字段"區序"，類型為字符串，且為必填項
});

// 將 Schema 轉換為 Model 並指定集合名稱
module.exports = mongoose.model('A1_and_A2_years_add', A1_and_A2_years_add_Schema, 'A1_and_A2_years');
