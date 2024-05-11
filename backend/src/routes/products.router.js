const express = require("express");
const router = express.Router();
const product = require("../controllers/products.controller");

router.get("/", product.getProducts);
router.get("/cate", product.getProductHaveCateType);
router.get("/hot", product.getHotProducts);
router.get("/category/:cate_type_name", product.getProductsByCategoryType);
router.get(
  "/category/:cate_type_name/:cate_name",
  product.getProductsByCategory
);
router.get("/:id", product.getProductById);
router.post("/", product.addProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;
// router.get("/detail", product.getDetail);
// router.get('/search', product.getSort)
// router.get('/:id')
