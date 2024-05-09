const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");

router.get("/", order.getOrder);
router.get("/orderdetail", order.getOrderDetail);
router.get("/vnpay_return", order.paymentReturn);
router.post("/create_payment_url", order.payment);
router.get('/vnpay_ipn', order.paymentIPN)
module.exports = router;
