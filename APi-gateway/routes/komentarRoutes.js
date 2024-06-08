// routes/komentarRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint ke service-komentar
const KOMENTAR_SERVICE_URL = 'http://service-komentar:3002';

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${KOMENTAR_SERVICE_URL}/komentars`);
        res.json(response.data);
    } catch (error) {
        res.status(503).json({ error: 'Service komentar is unavailable' });
    }
});


module.exports = router;