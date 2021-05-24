const mongoose = require("mongoose")
const shortId = require("shortid")

var schema = mongoose.Schema

var urls = new schema({
    urlCode : String,
    longUrl : String,
    shortUrl : String
    
})

module.exports = mongoose.model('url', urls)