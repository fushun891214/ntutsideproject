// 引入mongoose庫，這是一個用於與MongoDB進行交互的Node.js ORM（對象關係映射）庫
const mongoose = require('mongoose');

// 定義A1_and_A2_112_year_detailed的Schema
// Schema是一個用來定義文檔結構的描述
const A1_and_A2_112_year_detailed_Schema = new mongoose.Schema({
    // 定義字段"發生年度"，類型為數字，且為必填項
    發生年度: { type: Number, required: true },
    // 定義字段"發生月"，類型為數字，且為必填項
    發生月: { type: Number, required: true },
    // 定義字段"發生日"，類型為數字，且為必填項
    發生日: { type: Number, required: true },
    // 定義字段"發生時-Hours"，類型為數字，且為必填項
    '發生時-Hours': { type: Number, required: true },
    // 定義字段"發生分"，類型為數字，且為必填項
    發生分: { type: Number, required: true },
    // 定義字段"處理別-編號"，類型為數字，且為必填項
    '處理別-編號': { type: Number, required: true },
    // 定義字段"區序"，類型為字符串，且為必填項
    區序: { type: String, required: true },
    // 定義字段"肇事地點"，類型為字符串，且為必填項
    肇事地點: { type: String, required: true },
    // 定義字段"死亡人數"，類型為數字，且為必填項
    死亡人數: { type: Number, required: true },
    // 定義字段"2-30日死亡人數"，類型為數字，且為必填項
    '2-30日死亡人數': { type: Number, required: true },
    // 定義字段"受傷人數"，類型為數字，且為必填項
    受傷人數: { type: Number, required: true },
    // 定義字段"當事人序號"，類型為數字，且為必填項
    當事人序號: { type: Number, required: true },
    // 定義字段"車種"，類型為字符串，且為必填項
    車種: { type: String, required: true },
    // 定義字段"天候"，類型為數字，且為必填項
    天候: { type: Number, required: true },
    // 定義字段"光線"，類型為數字，且為必填項
    光線: { type: Number, required: true },
    // 定義字段"道路類別"，類型為數字，且為必填項
    道路類別: { type: Number, required: true },
    // 定義字段"速限-速度限制"，類型為數字，且為必填項
    '速限-速度限制': { type: Number, required: true },
    // 定義字段"道路型態"，類型為數字，且為必填項
    道路型態: { type: Number, required: true },
    // 定義字段"事故位置"，類型為數字，且為必填項
    事故位置: { type: Number, required: true },
    // 定義字段"路面狀況1"，類型為數字，且為必填項
    路面狀況1: { type: Number, required: true },
    // 定義字段"路面狀況2"，類型為數字，且為必填項
    路面狀況2: { type: Number, required: true },
    // 定義字段"路面狀況3"，類型為數字，且為必填項
    路面狀況3: { type: Number, required: true },
    // 定義字段"道路障礙1"，類型為數字，且為必填項
    道路障礙1: { type: Number, required: true },
    // 定義字段"道路障礙2"，類型為數字，且為必填項
    道路障礙2: { type: Number, required: true },
    // 定義字段"號誌1"，類型為數字，且為必填項
    號誌1: { type: Number, required: true },
    // 定義字段"號誌2"，類型為數字，且為必填項
    號誌2: { type: Number, required: true },
    // 定義字段"車道劃分-分向"，類型為數字，且為必填項
    '車道劃分-分向': { type: Number, required: true },
    // 定義字段"車道劃分-分道1"，類型為數字，且為必填項
    '車道劃分-分道1': { type: Number, required: true },
    // 定義字段"車道劃分-分道2"，類型為數字，且為必填項
    '車道劃分-分道2': { type: Number, required: true },
    // 定義字段"車道劃分-分道3"，類型為數字，且為必填項
    '車道劃分-分道3': { type: Number, required: true },
    // 定義字段"事故類型及型態"，類型為數字，且為必填項
    事故類型及型態: { type: Number, required: true },
    // 定義字段"性別"，類型為數字，且為必填項
    性別: { type: Number, required: true },
    // 定義字段"年齡"，類型為數字，且為必填項
    年齡: { type: Number, required: true },
    // 定義字段"受傷程度"，類型為數字，且為必填項
    受傷程度: { type: Number, required: true },
    // 定義字段"主要傷處"，類型為數字，且為必填項
    主要傷處: { type: Number, required: true },
    // 定義字段"保護裝置"，類型為數字，且為必填項
    保護裝置: { type: Number, required: true },
    // 定義字段"行動電話"，類型為數字，且為必填項
    行動電話: { type: Number, required: true },
    // 定義字段"車輛用途"，類型為數字，且為必填項
    車輛用途: { type: Number, required: true },
    // 定義字段"當事者行動狀態"，類型為數字，且為必填項
    當事者行動狀態: { type: Number, required: true },
    // 定義字段"駕駛資格情形"，類型為數字，且為必填項
    駕駛資格情形: { type: Number, required: true },
    // 定義字段"駕駛執照種類"，類型為數字，且為必填項
    駕駛執照種類: { type: Number, required: true },
    // 定義字段"飲酒情形"，類型為數字，且為必填項
    飲酒情形: { type: Number, required: true },
    // 定義字段"車輛撞擊部位1"，類型為數字，且為必填項
    車輛撞擊部位1: { type: Number, required: true },
    // 定義字段"肇因碼-個別"，類型為數字，且為必填項
    '肇因碼-個別': { type: Number, required: true },
    // 定義字段"個人肇逃否"，類型為數字，且為必填項
    個人肇逃否: { type: Number, required: true },
    // 定義字段"職業"，類型為數字，且為必填項
    職業: { type: Number, required: true },
    // 定義字段"旅次目的"，類型為數字，且為必填項
    旅次目的: { type: Number, required: true },
    // 定義字段"座標-X"，類型為數字，且為必填項
    '座標-X': { type: Number, required: true },
    // 定義字段"座標-Y"，類型為數字，且為必填項
    '座標-Y': { type: Number, required: true }
});

// 將Schema轉換為Model並指定集合名稱
// module.exports 用於導出模塊，以便在其他文件中可以使用這個模型
// mongoose.model 創建並編譯模型
// 'A1_and_A2_112_year_detailed' 是模型名稱，通常用作MongoDB集合的名稱（會自動轉換為小寫並複數化）
// A1_and_A2_112_year_detailed_Schema 是該模型對應的Schema
// 'A1_and_A2_112_year' 是指定的MongoDB集合名稱，這樣可以避免自動轉換
module.exports = mongoose.model('A1_and_A2_112_year_detailed', A1_and_A2_112_year_detailed_Schema, 'A1_and_A2_112_year');
