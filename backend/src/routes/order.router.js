const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");

router.get("/", order.getOrder);
router.get("/orderdetail", order.getOrderDetail);
router.get("/payment")
router.get("/:id", order.getOrderByID);
router.put("/:id", order.updateOrderStatus);
module.exports = router;
