const mongoose = require('mongoose');

const A1_and_A2_years_sideproject_6_Schema = new mongoose.Schema({
    車種:{type:String,required:true},
    地區: { type: String, required: true },
    月份:{type:Number,required:true},
    受傷人數: { type: Number, required: true },
    總死亡人數: { type: Number, required: true }
});

module.exports = mongoose.model('A1_and_A2_years_sideproject_6', A1_and_A2_years_sideproject_6_Schema, 'A1_and_A2_years');
