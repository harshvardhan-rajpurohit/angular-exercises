const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

const api = require('./routes/api')
const port = 3000;
const dbUri="mongodb+srv://test:test@cluster0-gdn18.mongodb.net/test";

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'));
app.use('/api',api)

mongoose.connect(dbUri,{
    useNewUrlParser:true, 
    useFindAndModify:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) console.error("ERROR: "+err)
})

app.get('/',(req,res)=>{
    res.send("Server's working fine, browse different Routes!")
})

app.listen(port,()=>{
    console.info("Server up and running on port: "+port)
})