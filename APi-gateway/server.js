// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Import routes
const resepRoutes = require('./routes/resepRoutes');
// Tambahkan routes lainnya jika sudah dibuat
// const permintaanResepRoutes = require('./routes/permintaanResepRoutes');
// const komentarRoutes = require('./routes/komentarRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Gateway');
});
// Gunakan routes
app.use('/resep', resepRoutes);

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});