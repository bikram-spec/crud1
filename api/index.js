//--------------declaretion sections---------
const express=require('express');
const bodyparse=require('body-parser');
const cors=require('cors')
const {mongoose}=require('./db/mongoose');
const app=express()
//const {list}=require('./db/models/listschema')
const {signupdetail}=require('./db/models/formschema')
const {login}=require('./db/models/loginSchema');
app.use(bodyparse.json())
app.use(cors());
//app.use(function(req, res, next) {
//	res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
	// update to match the domain you will make the request from
//	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//	next();
//  });
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  });
app.get("/",(req,res)=>{
	res.send("welcome to the data generator api")
})
app.get("/signup",(req,res)=>{
	signupdetail.find({}).then((lists)=>{
		res.send(lists);
	});
});
app.post("/signup",(req,res)=>{
	let fname=req.body.fname;
	let lname=req.body.lname;
	let address=req.body.address;
	let phone=req.body.phone;
	let email=req.body.email;
	let password=req.body.password;
	console.log('the data comed to the express server\n');
	const newuser=new signupdetail({fname,lname,address,phone,email,password});
	newuser.save().then((obj)=>{
		res.send(obj);
	})
});
app.post("/signin",(req,res)=>{
	let username=req.body.username;
	let password=req.body.password;
	signupdetail.findOne({email:username,password:password}).then((list1)=>{
		res.send(list1)
		//res.status(200);
		res.send("succfully logined in")
	}).catch((e)=>{
		res.send("the user doesn't exists")
		console.log("user doesn't exists"+e);
	})
})
//----the main------
app.listen(3000,()=>{
	console.log("The server is listening on port 3000");
});
