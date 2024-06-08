const mongoose = require('mongoose');

// 定義A1_and_A2_112_year_aggregate_1的Schema
const A1_and_A2_112_year_aggregate_1_Schema = new mongoose.Schema({
    區序: { type: String, required: true },
    死亡人數: { type: Number, required: true },
    '2-30日死亡人數': { type: Number, required: true },
    受傷人數: { type: Number, required: true }
});

module.exports = mongoose.model('A1_and_A2_112_year_aggregate_1', A1_and_A2_112_year_aggregate_1_Schema,'A1_and_A2_112_year');
