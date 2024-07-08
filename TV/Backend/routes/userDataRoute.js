const express = require("express");
const router = express.Router();
const userData = require("../models/userDataModel");

//CREATE
router.post("/", async (req, res) => {
    console.log(req.body);
    const { modelName, brand, id, price, size } = req.body;
    try {
        const userAdded = await userData.create({
            modelName: modelName,
            brand: brand,
            id: id,
            price: price,
            size: size
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});



module.exports = router;