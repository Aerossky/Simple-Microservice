// routes/resepRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint ke service-resep
const RESEP_SERVICE_URL = 'http://service-resep:3000';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${RESEP_SERVICE_URL}/resep`);
    res.json(response.data);
  } catch (error) {
    res.status(503).json({ error: 'Service Resep is unavailable' });
  }
});


module.exports = router;
