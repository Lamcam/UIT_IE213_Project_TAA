const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller");

router.get("/category", product.getCate);
router.get("/", product.getProducts);
router.get("/:id", product.getProductById);

module.exports = router;
// router.get("/detail", product.getDetail);
// router.get('/search', product.getSort)
// router.get('/:id')
