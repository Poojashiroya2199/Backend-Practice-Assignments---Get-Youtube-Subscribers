
const express = require('express');
const app = express()
const subscribers=require('./models/subscribers').subscriberSchema;
const data=require('./data.js');
app.use(express.json());
// Your code goes here
app.get('/subscribers',(req,res)=>{
    res.send(data);
})
app.get('/subscribers/names',(req,res)=>{
    res.send(data);
})
app.get('/subscribers/:id',(req,res)=>{
    const id=req.params.id;
    let user=data.indexOf((el)=>el.id===id);
    if(!user){
        res.status(404).send({message: error.message});
    }
    res.send(user);
})
app.listen(3000,()=>console.log("listening.."));












module.exports = app;
