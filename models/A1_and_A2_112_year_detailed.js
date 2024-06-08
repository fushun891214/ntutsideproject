const mongoose = require('mongoose');

// 定義A1_and_A2_112_year_detailed的Schema
const A1_and_A2_112_year_detailed_Schema = new mongoose.Schema({
    發生年度: { type: Number, required: true },
    發生月: { type: Number, required: true },
    發生日: { type: Number, required: true },
    '發生時-Hours': { type: Number, required: true },
    發生分: { type: Number, required: true },
    '處理別-編號': { type: Number, required: true },
    區序: { type: String, required: true },
    肇事地點: { type: String, required: true },
    死亡人數: { type: Number, required: true },
    '2-30日死亡人數': { type: Number, required: true },
    受傷人數: { type: Number, required: true },
    當事人序號: { type: Number, required: true },
    車種: { type: String, required: true },
    天候: { type: Number, required: true },
    光線: { type: Number, required: true },
    道路類別: { type: Number, required: true },
    '速限-速度限制': { type: Number, required: true },
    道路型態: { type: Number, required: true },
    事故位置: { type: Number, required: true },
    路面狀況1: { type: Number, required: true },
    路面狀況2: { type: Number, required: true },
    路面狀況3: { type: Number, required: true },
    道路障礙1: { type: Number, required: true },
    道路障礙2: { type: Number, required: true },
    號誌1: { type: Number, required: true },
    號誌2: { type: Number, required: true },
    '車道劃分-分向': { type: Number, required: true },
    '車道劃分-分道1': { type: Number, required: true },
    '車道劃分-分道2': { type: Number, required: true },
    '車道劃分-分道3': { type: Number, required: true },
    事故類型及型態: { type: Number, required: true },
    性別: { type: Number, required: true },
    年齡: { type: Number, required: true },
    受傷程度: { type: Number, required: true },
    主要傷處: { type: Number, required: true },
    保護裝置: { type: Number, required: true },
    行動電話: { type: Number, required: true },
    車輛用途: { type: Number, required: true },
    當事者行動狀態: { type: Number, required: true },
    駕駛資格情形: { type: Number, required: true },
    駕駛執照種類: { type: Number, required: true },
    飲酒情形: { type: Number, required: true },
    車輛撞擊部位1: { type: Number, required: true },
    '肇因碼-個別': { type: Number, required: true },
    個人肇逃否: { type: Number, required: true },
    職業: { type: Number, required: true },
    旅次目的: { type: Number, required: true },
    '座標-X': { type: Number, required: true },
    '座標-Y': { type: Number, required: true }
});

// 將Schema轉換為Model並指定集合名稱
module.exports = mongoose.model('A1_and_A2_112_year_detailed', A1_and_A2_112_year_detailed_Schema, 'A1_and_A2_112_year');
