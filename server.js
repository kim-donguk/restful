const express = require("express");

const server = express();

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
})

server.listen(3002,() => {
    console.log("The server is runing");
});