const express = require("express");
const router = express.Router();
const cart = require("../controllers/cart.controller");

router.get("/", cart.getCart);

router.post("/get", cart.getCartByUserId);
router.get("/delete", cart.deleteAllProductFromCart);

router.post("/add", cart.addProductToCart);
router.delete("/delete-item/:id", cart.deleteCartItem);

// router.put('/card/:id', card.update)
// router.delete('/card/:id', card.delete)

module.exports = router;
