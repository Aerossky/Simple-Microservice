const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors'); // Import cors

// Import routes
const resepRoutes = require('./routes/resepRoutes');
const permintaanRoutes = require('./routes/permintaanRoutes');

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

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
