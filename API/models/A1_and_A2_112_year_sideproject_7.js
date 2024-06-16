const mongoose = require('mongoose');

const A1_and_A2_112_year_sideproject_7_Schema = new mongoose.Schema({
    車種: { type: String, required: true },
    區序: { type: String, required: true },
    發生年度: { type: Number, required: true },
    受傷人數: { type: Number, required: true },
    死亡人數: { type: Number, required: true },
    '2-30日死亡人數': { type: Number, required: true }
});

module.exports = mongoose.model('A1_and_A2_112_year_sideproject_7', A1_and_A2_112_year_sideproject_7_Schema, 'A1_and_A2_112_year');
