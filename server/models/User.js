const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltround = 10;

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true,
        default: 'User'
    },
    password:{
        type: String,
        required: true
    },
},{ timeStamps: true});

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password,saltround);
    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User;