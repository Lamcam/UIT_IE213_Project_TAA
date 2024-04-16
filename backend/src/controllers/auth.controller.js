const User = require("../models/users.model");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const SerectKey = 'HAN';

const createToken =(_id) => {
   return jwt.sign({ _id }, SerectKey, { expiresIn: '1h' });
}

const getUser = async (req, res) => {
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

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        
        const user = await User.findOne({user_email : email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const match = await bcrypt.compare(password, user.user_pass);
        
        console.log(match);
        // if (!match) {
        //     return res.status(400).json({ message: "Invalid password" });
        // }

        const token = createToken(user._id);
        res.status(200)
        .json([user, token])
        console.log('Login success');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const user = await User.findOne({ user_email: email });
        
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                user_name: name,
                user_phone: phone,
                user_email: email,
                user_pass: hashedPassword,
                user_avatar: '',
                local_default_id: '',
                bank_default_id: '',
            });
            await newUser.save();
            console.log(newUser);
            const token = await createToken(newUser._id);
            res.status(201).json([newUser,token]);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePassword = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({user_email : email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.user_pass = password;
        await user.save();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const logOut = async (req, res) => {
    try {
        res.clearCookie('user');
        res.clearCookie('auth');
        res.status(200).json({ message: "Logout success" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const auth = {
    getUser,
    registerUser,
    loginUser,
    updatePassword,
    logOut,
}
module.exports = auth;
