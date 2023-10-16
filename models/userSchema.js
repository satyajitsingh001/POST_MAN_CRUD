const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        rquired:true
    },
    email:{
        type:String,
        rquired:true,
        unique:[true,"Email id is already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email") ;
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

    
const User = new mongoose.model('User',userSchema);

module.exports = User;