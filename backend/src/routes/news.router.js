const express = require("express");
const router = express.Router();
const news = require("../controllers/news.controller");

router.get("/", news.getBlogs);

module.exports = router;
