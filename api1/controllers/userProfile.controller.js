const {users}=require('../models/signup.schema');
const ObjectId=require('mongoose').Types.ObjectId;

module.exports.userProfile=(req,res,next)=>{
    
    users.findOne({_id:req._id},(err,user)=>{
        res.send(user);
    })
}



