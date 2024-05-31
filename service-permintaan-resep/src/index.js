const express = require('express');
const dotenv = require('dotenv');
const {
    PrismaClient
} = require('@prisma/client');


dotenv.config();

const app = express();
const PORT = process.env.PORT;
// supaya bisa pake prisma
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/permintaans", async (req, res) => {
    const permintaans = await prisma.permintaan.findMany();

    res.status(200).send(permintaans);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});