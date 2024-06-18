const mongoose = require('mongoose');

const A1_and_A2_years_sideproject_3_Schema = new mongoose.Schema({
    地區: { type: String, required: true },
    平均受傷人數: { type: Number, required: true },
    平均死亡人數: { type: Number, required: true }
});

module.exports = mongoose.model('A1_and_A2_years_sideproject_3', A1_and_A2_years_sideproject_3_Schema, 'A1_and_A2_years');
