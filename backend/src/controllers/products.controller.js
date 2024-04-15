const Product = require("../models/products.model");
const cloudinary = require("../utils/cloudinary");

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id; // Lấy ID sản phẩm từ tham số đường dẫn
        const product = await Product.findById(productId); // Tìm sản phẩm theo ID
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product); // Trả về sản phẩm được tìm thấy
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
    getProductById,
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
