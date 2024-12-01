import express from "express";
import productModel from "../models/productModel";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal server error");
    }
});

router.post("/", async (req, res) => {
    const { name, description, price, createdBy } = req.body;
    try {
        await productModel.createProduct(name, description, price, createdBy);
        res.status(201).send("Product created successfully");
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).send("Internal server error");
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const updated = await productModel.updateProduct(id, name, description, price);
        if (updated) {
            res.send("Product updated successfully");
        } else {
            res.status(404).send("Product not found or no changes made");
        }
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send("Internal server error");
    }
});

export default router;
