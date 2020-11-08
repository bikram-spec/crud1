const { authorize } = require("passport")
const jwt= require('jsonwebtoken');

module.exports.jwtVerifier=(req,res,next)=>{
    if("authorization" in req.headers){
        token=req.headers["authorization"].split(' ')[1];
        console.log(req.headers["authorization"]);
        jwt.verify(token,process.env.jwt_Scret,(err,decode)=>{
            if(err){
                res.status(403).send("invaild json web token\n");
            }
            else {
                req._id=decode["_id"];
                console.log("this is the id"+decode["_id"]);
                next(); 
                
            }
        })
    }
}