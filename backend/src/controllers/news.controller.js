const Blog = require("../models/news.model");
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

const getBlogsById = async (req, res) => {
  try {
    const blogId = req.params.id; 
    const blog = await Blog.findById(blogId); 
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getBlogs,
    getBlogsById,
};