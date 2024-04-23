const Cart = require('../models/cart.model');
const User = require('../models/users.model');
const Products = require('../models/products.model');
const { default: mongoose } = require('mongoose');

const getCart = async (req, res) => {
    try{
        const cart = await Cart.find({});
        console.log(cart);

        // res.cookie('user', true, { maxAge: 900000, httpOnly: true });
        res.status(200).json(cart);
    }
    catch(error) {
        console.log(error)
    }
}

const addProductToCart = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const product = await Cart.findOne({ user_id: user_id, product_id: product_id });
        if (product) {
            // product.quantity += quantity;
            await product.save();
            return res.status(200).json(product);
        }
        const newProduct = new Cart({
            user_id : user_id,
            prod_id: product_id,
            
        });
        await newProduct.save();
        return res.status(201).json(newProduct);
}
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

const getCartByUserId = async (req, res) => {
    try {
        const { user_id } = req.body;
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const cartList = await Cart.find({ user_id: user_id });
        let temp = cartList.map(item => item._id);
        temp = Object.values(temp).map(item => item.toString());
        console.log(temp);
        // const prodList = await Products.find({ _id: { $in: cartList.map(item => item._id )  }} );
        const prodList = await Products.find({ _id: '65f4063fe64f2ea37eeb87e0' });
        
        return res.status(200).json(prodList);

}
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

const cart = {
    addProductToCart,
    getCartByUserId,
    getCart,
}

module.exports = cart;