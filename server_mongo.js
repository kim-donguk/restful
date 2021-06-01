const mongoose = require('mongoose');
const express = require('express');
const server = express();
const User = require('./models/User');


const MONGODB_URL = 
"mongodb+srv://root:1234@education.vmbdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

server.get('/',(req,res)=>{
    const newUser = new User();
    newUser.email = 'Danny@naver.com';
    newUser.name = "Danny";
    newUser.age = 25;
    newUser.save().then((user)=>{
        console.log(user);
        res.json({
            message:'User Created Successfully'
        })
    })
    .catch((err)=>{
        res.json({
            message: 'User was not accesss'
        })
    })
})
server.listen(3000,(err)=>{
    if(err){
        return console.log(err);
    }else{
        mongoose.connect(MONGODB_URL,{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("connected to database successfully");
            }
        });
    }
})

