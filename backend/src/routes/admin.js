const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");

router.get("/", admin.get);

module.exports = router;
