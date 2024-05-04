const User = require("../models/users.model");
const Product = require("../models/products.model");
const cloudinary = require("../utils/cloudinary");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const get = async (req, res) => {};

const admin = {
  get,
};

module.exports = admin;
