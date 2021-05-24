const mongoose = require("mongoose")
const shortId = require("shortid")

var schema = mongoose.Schema


//creating a new schema in the mongoDB database
var urls = new schema({
    longUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true
    },
    unique:{
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('url', urls)