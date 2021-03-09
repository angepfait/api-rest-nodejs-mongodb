const express = require("express");
const router = express.Router();
const {postsModel} = require('../models/postsModel')
const ObjectID = require('mongoose').Types.ObjectId


router.get('/',(req,res)=>{
    postsModel.find((err,docs)=>{
        console.log(docs);
        if (!err) res.send(docs)
        else console.log(err); 
    })
})
router.get("/:id",(req,res)=>{
    const id =req.params.id
    if(!ObjectID.isValid(id)) 
    return res.status(400).send(`ID unknow ${id}`)

    postsModel.findById(id,(err,docs)=>{
        console.log(docs);
        if (!err) res.send(docs)
        else console.log(err); 
    })
})
router.get("/users/:author",(req,res)=>{
    const author =req.params.author
    console.log(author);
    if(!ObjectID.isValid(author)) 
        return res.status(400).send(`name unknow ${author}`)
    postsModel.find({author:author},(err,docs)=>{
        console.log(docs);
        if (!err) res.send(docs)
        else console.log(err);
    })
})

router.post('/',(req,res)=>{
   // console.log(req);
    const {author,message} =req.body
    const newRecord = postsModel ({
        author:author,
        message:message
    })
    newRecord.save((err,docs)=>{
        if (!err) res.send(docs)
        else console.log(err); 
    })  
})

router.put("/:id",(req,res)=>{
    const id =req.params.id
    if(!ObjectID.isValid(id)) 
    return res.status(400).send(`ID unknow ${id}`)
    const {author,message}=req.body

    postsModel.findByIdAndUpdate(id, {author:author,message:message},{new:true},(err,docs)=>{
        console.log(docs);
        if (!err) res.send(docs)
        else console.log(err); 
    })
})
router.delete("/:id",(req,res)=>{
    const id =req.params.id
    if(!ObjectID.isValid(id)) 
    return res.status(400).send(`ID unknow ${id}`)

    postsModel.findByIdAndRemove(id,(err,docs)=>{
        console.log(docs);
        if (!err) res.send('docs deleted')
        else console.log(err); 
    })
})
module.exports = router
