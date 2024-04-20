const User = require("../models/users.model");
const Product = require("../models/products.model");
const cloudinary = require("../utils/cloudinary");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const SerectKey = "HAN";

const createToken = (_id) => {
  return jwt.sign({ _id }, SerectKey, { expiresIn: "1h" });
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    console.log(user);

    res.cookie("user", true, { maxAge: 900000, httpOnly: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = await User.findOne({ user_email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.user_pass);

    console.log(match);
    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = createToken(user._id);
    res.status(200).json([user, token]);
    console.log("Login success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;
    const user = await User.findOne({ user_email: email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        user_name: username,
        user_phone: phone,
        user_email: email,
        user_pass: hashedPassword,
        user_avatar: "",
        local_default_id: "",
        bank_default_id: "",
      });

      await newUser.save();
      console.log(newUser);
      const token = await createToken(newUser._id);
      res.status(201).json([newUser, token]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, phone, password, newPassword } = req.body;
    const user = await User.findOne({ user_email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.user_pass);
    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await User.findOneAndUpdate(
      { user_email: email },
      { user_pass: hashedPassword }
    );
    res.status(200).json({ message: "Password updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const searchProduct = async (req, res) => {
  try {
    const keyword = normalizeString(req.query.keyword); // Chuẩn hóa từ khóa tìm kiếm

    // Tìm kiếm tất cả các sản phẩm có tên chứa từ khóa tìm kiếm (không phân biệt chữ hoa, chữ thường)
    const products = await Product.find({});

    const matchingProducts = products.filter((product) =>
      normalizeString(product.prod_name).includes(keyword)
    );

    // Trả về danh sách các sản phẩm kết quả tìm kiếm
    res.status(200).json({ products: matchingProducts });
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const auth = {
  getUser,
  registerUser,
  loginUser,
  updatePassword,
  searchProduct,
};

module.exports = auth;
