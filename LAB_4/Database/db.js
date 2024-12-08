const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab4')
.then(()=>{
    console.log('mongoDB is connected successfully!!');
})

.catch((error)=>{
    console.log('failed to connect mongoDB!!',error);
})

const newSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const collection = mongoose.model('data',newSchema);
module.exports = collection;