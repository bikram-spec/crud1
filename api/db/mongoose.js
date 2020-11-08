// there we will put the all the connecting stuf of the database

const mongoose=require('mongoose');
mongoose.Promise=global.Promise
mongoose.connect("mongodb://localhost:27017/fastShopping",{useNewUrlParser:true}).then(()=>{
console.log("succfully connected to the data base ")}).catch(e=>{
    console.log("the error is occured while connecting to the databasse");
    console.log(e)
}); 
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);
module.exports={mongoose};