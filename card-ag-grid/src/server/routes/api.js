const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Model = require('./../models/model')

mongoose.connect('mongodb+srv://test:test@cluster0-gdn18.mongodb.net/test',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
},(err,data)=>{
    if(err) console.log("ERROR: "+err)
    else {
        console.log("Connection to MongoDB successfull...");
    }
});

router.get('/alldata',(req,res)=>{
    Model.find({},(err,data)=>{
        if (err) console.log("ERROR: "+err);
        else{
            res.status(200).json(data);
        }
    });
})

router.get('/:id',(req,res)=>{
    Model.find({},(err,data)=>{
        if (err) console.log("ERROR: "+err);
        else{
            console.log(req.params)
            res.status(200).send(data);
        }
    }).limit(10).skip(req.params.id-1);
})


module.exports=router;