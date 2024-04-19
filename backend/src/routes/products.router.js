const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller");

router.get("/", product.getProducts);
router.get("/category/:cate_type_name", product.getProductsByCategoryType);
router.get("/category/:cate_type_name/:cate_name", product.getProductsByCategory);
router.get("/:id", product.getProductById);

module.exports = router;
// router.get("/detail", product.getDetail);
// router.get('/search', product.getSort)
// router.get('/:id')
