const mongoose = require('mongoose');

// 定義A1_and_A2_112_year_aggregate_1的Schema
const A1_and_A2_112_year_aggregate_2_Schema = new mongoose.Schema({
    月份: { type: String, required: true },
    區序: { type: Number, required: true },
    受傷人數: { type: Number, required: true },
    總死亡人數: { type: Number, required: true }
});

module.exports = mongoose.model('A1_and_A2_112_year_aggregate_2', A1_and_A2_112_year_aggregate_2_Schema,'A1_and_A2_112_year');
