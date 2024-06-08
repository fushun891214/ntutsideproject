const express = require("express");
const router = express.Router();
const A1A2_aggregate_1 = require('../models/A1_and_A2_112_year_aggregate_1'); // 引入模型
const A1A2_detailed = require('../models/A1_and_A2_112_year_detailed'); // 引入模型

// 查詢特定ID的資料
router.get("/id/:id", async (req, res) => {
    const id = req.params.id;
    console.log(`Received request for id: ${id}`); // 日誌輸出
    try {
        const result = await A1A2_detailed.findById(id);
        if (!result) {
            return res.status(404).json({ message: 'No data found for the specified id' });
        }
        const formattedResult = {
            "_id": result._id,
            "發生年度": result.發生年度,
            "發生月": result.發生月,
            "發生日": result.發生日,
            "發生時-Hours": result["發生時-Hours"],
            "發生分": result.發生分,
            "處理別-編號": result["處理別-編號"],
            "區序": result.區序,
            "肇事地點": result.肇事地點,
            "死亡人數": result.死亡人數,
            "2-30日死亡人數": result["2-30日死亡人數"],
            "受傷人數": result.受傷人數,
            "當事人序號": result.當事人序號,
            "車種": result.車種,
            "天候": result.天候,
            "光線": result.光線,
            "道路類別": result.道路類別,
            "速限-速度限制": result["速限-速度限制"],
            "道路型態": result.道路型態,
            "事故位置": result.事故位置,
            "路面狀況1": result.路面狀況1,
            "路面狀況2": result.路面狀況2,
            "路面狀況3": result.路面狀況3,
            "道路障礙1": result.道路障礙1,
            "道路障礙2": result.道路障礙2,
            "號誌1": result.號誌1,
            "號誌2": result.號誌2,
            "車道劃分-分向": result["車道劃分-分向"],
            "車道劃分-分道1": result["車道劃分-分道1"],
            "車道劃分-分道2": result["車道劃分-分道2"],
            "車道劃分-分道3": result["車道劃分-分道3"],
            "事故類型及型態": result.事故類型及型態,
            "性別": result.性別,
            "年齡": result.年齡,
            "受傷程度": result.受傷程度,
            "主要傷處": result.主要傷處,
            "保護裝置": result.保護裝置,
            "行動電話": result.行動電話,
            "車輛用途": result.車輛用途,
            "當事者行動狀態": result.當事者行動狀態,
            "駕駛資格情形": result.駕駛資格情形,
            "駕駛執照種類": result.駕駛執照種類,
            "飲酒情形": result.飲酒情形,
            "車輛撞擊部位1": result.車輛撞擊部位1,
            "肇因碼-個別": result["肇因碼-個別"],
            "個人肇逃否": result.個人肇逃否,
            "職業": result.職業,
            "旅次目的": result.旅次目的,
            "座標-X": result["座標-X"],
            "座標-Y": result["座標-Y"]
        };
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error finding document: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 聚合查詢特定區域的資料
router.get("/region/:region", async (req, res) => {
    const region = req.params.region;
    console.log(`Received request for region: ${region}`); // 日誌輸出
    try {
        const result = await A1A2_aggregate_1.aggregate([
            { $match: { 區序: region } }, // 匹配指定區序
            {
                $group: {
                    _id: "$區序",
                    死亡人數: { $sum: "$死亡人數" },
                    '2-30日死亡人數': { $sum: "$2-30日死亡人數" },
                    受傷人數: { $sum: "$受傷人數" }
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found for the specified region' });
        }
        const formattedResult = result.map(item => ({
            "_id": item._id,
            "死亡人數": item.死亡人數,
            "2-30日死亡人數": item['2-30日死亡人數'],
            "受傷人數": item.受傷人數
        }));
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;