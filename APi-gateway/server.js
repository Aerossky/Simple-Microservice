const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors'); // Import cors
const { createProxyMiddleware } = require('http-proxy-middleware');

// Import routes
const resepRoutes = require('./routes/resepRoutes');
const permintaanRoutes = require('./routes/permintaanRoutes');
const komentarRoutes = require('./routes/komentarRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan cors middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Gateway');
});

// Gunakan routes
app.use('/reseps', resepRoutes);
app.use('/permintaans', permintaanRoutes);
app.use('/komentars', komentarRoutes);

// Proxy requests to /laravel to the Laravel API
app.use('/laravel', createProxyMiddleware({
    target: 'http://localhost:7001',
    changeOrigin: true,
    pathRewrite: {
        '^/laravel': '',
    },
}));

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
