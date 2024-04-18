const express = require("express");
const router = express.Router();
const blog = require("../controllers/blog.controller")

router.get('/', blog.getBlogs)

module.exports = router;