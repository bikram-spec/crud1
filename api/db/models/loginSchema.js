const mongoose=require('mongoose')
const loginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlenght:1
    },
    password:{
        type:String,
        required:true,
        minlenght:8,
    }
});

//loginSchema.methods.verify=function(){
    //this is the declase statement
   // let username=this.username;
  //  loginSchema.find(username);

//};
const login=mongoose.model('login',loginSchema);
module.export={login}