const express = require("express");
const bodyParser = require("body-parser"); //body에서 읽어드릴 수 있음

const server = express();

server.use(bodyParser.json());
// CRUD(create, Read, Update, Deletge)

const users = [
    {
        id :'adasfav',
        name : "donguk",
        email : "dkfnfn9871@gmail.com"
    },
    {
        id : "adjascas",
        name : "coffee",
        email : "delicious@gmail.com"
    }
]

server.get("/api/user", (req,res)=>{
    res.json(users);
});

server.get("/api/user/:id", (req,res)=>{
    console.log(req.params.id);
    const user = users.find((u) =>{
        return u.id == req.params.id;
    });
    if(user){
        res.json(user);
    }else{
        res.status(404).json({ errorMessage : "User was not found"});
    }
    
});

server.post("/api/user", (req,res)=>{
    users.push(req.body)
    res.json(users);
});

server.put('/api/user/:id', (req,res)=>{
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404).json({errorMessage:'User was not found'});
    }else{
        users[foundIndex] = {...users[foundIndex], ...req.body };
        res.json(users[foundIndex]);
    }
});
server.listen(3000,() => {
    console.log("The server is runing");
});


server.delete('/api/user/:id',(req,res)=>{
    let foundIndex = users.findIndex(u => u.id === req.params.id);

    if(foundIndex === -1){
        res.status(404).json({errorMessage: "User was not found"});
    }else{
        let foundUser = users.splice(foundIndex, 1); 
        //foundIndex의 한칸이 없어지고 foundUser에 저장됨
        res.json(foundUser[0]);
    }
})