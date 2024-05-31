const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
});


// import
const resepController = require('./resep/resep.controller');
app.use('/resep', resepController);



app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});