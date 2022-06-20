// install and import express
const express = require("express");
const express = () => {};
let app = express();

// Code here
app.listen(8000, ()=>{
    try{
        console.log("listining port at 8000");
    } catch(err){
        console.log("error - ", error)
        res.status(500).send({message : err.message})
    }
})

// Note: Do not remove this export statement
module.exports = app;
