const Order = require('../models/orders.models');
const OrderDetail = require('../models/orderdetails.model');
const Products = require('../models/products.model');
const User = require('../models/users.model');

const getOrder = async (req, res) => {
    try {
        const order = await Order.find({});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.find({}).populate('prod_id', 'prod_name').populate('order_id', 'order_datetime order_total_cost user_id bank_id pay_id order_is_paying quantity order_status');
        const orderWithUser = await User.populate(orderDetail, { path: 'order_id.user_id', select: 'user_name' });
        const filtered = orderWithUser.filter((item) => item.prod_id !== null);
        res.status(200).json(filtered);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getOrder,
    getOrderDetail,
};
