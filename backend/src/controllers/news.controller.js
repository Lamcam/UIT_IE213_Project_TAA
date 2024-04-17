const Blog = require("../models/blog.model");
// const User = require("../models/users.model");
const cloudinary = require("../utils/cloudinary");

const getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({});
    console.log(blog);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getBlogs,
};
