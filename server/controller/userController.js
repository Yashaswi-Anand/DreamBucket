const User = require("../models/User")
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
    //console.log(req.body);
    try {
        // check user is already present or not in db.
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ message: "User already exist!!!" })
        }
        
        // add new user
        const newUser = await User.create(req.body)
        if (!newUser) {
            return res.status(400).json({ message: "User creation error!!!" })
        }

        // successfully added user
        return res.status(200).json({ message: "User created succesfully!!!" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error???" })
    }
}

exports.signin = async(req,res)=>{
    // console.log(req.body);
    try {
        // check user email is present or not in db.
        const user = await User.findOne({ email: req.body.email })
        if(!user){
            return res.status(400).json({ message: "Invalid Email Id..." })
        }
        // decript and check password
        const isPasswordMatching= bcrypt.compareSync(req.body.password,user.password); // true or false

        if(!isPasswordMatching){
            return res.status(400).json({ message: 'Invalid Password.'});
        }

        // user exist and login
        return res.status(200).json({user:user, message: "User login in succesfully!!!" })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error..." })
    }
}

