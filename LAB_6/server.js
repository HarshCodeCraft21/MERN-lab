//LAB_6 Que:exploring unixtime
const express = require('express');
const app = express();
const collection = require('./database/db')
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/',async (req,res)=>{
    const date = new Date()/1000;
    
    try{
        await collection.create({date})
        const foundTime = await collection.findOne({date});

        if(!foundTime){
            res.send('timestamp not found!');
        }
        else{
            res.send(`Hello,User:: ${Date(Math.floor(date*1000))}`)
        }
    }
    catch(error){
        console.log('Something went wrong!',error)
    }
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})