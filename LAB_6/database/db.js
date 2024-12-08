const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab6')
.then(()=>{
    console.log('mongodb is connected successfully!!');
})
.catch((error)=>{
    console.log('failed to connect mongodb!!',error);
})

const newSchema = new mongoose.Schema({
    date:{
        type:Number
    }
})

const collection = mongoose.model('timestamp',newSchema);
module.exports = collection;