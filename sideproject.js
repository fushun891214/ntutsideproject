const express = require('express');
const mongoose = require('mongoose');
const A1A2Routes = require('./routes/A1_and_A2_112_year');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/taipei_traffic_accident', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/A1_and_A2_112_year', A1A2Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
