// 引入express庫，用於構建Web應用和API
const express = require("express");
// 創建一個路由對象，用於定義路由
const router = express.Router();

// 引入各個模型
const A1A2_aggregate_1 = require('../models/A1_and_A2_112_year_aggregate_1'); // 引入模型
const A1A2_aggregate_2 = require('../models/A1_and_A2_112_year_aggregate_2'); // 引入模型
const A1A2_aggregate_3 = require('../models/A1_and_A2_112_year_aggregate_3'); // 引入模型
const A1A2_sideproject_1 = require('../models/A1_and_A2_112_year_sideproject_1'); // 引入模型
const A1A2_sideproject_2 = require('../models/A1_and_A2_112_year_sideproject_2'); // 引入模型
const A1A2_sideproject_3 = require('../models/A1_and_A2_112_year_sideproject_3'); // 引入模型
const A1A2_sideproject_4 = require('../models/A1_and_A2_112_year_sideproject_4'); // 引入模型
const A1A2_sideproject_5 = require('../models/A1_and_A2_112_year_sideproject_5'); // 引入模型
const A1A2_sideproject_6 = require('../models/A1_and_A2_112_year_sideproject_6'); // 引入模型
const A1A2_sideproject_7 = require('../models/A1_and_A2_112_year_sideproject_7'); // 引入模型
const A1A2_detailed = require('../models/A1_and_A2_112_year_detailed'); // 引入模型

// 查詢特定ID的資料
router.get("/id/:id", async (req, res) => {
    // 獲取請求參數中的id
    const id = req.params.id;
    console.log(`Received request for id: ${id}`); // 日誌輸出
    try {
        // 查找指定id的文檔
        const result = await A1A2_detailed.findById(id);
        if (!result) {
            // 如果找不到資料，返回404錯誤
            return res.status(404).json({ message: 'No data found for the specified id' });
        }
        // 格式化結果
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
        // 返回查詢結果
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error finding document: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 聚合查詢特定區域的資料_聚合練習1
router.get("/aggregate_1", async (req, res) => {
    try {
        // 執行聚合查詢
        const result = await A1A2_aggregate_1.aggregate([
            {
                $group: {
                    _id: "$區序",
                    死亡人數: { $sum: "$死亡人數" },
                    '2-30日死亡人數': { $sum: "$2-30日死亡人數" },
                    受傷人數: { $sum: "$受傷人數" }
                }
            },
            {
                $sort:{
                    "_id":1
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 格式化結果
        const formattedResult = result.map(item => ({
            "_id": item._id,
            "死亡人數": item.死亡人數,
            "2-30日死亡人數": item['2-30日死亡人數'],
            "受傷人數": item.受傷人數
        }));
        // 返回聚合結果
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 聚合查詢特定區域的資料_聚合練習2
router.get("/aggregate_2", async (req, res) => {
    try {
        // 執行聚合查詢
        const result = await A1A2_aggregate_2.aggregate([
            {
                $group: 
                {
                    _id:
                    {
                        月份:"$發生月",
                        地區:"$區序"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: 
                    { 
                        $sum: 
                        {
                            $add: 
                            [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $sort:
                {
                    "_id.月份":1,
                    "_id.地區":1
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 格式化結果
        const formattedResult = result.map(item => ({
            "_id": 
            {
                "月份":item._id.月份,
                "地區":item._id.地區
            },
            "受傷人數": item.受傷人數,
            "總死亡人數": item.總死亡人數
        }));
        // 返回聚合結果
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 聚合查詢特定區域的資料_聚合練習3
router.get("/aggregate_3", async (req, res) => {
    try {
        // 執行聚合查詢
        const result = await A1A2_aggregate_3.aggregate([
            {
                $group: 
                {
                    _id:
                    {
                        月份:"$發生月",
                        地區:"$區序"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: 
                    { 
                        $sum: 
                        {
                            $add: 
                            [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $sort:
                {
                    "_id.地區":1,
                    "_id.月份":1
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 格式化結果
        const formattedResult = result.map(item => ({
            "受傷人數": item.受傷人數,
            "總死亡人數": item.總死亡人數,
            "地區":item._id.地區,
            "月份":item._id.月份
        }));
        // 返回聚合結果
        res.json(formattedResult);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢並排序在112年特定地區的受傷人數+總死亡人數(sideproject_1)
router.get("/region/sum/:region/", async (req, res) => {
    // 獲取請求參數中的region
    const region = req.params.region;
    console.log(`Received request for region: ${region}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_1.aggregate([
            {
                $match: { 區序: region }
            },
            {
                $group: 
                {
                    _id:
                    {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: 
                    { 
                        $sum: 
                        {
                            $add: 
                            [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $sort:
                {
                    "_id.地區": 1,
                    "_id.月份": 1
                }
            },
            {
                $project:
                {
                    _id: 0,
                    "地區": "$_id.地區",
                    "月份": "$_id.月份",
                    "受傷人數": "$受傷人數",
                    "總死亡人數": "$總死亡人數"
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 返回聚合結果
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢並排序在112年特定地區特定月份的受傷人數+總死亡人數(sideproject_2)
router.get("/region/:region/month/:month", async (req, res) => {
    // 獲取請求參數中的region
    const region = req.params.region;
    const month = parseInt(req.params.month);
    console.log(`Received request for region: ${region}`); // 日誌輸出
    console.log(`Received request for month: ${month}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_2.aggregate([
            {
                $match: { 區序: region,發生月:month }
            },
            {
                $group: 
                {
                    _id:
                    {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: 
                    { 
                        $sum: 
                        {
                            $add: 
                            [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $project:
                {
                    _id: 0,
                    "地區": "$_id.地區",
                    "月份": "$_id.月份",
                    "受傷人數": "$受傷人數",
                    "總死亡人數": "$總死亡人數"
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 返回聚合結果
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢並排序在112年特定地區平均每個月受傷人數+平均死亡人數(sideproject_3)
router.get("/region/avg/:region", async (req, res) => {
    const region = req.params.region;
    console.log(`Received request for region: ${region}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_3.aggregate([
            {
                $match: { 區序: region }
            },
            {
                $group: 
                {
                    _id: {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: {
                        $sum: {
                            $add: [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $group: {
                    _id: "$_id.地區",
                    平均受傷人數: { $avg: "$受傷人數" },
                    平均死亡人數: { $avg: "$總死亡人數" }
                }
            },
            {
                $project: {
                    _id: 0,
                    "地區": "$_id",
                    "平均受傷人數": "$平均受傷人數",
                    "平均死亡人數": "$平均死亡人數"
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        // 返回聚合結果
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢並排序特定車種發生事故最多的地區及月份(sideproject_4)
router.get("/vehicle/:vehicleType", async (req, res) => {
    const vehicleType = req.params.vehicleType;
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_4.aggregate([
            {
                $match: { 車種: vehicleType }
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: {
                        $sum: {
                            $add: [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $sort: {
                    受傷人數: -1, // 按受傷人數降序排序
                    總死亡人數: -1, // 按總死亡人數降序排序
                    "_id.地區": 1,
                    "_id.月份": 1
                }
            },
            {
                $project: {
                    _id: 0,
                    "車種": vehicleType,
                    "地區": "$_id.地區",
                    "月份": "$_id.月份",
                    "受傷人數": "$受傷人數",
                    "總死亡人數": "$總死亡人數"
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢並排序特定車種發生事故的特定地區(sideproject_5)
router.get("/vehicle/:vehicleType/region/:region", async (req, res) => {
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${region}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_5.aggregate([
            {
                $match: { 車種: vehicleType,區序:region }
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: {
                        $sum: {
                            $add: [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $sort: {
                    受傷人數: -1, // 按受傷人數降序排序
                    總死亡人數: -1, // 按總死亡人數降序排序
                }
            },
            {
                $project: {
                    _id: 0,
                    "車種": vehicleType,
                    "地區": "$_id.地區",
                    "月份": "$_id.月份",
                    "受傷人數": "$受傷人數",
                    "總死亡人數": "$總死亡人數"
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢特定車種發生事故的特定地區及特定月份(sideproject_6)
router.get("/vehicle/:vehicleType/region/:region/month/:month", async (req, res) => {
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    const month = parseInt(req.params.month);
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${region}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${month}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_6.aggregate([
            {
                $match: { 車種: vehicleType,區序:region,發生月:month }
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        月份: "$發生月"
                    },
                    受傷人數: { $sum: "$受傷人數" },
                    總死亡人數: {
                        $sum: {
                            $add: [
                                "$死亡人數",
                                "$2-30日死亡人數"
                            ]
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    "車種": vehicleType,
                    "地區": "$_id.地區",
                    "月份": "$_id.月份",
                    "受傷人數": "$受傷人數",
                    "總死亡人數": "$總死亡人數",
                    "當月死亡率": {
                        $concat: [
                            {
                                $toString: {
                                    $round: [
                                        {
                                            $multiply: [
                                                { $divide: ["$總死亡人數", "$受傷人數"] },
                                                100
                                            ]
                                        },
                                        2
                                    ]
                                }
                            },
                            "%"
                        ]
                    }
                }
            }
        ]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(result);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢特定車種在特定年份發生事故的整體相對死亡率(sideproject_7)
router.get("/year/:year/vehicle/:vehicleType/region/:region", async (req, res) => {
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    const year = parseInt(req.params.year);
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for region: ${region}`); // 日誌輸出
    console.log(`Received request for year: ${year}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_7.aggregate([
            {
                // 匹配特定地區及年份的事故記錄
                $match: {
                    發生年度: year,
                    區序: region
                }
            },
            {
                // $facet 用於同時執行多個聚合管道
                $facet: {
                    // 計算所有事故的總受傷人數和總死亡人數
                    overall: [
                        {
                            $group: {
                                _id: null,
                                總受傷人數: { $sum: "$受傷人數" },
                                總死亡人數: {
                                    $sum: {
                                        $add: ["$死亡人數", "$2-30日死亡人數"]
                                    }
                                }
                            }
                        }
                    ],
                    // 計算特定車種的總受傷人數和總死亡人數
                    vehicle: [
                        {
                            $match: {
                                車種: vehicleType
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                受傷人數: { $sum: "$受傷人數" },
                                死亡人數: {
                                    $sum: {
                                        $add: ["$死亡人數", "$2-30日死亡人數"]
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                // 展平 facet 結果，並計算整體死亡率
                $project: {
                    overall: { $arrayElemAt: ["$overall", 0] },
                    vehicle: { $arrayElemAt: ["$vehicle", 0] }
                }
            },
            {
                // 將整體死亡率計算為百分比格式
                $project: {
                    _id: 0,
                    "車種": vehicleType,
                    "地區": region,
                    "年份": year.toString(),
                    "整體受傷人數":"$overall.總受傷人數",
                    "受傷人數": "$vehicle.受傷人數",
                    "整體死亡人數":"$overall.總死亡人數",
                    "死亡人數": "$vehicle.死亡人數",
                    "整體死亡率": {
                        $concat: [
                            {
                                $toString: {
                                    $round: [
                                        {
                                            $multiply: [
                                                { $divide: ["$vehicle.死亡人數", "$overall.總死亡人數"] },
                                                100
                                            ]
                                        },
                                        2
                                    ]
                                }
                            },
                            "%"
                        ]
                    }
                }
            }
        ]);

        // 檢查結果並返回
        if (!result || result.length === 0 || !result[0].受傷人數) {
            return res.status(404).json({ message: 'No data found' });
        }

        res.json(result[0]);
    } catch (err) {
        console.error(`Error during aggregation: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 導出路由模塊，以便在主應用中使用
module.exports = router;
