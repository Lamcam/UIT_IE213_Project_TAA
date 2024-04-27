const Product = require("../models/products.model");
const cloudinary = require("../utils/cloudinary");
const CategoryType = require("../models/categorytypes.model");
const Category = require("../models/categories.model");
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
        console.log("kkk");
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductsByCategoryType = async (req, res) => {
    try {
        // Lấy danh sách loại danh mục từ yêu cầu
        const { cate_type_name } = req.params;

        // Kiểm tra xem cate_type_name có tồn tại không
        if (!cate_type_name) {
            return res
                .status(400)
                .json({ message: "Missing cate_type_name parameter." });
        }

        // Lấy loại danh mục từ cate_type_name
        const categoryType = await CategoryType.findOne({ cate_type_name });

        // Kiểm tra xem loại danh mục có tồn tại không
        if (!categoryType) {
            return res
                .status(404)
                .json({ message: "Category type not found." });
        }

        // Lấy danh sách các danh mục thuộc loại danh mục đã lấy
        const categories = await Category.find({
            cate_type_id: categoryType._id,
        });

        // Lấy danh sách ID của các danh mục
        const categoryIds = categories.map((category) => category._id);

        // Lấy danh sách sản phẩm thuộc các danh mục đã lấy
        const products = await Product.find({ cate_id: { $in: categoryIds } });

        // Trả về danh sách sản phẩm
        res.status(200).json(products);
    } catch (error) {
        // Nếu có lỗi, trả về thông báo lỗi
        res.status(500).json({ message: error.message });
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        // Lấy danh sách các danh mục từ yêu cầu
        const { cate_type_name, cate_name } = req.params;

        // Kiểm tra xem cate_type_name và cate_name có tồn tại không
        if (!cate_type_name || !cate_name) {
            return res
                .status(400)
                .json({
                    message: "Missing cate_type_name or cate_name parameter.",
                });
        }

        // Lấy loại danh mục từ cate_type_name
        const categoryType = await CategoryType.findOne({ cate_type_name });

        // Kiểm tra xem loại danh mục có tồn tại không
        if (!categoryType) {
            return res
                .status(404)
                .json({ message: "Category type not found." });
        }

        // Lấy danh mục từ cate_name và cate_type_id
        const category = await Category.findOne({
            cate_name,
            cate_type_id: categoryType._id,
        });

        // Kiểm tra xem danh mục có tồn tại không
        if (!category) {
            return res.status(404).json({ message: "Category not found." });
        }

        // Lấy danh sách sản phẩm thuộc danh mục đã lấy
        const products = await Product.find({ cate_id: category._id });

        // Trả về danh sách sản phẩm
        res.status(200).json(products);
    } catch (error) {
        // Nếu có lỗi, trả về thông báo lỗi
        res.status(500).json({ message: error.message });
    }
};

const getHotProducts = async (req, res) => {
    try {
        const products = await Product.find({})
            .sort({ prod_num_sold: -1 })
            .limit(15);

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProductById,
    getProducts,
    getProductsByCategoryType,
    getProductsByCategory,
    getHotProducts,
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
