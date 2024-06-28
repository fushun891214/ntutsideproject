// 引入express庫，用於構建Web應用和API
const express = require("express");
// 創建一個路由對象，用於定義路由
const router = express.Router();
// 導入 validationResult 和 check
const { check, validationResult } = require('express-validator'); 

// 引入各個模型
const A1A2_aggregate_1 = require('../models/A1_and_A2_years_aggregate_1'); // 引入模型
const A1A2_aggregate_2 = require('../models/A1_and_A2_years_aggregate_2'); // 引入模型
const A1A2_aggregate_3 = require('../models/A1_and_A2_years_aggregate_3'); // 引入模型
const A1A2_sideproject_1 = require('../models/A1_and_A2_years_sideproject_1'); // 引入模型
const A1A2_sideproject_2 = require('../models/A1_and_A2_years_sideproject_2'); // 引入模型
const A1A2_sideproject_3 = require('../models/A1_and_A2_years_sideproject_3'); // 引入模型
const A1A2_sideproject_4 = require('../models/A1_and_A2_years_sideproject_4'); // 引入模型
const A1A2_sideproject_5 = require('../models/A1_and_A2_years_sideproject_5'); // 引入模型
const A1A2_sideproject_6 = require('../models/A1_and_A2_years_sideproject_6'); // 引入模型
const A1A2_sideproject_7 = require('../models/A1_and_A2_years_sideproject_7'); // 引入模型
const A1A2_detailed = require('../models/A1_and_A2_years_detailed'); // 引入模型
const A1A2_add = require('../models/A1_and_A2_years_add'); // 引入模型
const A1A2_update = require('../models/A1_and_A2_years_update'); // 引入模型
const A1A2_delete = require('../models/A1_and_A2_years_delete'); // 引入模型

// 定義查詢特定ID資料的路由
router.get("/detailed/id/:id", async (req, res) => {
    // 從請求參數中獲取id
    const id = req.params.id;
    console.log(`Received request for id: ${id}`); // 輸出日誌，記錄收到的請求ID

    try {
        // 查找資料庫中指定id的文檔
        const result = await A1A2_detailed.findById(id);

        // 如果找不到指定ID的文檔，返回404錯誤
        if (!result) {
            return res.status(404).json({ message: 'No data found for the specified id' });
        }

        // 格式化查詢結果
        const formattedResult = {
            "_id": result._id,
            "發生年度": result.發生年度,
            "發生月": result.發生月,
            "區序": result.區序,
            "死亡人數": result.死亡人數,
            "2-30日死亡人數": result["2-30日死亡人數"],
            "受傷人數": result.受傷人數,
            "車種": result.車種,
        };

        // 返回格式化後的查詢結果
        res.json(formattedResult);
    } catch (err) {
        // 如果查詢過程中出現錯誤，輸出錯誤日誌，並返回500錯誤
        console.error(`Error finding document: ${err.message}`); // 輸出錯誤日誌
        res.status(500).json({ message: err.message });
    }
});

// 新增資料並產生隨機ID
router.post("/add", async (req, res) => {
    const crypto = require('crypto');
    // 從請求的body中獲取資料
    const { 發生年度, 發生月, 區序, 死亡人數, "2-30日死亡人數": 二至三十日死亡人數, 受傷人數, 車種 } = req.body;
    // 生成隨機ID
    const id = crypto.randomBytes(12).toString('hex');
    console.log(`Generated ID: ${id}`); // 日誌輸出

    // 創建新資料對象
    const newData = new A1A2_add({
        _id: id,
        發生年度: 發生年度,
        發生月: 發生月,
        區序: 區序,
        死亡人數: 死亡人數,
        "2-30日死亡人數": 二至三十日死亡人數,
        受傷人數: 受傷人數,
        車種: 車種
    });

    try {
        // 保存新資料
        const result = await newData.save();
        // 返回保存結果
        res.status(201).json(result);
    } catch (err) {
        console.error(`Error saving document: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 查詢特定ID的資料並刪除其ID
router.delete("/delete/id/:id", async (req, res) => {
    const id = req.params.id;
    console.log(`Received request to delete id: ${id}`); // 日誌輸出

    try {
        // 查找指定id的文檔
        const result = await A1A2_delete.findByIdAndDelete(id);
        if (!result) {
            // 如果找不到資料，返回404錯誤
            return res.status(404).json({ message: 'No data found for the specified id' });
        }
        // 返回刪除結果
        res.json({ message: 'Document deleted successfully', data: result });
    } catch (err) {
        console.error(`Error deleting document: ${err.message}`); // 日誌輸出
        res.status(500).json({ message: err.message });
    }
});

// 更新特定ID的資料
router.put("/update/id/:id", 
    async (req, res) => {
        const id = req.params.id;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // 查找並更新指定id的文檔
            const result = await A1A2_update.findByIdAndUpdate(id, req.body, { new: true });
            if (!result) {
                // 如果找不到資料，返回404錯誤
                return res.status(404).json({ message: 'No data found for the specified id' });
            }
            // 返回更新結果
            res.json(result);
        } catch (err) {
            console.error(`Error updating document: ${err.message}`); // 日誌輸出
            res.status(500).json({ message: err.message });
        }
    }
);

// 聚合_112年_特定區域_資料_聚合練習_1
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

// 聚合_112年_特定區域_資料_聚合練習_2
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

// 聚合_112年_特定區域_資料_聚合練習_3
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

// 查詢_排序_特定年度_特定地區_總受傷人數+總死亡人數(sideproject_1)
router.get("/sum/year/:year/region/:region", async (req, res) => {
    // 獲取請求參數中的region
    const region = req.params.region;
    const year = parseInt(req.params.year);
    console.log(`Received request for region: ${region}`); // 日誌輸出
    console.log(`Received request for year: ${year}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_1.aggregate([
            {
                $match: { 區序: region,發生年度:year}
            },
            {
                $group: 
                {
                    _id:
                    {
                        地區: "$區序",
                        年度: "$發生年度",
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
                    "年度": "$_id.年度",
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

// 查詢_排序_特定年度_特定地區_特定月份_總受傷人數+總死亡人數(sideproject_2)
router.get("/sum/year/:year/region/:region/month/:month", async (req, res) => {
    // 獲取請求參數中的region
    const region = req.params.region;
    const year = parseInt(req.params.year);
    const month = parseInt(req.params.month);
    console.log(`Received request for region: ${region}`); // 日誌輸出
    console.log(`Received request for year: ${year}`); // 日誌輸出
    console.log(`Received request for month: ${month}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_2.aggregate([
            {
                $match: { 區序: region,發生年度:year,發生月:month }
            },
            {
                $group: 
                {
                    _id:
                    {
                        地區: "$區序",
                        年度: "$發生年度",
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
                    "年度": "$_id.年度",
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

// 查詢_排序_特定年度_特定地區_平均_每個月_受傷人數+死亡人數(sideproject_3)
router.get("/avg/year/:year/region/:region", async (req, res) => {
    const region = req.params.region;
    const year = parseInt(req.params.year);
    console.log(`Received request for region: ${region}`); // 日誌輸出
    console.log(`Received request for year: ${year}`); // 日誌輸出
    try {
        // 執行聚合查詢
        const result = await A1A2_sideproject_3.aggregate([
            {
                $match: { 區序: region, 發生年度: year } // 匹配特定區域和年份
            },
            {
                $group: 
                {
                    _id: {
                        月份: "$發生月",
                        年度: "$發生年度" // 保留年度
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
                    _id: {
                        年度: "$_id.年度",
                        地區: region // 保留地區
                    },
                    平均受傷人數: { $avg: "$受傷人數" },
                    平均死亡人數: { $avg: "$總死亡人數" }
                }
            },
            {
                $project: {
                    _id: 0,
                    地區: "$_id.地區",
                    年度: "$_id.年度",
                    平均受傷人數: "$平均受傷人數",
                    平均死亡人數: "$平均死亡人數"
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

// 查詢_排序_特定年度_特定車種_發生事故_地區_月份(sideproject_4)
router.get("/sum/year/:year/vehicle/:vehicleType", async (req, res) => {
    const vehicleType = req.params.vehicleType;
    const year = parseInt(req.params.year);
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for year type: ${year}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_4.aggregate([
            {
                $match: { 車種: vehicleType ,發生年度:year}
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        年度: "$發生年度",
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
                    "年度": "$_id.年度",
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

// 查詢_排序_特定年度_特定車種_發生事故_特定地區(sideproject_5)
router.get("/sum/year/:year/vehicle/:vehicleType/region/:region", async (req, res) => {
    const year = parseInt(req.params.year);
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for region type: ${region}`); // 日誌輸出
    console.log(`Received request for year type: ${year}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_5.aggregate([
            {
                $match: { 發生年度:year,車種: vehicleType,區序:region }
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        年度: "$發生年度",
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
                    "年度": "$_id.年度",
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

// 查詢_特定年度_特定車種_發生事故_特定地區_特定月份_死亡率(sideproject_6)
router.get("/mortality_rate/year/:year/month/:month/vehicle/:vehicleType/region/:region", async (req, res) => {
    const year = parseInt(req.params.year);
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    const month = parseInt(req.params.month);
    console.log(`Received request for vehicle type: ${year}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${region}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${month}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_6.aggregate([
            {
                $match: { 發生年度:year,車種: vehicleType,區序:region,發生月:month }
            },
            {
                $group: {
                    _id: {
                        地區: "$區序",
                        年度: "$發生年度",
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
                    "年度": "$_id.年度",
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

// 查詢_特定年度_特定車種__特定地區_發生事故_死亡率(sideproject_7)
router.get("/mortality_rate/year/:year/vehicle/:vehicleType/region/:region", async (req, res) => {
    const year = parseInt(req.params.year);
    const vehicleType = req.params.vehicleType;
    const region = req.params.region;
    console.log(`Received request for year: ${year}`); // 日誌輸出
    console.log(`Received request for vehicle type: ${vehicleType}`); // 日誌輸出
    console.log(`Received request for region: ${region}`); // 日誌輸出
    try {
        const result = await A1A2_sideproject_7.aggregate([
            {
                // 匹配特定地區及年份及車種的事故記錄
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
