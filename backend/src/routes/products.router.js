const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller");

router.get("/", product.getProducts);
router.get("/:id", product.getProductById);

// router.get("/detail", product.getDetail);
// router.post("/category", product.getCate);
// router.get('/search', product.getSort)
// router.get('/:id')

module.exports = router;
