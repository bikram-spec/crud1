//import for the pre-defined modules 
const express = require('express');
const mongoose= require('mongoose');
const body_parser=require('body-parser');
const jwt =require('jsonwebtoken');
const cors=require('cors')
const passport=require('passport')
const localStrtegy=require('passport-local');
const logger=require('morgan');

// imports for the created modules
const config=require('./config/config');
const connect=require('./models/connect');
const { router } = require('./routes/index.router');


const app=express();

// middle ware for the express
app.use(cors())
app.use(logger())
app.use(body_parser.json())
app.use('/api',router);
app.use(passport.initialize())

//Routes of the api


//server listening ports 
app.listen(process.env.port,()=>{
    console.log("the server is listening on the port "+process.env.port);
})