
const express = require('express');
const app = express()
const subscribers=require('./models/subscribers');
const ObjectId = require("mongoose");
app.use(express.json());
// Your code goes here
app.get('/subscribers',(req,res)=>{
    subscribers.find().then(subscriber=>res.send(subscriber));
    return;
})
app.get('/subscribers/names',(req,res)=>{
       subscribers.find().select({name: 1, subscribedChannel: 1}).then(subscribers => res.send(subscribers));
    return;
})
app.get('/subscribers/:id',(req,res)=>{
//     const id=req.params.id;
//     let user=data.indexOf((el)=>el.id===id);
//     if(!user){
//         res.status(404).send({message: error.message});
//     }
//     res.send(user);
       const id = req.params.id;
    Subscriber.find({_id : id}).then(subscribers => subscribers.map(subscribers => res.send(subscribers))).catch(error => res.status(400).send({message: error.message}));
    return;
})
app.listen(3000,()=>console.log("listening.."));












module.exports = app;
