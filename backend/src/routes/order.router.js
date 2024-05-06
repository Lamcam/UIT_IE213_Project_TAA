const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");

router.get("/", order.getOrder);
router.get("/orderdetail", order.getOrderDetail);
module.exports = router;
