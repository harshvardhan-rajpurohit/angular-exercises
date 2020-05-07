const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();
const api = require('./routes/api')
const port = 5000;
const dbUri = 'mongodb+srv://test:test@cluster0-gdn18.mongodb.net/test'

mongoose.connect(dbUri,{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if (err) throw err
    else console.log("Connection to mongoDb done successfully!")
})


app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/api',api);

app.get('/',(req,res)=>{
    res.status(200).send("Server's Running")
})

app.listen(port,(error)=>{
    if(error) throw error
    console.log("Server up and running on port: " +port)
})