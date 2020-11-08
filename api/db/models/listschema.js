const mongoose=require('mongoose');
///const schema=mongoose.Schema;
const listschema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1
    }
});

const list=mongoose.model('list',listschema);

module.exports={list};