const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab3')
.then(()=>{
    console.log('mongoDB is connect SuccessFully!!');
})

.catch((error)=>{
    console.log('failed to connect with mongoDB!!',error);
})

const newSchema = new mongoose.Schema({
    user:{
        type:String
    }
})

const collection = mongoose.model('newUser',newSchema);
module.exports = collection;