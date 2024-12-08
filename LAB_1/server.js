//LAB_1 Ques:Simple Express JS Server...

const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello,User")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})