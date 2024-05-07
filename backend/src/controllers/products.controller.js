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
      return res.status(404).json({ message: "Category type not found." });
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
      return res.status(400).json({
        message: "Missing cate_type_name or cate_name parameter.",
      });
    }

    // Lấy loại danh mục từ cate_type_name
    const categoryType = await CategoryType.findOne({ cate_type_name });

    // Kiểm tra xem loại danh mục có tồn tại không
    if (!categoryType) {
      return res.status(404).json({ message: "Category type not found." });
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
const getProductHaveCateType = async (req, res) => {
  try {
    const products = await Product.find()
      .populate({
        path: "cate_id",
        populate: { path: "cate_type_id" },
      })
      .exec();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addProduct = async (req, res) => {
  try {
    // Lấy thông tin sản phẩm từ request body
    const {
      prod_name,
      prod_cost,
      prod_img,
      prod_discount,
      prod_end_date_discount,
      prod_num_sold,
      prod_num_avai,
      prod_star_rating,
      prod_description,
      cate_id,
      prod_color,
      prod_size,
    } = req.body;

    // Tạo mới sản phẩm
    const newProduct = new Product({
      prod_name,
      prod_cost,
      prod_img,
      prod_discount,
      prod_end_date_discount,
      prod_num_sold,
      prod_num_avai,
      prod_star_rating,
      prod_description,
      cate_id,
      prod_color,
      prod_size,
    });

    // Lưu sản phẩm vào cơ sở dữ liệu
    const savedProduct = await newProduct.save();

    // Trả về kết quả thành công
    res.status(201).json({ success: true, product: savedProduct });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const deleteProduct = async (req, res) => {
  try {
    // Lấy ID của sản phẩm cần xóa từ request parameters
    const productId = req.params.id;

    // Kiểm tra xem sản phẩm có tồn tại không
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Xóa sản phẩm
    await Product.findByIdAndDelete(productId);

    // Trả về kết quả thành công
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports = {
  getProductById,
  getProducts,
  getProductsByCategoryType,
  getProductsByCategory,
  getHotProducts,
  getProductHaveCateType,
  addProduct,
  deleteProduct,
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
