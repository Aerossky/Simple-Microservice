const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');


dotenv.config();

const app = express();
const PORT = process.env.PORT;
// supaya bisa pake prisma
const prisma = new PrismaClient();


app.get("/komentars", async (req, res)=>{
    const komentars = await prisma.komentar.findMany();

    res.status(200).send(komentars);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});