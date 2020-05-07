const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;
const api = require('./routes/api')

app.use(cors())
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api',api)

app.get('/',(req,res)=>{
    res.send("The server's running fine, Navigate to other routes.")
})

app.listen(port,(err,success)=>{
    if (err) console.log("ERROR: "+err);
    else{
        console.log("Server up and running on port: "+port);
    }
})