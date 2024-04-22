const User = require("../models/users.model");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const SerectKey = 'HAN';

const createToken =(_id) => {
   return jwt.sign({ _id }, SerectKey, { expiresIn: '1h' });
}

const getAllUser = async (req, res) => {
    try {
        const user = await User.find({});
        console.log(user);

        res.cookie('user', true, { maxAge: 900000, httpOnly: true });
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email, password );

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        
        const user = await User.findOne({user_email : email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log('found user',user);
        const match = await bcrypt.compare(password, user.user_pass);
        
        console.log(match);
        if (!match) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = createToken(user._id);
        res.status(200)
        .json([user, token])
        console.log('Login success');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const registerUser = async (req, res) => {

    try {
        const { username, phone, email, password } = req.body;
        const user = await User.findOne({ user_email: email });
        console.log(req.body);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                user_name: username,
                user_phone: phone,
                user_email: email,
                user_pass: hashedPassword,
                user_avatar: 'https://res.cloudinary.com/dg40uppx3/image/upload/v1713435745/IMG_5790_tgvzuj.jpg',
                user_cccd: '',
                local_default_id: null,
                bank_default_id: null,

            });
            
            await newUser.save();
            console.log('new user', newUser);
            const token = await createToken(newUser._id);
            res.status(201).json([newUser, token]);
        }

    } catch (error) {
        console.log("err",error);
        res.status(500).json({ message: error.message });
    }
};

const findUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const user = await User.findOne({ user_email : email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        else {
            return res.status(200).json(user.user_email);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
const findUserByPhone = async (req, res) => {
    try {
        const { phone } = req.body;
        
        if (!phone) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const user = await User.findOne({user_phone : phone});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        else {
            return res.status(200).json(user.user_phone);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const changePasswordByEmail = async(req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message : "do not receive any email or password"  })
        }
        const user = await User.findOne({ user_email: email });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.findOneAndUpdate({ user_email: email }, { user_pass: hashedPassword });
        res.status(200).json({ message: "Password updated" });
    }
    catch(err){
        console.log(err);
    }
   
}
const changePasswordByPhone = async(req, res) => {
    try{
        const { phone, password } = req.body;
        console.log(req.body);
        if(!phone || !password){
            return res.status(400).json({message : "do not receive any email or password"  })
        }
        const user = await User.findOne({ user_phone: phone });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.findOneAndUpdate({ user_phone: email }, { user_pass: hashedPassword });
        res.status(200).json({ message: "Password updated" });
        
    }
    catch(err){
        console.log(err);
    }
   
}

const updatePassword = async (req, res) => {
    try {
        const { email, phone , password, newPassword } = req.body;
        const user = await User.findOne({ user_email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const match = await bcrypt.compare(password, user.user_pass);
        if (!match) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await User.findOneAndUpdate({ user_email: email }, { user_pass: hashedPassword });
        res.status(200).json({ message: "Password updated" });
        
        }catch (error) {
            res.status(500).json({ message: error.message });
        }
}

const auth = {
    getAllUser,
    registerUser,
    loginUser,
    updatePassword,
    findUserByEmail,
    findUserByPhone,
    changePasswordByEmail,
    changePasswordByPhone,
}

module.exports = auth;
