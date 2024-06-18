// 引入express庫，用於構建Web應用和API
const express = require('express');
// 引入mongoose庫，用於與MongoDB進行交互
const mongoose = require('mongoose');
// 引入自定義的路由模塊
const A1A2Routes = require('./routes/A1_and_A2_years');
// 引入cors庫，用於處理跨域請求
const cors = require('cors');

// 創建一個Express應用
const app = express();

// 使用cors中間件來允許所有來源的跨域請求
app.use(cors());

// 連接到MongoDB
// 使用mongoose.connect方法連接到MongoDB，指定數據庫URL和選項
mongoose.connect('mongodb://127.0.0.1:27017/taipei_traffic_accident', { useNewUrlParser: true, useUnifiedTopology: true });
// 獲取mongoose連接對象
const db = mongoose.connection;
// 綁定錯誤事件處理器
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// 綁定一次性打開事件處理器
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// 使用Express的JSON中介軟體來解析JSON請求體
app.use(express.json());

// 使用自定義的路由模塊，當請求路徑以'/A1_and_A2_years'開頭時，使用A1A2Routes路由處理
app.use('/A1_and_A2_years', A1A2Routes);

// 設定服務器監聽的端口，優先使用環境變量中的PORT值，否則使用3000端口
const PORT = process.env.PORT || 5000;
// 啟動服務器並開始監聽指定端口，當服務器啟動時輸出一條日誌
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
