const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller");

router.get("/:cate_type_name/:cate_name", product.getProductsByCategory);
router.get("/:cate_type_name", product.getProductsByCategoryType);
router.get("/", product.getProducts);
router.get("/:id", product.getProductById);

module.exports = router;
// router.get("/detail", product.getDetail);
// router.get('/search', product.getSort)
// router.get('/:id')
