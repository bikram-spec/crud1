//prebuild module imports
const express= require('express');
const mongooose=require('mongoose');
const jwt = require('jsonwebtoken');
const { jwtVerifier }= require('../config/jwtVerifier');

//Controller importts
const { signup } = require('../controllers/signup.controller');
const { signin }= require('../controllers/signin.controller');
const { userProfile } = require('../controllers/userProfile.controller');

const router= express.Router()

//Signup Route post request
router.post('/signup',signup);

//Signin route Post request
router.post('/signin',signin);

//user profile router get request
router.get('/userProfile',jwtVerifier,userProfile);

module.exports= {router};