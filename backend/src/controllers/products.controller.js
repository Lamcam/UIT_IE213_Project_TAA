const Product = require("../models/products.model");

const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDetail,
    getProducts,
};

// app.get("/products/:id", async (req, res) => {});

// app.post("/products", async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
//     }
// });
