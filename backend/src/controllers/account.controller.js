const User = require("../models/users.model");

const getUser = async (req, res) => {
    try {
        const user = await User.find({});
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // console.log(req.body);
        const user = await User.findOne({user_email : email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.user_pass !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }
        res.status(200).json(user);
        console.log('Login success');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        console.log(req.body);
        const newUser = new User({
            user_name: name,
            user_phone: phone,
            user_email: email,
            user_pass: password,
            user_avatar: '',
            local_default_id: 'clonw',
            bank_default_id: '',
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePassword = async(req, res) => {
    

}

const account ={
    getUser,
    registerUser,
    loginUser,
}
module.exports = account;
