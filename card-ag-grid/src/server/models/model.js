const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    phone:String,
    address:String,
    image:String
});

module.exports = mongoose.model('aggrids',schema);