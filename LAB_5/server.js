//LAB_5 Que: Simple server to greet user by current date and time

const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const date = new Date();

    res.send(`Hello,User ${date}`);
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})