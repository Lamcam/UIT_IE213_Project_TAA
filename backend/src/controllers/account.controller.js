const User = require("../models/users.model");
const BankCards = require("../models/bankcards.model");
const Locations = require("../models/locations.model");
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
const deleteBank = async (req, res) => {
    try {
        const bankCardId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(bankCardId)) {
            return res
                .status(400)
                .json({ message: "ID tài khoản không hợp lệ" });
        }
        const userId = req.query.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const deleteBankCard = await BankCards.findByIdAndDelete(bankCardId);
        if (!deleteBankCard)
            res.status(404).json({ message: "Tài khoản không tồn tại" });
        const checkDefault = await User.findOne({
            bank_default_id: bankCardId,
        });
        if (checkDefault) {
            const bankCards = await BankCards.find({ user_id: userId });
            if (!bankCards)
                await User.findByIdAndUpdate(userId, {bank_default_id: null}, {new: true})
            else {
                await User.findByIdAndUpdate(userId, { bank_default_id: bankCardId }, { new: true })
                await BankCards.findByIdAndUpdate(bankCards[0]._id, {is_default:true}, {new: true})
            }
        }
        res.status(200).json({
            message: "Xóa thành công",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteAddress = async (req, res) => {
    try {
        const addressId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({ message: "ID địa chỉ không hợp lệ" });
        }
        const userId = req.query.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const deleteLocation = await Locations.findByIdAndDelete(addressId);
        if (!deleteLocation)
            res.status(404).json({ message: "Địa chỉ không tồn tại" });
        const checkDefault = await User.findOne({ local_default_id: addressId });
        if (checkDefault) {
            const addresses = await Locations.find({ user_id: userId });
            if (!addresses) await User.findByIdAndUpdate(userId, {local_default_id: null}, {new: true})
            else {
                await User.findByIdAndUpdate(userId, { local_default_id: addressId }, { new: true })
                await Locations.findByIdAndUpdate(addresses[0]._id, {is_default:true}, {new: true})
            }
        }
        res.status(200).json({
            message: "Xóa thành công",
        });
    } catch (error) {
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
        const bankCards = await BankCards.find({ user_id: userId });
        if (!bankCards) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(bankCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getAddresses = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const addresses = await Locations.find({ user_id: userId });
        if (!addresses) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addBank = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const { user_cccd, bank_pers_name, bank_name, bank_number } = req.body;
        const newBankCard = new BankCards({
            _id: new mongoose.Types.ObjectId(),
            bank_name: bank_name,
            bank_number: bank_number,
            bank_pers_name: bank_pers_name,
            user_id: userId,
        });
        const existDefault = await BankCards.findOne({
            user_id: userId,
            is_default: true,
        });
        if (!existDefault) {
            newBankCard.is_default = true;
            await User.findByIdAndUpdate(
                userId,
                { bank_default_id: newBankCard._id },
                { new: true }
            );
        }
        await newBankCard.save();
        await User.findByIdAndUpdate(
            userId,
            { user_cccd: user_cccd },
            {
                new: true,
            }
        );
        res.status(200).json({ message: "Success!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addAddress = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const { loca_pers_name, loca_pers_phone, loca_address, loca_detail } =
            req.body;
        const newAddress = new Locations({
            _id: new mongoose.Types.ObjectId(),
            loca_pers_name: loca_pers_name,
            loca_pers_phone: loca_pers_phone,
            loca_address: loca_address,
            loca_detail: loca_detail,
            user_id: userId,
        });
        const existDefault = await Locations.findOne({
            user_id: userId,
            is_default: true,
        });
        if (!existDefault) {
            newAddress.is_default = true;
            await User.findByIdAndUpdate(
                userId,
                { local_default_id: newAddress._id },
                { new: true }
            );
        }
        await newAddress.save();
        res.status(200).json({ message: "Success!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// const setDefaultLocation = async () => {
//     try {
//       const users = await UserModel.find().populate('locations'); // Lấy danh sách tất cả người dùng và thông tin địa điểm

//       for (const user of users) {
//         if (user.locations.length > 0) {
//           user.locations[0].is_default = true; // Đặt is_default của địa điểm đầu tiên là true
//           await user.locations[0].save(); // Lưu thay đổi vào cơ sở dữ liệu
//           console.log(`Đã đặt is_default = true cho địa điểm đầu tiên của người dùng ${user._id}`);
//         }
//       }
//     } catch (error) {
//       console.error("Lỗi khi thiết lập địa điểm mặc định:", error);
//     }
//   };
const setAddressDefault = async (req, res) => {
    try {
        const addressId = req.params.id;
        const userId = req.body.id;
        if (!mongoose.Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({ message: "ID địa chỉ không hợp lệ" });
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const updateUser = await User.findByIdAndUpdate(
            userId,
            { local_default_id: addressId },
            { new: true }
        );
        if (!updateUser)
            return res.status(404).json({ message: "Not found user" });
        await Locations.findOneAndUpdate(
            { user_id: userId, is_default: true },
            { is_default: false },
            { new: true }
        );
        const updateDefault = await Locations.findByIdAndUpdate(
            addressId,
            { is_default: true },
            { new: true }
        );
        if (!updateDefault)
            return res
                .status(404)
                .json({ message: "Set default not success!" });
        res.status(200).json({ message: "Success!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const setBankCardDefault = async (req, res) => {
    try {
        const bankCardId = req.params.id;
        const userId = req.body.id;
        if (!mongoose.Types.ObjectId.isValid(bankCardId)) {
            return res
                .status(400)
                .json({ message: "ID tài khoản thanh toán không hợp lệ" });
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res
                .status(400)
                .json({ message: "ID người dùng không hợp lệ" });
        }
        const updateUser = await User.findByIdAndUpdate(
            userId,
            { bank_default_id: bankCardId },
            { new: true }
        );
        if (!updateUser)
            return res.status(404).json({ message: "Not found user" });
        await BankCards.findOneAndUpdate(
            { user_id: userId, is_default: true },
            { is_default: false },
            { new: true }
        );
        const updateDefault = await BankCards.findByIdAndUpdate(
            bankCardId,
            { is_default: true },
            { new: true }
        );
        if (!updateDefault)
            return res
                .status(404)
                .json({ message: "Set default not success!" });
        res.status(200).json({ message: "Success!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const editAddress = async (req, res) => {
    try {
        const addressId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(addressId)) {
            return res.status(400).json({ message: "ID địa chỉ không hợp lệ" });
        }
        const updatedAddress = req.body;
        await Locations.findByIdAndUpdate(addressId, updatedAddress, {
            new: true,
        });
        res.status(200).json({ message: "Success!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    updateUser,
    changePassword,
    getBankCards,
    getAddresses,
    deleteBank,
    deleteAddress,
    addBank,
    addAddress,
    setAddressDefault,
    setBankCardDefault,
    editAddress,
};
