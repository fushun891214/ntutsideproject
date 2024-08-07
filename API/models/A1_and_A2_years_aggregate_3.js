// 引入mongoose庫，這是一個用於與MongoDB進行交互的Node.js ORM（對象關係映射）庫
const mongoose = require('mongoose');

// 定義A1_and_A2_112_year_aggregate_3的Schema
// Schema是一個用來定義文檔結構的描述
const A1_and_A2_years_aggregate_3_Schema = new mongoose.Schema({
    // 定義字段"受傷人數"，類型為數字，且為必填項
    受傷人數: { type: Number, required: true },
    // 定義字段"總死亡人數"，類型為數字，且為必填項
    總死亡人數: { type: Number, required: true },
    // 定義字段"地區"，類型為字符串，且為必填項
    地區: { type: String, required: true },
    // 定義字段"月份"，類型為字符串，且為必填項
    月份: { type: String, required: true }
});

// 將Schema轉換為Model並指定集合名稱
// module.exports 用於導出模塊，以便在其他文件中可以使用這個模型
// mongoose.model 創建並編譯模型
// 'A1_and_A2_years_aggregate_3' 是模型名稱，通常用作MongoDB集合的名稱（會自動轉換為小寫並複數化）
// 'A1_and_A2_years_aggregate_3_Schema' 是該模型對應的Schema
// 'A1_and_A2_years' 是指定的MongoDB集合名稱，這樣可以避免自動轉換
module.exports = mongoose.model('A1_and_A2_years_aggregate_3', A1_and_A2_years_aggregate_3_Schema, 'A1_and_A2_years');
