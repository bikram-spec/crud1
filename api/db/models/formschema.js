const mongoose=require('mongoose')
const signupschema=new mongoose.Schema({
    fname: {
        type:String,
        trim:true,
        minlength:1,
        required:true
    },
    lname:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    address:{
        type:String,
        require:true,
        trim:true,
        minlenght:10
    },
    phone:{
        type:String,
        required:true,
        minlength:10,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlenght:5,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlenght:6,
        maxlength:22,
        unique:true
    }
});
const signupdetail=mongoose.model('signupdetail',signupschema);
module.exports={signupdetail};