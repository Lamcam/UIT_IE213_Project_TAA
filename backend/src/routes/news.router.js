const express = require("express");
const router = express.Router();
const news = require("../controllers/news.controller");

router.get("/", news.getBlogs);
router.get("/:id", news.getBlogsById);
router.delete("/:id", news.deleteNewsById);
router.post("/", news.postBlogs);

module.exports = router;
