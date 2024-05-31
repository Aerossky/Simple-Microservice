const express = require('express');

const {
    getAllReseps,
    getResepById,
    deleteResepById
} = require('./resep.service.js');

const router = express.Router();

// method: GET
router.get("/", async (req, res) => {
    const products = await getAllReseps();

    res.send(products);
});

// method: GET
router.get("/:id", async (req, res) => {
    try {
        const resepId = parseInt(req.params.id);
        const products = await getResepById(resepId);
        res.send(products);
    } catch (error) {
        res.status(404).send({
            error: error.message
        });
    }
});


// method: DELETE
router.delete("/:id", async (req, res) => {
    try {
        const resepId = parseInt(req.params.id);
        await deleteResepById(resepId);
        res.status(200).send({
            message: "Resep deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting resep:", error);
        res.status(500).send({
            error: "Internal Server Error"
        });
    }
});

module.exports = router;