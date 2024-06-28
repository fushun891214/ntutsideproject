const express = require("express");// 引入express庫，用於構建Web應用和API
const router = express.Router();// 創建一個路由對象，用於定義路由
const A1A2_add = require('../models/A1_and_A2_years_add');// 引入模型 
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
// 導出路由模塊，以便在主應用中使用
module.exports = router;