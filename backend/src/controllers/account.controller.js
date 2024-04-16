const BankCards = require("../models/bankcards.model")
const User = require("../models/users.model")
const getBankCards = async (req, res) => {
    try {
        const bankcas = await BankCards.find({});
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateUser = async (req, res) => {
        // try {
        //     const userId = req.params.id
        //     const data = req.body
        //     const checkUser = await User.findOne({ _id: userId })
        //     console.log("checkUser", checkUser)
        //     const response = localStorage.getItem('user')._id
        //     return res.status(200).json(data)
        // } catch (error) {
        //     res.status(500).json({ message: error.message });
    // }
    try {
        const userId = req.params.id
        const data = req.body
        console.log(data)
        const checkUser = await User.findOne({ _id: localStorage.getItem('user')._id })
        console.log("checkUser", checkUser)
        const response = localStorage.getItem('user')._id
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
    
module.exports = {
    getBankCards,
    updateUser
}