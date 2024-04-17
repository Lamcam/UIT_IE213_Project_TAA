const User = require("../models/users.model");
const BankCards = require("../models/bankcards.model")
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const data = req.body;
        console.log("req.body: ", data);
        const checkUser = await User.findById(userId);
        if (!checkUser) {
            res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        const updatedUser = await User.findByIdAndUpdate(userId, data, {
            new: true,
        });
        console.log("Updated User: ", updatedUser);
        res.status(200).json({
            message: "Cập nhật thành công!",
            data: updatedUser,
        });
    } catch (error) {
        console.error("Lỗi khi cập nhật người dùng!", error);
        res.status(500).json({ message: error.message });
    }
};
const changePassword = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const { oldPassword, newPassword } = req.body;
        console.log("req.body.oldPassword: ", oldPassword);
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.user_pass);
        if (isMatch) {
            const updatedPassword = await User.findByIdAndUpdate(
                userId,
                { user_pass: await bcrypt.hash(newPassword, 10) },
                {
                    new: true,
                }
            );
            console.log("Updated Password: ", updatedPassword);
            res.status(200).json({
                message: "Cập nhật thành công!",
            });
        } else {
            res.status(400).json({
                error: true,
                message: "Mật khẩu không khớp!",
            });
        }
    } catch (error) {
        console.error("Lỗi khi cập nhật mật khẩu!", error);
        res.status(500).json({ message: error.message });
    }
};
const getBankCards = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const bankCards = await BankCards.find({user_id: userId});
        if (!bankCards) {
          return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(bankCards);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}
const deleteBank = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addBank = async (req, res) => {
    try {
        const userId = req.params.id
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const { bank_pers_name, bank_name, bank_number } = req.body
        const {user_cccd }=req.body
        const newBankCard = new BankCards({
            _id: new mongoose.Types.ObjectId(),
            bank_name: bank_name,
            bank_number: bank_number,
            bank_pers_name: bank_pers_name,
            user_id: userId
        });
        await newBankCard.save();
        await User.findByIdAndUpdate(userId, { user_cccd: user_cccd }, {
            new: true,
        });
        res.status(200).json({ message: 'Success!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    updateUser,
    changePassword,
    getBankCards,
    deleteBank,
    addBank
};
