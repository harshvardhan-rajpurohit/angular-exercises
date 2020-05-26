const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:String,
    address:{
        apartment:String,
        city:String,
        state:String,
    },
    pin:Number
});
module.exports = mongoose.model('stepperform',userSchema)