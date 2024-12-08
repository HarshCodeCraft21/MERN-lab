//LAB_2 Que: Exploring send file in express

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/index.html'));
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})