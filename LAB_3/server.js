const express = require('express');
const app = express();
const collection = require('./Database/db')
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("MongoDB is Successfully connected into ODM");
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})