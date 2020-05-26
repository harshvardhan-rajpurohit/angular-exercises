const express = require('express')
const mongoose = require('mongoose');
const router =express.Router();

const userModel = require('./../models/userModel')

router.get('/',(req,res)=>{
    userModel.find({},(err,data)=>{
        if(err) {
            console.error("ERROR: "+err)
            res.status(400).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/addData',(req,res)=>{
    let newUser = new userModel(req.body);
    newUser.save({},(err,data)=>{
        if(err){
            console.error("ERROR: "+err)
            res.status(400).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

module.exports = router;
