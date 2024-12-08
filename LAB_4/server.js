//LAB_4 Que: Reading and Writing data by using ODM

const express = require('express');
const collection = require('./Database/db');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async (req,res)=>{
    try{
        const data = {
            user:'Harsh Jain',
            email:'xyz1234@gmail.com'
        }

        if(!data){
            res.send('server is facing issue try another time')
        }
        else{
            await collection.insertMany([data]);
            res.send('data is successfully inserted!')
        }
    }
    catch(error){
        console.log('failed to inserted a data!!',error)
    }
})

app.get('/find',async (req,res)=>{
    const { user,email } = req.query;

    try{
        const data = await collection.findOne(user,email);
        console.log(data)
        if(!data){
            res.send('data not found!!');
        }
        else{
            res.json(data);
        }
    }
    catch(error){
        console.log('something went wrong failed to find a data!!',error)
    }
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})