const User = require("../models/users.model");
const Product = require("../models/products.model");
const cloudinary = require("../utils/cloudinary");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Admin = require("../models/admin.model");

const get = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const admin = {
  get,
};

module.exports = admin;
