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

const postBlogs = async (req, res) => {
    try {
      // Lấy thông tin từ request body
      const { b_title, b_date, b_content, b_heading, b_text, b_image } = req.body;
  
      // Tạo một bài viết mới
      const newBlog = new Blog({
        b_title,
        b_date,
        b_content,
        b_heading,
        b_text,
        b_image,
      });
  
      // Lưu bài viết mới vào cơ sở dữ liệu
      const savedBlog = await newBlog.save();
  
      // Trả về phản hồi thành công
      res.status(201).json(savedBlog);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };


module.exports = {
    getBlogs,
    getBlogsById,
    postBlogs,
};